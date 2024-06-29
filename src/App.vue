<script setup>
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  const store = useStore()
  const router = useRouter()
  store.dispatch('initializeAction')
</script>

<template>
  <div class="route-layout">
    <Notifications position="top left" />
    <div class="page">
      <div class="d-flex align-items-center gap-2">
        <img @click="router.go(-1)" class="pointer" src="./assets/icons/back-arrow.svg" />
        <h1 class="page-title">{{ store.state.pageTitle }}</h1>
      </div>
    </div>
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
