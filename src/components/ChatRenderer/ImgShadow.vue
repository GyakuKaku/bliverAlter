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
      showImgUrl: this.imgUrl
    }
  },
  watch: {
    imgUrl(val) {
      this.showImgUrl = val
    }
  },
  // mounted() {
  //   console.log(getPicBase64ByUrl({imgUrl : this.showImgUrl}))
  // },
  methods: {
    onLoadError() {
      if (this.showImgUrl.indexOf('reload') === -1) {
        const date = new Date()
        const random = date.getMonth().toString() + date.getDate().toString()
        if (this.showImgUrl.indexOf('?') > -1) {
          this.showImgUrl = this.showImgUrl + '&reload=' + random;
        } else {
          this.showImgUrl = this.showImgUrl + '?reload=' + random;
        }
      } else if (this.showImgUrl !== chat.DEFAULT_AVATAR_URL) {
        errorLog('2', `name: ${this.authorName}, url: ${this.showImgUrl}`)
        this.showImgUrl = chat.DEFAULT_AVATAR_URL
      }
    }
  }
}
</script>

<style src="@/assets/css/youtube/yt-img-shadow.css"></style>
