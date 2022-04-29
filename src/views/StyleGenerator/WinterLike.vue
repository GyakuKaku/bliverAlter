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
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.avatarSize')">
              <el-input v-model.number="form.avatarSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{ $t('stylegen.userNames') }}</h3>
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
<!--          <el-col :xs="24" :sm="12">-->
<!--            <el-form-item :label="$t('stylegen.lineHeight')">-->
<!--              <el-input v-model.number="form.userNameLineHeight" type="number" min="0"></el-input>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
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
<!--        <el-row :gutter="20">-->
<!--          <el-col :xs="24" :sm="12">-->
<!--            <el-form-item :label="$t('stylegen.showBadges')">-->
<!--              <el-switch v-model="form.showBadges"></el-switch>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--        </el-row>-->
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
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.lineHeight')">
              <el-input v-model.number="form.messageLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{ $t('stylegen.time') }}</h3>
      <el-card shadow="never">
<!--        <el-form-item :label="$t('stylegen.showTime')">-->
<!--          <el-switch v-model="form.showTime"></el-switch>-->
<!--        </el-form-item>-->
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

      <h3>{{ $t('stylegen.backgrounds') }}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.bgColor')">
              <el-color-picker v-model="form.bgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="上舰背景色">
              <el-color-picker v-model="form.neoMemberBgColor"></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
<!--        <el-row :gutter="20">-->
<!--          <el-col :xs="24" :sm="12">-->
<!--            <el-form-item :label="$t('stylegen.messageBgColor')">-->
<!--              <el-color-picker v-model="form.messageBgColor" show-alpha></el-color-picker>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--          <el-col :xs="24" :sm="12">-->
<!--            <el-form-item :label="$t('stylegen.memberMessageBgColor')">-->
<!--              <el-color-picker v-model="form.memberMessageBgColor" show-alpha></el-color-picker>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :xs="24" :sm="12">-->
<!--            <el-form-item :label="$t('stylegen.moderatorMessageBgColor')">-->
<!--              <el-color-picker v-model="form.moderatorMessageBgColor" show-alpha></el-color-picker>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--          <el-col :xs="24" :sm="12">-->
<!--            <el-form-item :label="$t('stylegen.ownerMessageBgColor')">-->
<!--              <el-color-picker v-model="form.ownerMessageBgColor" show-alpha></el-color-picker>-->
<!--            </el-form-item>-->
<!--          </el-col>-->
<!--        </el-row>-->
      </el-card>

      <h3>{{ $t('stylegen.scAndNewMember') }}</h3>
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

      <h3>{{ $t('stylegen.animation') }}</h3>
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
  avatarSize: 60,

  showUserNames: true,
  userNameFont: 'Source Han Sans',
  userNameFontSize: 14,
  userNameLineHeight: 0,
  userNameColor: '#333333',
  ownerUserNameColor: '#333333',
  moderatorUserNameColor: '#333333',
  memberUserNameColor: '#333333',
  showBadges: false,

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
  neoMemberBgColor: '#ffffff',
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
  slide: false,
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

${this.avatarStyle}

${this.userNameStyle}

${this.messageStyle}

${this.timeStyle}

${this.backgroundStyle}

${this.scAndNewMemberStyle}

${this.animationStyle}

${this.imgStyle}
`
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
yt-live-chat-text-message-renderer #content{
  position: relative !important;
}`
    },
    avatarStyle() {
      return `/* Avatars */
yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo img,
yt-live-chat-membership-item-renderer #author-photo,
yt-live-chat-membership-item-renderer #author-photo img {
  ${this.form.showAvatars ? '' : 'display: none !important;'}
  width: ${this.form.avatarSize}px !important;
  height: ${this.form.avatarSize}px !important;
  border-radius: ${this.form.avatarSize}px !important;
  margin-right: ${this.form.avatarSize / 4}px !important;
}
yt-live-chat-text-message-renderer #author-photo,
yt-live-chat-text-message-renderer #author-photo img {
  ${this.form.showAvatars ? '' : 'display: none !important;'}
  width: ${this.form.avatarSize}px !important;
  height: ${this.form.avatarSize}px !important;
  border-radius: ${this.form.avatarSize}px !important;
}
yt-live-chat-text-message-renderer #author-photo {
  margin: ${82 - this.form.avatarSize / 2}px 0 0 0 !important;
}
yt-live-chat-text-message-renderer #author-photo img {
  margin: 0 !important;
}
yt-live-chat-text-message-renderer #author-border {
  ${this.form.showAvatars ? 'display: block !important;' : 'display: none !important;'}
  position: absolute !important;
  top: ${85 - this.form.avatarSize / 2}px !important;
  left: 3px !important;
  width: ${this.form.avatarSize + 2}px !important;
  height: ${this.form.avatarSize + 2}px !important;
  background-size: ${this.form.avatarSize + 2}px ${this.form.avatarSize + 2}px !important;
}

yt-live-chat-text-message-renderer[author-type=""] #author-border {
  background-image: url('/static/img/common/borderNormal.png') !important;
}
yt-live-chat-text-message-renderer[author-type="moderator"] #author-border {
  background-image: url('/static/img/common/borderStaff.png') !important;
}
yt-live-chat-text-message-renderer[author-type="owner"] #author-border {
  background-image: url('/static/img/common/borderOwner.png') !important;
}
yt-live-chat-text-message-renderer[author-type="member"] #author-border {
  background-image: url('/static/img/common/borderMember.png') !important;
}
`
    },
    userNameStyle() {
      return `/* Channel names */
yt-live-chat-text-message-renderer yt-live-chat-author-chip {
  height: 48px;
  line-height: ${this.form.userNameFontSize + 6}px;
  position: absolute;
  top: 0 !important;
  left: 18px;
  margin: 0 !important;
  display: flex;
  align-items: flex-end;
  width: 100% !important;
}

yt-live-chat-text-message-renderer #author-name {
  min-width: 56px !important;
  max-width: calc(100% - 96px) !important;
}

yt-live-chat-text-message-renderer #author-name-text{
  display: block !important;
  border-radius: 8px !important;
  padding: 6px 0px !important;
  border-image-source: url('/static/img/common/name.png') !important;
  border: 1px solid transparent;
  border-image-slice: 0 380 fill !important;
  border-width: 0 12px 0 12px !important;
}


yt-live-chat-text-message-renderer #author-name[type="owner"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="owner"] {
  ${this.form.ownerUserNameColor ? `color: ${this.form.ownerUserNameColor} !important;` : ''}
}

yt-live-chat-text-message-renderer #author-name[type="moderator"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="moderator"] {
  ${this.form.moderatorUserNameColor ? `color: ${this.form.moderatorUserNameColor} !important;` : ''}
}

yt-live-chat-text-message-renderer #author-name[type="member"],
yt-live-chat-text-message-renderer yt-live-chat-author-badge-renderer[type="member"] {
  ${this.form.memberUserNameColor ? `color: ${this.form.memberUserNameColor} !important;` : ''}
}

yt-live-chat-text-message-renderer #author-name {
  ${this.form.showUserNames ? '' : 'display: none !important;'}
  ${this.form.userNameColor ? `color: ${this.form.userNameColor} !important;` : ''}
  font-family: "${common.cssEscapeStr(this.form.userNameFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.userNameFontSize}px !important;
  line-height: ${this.form.userNameLineHeight || this.form.userNameFontSize}px !important;
}

/* Hide badges */
yt-live-chat-text-message-renderer #chat-badges {
  display: none !important;
  vertical-align: text-top !important;
  margin: 0 !important;
}`
    },
    messageStyle() {
      return `/* Messages */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  ${this.form.messageColor ? `color: ${this.form.messageColor} !important;` : ''}
  font-family: "${common.cssEscapeStr(this.form.messageFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.messageFontSize}px !important;
  line-height: ${this.form.messageLineHeight || this.form.messageFontSize}px !important;
}

yt-live-chat-text-message-renderer #message {
  min-width: 90px !important;
  min-height: 78px !important;
  align-items: center;
  display: flex !important;
  border: 1px solid transparent;
  overflow: visible !important;
  border-width: 0 86px 0 52px !important;
  border-image-slice: 0 258 0 157 fill !important;
  padding: 58px 0 18px 0;
  border-image-source: url('/static/img/common/rabbitBody.png') !important;
}`
    },
    timeStyle() {
      return common.getTimeStyle(this.form)
    },
    backgroundStyle() {
      return `/* Background colors */
body {
  overflow: hidden;
  ${this.form.bgColor ? `background-color: ${this.form.bgColor};` : ''}
}
`
// ${this.getBgStyleForAuthorType('', this.form.messageBgColor)}
//
// ${this.getBgStyleForAuthorType('owner', this.form.ownerMessageBgColor)}
//
// ${this.getBgStyleForAuthorType('moderator', this.form.moderatorMessageBgColor)}
//
// ${this.getBgStyleForAuthorType('member', this.form.memberMessageBgColor)}
// `
    },
    scAndNewMemberStyle() {
      return `/* SuperChat/Fan Funding Messages */
yt-live-chat-paid-message-renderer {
  margin: 4px 0 !important;
}

${this.scAndNewMemberFontStyle}

yt-live-chat-membership-item-renderer #card {
  background-color: ${this.form.neoMemberBgColor} !important;
  border-radius: 8px !important;
  margin: 4px 0 !important;s
}
yt-live-chat-membership-item-renderer #header {
  background-color: ${this.form.neoMemberBgColor} !important;
  margin: 4px !important;
  border-radius: 8px !important;
  border: 3px dashed #333333 !important;
  color: #000000 !important;
}
yt-live-chat-membership-item-renderer #header .yt-live-chat-author-chip {
  color: #333333 !important;
}
yt-live-chat-membership-item-renderer #header-subtext {
  color: #333333 !important;
}
yt-live-chat-membership-item-renderer #author-border {
  ${this.form.showAvatars ? 'display: block !important;' : 'display: none !important;'}
  position: absolute !important;
  top: 7px !important;
  left: 15px !important;
  width: ${this.form.avatarSize + 2}px !important;
  height: ${this.form.avatarSize + 2}px !important;
  background-size: ${this.form.avatarSize + 2}px ${this.form.avatarSize + 2}px !important;
  background-image: url('/static/img/common/borderMember.png') !important;
}

${this.scTickerStyle}

${this.form.showOtherThings ? '' : `yt-live-chat-item-list-renderer {
  display: none !important;
}`}`
    },
    scAndNewMemberFontStyle() {
      return `yt-live-chat-paid-message-renderer #author-name,
yt-live-chat-paid-message-renderer #author-name *,
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  font-family: "${common.cssEscapeStr(this.form.firstLineFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.firstLineFontSize}px !important;
  line-height: ${this.form.firstLineLineHeight || this.form.firstLineFontSize}px !important;
}

yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount *,
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  font-family: "${common.cssEscapeStr(this.form.secondLineFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.secondLineFontSize}px !important;
  line-height: ${this.form.secondLineLineHeight || this.form.secondLineFontSize}px !important;
}

yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
  font-family: "${common.cssEscapeStr(this.form.scContentFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.scContentFontSize}px !important;
  line-height: ${this.form.scContentLineHeight || this.form.scContentFontSize}px !important;
}`
    },
    scTickerStyle() {
      return `${this.form.showScTicker ? '' : `yt-live-chat-ticker-renderer {
  display: none !important;
}`}

/* SuperChat Ticker */
yt-live-chat-ticker-paid-message-item-renderer,
yt-live-chat-ticker-paid-message-item-renderer *,
yt-live-chat-ticker-sponsor-item-renderer,
yt-live-chat-ticker-sponsor-item-renderer * {
  font-family: "${common.cssEscapeStr(this.form.secondLineFont)}"${common.FALLBACK_FONTS};
}`
    },
    animationStyle() {
      return common.getAnimationStyle(this.form)
    },
    imgStyle() {
      return `
      yt-live-chat-text-message-renderer #content .el-image  {
        margin: 58px 50px 0 12px !important;
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
    saveConfig: _.debounce(function () {
      let config = mergeConfig(this.form, DEFAULT_CONFIG)
      window.localStorage.stylegenLineLikeConfig = JSON.stringify(config)
    }, 500),
    loadConfig() {
      try {
        return mergeConfig(JSON.parse(window.localStorage.stylegenLineLikeConfig), DEFAULT_CONFIG)
      } catch {
        return {...DEFAULT_CONFIG}
      }
    },
    resetConfig() {
      this.form = {...DEFAULT_CONFIG}
    },

    getBgStyleForAuthorType(authorType, color) {
      if (!color) {
        color = '#ffffff'
      }
      let typeSelector = authorType ? `[author-type="${authorType}"]` : ''
      return `yt-live-chat-text-message-renderer${typeSelector} #message {
  background-color: ${color} !important;
}

yt-live-chat-text-message-renderer${typeSelector} #message::before {
  border-right-color: ${color};
}`
    }
  }
}
</script>
