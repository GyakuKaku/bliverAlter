<template>
  <div>
    <el-form label-width="150px" size="mini">
      <h3>{{$t('stylegen.avatars')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showAvatars')">
              <el-switch v-model="form.showAvatars"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.avatarSize')">
              <el-input v-model.number="form.avatarSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{$t('stylegen.userNames')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showUserNames')">
              <el-switch v-model="form.showUserNames"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.font')">
              <font-select v-model="form.userNameFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.fontSize')">
              <el-input v-model.number="form.userNameFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.lineHeight')">
              <el-input v-model.number="form.userNameLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.normalColor')">
              <el-color-picker v-model="form.userNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.memberColor')">
              <el-color-picker v-model="form.memberUserNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.moderatorColor')">
              <el-color-picker v-model="form.moderatorUserNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.ownerColor')">
              <el-color-picker v-model="form.ownerUserNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showBadges')">
              <el-switch v-model="form.showBadges"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{$t('stylegen.messages')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.font')">
              <font-select v-model="form.messageFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.color')">
              <el-color-picker v-model="form.messageColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.fontSize')">
              <el-input v-model.number="form.messageFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.lineHeight')">
              <el-input v-model.number="form.messageLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{$t('stylegen.time')}}</h3>
      <el-card shadow="never">
        <el-form-item :label="$t('stylegen.showTime')">
          <el-switch v-model="form.showTime"></el-switch>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.font')">
              <font-select v-model="form.timeFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.color')">
              <el-color-picker v-model="form.timeColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.fontSize')">
              <el-input v-model.number="form.timeFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.lineHeight')">
              <el-input v-model.number="form.timeLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{$t('stylegen.backgrounds')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.bgColor')">
              <el-color-picker v-model="form.bgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.messageBgColor')">
              <el-color-picker v-model="form.messageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.memberMessageBgColor')">
              <el-color-picker v-model="form.memberMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.moderatorMessageBgColor')">
              <el-color-picker v-model="form.moderatorMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.ownerMessageBgColor')">
              <el-color-picker v-model="form.ownerMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{$t('stylegen.scAndNewMember')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.firstLineFont')">
              <font-select v-model="form.firstLineFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.firstLineFontSize')">
              <el-input v-model.number="form.firstLineFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.firstLineLineHeight')">
              <el-input v-model.number="form.firstLineLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.secondLineFont')">
              <font-select v-model="form.secondLineFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.secondLineFontSize')">
              <el-input v-model.number="form.secondLineFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.secondLineLineHeight')">
              <el-input v-model.number="form.secondLineLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.scContentLineFont')">
              <font-select v-model="form.scContentFont"></font-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.scContentLineFontSize')">
              <el-input v-model.number="form.scContentFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.scContentLineLineHeight')">
              <el-input v-model.number="form.scContentLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showScTicker')">
              <el-switch v-model="form.showScTicker"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showOtherThings')">
              <el-switch v-model="form.showOtherThings"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{$t('stylegen.animation')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.animateIn')">
              <el-switch v-model="form.animateIn"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.fadeInTime')">
              <el-input v-model.number="form.fadeInTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.animateOut')">
              <el-switch v-model="form.animateOut"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.fadeOutTime')">
              <el-input v-model.number="form.fadeOutTime" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item :label="$t('stylegen.animateOutWaitTime')">
          <el-input v-model.number="form.animateOutWaitTime" type="number" min="0"></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.slide')">
              <el-switch v-model="form.slide"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.reverseSlide')">
              <el-switch v-model="form.reverseSlide"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import _ from 'lodash'

import FontSelect from './FontSelect'
import * as common from './common'
import {mergeConfig} from '@/utils'

export const DEFAULT_CONFIG = {
  showAvatars: true,
  avatarSize: 40,

  showUserNames: true,
  userNameFont: 'Noto Sans SC',
  userNameFontSize: 20,
  userNameLineHeight: 0,
  userNameColor: '#cccccc',
  ownerUserNameColor: '#ffd600',
  moderatorUserNameColor: '#5e84f1',
  memberUserNameColor: '#0f9d58',
  showBadges: true,

  messageFont: 'Noto Sans SC',
  messageFontSize: 18,
  messageLineHeight: 0,
  messageColor: '#000000',

  showTime: false,
  timeFont: 'Noto Sans SC',
  timeFontSize: 16,
  timeLineHeight: 0,
  timeColor: '#999999',

  bgColor: 'rgba(0, 0, 0, 0)',
  messageBgColor: '#ffffff',
  ownerMessageBgColor: 'rgba(231, 199, 30, 1)',
  moderatorMessageBgColor: 'rgba(41, 95, 251, 1)',
  memberMessageBgColor: 'rgba(43, 234, 43, 1)',

  firstLineFont: 'Noto Sans SC',
  firstLineFontSize: 20,
  firstLineLineHeight: 0,
  secondLineFont: 'Noto Sans SC',
  secondLineFontSize: 18,
  secondLineLineHeight: 0,
  scContentFont: 'Noto Sans SC',
  scContentFontSize: 18,
  scContentLineHeight: 0,
  showScTicker: false,
  showOtherThings: true,

  animateIn: true,
  fadeInTime: 200, // ms
  animateOut: false,
  animateOutWaitTime: 30, // s
  fadeOutTime: 200, // ms
  slide: true,
  reverseSlide: false
}

export default {
  name: 'WinterLike',
  components: {
    FontSelect
  },
  props: {
    value: String
  },
  data() {
    return {
      form: this.loadConfig()
    }
  },
  computed: {
    result() {
      return `${this.importStyle}
      ${common.COMMON_STYLE}
      ${this.paddingStyle}
      ${this.messageStyle}`
    },
    importStyle() {
      let allFonts = []
      for (let name of ['userNameFont', 'messageFont', 'timeFont', 'firstLineFont', 'secondLineFont', 'scContentFont']) {
        allFonts.push(this.form[name])
      }
      return common.getImportStyle(allFonts)
    },
    paddingStyle() {
      return `/* Reduce side padding */
yt-live-chat-text-message-renderer {
  padding-left: 4px !important;
  padding-right: 4px !important;
}
#author-photo {display:none !important;}
#content {display:none !important;}
#winter-only {display:block !important;}
`
    },
    messageStyle() {
      return `/* Messages */
#model,
#model * {
  ${this.form.messageColor ? `color: ${this.form.messageColor} !important;` : ''}
  font-family: "${common.cssEscapeStr(this.form.messageFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.messageFontSize}px !important;
  line-height: ${this.form.messageLineHeight || this.form.messageFontSize}px !important;
}
#model {
  background-image: url('/static/img/common/rabbit.png') !important;
  background-size: auto 100% !important;
  display: block !important;
  overflow: visible !important;
  padding: 20px;
}`
    },
  },
  watch: {
    result(val) {
      this.$emit('input', val)
      this.saveConfig()
    }
  },
  created() {
    this.$emit('input', this.result)
  },
  methods: {
    saveConfig: _.debounce(function() {
      let config = mergeConfig(this.form, DEFAULT_CONFIG)
      window.localStorage.stylegenWinterLikeConfig = JSON.stringify(config)
    }, 500),
    loadConfig() {
      try {
        return mergeConfig(JSON.parse(window.localStorage.stylegenWinterLikeConfig), DEFAULT_CONFIG)
      } catch {
        return {...DEFAULT_CONFIG}
      }
    },
    resetConfig() {
      this.form = {...DEFAULT_CONFIG}
    }
  }
}
</script>
