<template>
  <el-dialog id="BliQRLoginModal" :visible.sync="dialogVisible" width="640px" :before-close="handleClose">
    <div class="main-header">
      <h1>bilibili扫码登录</h1>
    </div>
    <div class="main-body">
      <div v-if="qrData.url" id="qrImage" ref="qrImage" class="qr-box"></div>
      <div v-else class="qr-box">
        {{ subtext }}
        <i v-if="subtext === GETTING_CODE_TEXT" class="el-icon-loading"></i>
      </div>
      <div style="margin-top: 20px">如果二维码长时间没刷新出来</div>
      <div>大概是服务器ip被ban了</div>
      <div>等会儿大概会好</div>
      <div style="display: flex; align-items: center; justify-content: center; margin-top: 20px">
        <el-button :disabled="!qrData.url" type="primary" @click="checkLoginInfo">手机端已点击登录</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
const GETTING_CODE_TEXT = '正在获取二维码'
import QRCode from 'qrcodejs2'
import axios from 'axios'
export default {
  name: "BliQRLoginModal",
  data() {
    return {
      GETTING_CODE_TEXT,
      dialogVisible: false,
      qrData: {},
      imgUrl: null,
      resultToken: '',
      subtext: GETTING_CODE_TEXT,
      qrcode: null
    }
  },
  methods: {
    checkLoginInfo() {
      axios.post('http://http://39.105.155.193:9999/manager/bliveExtra/getLoginInfoByQrCode', {oauthKey: this.qrData.oauthKey}).then(res_ => {
        if (res_.status !== 200 || !res_.data.success) {
          // 扫码不成功
          if (res_.data.message === "-4") {
            this.$message.error('未使用app扫码登陆')
          } else if (res_.data.message === "-5") {
            this.$message.error('未在app上点击登陆')
          }
          return
        }
        // 处理登录用户信息
        let url = res_.data.data.url
        let p = url.split('?')[1]
        let params = new URLSearchParams(p)
        this.handleClose()
        this.$emit('setBiliUserInfo', {
          url: url,
          'refresh_token': res_.data.data.refresh_token,
          'timestamp': res_.data.data.timestamp,
          'DedeUserID': params.get('DedeUserID'),
          'DedeUserID__ckMd5': params.get('DedeUserID__ckMd5'),
          'Expires': params.get('Expires'),
          'SESSDATA': params.get('SESSDATA'),
          'bili_jct': params.get('bili_jct')
        })
      }).catch((e) => {
        console.log(e)
      })
    },
    handleShow() {
      this.dialogVisible = true
      this.$nextTick(() => {
        this.clearCache()
        // 获取二维码
        axios.get('http://39.105.155.193:9999/manager/bliveExtra/getLoginQrCode').then((res) => {
          this.qrData = res.data.data
          this.$nextTick(() => {
            this.qrcode = new QRCode(this.$refs.qrImage, {
              text: this.qrData.url, // 需要转换为二维码的内容
              width: 180,
              height: 180,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: QRCode.CorrectLevel.H
            })
          })
        }).catch(() => {
          this.subtext = '获取二维码失败'
        })
      })
    },
    handleClose() {
      this.dialogVisible = false
    },
    clearCache() {
      this.subtext = '正在获取二维码'
      this.imgUrl = null
      this.resultToken = ''
      this.qrData = {}

      if (this.$refs.qrImage) {
        this.$refs.qrImage.innerHTML = ''
      }
    }
  }
}
</script>

<style scoped>
#BliQRLoginModal .main-header {
  margin-bottom: 16px;
  color: #24292f;
  text-align: center;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}
#BliQRLoginModal .main-header > h1 {
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -0.5px;
}
#BliQRLoginModal .main-body {
  border-top: 1px solid hsla(210, 18%, 87%, 1);
  border-radius: 6px;
  padding: 16px;
  font-size: 14px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#BliQRLoginModal .main-body .qr-box {
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
