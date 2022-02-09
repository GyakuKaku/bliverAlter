<template>
  <el-row :gutter="20" style="height: 100%;">
    <el-col :xs="12" :sm="12" style="height: 100%">
      <chat-renderer ref="message" :maxNumber="60" :showGiftName="0"></chat-renderer>
    </el-col>
    <el-col :xs="12" :sm="12" style="height: 100%">
      <chat-renderer ref="gift" :maxNumber="60" :showGiftName="60"></chat-renderer>
    </el-col>
  </el-row>
</template>

<script>
import {toBool, toInt} from '@/utils'
import * as pronunciation from '@/utils/pronunciation'
import * as chatConfig from '@/api/chatConfig'
import ChatClientTest from '@/api/chat/ChatClientTest'
import ChatClientDirect from '@/api/chat/ChatClientDirect'
import ChatRenderer from '@/components/ChatRenderer'
import * as constants from '@/components/ChatRenderer/constants'

export default {
  name: 'Supervision',
  components: {
    ChatRenderer
  },
  props: {
    roomId: {
      type: Number,
      default: null
    },
    strConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      config: {...chatConfig.DEFAULT_CONFIG},
      chatClient: null,
      pronunciationConverter: null
    }
  },
  computed: {
    blockKeywords() {
      return this.config.blockKeywords.split('\n').filter(val => val)
    },
    blockUsers() {
      return this.config.blockUsers.split('\n').filter(val => val)
    }
  },
  mounted() {
    this.initConfig()
    this.initChatClient()
    if (this.config.giftUsernamePronunciation !== '') {
      this.pronunciationConverter = new pronunciation.PronunciationConverter()
      this.pronunciationConverter.loadDict(this.config.giftUsernamePronunciation)
    }

    // 提示用户已加载
    this.$message({
      message: 'Loaded',
      duration: '500'
    })
  },
  beforeDestroy() {
    if (this.chatClient) {
      this.chatClient.stop()
    }
  },
  methods: {
    initConfig() {
      let cfg = {}
      // 留空的使用默认值
      for (let i in this.strConfig) {
        if (this.strConfig[i] !== '') {
          cfg[i] = this.strConfig[i]
        }
      }
      cfg = chatConfig.DEFAULT_CONFIG
      cfg.minGiftPrice = toInt(cfg.minGiftPrice, chatConfig.DEFAULT_CONFIG.minGiftPrice)
      cfg.showDanmaku = toBool(cfg.showDanmaku)
      cfg.showGift = toBool(cfg.showGift)
      cfg.showGiftName = toBool(cfg.showGiftName)
      cfg.mergeSimilarDanmaku = toBool(cfg.mergeSimilarDanmaku)
      cfg.mergeGift = toBool(cfg.mergeGift)
      cfg.maxNumber = toInt(cfg.maxNumber, chatConfig.DEFAULT_CONFIG.maxNumber)
      cfg.blockGiftDanmaku = toBool(cfg.blockGiftDanmaku)
      cfg.blockLevel = toInt(cfg.blockLevel, chatConfig.DEFAULT_CONFIG.blockLevel)
      cfg.blockNewbie = toBool(cfg.blockNewbie)
      cfg.blockNotMobileVerified = toBool(cfg.blockNotMobileVerified)
      cfg.blockMedalLevel = toInt(cfg.blockMedalLevel, chatConfig.DEFAULT_CONFIG.blockMedalLevel)
      cfg.relayMessagesByServer = toBool(cfg.relayMessagesByServer)
      cfg.autoTranslate = toBool(cfg.autoTranslate)

      this.config = cfg
    },
    initChatClient() {
      if (this.roomId === null) {
        this.chatClient = new ChatClientTest()
      } else {
        this.chatClient = new ChatClientDirect(this.roomId)
      }
      this.chatClient.onAddText = this.onAddText
      this.chatClient.onAddGift = this.onAddGift
      this.chatClient.onAddMember = this.onAddMember
      this.chatClient.onAddSuperChat = this.onAddSuperChat
      this.chatClient.onDelSuperChat = this.onDelSuperChat
      this.chatClient.onUpdateTranslation = this.onUpdateTranslation
      this.chatClient.start()
    },

    start() {
      this.chatClient.start()
    },
    stop() {
      this.chatClient.stop()
    },

    onAddText(data) {
      if (!this.config.showDanmaku || !this.filterTextMessage(data) || this.mergeSimilarText(data.content)) {
        return
      }
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_TEXT,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorType: data.authorType,
        content: data.content,
        privilegeType: data.privilegeType,
        repeated: 1,
        translation: data.translation,
        imgContent: data.imgContent
      }
      this.$refs.message.addMessage(message)
    },
    onAddGift(data) {
      if (!this.config.showGift) {
        return
      }
      let price = data.totalCoin / 1000
      if (this.mergeSimilarGift(data.authorName, price, data.giftName, data.num)) {
        return
      }
      if (price < this.config.minGiftPrice) { // 丢人
        return
      }
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_GIFT,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorNamePronunciation: this.getPronunciation(data.authorName),
        price: price,
        giftName: data.giftName,
        num: data.num
      }
      this.$refs.gift.addMessage(message)
    },
    onAddMember(data) {
      if (!this.config.showGift || !this.filterNewMemberMessage(data)) {
        return
      }
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_MEMBER,
        avatarUrl: data.avatarUrl,
        time: new Date(data.timestamp * 1000),
        authorName: data.authorName,
        authorNamePronunciation: this.getPronunciation(data.authorName),
        privilegeType: data.privilegeType,
        title: 'New member'
      }
      this.$refs.gift.addMessage(message)
    },
    onAddSuperChat(data) {
      if (!this.config.showGift || !this.filterSuperChatMessage(data)) {
        return
      }
      if (data.price < this.config.minGiftPrice) { // 丢人
        return
      }
      let message = {
        id: data.id,
        type: constants.MESSAGE_TYPE_SUPER_CHAT,
        avatarUrl: data.avatarUrl,
        authorName: data.authorName,
        authorNamePronunciation: this.getPronunciation(data.authorName),
        price: data.price,
        time: new Date(data.timestamp * 1000),
        content: data.content.trim(),
        translation: data.translation
      }
      this.$refs.gift.addMessage(message)
    },
    onDelSuperChat(data) {
      for (let id of data.ids) {
        this.$refs.gift.delMessage(id)
      }
    },
    onUpdateTranslation(data) {
      if (!this.config.autoTranslate) {
        return
      }
      this.$refs.message.updateMessage(data.id, {translation: data.translation})
    },

    filterTextMessage(data) {
      if (this.config.blockGiftDanmaku && data.isGiftDanmaku) {
        return false
      } else if (this.config.blockLevel > 0 && data.authorLevel < this.config.blockLevel) {
        return false
      } else if (this.config.blockNewbie && data.isNewbie) {
        return false
      } else if (this.config.blockNotMobileVerified && !data.isMobileVerified) {
        return false
      } else if (this.config.blockMedalLevel > 0 && data.medalLevel < this.config.blockMedalLevel) {
        return false
      }
      return this.filterSuperChatMessage(data)
    },
    filterSuperChatMessage(data) {
      for (let keyword of this.blockKeywords) {
        if (data.content.indexOf(keyword) !== -1) {
          return false
        }
      }
      return this.filterNewMemberMessage(data)
    },
    filterNewMemberMessage(data) {
      for (let user of this.blockUsers) {
        if (data.authorName === user) {
          return false
        }
      }
      return true
    },
    mergeSimilarText(content) {
      if (!this.config.mergeSimilarDanmaku) {
        return false
      }
      return this.$refs.message.mergeSimilarText(content)
    },
    mergeSimilarGift(authorName, price, giftName, num) {
      if (!this.config.mergeGift) {
        return false
      }
      return this.$refs.gift.mergeSimilarGift(authorName, price, giftName, num)
    },
    getPronunciation(text) {
      if (this.pronunciationConverter === null) {
        return ''
      }
      return this.pronunciationConverter.getPronunciation(text)
    }
  }
}
</script>
