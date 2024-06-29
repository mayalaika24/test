<template>
    <div  class="card">
        <div class="flex-center-between w-100">
            <h1 class="movie-title mb-0">{{ movie.title }}</h1>
            <img @click="emits('handle-delete', index)" class="pointer" src="../../assets/icons/delete.svg" />
        </div>
        <div class="movie-details">
            <span class="element-title">Year: </span>
            <span class="element-desc">{{  movie.year  }}</span>
        </div>
        <div class="movie-details">
            <span class="element-title">Number Of Actors: </span>
            <span class="element-desc">{{  movie.actors.length  }}</span>
        </div>
        <div class="buttons-container">
            <button class="button flex-center-between" @click="router.push(`view-movie/${index}`)">
                <span>View</span>
                <img src="../../assets/icons/view.svg" />
            </button>
            <button class="button flex-center-between" @click="router.push(`edit-movie/${index}`)">
                <span>Edit</span>
                <img src="../../assets/icons/edit.svg" />
            </button>
        </div>
    </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
const emits = defineEmits(['handle-delete'])
const props = defineProps({
  movie: {
    type: Object,
    default: {
        title: '',
        year: 0,
        numbersOfActors: 0
    }
  },
  index: {
    type: Number
  }
});
const router = useRouter()
</script>
<style scoped lang="scss">
@import '../../assets/sass/main.scss';
    .card {
        width: 300px;
        height: 250px;
        border-radius: 10px;
        background: #FFF;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        border: none;
    }
    .movie-title {
        color: #383838;
        font-family: $font_semi_bold;
        font-size: 16px;
    }
    .delete-icon {
        position: absolute;
        right: 1rem;
        top: 10px;
    }
    .buttons-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }
</style>