<template>
  <div></div>
</template>

<script>
export default {
  name: "Reloader",
  props: {
    roomKeyType: {
      type: Number,
      default: 1
    },
    roomKeyValue: {
      type: [Number, String],
      default: null
    },
    strConfig: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {}
  },
  mounted() {
    let query = {...this.strConfig}
    const date = new Date()
    query.random = date.getMonth().toString() + date.getDate().toString()
    let resolved
    resolved = this.$router.resolve({ name: 'roomNeo', params: { roomKeyValue: this.roomKeyValue }, query })
    let url = `https://chats.my-glimmer.top${resolved.href}`

    this.tryLoad(url)
  },
  methods: {
    async tryLoad(targetUrl) {
      if (!await this.isUrlAvailable(targetUrl)) {
        window.setTimeout(this.tryLoad, 1000)
        return
      }
      window.location.href = targetUrl
    },
    async isUrlAvailable(url) {
      try {
        await fetch(url, {method: 'HEAD', mode: 'no-cors', cache: 'no-store'})
      } catch {
        return false
      }
      return true
    }
  }
}
</script>

<style scoped>

</style>
