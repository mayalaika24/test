<template>
      <div class="page-layout">
        <h1 class="page-title">{{ store.state.pageTitle }}</h1>
        <div class="content-container">
            <MovieForm @handle-submit="handleEditMovie" :movie="movie" />
        </div>
      </div>
</template>
  
<script setup>
  import MovieForm from '../components/forms/MovieForm.vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { computed, ref } from 'vue';
  import { useNotification } from "@kyvg/vue3-notification";

const notification = useNotification()
  const router = useRouter();
  const store = useStore()
  store.dispatch('setPageTitleAction', 'Edit Movie')
  const params = Number(router.currentRoute.value.params.id)
  const movies =  computed(() => store.state.movies);
  const movie = movies.value.find((item, i) => {
    return i === params
  })
  const handleEditMovie = (val) => {
    store.dispatch('editMovieAction', { index: Number(params) , item: val } )
    notification.notify({
      title: "Movie Edited Successfully",
      type: 'success'
    });
    router.push('/')
  }
</script>
  