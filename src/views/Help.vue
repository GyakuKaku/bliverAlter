<template>
  <div>
    <p>使用同本地启动版基本一致，只要把房间URL复制进obs即可，无需打开网页。</p>
    <p>从B站直播间网页复制房间ID，把房间ID输入到首页的房间ID，复制房间URL</p>
    <p class="img-container"><el-image fit="scale-down" src="/static/img/tutorial/help1.png"></el-image></p>
    <p>使用样式生成器生成样式css代码</p>
    <p class="img-container"><el-image fit="scale-down" src="/static/img/tutorial/help2.png"></el-image></p>
    <p>复制CSS，如果之前在本地启动版配过无需重配。</p>
    <p class="img-container"><el-image fit="scale-down" src="/static/img/tutorial/help3.png"></el-image></p>
  </div>
</template>

<script>
export default {
  name: 'Help'
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
