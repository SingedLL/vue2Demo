<template>
  <div>
     <header-tab/>
     <router-view></router-view>
  </div>
</template>

<script>
import HeaderTab from '@/components/nav/HeaderTab'
export default {
  components: {
    HeaderTab
  }
}
</script>
