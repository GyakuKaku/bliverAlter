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

      <h3>{{ $t('stylegen.backgrounds') }}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="消息背景颜色">
              <el-color-picker v-model="form.bgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="消息背景颜色">
              <el-color-picker v-model="form.messageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="舰长消息背景颜色">
              <el-color-picker v-model="form.memberMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="提督消息背景颜色">
              <el-color-picker v-model="form.moderatorMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="总督消息背景颜色">
              <el-color-picker v-model="form.ownerMessageBgColor" show-alpha></el-color-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>舰长</h3>
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
      </el-card>

      <h3>打赏</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="打赏第一行字体尺寸">
              <el-input v-model.number="form.scNameFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="第一行行高（0为默认）">
              <el-input v-model.number="form.scNameLineHeight" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
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

      <h3>额外内容</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item label="显示帽子">
              <el-switch v-model="form.showHat"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="显示领结">
              <el-switch v-model="form.showScarf"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="显示花">
              <el-switch v-model="form.showFlower"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="显示耳朵">
              <el-switch v-model="form.showEar"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="耳朵弹出动画">
              <el-switch v-model="form.earAnime"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item label="上舰弹幕框动画">
              <el-switch v-model="form.memberAnime"></el-switch>
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
  avatarGiftSize: 40,
  showUserNames: true,
  userNameFont: 'Noto Sans SC',
  userNameFontSize: 18,
  userNameLineHeight: 0,
  userNameColor: '#ffffff',
  ownerUserNameColor: '#ffffff',
  moderatorUserNameColor: '#ffffff',
  memberUserNameColor: '#ffffff',
  showBadges: false,

  messageFont: 'Noto Sans SC',
  messageFontSize: 16,
  messageLineHeight: 0,
  messageColor: '#333333',

  showTime: false,
  timeFont: 'Noto Sans SC',
  timeFontSize: 16,
  timeLineHeight: 0,
  timeColor: '#999999',

  bgColor: 'rgba(0, 0, 0, 0)',
  messageBgColor: 'rgba(255, 206, 101, 1)',
  ownerMessageBgColor: 'rgba(184, 168, 227, 1)',
  moderatorMessageBgColor: 'rgba(138, 164, 255, 1)',
  memberMessageBgColor: 'rgba(255, 206, 101, 1)',

  firstLineFont: 'Noto Sans SC',
  firstLineFontSize: 18,
  firstLineLineHeight: 0,
  secondLineFont: 'Noto Sans SC',
  secondLineFontSize: 18,
  secondLineLineHeight: 0,
  scContentFont: 'Noto Sans SC',
  scNameFontSize: 14,
  scNameLineHeight: 0,
  scContentFontSize: 16,
  scContentLineHeight: 0,
  showScTicker: false,
  showOtherThings: true,

  animateIn: true,
  fadeInTime: 200, // ms
  animateOut: false,
  animateOutWaitTime: 30, // s
  fadeOutTime: 200, // ms
  slide: true,
  reverseSlide: false,

  showHat: true,
  showScarf: true,
  showFlower: false,
  showEar: false,
  earAnime: false,
  memberAnime: true
}

export default {
  name: 'JoiLike',
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

${this.joiStyle}

${this.paddingStyle}

${this.avatarStyle}

${this.userNameStyle}

${this.messageStyle}

${this.timeStyle}

${this.backgroundStyle}

${this.newMemberStyle}

${this.scStyle}

${this.animationStyle}
`
    },
    importStyle() {
      let allFonts = []
      for (let name of ['userNameFont', 'messageFont', 'timeFont', 'firstLineFont', 'secondLineFont', 'scContentFont']) {
        allFonts.push(this.form[name])
      }
      return common.getImportStyle(allFonts)
    },
    joiStyle() {
      return `/* extra style */
@keyframes fade-in {
  0% {opacity: 0.2;transform:rotate(90deg);}
  40% {opacity: 0.2;transform:rotate(60deg);}
  100% {opacity: 1;transform:rotate(0deg);}
}
@-webkit-keyframes fade-in {/*针对webkit内核*/
  0% {opacity: 0.2;transform:rotate(90deg);}
  40% {opacity: 0.2;transform:rotate(60deg);}
  100% {opacity: 1;transform:rotate(0deg);}
}
yt-live-chat-text-message-renderer #hat{
  ${this.form.showAvatars && this.form.showHat ? 'display: block !important;' : 'display: none !important;'}
  position: absolute !important;
  z-index: 1000;
  top: -5px !important;
  left: -${this.form.avatarSize / 2 + 5}px !important;
  width: ${this.form.avatarSize * 0.618}px !important;
}
yt-live-chat-text-message-renderer #scarf{
  ${this.form.showAvatars && this.form.showScarf ? 'display: block !important;' : 'display: none !important;'}
  position: absolute !important;
  z-index: 10;
  top: ${this.form.avatarSize * 0.8}px !important;
  left: -${this.form.avatarSize * 0.21}px !important;
  width: ${this.form.avatarSize * 0.42}px !important;
}
yt-live-chat-text-message-renderer #ear{
  ${this.form.showAvatars && this.form.showEar ? 'display: block !important;' : 'display: none !important;'}
  position: absolute !important;
  z-index: 10;
  top: -${this.form.avatarSize * 0.2}px !important;
  left: ${this.form.avatarSize * 0.118}px !important;
  height: ${this.form.avatarSize * 0.4}px !important;
  width: ${this.form.avatarSize * 0.25}px !important;
  transform-origin: left;
  ${this.form.earAnime ? 'animation: fade-in;animation-duration: 1s;-webkit-animation:fade-in 1s;' : ''}
}
yt-live-chat-text-message-renderer #flower{
  ${this.form.showFlower ? 'display: block !important;' : 'display: none !important;'}
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
}
yt-live-chat-text-message-renderer #star{
  display: block !important;
  position: absolute !important;
  bottom: 0 !important;
  right: 18px !important;
  width: 60px !important;
  height: 100% !important;
  z-index: 999 !important;
  background-image: url('/static/img/common/joi/star.png') !important;
  background-size: 60px 60px !important;
  background-repeat: repeat-y !important;
}`
    },
    paddingStyle() {
      return `/* Reduce side padding */
yt-live-chat-text-message-renderer {
  padding: 0 4px !important;
  margin: 15px 0 15px ${this.form.avatarSize / 2 + 12}px;
  border-radius: 8px;
  overflow: visible;
}
yt-live-chat-text-message-renderer #content{
  margin-left: ${this.form.avatarSize / 2 + 8}px !important;
  width: calc(100% - ${this.form.avatarSize / 2 + 94}px) !important;
  z-index: 1000;
}
  ${this.getBgStyleForAuthorType('', this.form.messageBgColor)}
  ${this.getBgStyleForAuthorType('3', this.form.memberMessageBgColor)}
  ${this.getBgStyleForAuthorType('2', this.form.moderatorMessageBgColor)}
  ${this.getBgStyleForAuthorType('1', this.form.ownerMessageBgColor)}`
    },
    avatarStyle() {
      return `/* Avatars */
yt-live-chat-text-message-renderer #author-photo {
  ${this.form.showAvatars ? '' : 'display: none !important;'}
  width: ${this.form.avatarSize}px !important;
  height: ${this.form.avatarSize}px !important;
  border-radius: ${this.form.avatarSize}px !important;
  position: absolute !important;
  left: -${this.form.avatarSize / 2}px !important;
}
yt-live-chat-text-message-renderer #author-photo img {
  ${this.form.showAvatars ? '' : 'display: none !important;'}
  width: ${this.form.avatarSize}px !important;
  height: ${this.form.avatarSize}px !important;
  border-radius: ${this.form.avatarSize}px !important;
}
`
    },
    userNameStyle() {
      return `/* Channel names */
yt-live-chat-text-message-renderer yt-live-chat-author-chip {
  display: block;
  height: ${this.form.avatarSize / 2}px !important;
  line-height: ${this.form.avatarSize / 2}px !important;
  width: 100% !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  height: ${this.form.avatarSize / 2}px !important;
  line-height: ${this.form.avatarSize / 2}px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Hide badges */
yt-live-chat-text-message-renderer #chat-badges {
  ${this.form.showBadges ? '' : 'display: none !important;'}
  height: ${this.form.avatarSize / 2}px !important;
  line-height: ${this.form.avatarSize / 2}px !important;
}`
    },
    messageStyle() {
      return `/* Messages */
yt-live-chat-text-message-renderer #message,
yt-live-chat-text-message-renderer #message * {
  ${this.form.messageColor ? `color: ${this.form.messageColor} !important;` : ''}
  font-family: "${common.cssEscapeStr(this.form.messageFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.messageFontSize}px !important;
  line-height: ${this.form.avatarSize / 2}px !important;
}

yt-live-chat-text-message-renderer #message {
  display: block !important;
  overflow: visible !important;
  padding-left: 8px !important;
  min-height: ${this.form.avatarSize / 2}px !important;
}
yt-live-chat-text-message-renderer #message .el-image {
  margin-top:8px;
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
}`
    },
    newMemberStyle() {
      return `/* SuperChat/Fan Funding Messages */

@keyframes up {
  0% { transform: translateY(80%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes jump {
  0% { transform: translateY(0) scaleY(0.95); }
  33% { transform: translateY(0%) scaleY(0.95); }
  55% { transform: translateY(-30%) scaleY(0.9); }
  66% { transform: translateY(-30%) scaleY(0.95); }
  77% { transform: translateY(5%) scaleY(0.9); }
  100% { transform: translateY(0) scaleY(1); }
}
@keyframes right-in {
  0% { transform: translateX(30%); opacity: 0; }
  33% { transform: translateX(30%); opacity: 0; }
  90%, 100% { transform: translateX(0); opacity: 1; }
}
@keyframes hat-down {
  0% { transform: translateY(-30%); opacity: 0; }
  75% { transform: translateY(-30%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes scarf-up {
  0% { transform: translateY(30%); opacity: 0; }
  75% { transform: translateY(30%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
@keyframes member-bg-show {
  0%, 66% { transform: translateY(100%); }
  100% { transform: translateY(0); }
}
yt-live-chat-membership-item-renderer {
  overflow: visible;
  letter-spacing: 1px;
}
yt-live-chat-membership-item-renderer #card {
  margin: 4px 0 !important;
  max-width: 360px;
  position: relative;
  background-image: linear-gradient(to bottom, #ffce65, #feb435) !important;
  border: 3px solid #d5d5d5;
  ${this.form.memberAnime ? 'animation: up 0.4s ease-in;' : ''}
}
yt-live-chat-membership-item-renderer #header {
  display: flex !important;
  z-index: 10;
  margin: 4px 0 !important;
  background: none !important;
  position: relative;
}
yt-live-chat-membership-item-renderer #header::before {
  content: '';
  position: absolute;
  bottom: -4px;
  right: -1px;
  width: 80%;
  height: 90%;
  background-image: linear-gradient(to bottom, #fcbb2c, #ffb30d) !important;
  border-radius: 94% 6% 0% 100% / 100% 0% 100% 0%;
}
yt-live-chat-membership-item-renderer #header::after {
  content: '';
  position: absolute;
  bottom: -4px;
  right: -1px;
  width: 80%;
  height: 90%;
  background-image: url('/static/img/common/joi/star.png') !important;
  border-radius: 94% 6% 0% 100% / 100% 0% 100% 0%;
  background-size: 72px 72px !important;
  background-repeat: repeat !important;
  opacity: 0.72;
  ${this.form.memberAnime ? 'animation: member-bg-show 2.4s;' : ''}
}
yt-live-chat-membership-item-renderer #author-photo {
  position: relative;
  overflow: visible !important;
  ${this.form.showAvatars ? 'display: block !important;' : 'display: none !important;'}
  width: ${this.form.avatarGiftSize}px !important;
  height: ${this.form.avatarGiftSize}px !important;
  border-radius: ${this.form.avatarGiftSize}px !important;
  margin-right: ${this.form.avatarGiftSize / 4}px !important;
  z-index: 800;
  ${this.form.memberAnime ? 'animation: jump 1.2s;' : ''}
}
yt-live-chat-membership-item-renderer #author-photo::before {
  ${this.form.showHat ? '' : 'display: none !important;'}
  content: '';
  position: absolute !important;
  top: -4px !important;
  left: -3px !important;
  width: ${this.form.avatarGiftSize * 0.618}px !important;
  height: ${this.form.avatarGiftSize * 0.784}px !important;
  background-image: url('/static/img/common/joi/hat.png') !important;
  background-size: 100% 100% !important;
  ${this.form.memberAnime ? 'animation: hat-down 1.6s;' : ''}
}
yt-live-chat-membership-item-renderer #author-photo::after {
  ${this.form.showScarf ? '' : 'display: none !important;'}
  content: '';
  position: absolute !important;
  bottom: -5px !important;
  left: ${this.form.avatarGiftSize * 0.29}px !important;
  width: ${this.form.avatarGiftSize * 0.42}px !important;
  height: ${this.form.avatarGiftSize * 0.278}px !important;
  background-image: url('/static/img/common/joi/scarf.png') !important;
  background-size: 100% 100% !important;
  ${this.form.memberAnime ? 'animation: scarf-up 1.6s;' : ''}
}
yt-live-chat-membership-item-renderer #author-photo img {
  ${this.form.showAvatars ? '' : 'display: none !important;'}
  width: ${this.form.avatarGiftSize}px !important;
  height: ${this.form.avatarGiftSize}px !important;
  border-radius: ${this.form.avatarGiftSize}px !important;
}
yt-live-chat-membership-item-renderer #header-content {
  display: block;
  ${this.form.memberAnime ? 'animation: right-in 1.2s ease-out;' : ''}
}
yt-live-chat-membership-item-renderer #header-content-primary-column {
  z-index: 800;
}
yt-live-chat-membership-item-renderer #author-name {

}
yt-live-chat-membership-item-renderer #header-subtext,
yt-live-chat-membership-item-renderer #header-subtext * {
  color: #ffffff !important;
  font-family: "${common.cssEscapeStr(this.form.secondLineFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.secondLineFontSize}px !important;
  line-height: ${this.form.secondLineLineHeight || this.form.secondLineFontSize}px !important;
}

${this.scTickerStyle}

${this.form.showOtherThings ? '' : `yt-live-chat-item-list-renderer {
  display: none !important;
}`}`
    },
scStyle() {
      return `yt-live-chat-paid-message-renderer {
  margin: ${this.form.avatarGiftSize - (this.form.scNameLineHeight || this.form.scNameFontSize) - 8}px 0 4px 0 !important;
}
@keyframes sc-title-left-in {
  0% { width: 0; opacity: 0; }
  100% { width: calc(100% - 52px); opacity: 1; }
}
yt-live-chat-membership-item-renderer #header-content-inner-column,
yt-live-chat-membership-item-renderer #header-content-inner-column * {
  font-family: "${common.cssEscapeStr(this.form.firstLineFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.firstLineFontSize}px !important;
  line-height: ${this.form.firstLineLineHeight || this.form.firstLineFontSize}px !important;
}

yt-live-chat-paid-message-renderer #purchase-amount,
yt-live-chat-paid-message-renderer #purchase-amount * {
  font-family: "${common.cssEscapeStr(this.form.firstLineFont)}"${common.FALLBACK_FONTS};
  font-size: ${ this.form.scNameFontSize }px !important;
  line-height: ${ this.form.scNameLineHeight || this.form.scNameFontSize }px !important;
}

yt-live-chat-paid-message-renderer #content,
yt-live-chat-paid-message-renderer #content * {
  font-family: "${common.cssEscapeStr(this.form.scContentFont)}"${common.FALLBACK_FONTS};
  font-size: ${this.form.scContentFontSize}px !important;
  line-height: ${this.form.scContentLineHeight || this.form.scContentFontSize}px !important;
}
yt-live-chat-paid-message-renderer #card {

}
yt-live-chat-paid-message-renderer #header {
  background-image: linear-gradient(to bottom, #fcbb2c, #ffb30d) !important;
  border: 2px solid #d5d5d5;
  border-radius: ${ this.form.scNameLineHeight || this.form.scNameFontSize }px !important;
  margin-bottom: 4px;
  padding: 0 8px 0 ${ this.form.avatarGiftSize }px !important;
  ${this.form.memberAnime ? 'animation: sc-title-left-in 1s;' : ''}
}
yt-live-chat-paid-message-renderer #author-photo,
yt-live-chat-paid-message-renderer #author-photo img {
  ${this.form.showAvatars ? '' : 'display: none !important;'}
  width: ${this.form.avatarGiftSize}px !important;
  height: ${this.form.avatarGiftSize}px !important;
  border-radius: ${this.form.avatarGiftSize}px !important;
}
yt-live-chat-paid-message-renderer #author-photo {
  position: absolute;
  left: -8px;
  bottom: -2px;
  overflow: visible !important;
  margin-right: 0 !important;
}
yt-live-chat-paid-message-renderer #author-photo::before {
  ${this.form.showHat ? '' : 'display: none !important;'}
  content: '';
  position: absolute !important;
  top: -4px !important;
  left: -3px !important;
  width: ${this.form.avatarGiftSize * 0.618}px !important;
  height: ${this.form.avatarGiftSize * 0.784}px !important;
  background-image: url('/static/img/common/joi/hat.png') !important;
  background-size: 100% 100% !important;
}
yt-live-chat-paid-message-renderer #author-photo::after {
  ${this.form.showScarf ? '' : 'display: none !important;'}
  content: '';
  position: absolute !important;
  bottom: -5px !important;
  left: ${this.form.avatarGiftSize * 0.29}px !important;
  width: ${this.form.avatarGiftSize * 0.42}px !important;
  height: ${this.form.avatarGiftSize * 0.278}px !important;
  background-image: url('/static/img/common/joi/scarf.png') !important;
  background-size: 100% 100% !important;
}
yt-live-chat-paid-message-renderer #author-photo img {

}
yt-live-chat-paid-message-renderer #author-name {
  font-family: "${common.cssEscapeStr(this.form.firstLineFont)}"${common.FALLBACK_FONTS};
  font-size: ${ this.form.scNameFontSize }px !important;
  line-height: ${ this.form.scNameLineHeight || this.form.scNameFontSize }px !important;
  color: #ffffff !important;
  max-width: calc(100% - 80px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
yt-live-chat-paid-message-renderer #header #header-content-primary-column {
  flex-direction: row !important;
  justify-content: space-between;
  align-items: flex-end;
  color: #ffffff !important;
  width: 100%;
}
yt-live-chat-paid-message-renderer #content {
  background-image: linear-gradient(to bottom, #fcbb2c, #ffb30d) !important;
  border: 2px solid #d5d5d5;
  color: #ffffff !important;
  margin: 0 8px 0 0;
}
`
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
      window.localStorage.stylegenJoiLikeConfigV2 = JSON.stringify(config)
    }, 500),
    loadConfig() {
      try {
        return mergeConfig(JSON.parse(window.localStorage.stylegenJoiLikeConfigV2), DEFAULT_CONFIG)
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
      let typeSelector = authorType ? `[privilegeType="${authorType}"]` : ''
      return `yt-live-chat-text-message-renderer${typeSelector}{
  background-color: ${color} !important;
}`
    }
  }
}
</script>
