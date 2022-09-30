<template>
  <div id="main">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default({
  components: {
    Header,
  },
});
</script>

<style lang="scss">
</style>
