<template>
  <div>
    <el-form label-width="150px" size="mini">

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

      <h3>{{ $t('stylegen.messages') }}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.font')">
              <font-select v-model="form.messageFont"></font-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="整体字体大小">
              <el-input v-model.number="form.messageFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="普通用户边框颜色">
              <el-color-picker v-model="form.mainBgColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="舰长用户边框颜色">
              <el-color-picker v-model="form.memberJBgColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="提督用户边框颜色">
              <el-color-picker v-model="form.memberTBgColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="总督用户边框颜色">
              <el-color-picker v-model="form.memberZBgColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="消息昵称颜色">
              <el-color-picker v-model="form.messageNameColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="消息背景颜色">
              <el-color-picker v-model="form.messageBgColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="消息文字颜色">
              <el-color-picker v-model="form.messageColor"></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="是否显示上方superchat固定栏">
              <el-switch v-model="form.showScTicker"></el-switch>
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
  showAvatars: true,
  messageFont: 'Noto Sans SC',
  messageFontSize: 16,
  messageBgColor: "#f1f2f6",
  messageNameColor: "#ffffff",
  messageColor: '#000000',
  showScTicker: false,
  mainBgColor: "#747d8c",
  memberJBgColor: "#5E88DB",
  memberTBgColor: "#5C65F2",
  memberZBgColor: "#7958E8"
}

export default {
  name: 'SimpleLikeFloat',
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

:root {
  /** 是否显示上方superchat固定栏 显示:display 不显示:none **/
  --main-ticker-display: ${this.form.showScTicker ? 'block' : 'none'};
  /** 消息背景颜色 **/
  --main-message-background-color: ${this.form.messageBgColor};
  /** 普通用户边框颜色 **/
  --main-message-name-background: ${this.form.mainBgColor};
  /** 舰长用户边框颜色 **/
  --member-j-message-name-background: ${this.form.memberJBgColor};
  /** 提督用户边框颜色 **/
  --member-t-message-name-background: ${this.form.memberTBgColor};
  /** 总督用户边框颜色 **/
  --member-z-message-name-background: ${this.form.memberZBgColor};
  /** 消息昵称颜色 **/
  --main-message-name-color: ${this.form.messageNameColor};
  /** 消息文字颜色 **/
  --main-message-color: ${this.form.messageColor};
  /** 整体字体 **/
  --main-font-family: ${this.form.messageFont};
}
/* Transparent background */
yt-live-chat-renderer {
  background-color: transparent !important;
}

yt-live-chat-item-list-renderer #item-scroller {
  overflow: hidden !important;
}

yt-live-chat-membership-item-renderer #content {
  overflow: visible !important;
  position: relative;
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
  padding-left: 4px !important;
  padding-right: 4px !important;
}

/* Outlines */
yt-live-chat-renderer * {
  font-family: var(--main-font-family);
}

/* Avatars */
@keyframes anim-header-border-rotate {
  0% { opacity: 0; transform: rotate(90deg); }
  40% { opacity: 0; transform: rotate(90deg); }
  100% { opacity: 1; transform: rotate(0); }
}

@keyframes anim {
  0% { opacity: 0; transform: translateX(-16px); }
  100% { opacity: 1; transform: none; }
}
yt-live-chat-text-message-renderer #author-photo {
  ${this.form.showAvatars ? 'display: block !important;' : 'display: none !important;'}
  animation: anim 210ms;
  animation-fill-mode: both;
  position: relative;
  overflow: visible !important;
  margin-top: 23px;
  width: 34px !important;
  height: 34px !important;
  border-radius: 34px !important;
}
yt-live-chat-text-message-renderer #author-photo img {
  width: 34px !important;
  height: 34px !important;
  border-radius: 34px !important;
}
yt-live-chat-text-message-renderer #author-photo:before {
  content: '';
  animation: anim-header-border-rotate 500ms;
  width: 34px;
  height: 34px;
  border-radius: 34px !important;
  position: absolute;
  left: -4px;
  top: -4px;
  border: 4px solid var(--main-message-name-background);
}
yt-live-chat-text-message-renderer[privilegeType="3"] #author-photo:before {
  border: 4px inset var(--member-j-message-name-background) !important;
}
yt-live-chat-text-message-renderer[privilegeType="2"] #author-photo:before {
  border: 4px inset var(--member-t-message-name-background) !important;
}
yt-live-chat-text-message-renderer[privilegeType="1"] #author-photo:before {
  border: 4px inset var(--member-z-message-name-background) !important;
}

yt-live-chat-membership-item-renderer #author-photo,
yt-live-chat-membership-item-renderer #author-photo img {
  ${this.form.showAvatars ? 'display: block !important;' : 'display: none !important;'}
  width: 24px !important;
  height: 24px !important;
  border-radius: 24px !important;
  margin-right: 6px !important;
}

yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo img {
  ${this.form.showAvatars ? 'display: block !important;' : 'display: none !important;'}
  width: 24px !important;
  height: 24px !important;
  border-radius: 24px !important;
  margin-right: 6px !important;
}
/* Channel names */
@keyframes anim-msg-in-name {
  0% { transform: translateY(11px); }
  80% { transform: translateY(11px); }
  100% { transform: translateY(11px); }
}
yt-live-chat-text-message-renderer yt-live-chat-author-chip {
  animation: anim-msg-in-name 250ms;
  transform-origin: 0 0;
  position: relative;
  transform: translateY(11px);
  margin: 0 0 0 4px !important;
  background-color: var(--main-message-name-background);
  padding: 2px 6px;
  border-radius: 12px;
}
yt-live-chat-text-message-renderer[privilegeType="3"] yt-live-chat-author-chip {
  background-color: var(--member-j-message-name-background) !important;
}
yt-live-chat-text-message-renderer[privilegeType="2"] yt-live-chat-author-chip {
  background-color: var(--member-t-message-name-background) !important;
}
yt-live-chat-text-message-renderer[privilegeType="1"] yt-live-chat-author-chip {
  background-color: var(--member-z-message-name-background) !important;
}

yt-live-chat-text-message-renderer #author-name {
  color: var(--main-message-name-color) !important;
  font-family: var(--main-font-family);
  font-size: 14px !important;
  line-height: 14px !important;
  max-width: calc(100% - 0px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: transparent !important;
}

#medal-name.yt-live-chat-author-medal-renderer {
  visibility: hidden;
  width: 0;
  height: 0;
  padding: 0;
  font-size: 14px !important;
  line-height: 14px !important;
}

#medal-level.yt-live-chat-author-medal-renderer {
  visibility: hidden;
  width: 0;
  height: 0;
  padding: 0;
  font-size: 14px !important;
  line-height: 14px !important;
}

/* Messages */
@keyframes anim-msg-in {
  0% { opacity: 0; transform: scale(0.7); }
  85% { opacity: 0.8; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}

yt-live-chat-text-message-renderer #card {
  max-width: 100%;
}

yt-live-chat-text-message-renderer #content {
  /** 动画相关 **/
  animation: anim-msg-in 240ms;
  transform-origin: left center;
  /** 基本属性相关 **/
  display: block;
  position: relative;
  max-width: calc(100% - 48px);
  ${this.form.showAvatars ? '' : 'margin-left: 22px;'}
}

yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  color: var(--main-message-color) !important;
  font-family: var(--main-font-family);
  font-size: ${this.form.messageFontSize}px !important;
  line-height: ${this.form.messageFontSize}px !important;
}

yt-live-chat-text-message-renderer #message {
  max-width: 100%;
  display: block !important;
  border-radius: ${this.form.messageFontSize + 4}px;
  padding: 11px 12px;
  border: 2px solid var(--main-message-name-background);
  background: var(--main-message-background-color);
}
yt-live-chat-text-message-renderer[privilegeType="3"] #message {
  border: 2px solid var(--member-j-message-name-background) !important;
}
yt-live-chat-text-message-renderer[privilegeType="2"] #message {
  border: 2px solid var(--member-t-message-name-background) !important;
}
yt-live-chat-text-message-renderer[privilegeType="1"] #message {
  border: 2px solid var(--member-z-message-name-background) !important;
}

/* member */
@keyframes anim-member-in {
  0% { opacity: 0; transform: scale(0.8); }
  85% { opacity: 0.8; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}
@keyframes anim-member-text-in {
  0% { opacity: 0; transform: scale(0.8); }
  75% { opacity: 0.3; transform: scale(0.8); }
  100% { opacity: 1; transform: scale(1); }
}
yt-live-chat-membership-item-renderer {
  animation: anim-member-in 240ms;
  transform-origin: center center;
}
yt-live-chat-membership-item-renderer[privilegetype="3"] #card,
yt-live-chat-membership-item-renderer[privilegetype="3"] #header {
  background-color: var(--member-j-message-name-background) !important;
}
yt-live-chat-membership-item-renderer[privilegetype="2"] #card,
yt-live-chat-membership-item-renderer[privilegetype="2"] #header {
  background-color: var(--member-t-message-name-background) !important;
}
yt-live-chat-membership-item-renderer[privilegetype="1"] #card,
yt-live-chat-membership-item-renderer[privilegetype="1"] #header {
  background-color: var(--member-z-message-name-background) !important;
}

yt-live-chat-membership-item-renderer #card {
  margin: 4px 0 !important;
  border-radius: 12px !important;
}
yt-live-chat-membership-item-renderer #header {
  margin: 4px 0 !important;
  flex-wrap: wrap;
}
yt-live-chat-membership-item-renderer #header::after {
  animation: anim-member-text-in 300ms;
  font-size: ${this.form.messageFontSize}px;
  width: 100%;
  margin-top: 6px;
  border-radius: 20px;
  padding: 7px 12px;
  color: var(--main-message-color);
  background-color: var(--main-message-background-color);
}
yt-live-chat-membership-item-renderer[privilegetype="3"] #header::after {
   content: '欢迎新会员上舰舰长';
}
yt-live-chat-membership-item-renderer[privilegetype="2"] #header::after {
   content: '欢迎新会员上舰提督';
}
yt-live-chat-membership-item-renderer[privilegetype="1"] #header::after {
   content: '欢迎新会员上舰总督';
}
yt-live-chat-membership-item-renderer #header-content-primary-column {
  width: 100%;
}
yt-live-chat-membership-item-renderer yt-live-chat-author-chip {
  width: 100%;
  justify-content: space-between;
}
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  color: #ffffff !important;
  font-family: var(--main-font-family);
  font-size: 18px !important;
  line-height: 18px !important;
}

yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  display: none;
}

/* SuperChat/Fan Funding Messages */
yt-live-chat-paid-message-renderer {
  animation: anim-member-in 240ms;
  transform-origin: center center;
  margin: 4px 0 !important;
}
yt-live-chat-paid-message-renderer #card {
  border-radius: 12px !important;
  overflow: hidden;
}
yt-live-chat-paid-message-renderer[price-level="1"] #card {
  background-color: #1E88E5 !important;
}
yt-live-chat-paid-message-renderer[price-level="10"] #card {
  background-color: #00E5FF !important;
}
yt-live-chat-paid-message-renderer[price-level="30"] #card {
  background-color: #00BFA5 !important;
}
yt-live-chat-paid-message-renderer[price-level="50"] #card {
  background-color: #FFB300 !important;
}
yt-live-chat-paid-message-renderer[price-level="100"] #card {
  background-color: #E65100 !important;
}
yt-live-chat-paid-message-renderer[price-level="500"] #card {
  background-color: #E91E63 !important;
}
yt-live-chat-paid-message-renderer[price-level="1000"] #card {
  background-color: #D00000 !important;
}
yt-live-chat-paid-message-renderer #header {
  background-color: transparent !important;
}
yt-live-chat-paid-message-renderer #header-content {
  width: calc(100% - 30px);
}
yt-live-chat-paid-message-renderer #header-content-primary-column {
  width: 100%;
  flex-direction: row !important;
}
yt-live-chat-paid-message-renderer #author-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name * {
  color: #ffffff !important;
  font-family: var(--main-font-family);
  font-size: 16px !important;
  line-height: 16px !important;
}
yt-live-chat-paid-message-renderer #purchase-amount {
    flex-shrink: 0;
}
yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  color: #ffffff !important;
  font-family: var(--main-font-family);
  font-size: 18px !important;
  line-height: 18px !important;
}
yt-live-chat-paid-message-renderer #content {
  background-color: transparent !important;
  width: calc(100% - 32px);
  position: relative;
  padding-top: 0 !important;
}
yt-live-chat-paid-message-renderer #content #message {
  animation: anim-member-text-in 300ms;
  font-size: ${this.form.messageFontSize}px;
  margin-top: 6px;
  border-radius: 20px;
  padding: 7px 12px;
  font-family: var(--main-font-family);
  color: var(--main-message-color);
  background-color: var(--main-message-background-color);
}

/* SuperChat Ticker */
yt-live-chat-ticker-renderer {
  display: var(--main-ticker-display);
  background-color: transparent !important;
  box-shadow: none !important;
}

yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer *,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer * {
  color: #ffffff !important;
  font-family: var(--main-font-family);
}

/* Hide badges */
yt-live-chat-text-message-renderer #chat-badges {
  display: none !important;
}
/* Medal */
yt-live-chat-author-medal-renderer {
    display: none;
}
/* Background colors */
body {
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0);
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
      window.localStorage.stylegenSimpleLikeFloatConfig = JSON.stringify(config)
    }, 500),
    loadConfig() {
      try {
        return mergeConfig(JSON.parse(window.localStorage.stylegenSimpleLikeFloatConfig), DEFAULT_CONFIG)
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
