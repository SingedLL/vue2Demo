<template>
  <div id="app">
    <Loading :show="loading" :txt="loadingTxt"/>
    <router-view></router-view>
    <GlobalTabBar/>
  </div>
</template>
<script>
import EventBus from '@/utils/eventbus'
import Loading from '@/components/Loading'
import GlobalTabBar from '@/components/nav/GlobalTabBar'

export default {
  name: 'App',
  components: {
    Loading,
    GlobalTabBar
  },
  data: () => ({
    loading: false,
    loadingTxt: 'Loading...'
  }),
  async mounted () {
    EventBus.$on('showloading', ({ show, loadingTxt = 'Loading...' }) => {
      console.log('L__isLoading', show)
      this.loading = show
      this.loadingTxt = loadingTxt
    })
    EventBus.$on('apiRequestError', (msg = '请求失败') => {
      window.vant.Toast.fail(msg)
    })
    EventBus.$on('tokenInvalid', () => {
      this.$store.dispatch('userLogout')
      this.$router.replace({ name: 'Login' })
    })
  }
}
</script>

<style lang="scss">
