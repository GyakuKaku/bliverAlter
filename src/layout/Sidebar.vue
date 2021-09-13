<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      router
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="rgb(64, 158, 255)"
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>{{$t('sidebar.home')}}
      </el-menu-item>
      <el-menu-item :index="$router.resolve({name: 'imgManager'}).href">
        <i class="el-icon-refresh"></i>图片转换配置
      </el-menu-item>
      <el-menu-item :index="$router.resolve({name: 'stylegen', query: {
        imgTransformer: getUrl()
      }}).href">
        <i class="el-icon-brush"></i>{{$t('sidebar.stylegen')}}
      </el-menu-item>
      <el-menu-item :index="$router.resolve({name: 'help'}).href">
        <i class="el-icon-question"></i>{{$t('sidebar.help')}}
      </el-menu-item>
      <a href="https://github.com/xfgryujk/blivechat" target="_blank">
        <el-menu-item>
          <i class="el-icon-share"></i>{{$t('sidebar.projectAddress')}}
        </el-menu-item>
      </a>
      <a href="http://link.bilibili.com/ctool/vtuber" target="_blank">
        <el-menu-item>
          <i class="el-icon-link"></i>{{$t('sidebar.giftRecordOfficial')}}
        </el-menu-item>
      </a>
      <el-submenu index="null">
        <template slot="title">
          <i class="el-icon-chat-line-square"></i>Language
        </template>
        <el-menu-item v-for="{locale, name} in [
            {locale: 'zh', name: '中文'},
            {locale: 'ja', name: '日本語'},
            {locale: 'en', name: 'English'}
          ]" :key="locale"
          @click="onSelectLanguage(locale)"
        >{{name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    onSelectLanguage(locale) {
      window.localStorage.lang = this.$i18n.locale = locale
    },
    getUrl() {
      return window.localStorage.imgTransformerV2 == null ? '[{"from":"轴伊的肯定","target":"joiYES.jpg"},{"from":"轴伊的否定","target":"joiNO.jpg"},{"from":"傲娇","target":"aojiao.jpg"},{"from":"真不是人","target":"zbsr.png"}]' : window.localStorage.imgTransformerV2
    }
  }
}
</script>

<style>
.el-scrollbar {
  height: 100%;
}

.scrollbar-wrapper {
  overflow-x: hidden !important;
}

.scrollbar-wrapper .el-menu {
  border: none;
}
</style>
