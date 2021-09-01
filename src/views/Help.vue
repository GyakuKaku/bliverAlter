<template>
  <div>
    <h1>{{$t('help.help')}}</h1>
    <p>{{$t('help.p1')}}</p>
    <p class="img-container"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-1.png"></el-image></p>
    <p>{{$t('help.p2')}}</p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-2.png"></el-image></p>
    <p>{{$t('help.p3')}}</p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-3.png"></el-image></p>
    <p>{{$t('help.p4')}}</p>
    <p class="img-container"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-4.png"></el-image></p>
    <p>{{$t('help.p5')}}</p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-5.png"></el-image></p>
    <p><br><br><br><br><br><br><br><br>--------------------------------------------------------------------------------------------------------</p>
    <p>喜欢的话可以推荐给别人，专栏求支持_(:з」∠)_  <a href="https://www.bilibili.com/read/cv4594365" target="_blank">https://www.bilibili.com/read/cv4594365</a></p>
    <p><br><br><br><br><br><br><br><br>--------------------------------------------------------------------------------------------------------</p>
    <p>上面是原作者写的 请多加支持原作者 下面是我加的图片替换相关说明_(:з」∠)_ </p>
    <p>点击blivechat.exe启动后，这个黑窗口不要关掉</p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-9.png"></el-image></p>
    <p>要用的表情包放下面这个文件夹里，尽量别太大</p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-6.png"></el-image></p>
    <p>在这个页面配一下，填写要被替换的弹幕文字和图片文件名，注意图片要带后缀，保存要是成功了应该能显示图片预览。</p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-7.png"></el-image></p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-8.png"></el-image></p>
    <p>改完图片配置后要重新复制一下房间url。</p>
    <p class="img-container large-img"><el-image fit="scale-down" src="/static/img/tutorial/tutorial-10.png"></el-image></p>
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
