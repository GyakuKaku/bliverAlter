<template>
  <div>
    <p>
      <el-form :model="form" ref="form" label-width="150px" :rules="{
        roomId: [
          {required: true, message: $t('home.roomIdEmpty'), trigger: 'blur'},
          {type: 'integer', min: 1, message: $t('home.roomIdInteger'), trigger: 'blur'}
        ]
      }">
        <el-tabs type="border-card">
          <el-tab-pane :label="$t('home.general')">
            <el-form-item :label="$t('home.roomId')" required prop="roomId">
              <el-input v-model.number="form.roomId" type="number" min="1"></el-input>
            </el-form-item>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.showDanmaku')">
                  <el-switch v-model="form.showDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.showGift')">
                  <el-switch v-model="form.showGift"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.showGiftName')">
                  <el-switch v-model="form.showGiftName"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.mergeSimilarDanmaku')">
                  <el-switch v-model="form.mergeSimilarDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.mergeGift')">
                  <el-switch v-model="form.mergeGift"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.minGiftPrice')">
                  <el-input v-model.number="form.minGiftPrice" type="number" min="0"></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.maxNumber')">
                  <el-input v-model.number="form.maxNumber" type="number" min="1"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-tab-pane>

          <el-tab-pane :label="$t('home.block')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.giftDanmaku')">
                  <el-switch v-model="form.blockGiftDanmaku"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.informalUser')">
                  <el-switch v-model="form.blockNewbie"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.unverifiedUser')">
                  <el-switch v-model="form.blockNotMobileVerified"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.blockLevel')">
                  <el-slider v-model="form.blockLevel" show-input :min="0" :max="60"></el-slider>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="12">
                <el-form-item :label="$t('home.blockMedalLevel')">
                  <el-slider v-model="form.blockMedalLevel" show-input :min="0" :max="40"></el-slider>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item :label="$t('home.blockKeywords')">
              <el-input v-model="form.blockKeywords" type="textarea" :rows="5" :placeholder="$t('home.onePerLine')"></el-input>
            </el-form-item>
            <el-form-item :label="$t('home.blockUsers')">
              <el-input v-model="form.blockUsers" type="textarea" :rows="5" :placeholder="$t('home.onePerLine')"></el-input>
            </el-form-item>
          </el-tab-pane>

          <el-tab-pane :label="$t('home.advanced')">
            <el-row :gutter="20">
              <el-col :xs="24" :sm="8">
                <el-form-item :label="$t('home.relayMessagesByServer')">
                  <el-switch v-model="form.relayMessagesByServer"></el-switch>
                </el-form-item>
              </el-col>
<!--              <el-col :xs="24" :sm="8">-->
<!--                <el-form-item :label="$t('home.autoTranslate')">-->
<!--                  <el-switch v-model="form.autoTranslate" :disabled="!serverConfig.enableTranslate || !form.relayMessagesByServer"></el-switch>-->
<!--                </el-form-item>-->
<!--              </el-col>-->
            </el-row>
<!--            <el-form-item :label="$t('home.giftUsernamePronunciation')">-->
<!--              <el-radio-group v-model="form.giftUsernamePronunciation">-->
<!--                <el-radio label="">{{$t('home.dontShow')}}</el-radio>-->
<!--                <el-radio label="pinyin">{{$t('home.pinyin')}}</el-radio>-->
<!--                <el-radio label="kana">{{$t('home.kana')}}</el-radio>-->
<!--              </el-radio-group>-->
<!--            </el-form-item>-->
          </el-tab-pane>
        </el-tabs>
      </el-form>
    </p>
    <div>
      <el-card>
        <p>虽然不登录可能会弹幕接收不全，多刷新几次也能正常显示，也没有证据证明登录一定好使，总之可以试试...</p>
        <p style="margin-bottom: 12px; font-weight: bolder">*登录成功后，需要重新复制房间url到obs</p>
        <div v-if="biliUserInfo == null">
          <el-button type="primary" @click="handleLogin">扫码登录</el-button>
        </div>
        <div v-else style="display: flex; align-items: center">
          <div>
            现在登录用户Uid: {{biliUserInfo.DedeUserID}}
            登录过期时间 {{ getExpireTime(biliUserInfo) }}
          </div>
          <p><el-button type="danger" size="mini" style="margin-left: 20px" @click="handleLogout">退出登录</el-button></p>
        </div>
      </el-card>
    </div>
    <p>
      <el-card>
        <el-form :model="form" label-width="150px">
          <el-form-item :label="$t('home.roomUrl')">
            <el-input ref="roomUrlInput" readonly :value="obsRoomUrl" style="width: calc(100% - 8em); margin-right: 1em;"></el-input>
            <el-button type="primary" @click="copyUrl">{{$t('home.copy')}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :disabled="!roomUrl" @click="enterRoom">{{$t('home.enterRoom')}}</el-button>
            <el-button :disabled="!roomUrl" @click="enterTestRoom">{{$t('home.enterTestRoom')}}</el-button>
            <el-button @click="exportConfig">{{$t('home.exportConfig')}}</el-button>
            <el-button @click="importConfig">{{$t('home.importConfig')}}</el-button>
            <el-button type="primary" :disabled="!roomUrl" @click="enterSupervision">监控礼物弹幕</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </p>
    <p>
      <el-card>
        此服务是基于开源项目blivechat二次开发的弹幕机服务。
        <br/>
        原项目地址：https://github.com/xfgryujk/blivechat
        <br/>
        原作者专栏：https://www.bilibili.com/read/cv4594365
      </el-card>
    </p>
    <BliQRLoginModal ref="bliQRLoginModal" @setBiliUserInfo="setBiliUserInfo" />
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
import download from 'downloadjs'

import {mergeConfig} from '@/utils'
import * as chatConfig from '@/api/chatConfig'
import BliQRLoginModal from "@/components/BliQRLoginModal.vue";
export default {
  name: 'Home',
  components: {BliQRLoginModal},
  data() {
    return {
      biliUserInfo: null,
      serverConfig: {
        enableTranslate: true,
        loaderUrl: ''
      },
      form: {
        roomId: parseInt(window.localStorage.roomId || '1'),
        ...chatConfig.getLocalConfig()
      }
    }
  },
  computed: {
    roomUrl() {
      return this.getRoomUrl(false)
    },
    obsRoomUrl() {
      return  this.getRoomUrl(false)
    }
  },
  watch: {
    roomUrl: _.debounce(function() {
      window.localStorage.roomId = this.form.roomId
      chatConfig.setLocalConfig(this.form)
    }, 500)
  },
  mounted() {
    this.updateServerConfig()
  },
  methods: {
    getExpireTime(data) {
      try {
        if (data) {
          const date = new Date(data.timestamp + (Number(data.Expires) * 1000))
          return date.toLocaleString()
        } else {
          return '--'
        }
      } catch (e) {
        return '--'
      }
    },
    setBiliUserInfo(userInfo) {
      this.biliUserInfo = Object.assign({}, userInfo)
      window.localStorage.BLI_USER_INFO = JSON.stringify(userInfo)
    },
    handleLogin() {
      this.$refs.bliQRLoginModal.handleShow()
    },
    handleLogout() {
      this.$confirm('是否要退出B站登录', '是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.biliLogout()
      })
    },
    biliLogout() {
      delete window.localStorage.BLI_USER_INFO
      this.biliUserInfo = null
    },
    async updateServerConfig() {
      try {
        this.serverConfig = (await axios.get('/api/server_info')).data.config
      } catch (e) {
        this.$message.error('Failed to fetch server information: ' + e)
      }
      if (window.localStorage.BLI_USER_INFO) {
        try {
          this.biliUserInfo = JSON.parse(window.localStorage.BLI_USER_INFO)
          const timestamp = new Date().getTime()
          if (timestamp - this.biliUserInfo.timestamp > (Number(this.biliUserInfo.Expires) * 1000)) {
            this.biliLogout()
          } else {
            console.log('登录有效时间还剩', (Number(this.biliUserInfo.Expires) * 1000) - timestamp + this.biliUserInfo.timestamp)
          }
        } catch (e) {
          console.log('登录有效时间异常')
        }
      }
    },
    enterRoom() {
      window.open(this.roomUrl, `room ${this.form.roomId}`, 'menubar=0,location=0,scrollbars=0,toolbar=0,width=600,height=600')
    },
    enterSupervision() {
      if (this.form.roomId === '') {
        return
      }
      let query = {...this.form}
      delete query.roomId
      query.imgTransformer = window.localStorage.imgTransformerV2 == null ? '[]' : window.localStorage.imgTransformerV2
      let resolved = this.$router.resolve({name: 'supervision', params: {roomId: this.form.roomId}, query})

      window.open(`${window.location.protocol}//${window.location.host}${resolved.href}`, `room ${this.form.roomId}`, 'menubar=0,location=0,scrollbars=0,toolbar=0,width=800,height=600')
    },
    enterTestRoom() {
      window.open(this.getRoomUrl(true), 'test room', 'menubar=0,location=0,scrollbars=0,toolbar=0,width=600,height=600')
    },
    getRoomUrl(isTestRoom) {
      if (isTestRoom && this.form.roomId === '') {
        return ''
      }
      let query = {...this.form}
      delete query.roomId
      query.imgTransformer = window.localStorage.imgTransformerV2 == null ? '[]' : window.localStorage.imgTransformerV2

      let resolved
      if (isTestRoom) {
        resolved = this.$router.resolve({name: 'test_room', query})
      } else {
        if (this.biliUserInfo && this.biliUserInfo.SESSDATA) {
          query.SESSDATA = this.biliUserInfo.SESSDATA
          query.DedeUserID = this.biliUserInfo.DedeUserID
        }
        resolved = this.$router.resolve({name: 'room', params: {roomId: this.form.roomId}, query})
      }
      return `${window.location.protocol}//${window.location.host}${resolved.href}`
    },
    copyUrl() {
      this.$refs.roomUrlInput.select()
      document.execCommand('Copy')
    },
    exportConfig() {
      let cfg = mergeConfig(this.form, chatConfig.DEFAULT_CONFIG)
      download(JSON.stringify(cfg, null, 2), 'blivechat.json', 'application/json')
    },
    importConfig() {
      let input = document.createElement('input')
      input.type = 'file'
      input.accept = 'application/json'
      input.onchange = () => {
        let reader = new window.FileReader()
        reader.onload = () => {
          let cfg
          try {
            cfg = JSON.parse(reader.result)
          } catch (e) {
            this.$message.error(this.$t('home.failedToParseConfig') + e)
            return
          }
          cfg = mergeConfig(cfg, chatConfig.DEFAULT_CONFIG)
          this.form = {roomId: this.form.roomId, ...cfg}
        }
        reader.readAsText(input.files[0])
      }
      input.click()
    }
  }
}
</script>
