<template>
  <div>
    <el-form label-width="150px" size="mini">
      <h3>{{$t('stylegen.global')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.danmakuAtBottom')">
              <el-switch v-model="form.danmakuAtBottom"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.tickerAtButtom')">
              <el-switch v-model="form.tickerAtButtom"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

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
        <el-divider></el-divider>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.randomUserNamesColor')">
              <el-switch v-model="form.randomUserNamesColor"></el-switch>
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
        <el-divider></el-divider>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showBadges')">
              <el-switch v-model="form.showBadges"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.badgesSize')">
              <el-input v-model.number="form.badgesSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{$t('stylegen.medal')}}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showMedal')">
              <el-switch v-model="form.showMedal"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showOnlyOwnerMedal')">
              <el-switch v-model="form.showOnlyOwnerMedal"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showMedalName')">
              <el-switch v-model="form.showMedalName"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showMedalLevel')">
              <el-switch v-model="form.showMedalLevel"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.fontSize')">
              <el-input v-model.number="form.medalFontSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.lineHeight')">
              <el-input v-model.number="form.medalLineHeight" type="number" min="0"></el-input>
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
        <el-divider></el-divider>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.mergeSameUser')">
              <el-switch v-model="form.messageMergeSameUser"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.groupBlockPadding')">
              <el-input v-model.number="form.messageGroupBlockPadding" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.emoticonSize')">
              <el-input v-model.number="form.emoticonSize" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.emoticonInlineBorderRadius')">
              <el-input v-model.number="form.emoticonInlineBorderRadius" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.emoticonBlockBorderRadius')">
              <el-input v-model.number="form.emoticonBlockBorderRadius" type="number" min="0"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <h3>{{ $t('stylegen.time') }}</h3>
      <el-card shadow="never">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showTime')">
              <el-switch v-model="form.showTime"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12">
            <el-form-item :label="$t('stylegen.showTimeRight')">
              <el-switch v-model="form.showTimeRight"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
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
import { mergeConfig } from '@/utils'

export const DEFAULT_CONFIG = {
  danmakuAtBottom: false,
  tickerAtButtom: false,

  showAvatars: true,
  avatarSize: 40,

  showUserNames: true,
  userNameFont: 'Noto Sans SC',
  userNameFontSize: 20,
  userNameLineHeight: 0,
  randomUserNamesColor: false,
  userNameColor: '#cccccc',
  ownerUserNameColor: '#ffd600',
  moderatorUserNameColor: '#5e84f1',
  memberUserNameColor: '#0f9d58',
  showBadges: true,
  badgesSize: 20,

  showMedal: true,
  showOnlyOwnerMedal: true,
  showMedalName: true,
  showMedalLevel: true,
  medalFontSize: 14,
  medalLineHeight: 0,

  messageFont: 'Noto Sans SC',
  messageFontSize: 18,
  messageLineHeight: 0,
  messageColor: '#000000',
  messageMergeSameUser: false,
  messageGroupBlockPadding: 0,

  emoticonSize: 48,
  emoticonInlineBorderRadius: 0,
  emoticonBlockBorderRadius: 4,

  showTime: false,
  showTimeRight: true,
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
  name: 'LineLike',
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
      ${this.raceStyle}
`
    },
    importStyle() {
      let allFonts = []
      for (let name of ['userNameFont', 'messageFont', 'timeFont', 'firstLineFont', 'secondLineFont', 'scContentFont']) {
        allFonts.push(this.form[name])
      }
      return common.getImportStyle(allFonts)
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
yt-live-chat-text-message-renderer{

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
  max-width: calc(100% - 92px);
}
/* Avatars */
yt-live-chat-text-message-renderer #content #author-photo {
  display: block !important;
  width: 60px !important;
  height: 60px !important;
  border-radius: 60px !important;
  position: absolute !important;
  left: -80px !important;
  top: -3px;
  z-index: 100 !important;
  border:3px solid #ffce65 !important;
}
yt-live-chat-text-message-renderer #author-photo:before {
  content: '';
  width: 60px;
  height: 60px;
  position: absolute;
  left: -10px;
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
  color: #ffffff !important;
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
  color: #ffffff !important;
  font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif;
  font-size: 16px !important;
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
  color: #ffffff !important;
  font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif;
  font-size: 16px !important;
  line-height: 30px !important;
}
yt-live-chat-text-message-renderer #image-and-message,
yt-live-chat-text-message-renderer #image-and-message * {
  color: #ffffff !important;
  font-family: "Noto Sans SC", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE \\8F6F \\96C5 \\9ED1 ", SimHei, Arial, sans-serif;
  font-size: 16px !important;
  line-height: 30px !important;
}
yt-live-chat-text-message-renderer #image-and-message {
  display: block !important;
  overflow: visible !important;
  padding-left: 8px !important;
  z-index: 800 !important;
  min-height: 30px !important;
}
yt-live-chat-text-message-renderer #message .emoji {
  width: auto !important;
  height: 48px !important;
}
#image-and-message img[display="block"] {
  border-radius: 4px;
}
#image-and-message img[display="inline"] {
  border-radius: 0px;
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-image: url('/static/img/expand/wave.gif') !important;
  border-radius: 0 0 4px 4px;
  background-size: 100% 100% !important;
  animation: up 1.5s;
  z-index: -1;
}
yt-live-chat-text-message-renderer #content {
  z-index: 450;
  padding: 0 32px 0 12px;
  position: relative;
  border-radius: 8px;
  max-width: calc(100% - 44px);
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
  z-index: 450;
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

yt-live-chat-text-message-renderer #image-and-message .el-badge .el-badge__content {
  font-size: 14px !important;
  text-shadow: none !important;
  font-family: sans-serif !important;
  color: #FFF !important;
  background-color: #000a49 !important;
  border: 1px solid #FFCE65 !important;
  line-height: 20px !important;
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
      window.localStorage.stylegenLineLikeConfig = JSON.stringify(config)
    }, 500),
    loadConfig() {
      try {
        return mergeConfig(JSON.parse(window.localStorage.stylegenLineLikeConfig), DEFAULT_CONFIG)
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
