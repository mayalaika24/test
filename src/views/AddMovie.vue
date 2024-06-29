<template>
    <div class="page-layout">
        <h1 class="page-title">{{ store.state.pageTitle }}</h1>
        <div class="content-container">
            <MovieForm @handle-submit="handleAddMovie" />
        </div>
    </div>
</template>
  
<script setup>
  import MovieForm from '../components/forms/MovieForm.vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { useNotification } from "@kyvg/vue3-notification";

const notification = useNotification()
  const router = useRouter();
  const store = useStore()
  store.dispatch('setPageTitleAction', 'Add Movie')
  const handleAddMovie = (val) => {
    store.dispatch('addMovieAction', val)
    notification.notify({
      title: "Movie Added Successfully",
      type: 'success'
    });
    router.push('/')
  }
</script>
  