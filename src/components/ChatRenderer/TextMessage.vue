<template>
  <yt-live-chat-text-message-renderer :author-type="authorTypeText" :privilegeType="privilegeType">
    <img id="hat" class="joi-style" alt="" src="/static/img/common/joi/hat.png" style="display: none;">
    <img id="ear" class="joi-style" alt="" src="/static/img/common/joi/ear.png" style="display: none;">
    <img id="scarf" class="joi-style" alt="" src="/static/img/common/joi/scarf.png" style="display: none;">
    <img id="leftEar" class="kiti-style" alt="" src="/static/img/common/kiti/leftEar.png" style="display: none;">
    <img id="rightEar" class="kiti-style" alt="" src="/static/img/common/kiti/rightEar.png" style="display: none;">
    <img id="kiti-scarf" class="kiti-style" alt="" src="/static/img/common/kiti/scarf.png" style="display: none;">
    <img id="tail" class="kiti-style" alt="" src="/static/img/common/kiti/tail.png" style="display: none;">
    <div id="author-border" style="display: none;"></div>
    <img-shadow id="author-photo" height="24" width="24" class="style-scope yt-live-chat-text-message-renderer" :imgUrl="getRandomHeader(avatarUrl)">
    </img-shadow>
    <div id="content" class="style-scope yt-live-chat-text-message-renderer">
      <span id="timestamp" class="style-scope yt-live-chat-text-message-renderer">{{timeText}}</span>
      <yt-live-chat-author-chip style="vertical-align: top;" class="style-scope yt-live-chat-text-message-renderer">
        <span id="author-name" dir="auto" class="style-scope yt-live-chat-author-chip" :type="authorTypeText">
          <span id="author-name-text">{{ authorName }}</span>
          <span id="chip-badges" class="style-scope yt-live-chat-author-chip"></span>
        </span>
        <span id="chat-badges" class="style-scope yt-live-chat-author-chip">
          <author-badge class="style-scope yt-live-chat-author-chip"
            :isAdmin="authorType === 2" :privilegeType="privilegeType"
          ></author-badge>
        </span>
      </yt-live-chat-author-chip>
      <span style="vertical-align: bottom;" id="message" class="style-scope yt-live-chat-text-message-renderer">
        <template v-if="!imgFlag && imgContentMsg == null">
          <template v-for="(content, index) in contentList">
            <img v-if="content.type === 2" :key="index" style="height: 20px;width: 20px;vertical-align: middle;" :src="content.content" alt="" />
            <span v-else :key="index">{{ content.content }}</span>
          </template>
        </template>
        <el-image v-if="imgFlag && imgContentMsg == null" :src="img" style="width: 120px;"></el-image>
        <el-image v-if="imgContentMsg != null && imgContentMsg.emoticon_unique !== 'official_147'" ref="contentImg" :src="getRandom(imgContentMsg.url)" :style="'width:' + imgContentMsg.width + 'px;'" @error="retryGetPic"></el-image>
        <el-image v-if="imgContentMsg != null && imgContentMsg.emoticon_unique === 'official_147'" src="/static/img/common/dianzan.png" :style="'width:' + imgContentMsg.width + 'px;'"></el-image>
        <el-badge :value="repeated" :max="99" v-show="repeated > 1" class="style-scope yt-live-chat-text-message-renderer"
          :style="{'--repeated-mark-color': repeatedMarkColor}"
        ></el-badge>
      </span>
      <div id="content-plus" style="display: none;"></div>
    </div>
    <div id="paw" class="joi-style" style="display: none;"></div>
    <div id="star" class="joi-style" style="display: none;"></div>
    <img id="flower" class="joi-style" alt="" src="/static/img/common/joi/flower.png" style="display: none;">
  </yt-live-chat-text-message-renderer>
</template>

<script>
import ImgShadow from './ImgShadow.vue'
import AuthorBadge from './AuthorBadge.vue'
import * as constants from './constants'
import * as utils from '@/utils'

// HSL
const REPEATED_MARK_COLOR_START = [210, 100.0, 62.5]
const REPEATED_MARK_COLOR_END = [360, 87.3, 69.2]

export default {
  name: 'TextMessage',
  components: {
    ImgShadow,
    AuthorBadge
  },
  props: {
    avatarUrl: String,
    time: Date,
    authorName: String,
    authorType: Number,
    content: String,
    privilegeType: Number,
    repeated: Number,
    imgFlag: Boolean,
    img: String,
    imgContent: Object,
    emots: Object
  },
  data() {
    return {
      imgContentMsg: null,
      retry: true
    }
  },
  computed: {
    timeText() {
      return utils.getTimeTextHourMin(this.time)
    },
    authorTypeText() {
      return constants.AUTHOR_TYPE_TO_TEXT[this.authorType]
    },
    repeatedMarkColor() {
      let color
      if (this.repeated <= 2) {
        color = REPEATED_MARK_COLOR_START
      } else if (this.repeated >= 10) {
        color = REPEATED_MARK_COLOR_END
      } else {
        color = [0, 0, 0]
        let t = (this.repeated - 2) / (10 - 2)
        for (let i = 0; i < 3; i++) {
          color[i] = REPEATED_MARK_COLOR_START[i] + (REPEATED_MARK_COLOR_END[i] - REPEATED_MARK_COLOR_START[i]) * t
        }
      }
      return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`
    },
    contentList() {
      if (this.emots) {
        let temp = this.content
        for (const target in this.emots) {
          temp = temp.replaceAll(target, '⭐' + target + '⭐')
        }
        const list = temp.split('⭐')
        const result = []
        list.forEach(item => {
          if (item !== '') {
            if (this.emots[item]) {
              result.push({
                type: 2,
                content: this.emots[item].url
              })
            } else {
              result.push({
                type: 1,
                content: item
              })
            }
          }
        })
        return result
      } else {
        return [{type: 1, content: this.content}]
      }
    }
  },
  created() {
    if (this.imgContent) {
      this.imgContentMsg = Object.assign({}, this.imgContent)
    }
  },
  methods: {
    getRandom(url) {
      const date = new Date()
      const random = date.getHours().toString() + date.getMinutes().toString()
      if (url.indexOf('?') > -1) {
        return url + '&random=' + random;
      } else {
        return url + '?random=' + random;
      }
    },
    getRandomHeader(url) {
      const date = new Date()
      const random = date.getMonth().toString() + date.getDate().toString()
      if (url.indexOf('?') > -1) {
        return url + '&refresh=' + random;
      } else {
        return url + '?refresh=' + random;
      }
    },
    retryGetPic() {
      if (this.retry) {
        this.retry = false
        if (this.imgContentMsg.url.indexOf('?') > -1) {
          this.imgContentMsg.url = this.imgContentMsg.url + '&retry=1';
        } else {
          this.imgContentMsg.url = this.imgContentMsg.url + '?retry=1';
        }
      } else {
        this.imgContentMsg = null
      }
    }
  }
}
</script>

<style>
yt-live-chat-text-message-renderer>#content>#message>.el-badge {
  margin-left: 10px;
}

yt-live-chat-text-message-renderer>#content>#message>.el-badge .el-badge__content {
  font-size: 12px !important;
  line-height: 18px !important;
  text-shadow: none !important;
  font-family: sans-serif !important;
  color: #FFF !important;
  background-color: var(--repeated-mark-color) !important;
  border: none;
}
</style>

<style src="@/assets/css/youtube/yt-live-chat-text-message-renderer.css"></style>
<style src="@/assets/css/youtube/yt-live-chat-author-chip.css"></style>
