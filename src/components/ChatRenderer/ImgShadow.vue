<template>
  <yt-img-shadow class="no-transition" :height="height" :width="width" style="background-color: transparent;" loaded>
    <img id="img" class="style-scope yt-img-shadow" alt="" :height="height" :width="width" :src="showImgUrl" @error="onLoadError">
  </yt-img-shadow>
</template>

<script>
import * as chat from '@/api/chat'
import {errorLog, getPicBase64ByUrl} from "@/api/chat";

export default {
  name: 'ImgShadow',
  props: {
    imgUrl: String,
    height: String,
    width: String,
    authorName: {
      required: false,
      default: () => {return ''}
    }
  },
  data() {
    return {
      retryFlag: false,
      originUrl: this.imgUrl,
      showImgUrl: this.imgUrl
    }
  },
  watch: {
    imgUrl(val) {
      this.showImgUrl = val
    }
  },
  methods: {
    onLoadError() {
      if (!this.retryFlag) {
        this.retryFlag = true
        // 服务器获取图片返回base64
        getPicBase64ByUrl(this.showImgUrl, this.authorName).then(res => {
          this.showImgUrl = res
        })
        // errorLog('2', `name: ${this.authorName}, url: ${this.originUrl}, location: ${window.location.href}`)
      } else if (this.showImgUrl !== chat.DEFAULT_AVATAR_URL) {
        errorLog('3', `name: ${this.authorName}, url: ${this.originUrl}, base64: ${this.showImgUrl}`)
        this.showImgUrl = chat.DEFAULT_AVATAR_URL
      }
    }
  }
}
</script>

<style src="@/assets/css/youtube/yt-img-shadow.css"></style>
