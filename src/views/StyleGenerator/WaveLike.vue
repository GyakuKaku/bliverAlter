<template>
  <div>
    <el-form label-width="150px" size="mini">
      <h3>{{$t('stylegen.outlines')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showOutlines')">
              <el-switch v-model="form.showOutlines"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.outlineColor')">
              <el-color-picker v-model="form.outlineColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item :label="$t('stylegen.outlineSize')">
          <el-input v-model.number="form.outlineSize" type="number" min="0"></el-input>
        </el-form-item>
      </el-card>

      <h3>{{ $t('stylegen.avatars') }}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showAvatars')">
              <el-switch v-model="form.showAvatars"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{ $t('stylegen.userNames') }}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
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
            <el-form-item label="文字颜色">
              <el-color-picker v-model="form.userNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{ $t('stylegen.messages') }}</h3>
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
        </el-row>
      </el-card>
    </el-form>
  </div>
</template>

<script>
import _ from 'lodash'

import FontSelect from './FontSelect'
import * as common from './common'
import { mergeConfig } from '@/utils'

export const DEFAULT_CONFIG = {
  showOutlines: true,
  outlineSize: 1,
  outlineColor: '#000a49',

  showAvatars: true,
  userNameFont: 'Noto Sans SC',
  userNameFontSize: 16,
  userNameColor: '#ffffff',

  messageFont: 'Noto Sans SC',
  messageFontSize: 20,
  messageColor: '#ffffff'
}

export default {
  name: 'WaveLike',
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
      return `
      ${this.importStyle}
      ${this.raceStyle}
`
    },
    importStyle() {
      let allFonts = []
      for (let name of ['userNameFont', 'messageFont']) {
        allFonts.push(this.form[name])
      }
      return common.getImportStyle(allFonts)
    },
    showOutlinesStyle() {
      if (!this.form.showOutlines || !this.form.outlineSize) {
        return ''
      }
      let shadow = []
      for (let x = -this.form.outlineSize; x <= this.form.outlineSize; x += Math.ceil(this.form.outlineSize / 4)) {
        for (let y = -this.form.outlineSize; y <= this.form.outlineSize; y += Math.ceil(this.form.outlineSize / 4)) {
          shadow.push(`${x}px ${y}px ${this.form.outlineColor}`)
        }
      }
      return `text-shadow: ${shadow.join(', ')};`
    },
    // eslint-disable-next-line max-lines-per-function
    raceStyle() {
      return `
@import url("https://fonts.googleapis.com/css?family=Noto%20Sans%20SC");
/* Animation */
@keyframes anim {
  0% { opacity: 0; transform: translateX(-16px); }
  100% { opacity: 1; transform: none; }
}
@keyframes up {
  0% { height: 0; }
  100% { height: 64px; }
}
@keyframes flow {
  0% { top: 60px; }
  72% { top: -3px; }
  100% { top: 5px; }
}
@keyframes twinkle {
  0% { opacity: 1; transform: scale(1.1); }
  50% { opacity: 0.8; transform: scale(1); }
  100% { opacity: 1; transform: scale(1.1); }
}
@keyframes shining {
  0% { text-shadow: 0 0 40px lightblue, 0 0 50px lightblue; }
  100% { text-shadow: 0 0 0px lightblue, 0 0 5px lightblue; }
}
@keyframes ship-shake {
  0% { transform: rotate(8deg); }
  50% { transform: rotate(-8deg); }
  100% { transform: rotate(8deg); }
}
@keyframes ship-float {
  0% { bottom: 20px; }
  50% { bottom: 10px; }
  100% { bottom: 20px; }
}
@keyframes ship-show {
  0% { opacity: 0; right: 0; }
  100% { opacity: 1; right: 6px; }
}
/* Transparent background */
yt-live-chat-renderer {
  background-color: transparent !important;
}
yt-live-chat-ticker-renderer {
  background-color: transparent !important;
  box-shadow: none !important;
}
yt-live-chat-author-chip #author-name {
  width: 100%;
  background-color: transparent !important;
}
yt-live-chat-item-list-renderer #item-scroller {
  overflow: hidden !important;
}
/* Hide header and input */
yt-live-chat-header-renderer,
yt-live-chat-message-input-renderer {
  display: none !important;
}

/* Hide unimportant messages */
yt-live-chat-text-message-renderer[is-deleted],
yt-live-chat-membership-item-renderer[is-deleted] {
  display: none !important;
}

yt-live-chat-mode-change-message-renderer,
yt-live-chat-viewer-engagement-message-renderer,
yt-live-chat-restricted-participation-renderer {
  display: none !important;
}

yt-live-chat-text-message-renderer a,
yt-live-chat-membership-item-renderer a {
  text-decoration: none !important;
}

/* Global Setting */
yt-live-chat-renderer {

}
#item-scroller {

}
/* Reduce side padding */
yt-live-chat-text-message-renderer {
  padding: 0 4px !important;
  margin: 21px 8px 21px 12px;
  overflow: visible;
  z-index: 1005;
  position: relative;
  max-width: 100%;
}
/* Avatars */
yt-live-chat-text-message-renderer #author-photo {
 ${this.form.showAvatars ? 'display: block !important;' : 'display: none !important;'}
  width: 60px !important;
  height: 60px !important;
  border-radius: 60px !important;
  /* position: absolute !important;
  left: -80px !important;
  top: -3px; */
  z-index: 100 !important;
  border:3px solid #ffce65 !important;
}
yt-live-chat-text-message-renderer #author-photo:before {
  content: '';
  width: 60px;
  height: 60px;
  position: absolute;
  left: -3px;
  top: -3px;
  background-size: 100% 100% !important;
  background-image: url('/static/img/expand/faceBorder.png') !important;
}
yt-live-chat-text-message-renderer #author-photo img {
  width: 60px !important;
  height: 60px !important;
  border-radius: 60px !important;
}
yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo img {
  width: 40px !important;
  height: 40px !important;
  border-radius: 40px !important;
  margin-right: 10px !important;
}

/* Channel names */
yt-live-chat-text-message-renderer yt-live-chat-author-chip {
  margin-right: 0 !important;
  display: block;
  height: 30px !important;
  line-height: 30px !important;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
yt-live-chat-text-message-renderer #content #author-name {
  display: block;
  max-width: 100%;
  animation: shining 3.5s alternate infinite;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
yt-live-chat-text-message-renderer #author-name,
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer {
  color: #ffffff !important;
}
yt-live-chat-text-message-renderer #author-name {
  font-family: "${common.cssEscapeStr(this.form.userNameFont)}"${common.FALLBACK_FONTS};
  ${this.form.userNameColor ? `color: ${this.form.userNameColor} !important;` : '#ffffff !important;'}
  font-size: ${this.form.userNameFontSize}px !important;
  height: 30px !important;
  line-height: 30px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* Hide badges */
yt-live-chat-text-message-renderer #chat-badges {
  display: none !important;
}
img.yt-live-chat-author-badge-renderer, yt-icon.yt-live-chat-author-badge-renderer {
  width: 20px;
  height: 20px;
}
/* Medal */
yt-live-chat-author-medal-renderer {
    display: none;
}
yt-live-chat-author-medal-renderer[is-fan-group] {

}
#medal-name.yt-live-chat-author-medal-renderer {
  font-size: 14px !important;
  line-height: 14px !important;
}
#medal-level.yt-live-chat-author-medal-renderer {
  font-size: 14px !important;
  line-height: 14px !important;
}
/* Messages */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  ${this.form.messageColor ? `color: ${this.form.messageColor} !important;` : '#ffffff !important;'}
  font-family: "${common.cssEscapeStr(this.form.messageFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.messageFontSize}px !important;
  ${this.showOutlinesStyle}
  line-height: 30px !important;
  letter-spacing: 1px;
}
yt-live-chat-text-message-renderer #message {
  display: block !important;
  overflow: visible !important;
  padding-left: 8px !important;
  min-height: 30px !important;
}
yt-live-chat-text-message-renderer #message .el-image {
  margin-top:8px;
}
/* Timestamps */
/* Background colors */
body {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
}
/* SuperChat/Fan Funding Messages */
yt-live-chat-paid-message-renderer {
  margin: 4px 0 !important;
}
yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name *,
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif;
  font-size: 20px !important;
  line-height: 20px !important;
}
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  color: #ffffff !important;
}
yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount *,
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif;
  font-size: 18px !important;
  line-height: 18px !important;
}
yt-live-chat-text-message-renderer #content-plus{
  display: block !important;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  border-radius: 0 0 5px 5px;
  animation: up 1.5s;
  z-index: -1;
}
yt-live-chat-text-message-renderer #content-plus::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 320px;
  height: 64px;
  background-image: url('/static/img/expand/wave.gif') !important;
  background-size: 100% 100% !important;
  z-index: -1;
}
yt-live-chat-text-message-renderer #content {
  z-index: 450;
  padding: 0 32px 0 12px;
  position: relative;
  border-radius: 8px;
  max-width: 100%;
  border:3px solid #ffce65 !important;
  background-image: linear-gradient(#000a49, #0362a1) !important;
}
yt-live-chat-text-message-renderer #content::before {
  content: '';
  opacity: 0.42;
  display: block !important;
  position: absolute !important;
  left: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background-image: url('/static/img/expand/stars.png') !important;
  background-size: 90px 90px !important;
  background-repeat: repeat !important;
  z-index: -1;
}
yt-live-chat-text-message-renderer #content::after{
  content: '';
  position: absolute;
  top: -11px;
  right: -8px;
  height: 48px;
  width: 29px;
  background-size: 100% 100% !important;
  animation: twinkle 8s linear infinite;
}
yt-live-chat-text-message-renderer[privilegeType="3"] #content::after{
  background-image: url('/static/img/expand/star.png') !important;
}
yt-live-chat-text-message-renderer[privilegeType="2"] #content::after{
  background-image: url('/static/img/expand/moon.png') !important;
}
yt-live-chat-text-message-renderer[privilegeType="1"] #content::after{
  background-image: url('/static/img/expand/moonStar.png') !important;
}
yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
  font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif;
  font-size: 18px !important;
  line-height: 18px !important;
}
yt-live-chat-membership-item-renderer #content {
  overflow: visible !important;
}
yt-live-chat-membership-item-renderer #card {
  margin: 4px 0 !important;
  max-width: 380px;
  position: relative;
  border:3px solid #ffce65 !important;
  animation: shining 3.5s alternate infinite;
  background-color: #000a49 !important;
  background-image: linear-gradient(#000a49, #0362a1) !important;
}
yt-live-chat-membership-item-renderer #card::before {
  content: '';
  opacity: 0.42;
  display: block !important;
  position: absolute !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background-image: url('/static/img/expand/stars.png') !important;
  background-size: 90px 90px !important;
  background-repeat: repeat !important;
}
yt-live-chat-membership-item-renderer #card::after{
  content: '';
  position: absolute;
  bottom: 20px;
  right: 6px;
  width: 80px;
  height: 50px;
  background-image: url('/static/img/expand/ship.png');
  background-size: 100% 100%;
  animation: ship-shake 3s infinite, ship-float 4s infinite, ship-show 1.5s;
}
yt-live-chat-membership-item-renderer #header {
  display:block !important;
  z-index: 10;
  margin: 4px 0 !important;
  background: none !important;
  position: relative;
}
yt-live-chat-membership-item-renderer #card #header::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: -1px;
  width: calc(100% + 2px);
  height: 64px;
  background-image: url('/static/img/expand/wave.gif') !important;
  background-size: 100% 100% !important;
  animation: up 1.5s;
  z-index: 500;
}
yt-live-chat-membership-item-renderer #author-photo {
  position: absolute;
  width: 40px !important;
  height: 40px !important;
  border-radius: 40px !important;
  margin-right: 10px !important;
  top: 5px;
  animation: flow 2s;
  border:3px solid #ffce65 !important;
  z-index: 800;
}
yt-live-chat-membership-item-renderer #author-photo img {
  width: 40px !important;
  height: 40px !important;
}
yt-live-chat-membership-item-renderer #header-content-primary-column {
  margin-left: 60px;
  z-index: 800;
}
yt-live-chat-ticker-renderer {
  display: none !important;
}
/* SuperChat Ticker */
yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer *,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer * {
  font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif;
}
yt-live-chat-text-message-renderer,
yt-live-chat-membership-item-renderer,
yt-live-chat-paid-message-renderer {
  animation: anim 200ms;
  animation-fill-mode: forward;
}
yt-live-chat-text-message-renderer .el-badge {
  margin-left: 10px;
  height: 20px !important;
}
`
    }
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
      window.localStorage.stylegenWaveV2LikeConfig = JSON.stringify(config)
    }, 500),
    loadConfig() {
      try {
        return mergeConfig(JSON.parse(window.localStorage.stylegenWaveV2LikeConfig), DEFAULT_CONFIG)
      } catch {
        return { ...DEFAULT_CONFIG }
      }
    },
    resetConfig() {
      this.form = { ...DEFAULT_CONFIG }
    }
  }
}
</script>
