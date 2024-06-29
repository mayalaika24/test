<template>
  <div class="page-layout">
    <div class="flex-center-between page-header">
      <h1 class="page-title">{{ store.state.pageTitle }}</h1>
      <div class="filter-container position-relative">
        <img class="input-icon search-icon" src="../assets/icons/search.svg" />
        <input placeholder="search by title, year or number of actors..." class="filter-input" type="text" v-model="search" @keyup.enter="filterData" />
        <img @click="handleClear" class="input-icon close-icon pointer" src="../assets/icons/close.svg" />
      </div> 
    </div>
    <button @click="router.push('/add-movie')" class="button flex-center-between mb-3">
      <span>Add</span>
      <img src="../assets/icons/add.svg" />
    </button>
   <div class="cards-container d-flex align-items-center">
      <MovieCard v-for="(movie, i) in filteredData" :movie="movie" @handle-delete="handleDelete" :index="i"/>
   </div>
  </div>
</template>

<script setup>
import MovieCard from '../components/cards/MovieCard.vue';
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useNotification } from "@kyvg/vue3-notification";
const notification = useNotification()
const store = useStore();
const router = useRouter()
const search = ref('');
const movies = computed(() => store.state.movies);
const filteredData = ref([...movies.value]);
store.dispatch('setPageTitleAction', 'Movies List')

const handleClear = () => {
  filteredData.value = [...movies.value]
  search.value = ''
 }

const filterData = () => {
 filteredData.value = movies.value.filter(item => {
   return (
     item.title.toLowerCase().includes(search.value) ||
     Number(item.year) === Number(search.value) ||
     item.actors.length === Number(search.value)
   );
 });
}
const handleDelete = (val) => {
  store.dispatch('deleteMovieAction', val)
  movies.value = [...store.state.movies]
  handleClear()
  notification.notify({
      title: "Movie Deleted Successfully",
      type: 'success'
    });
}
</script>
<style scoped>
.cards-container {
  flex-wrap: wrap;
  gap: 3rem;
}
.filter-container {
  width: 325px;
  text-align: center;
}
.filter-input {
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 0 2.25rem;
  font-size: 14px !important;
}
.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.search-icon {
  left: 10px;
}
.close-icon {
  right: 10px;
}
</style>