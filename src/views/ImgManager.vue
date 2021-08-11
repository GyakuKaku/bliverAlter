<template>
  <div>
    <h3>图片替换文字</h3>
    <el-card shadow="never">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24">
          <el-input type="textarea" :rows="2" v-model="imgTransformer"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-button @click="saveImgTransformer">保存</el-button>
        <el-button @click="resetImgTransformer">重置</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
const DEFAULT_IMG_TRANSFORMER = '[{"from":"(真不是人)","target":"test1.jpg"},{"from":"(悠亚画画)","target":"test2.jpg"}]'

export default {
  name: 'ImgManager',
  data() {
    return {
      imgTransformer: this.loadImgTransformer()
    }
  },
  methods: {
    resetImgTransformer() {
      this.imgTransformer = DEFAULT_IMG_TRANSFORMER
      window.localStorage.imgTransformer = DEFAULT_IMG_TRANSFORMER
    },
    saveImgTransformer() {
      window.localStorage.imgTransformer = this.imgTransformer
    },
    loadImgTransformer() {
      if (window.localStorage.imgTransformer == null) {
        return DEFAULT_IMG_TRANSFORMER
      }
      try {
        return window.localStorage.imgTransformer
      } catch {
        return DEFAULT_IMG_TRANSFORMER
      }
    },
  }
}
</script>

<style scoped>
.img-container {
  text-align: center;
}

.img-container.large-img .el-image {
  height: 80vh;
}
</style>
