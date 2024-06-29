<script setup>
  import { useStore } from 'vuex';
  const store = useStore()
  store.dispatch('initializeAction')
</script>

<template>
  <div class="route-layout">
    <Notifications position="top left" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './assets/sass/main.scss';
#app {
  height: 100vh;
  overflow-y: hidden;
  background-color: $gray_color;
}
</style>
