<template>
  <div>
    <h3>图片替换文字</h3>
    <el-card shadow="never">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24">
          <el-input type="textarea" :rows="12" v-model="imgTransformer"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 8px;">
        <el-col :xs="24" :sm="24">
          <el-button @click="saveImgTransformer">保存</el-button>
          <el-button @click="resetImgTransformer">重置</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="margin-top: 8px;">
        <el-col :xs="24" :sm="24">
          以下文字会被替换为对应图片:
        </el-col>
        <el-col :key="trans.from" v-for="trans in transformList" :xs="6" :sm="6" style="margin-top: 3px;">
          <p>{{ trans.from }}</p>
          <img :src="`/static/img/memes/${trans.target}`" style="height: 64px;" alt="">
        </el-col>
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
      imgTransformer: this.loadImgTransformer(),
      transformList: []
    }
  },
  mounted() {
    this.getTransformList()
  },
  methods: {
    getTransformList() {
      const list = []
      try {
        const transformerStr = window.localStorage.imgTransformer == null ? DEFAULT_IMG_TRANSFORMER : window.localStorage.imgTransformer
        const transformer = JSON.parse(transformerStr)
        transformer.forEach(target => {
          list.push(target)
        })
      } catch (e) {
        return []
      }
      this.transformList = Object.assign([], list)
    },
    resetImgTransformer() {
      this.imgTransformer = JSON.stringify(JSON.parse(DEFAULT_IMG_TRANSFORMER), null, " ")
      window.localStorage.imgTransformer = DEFAULT_IMG_TRANSFORMER
      location.reload()
    },
    saveImgTransformer() {
      window.localStorage.imgTransformer = this.imgTransformer
      location.reload()
    },
    loadImgTransformer() {
      if (window.localStorage.imgTransformer == null) {
        return JSON.stringify(JSON.parse(DEFAULT_IMG_TRANSFORMER), null, " ")
      }
      try {
        return JSON.stringify(JSON.parse(window.localStorage.imgTransformer), null, " ")
      } catch {
        return JSON.stringify(JSON.parse(DEFAULT_IMG_TRANSFORMER), null, " ")
      }
    },
  }
}
</script>

<style scoped>
.img-container {
  text-align: center;
}
</style>
