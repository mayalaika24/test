<template>
    <div class="page-layout">
        <h1 class="page-title">{{ store.state.pageTitle }}</h1>
        <div class="content-container">
            <div class="movie-details">
                <span class="element-title">Title: </span>
                <span class="element-desc">{{ item.title }}</span>
            </div>
            <div class="movie-details">
                <span class="element-title">Description: </span>
                <span class="element-desc">{{ item.description }}</span>
            </div>
            <div class="movie-details">
                <span class="element-title">Year: </span>
                <span class="element-desc">{{ item.year }}</span>
            </div>
            <div v-if="item.actors.length > 0" class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Join Date</td>
                            <td>Role</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(actor, i) in movie.actors">
                            <td>{{ actor.name }}</td>
                            <td>{{ actor.age }}</td>
                            <td>{{ actor.date }}</td>
                            <td>{{ actor.role }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'
const router = useRouter()
const store = useStore()
store.dispatch('setPageTitleAction', 'Movie Details')
const params = router.currentRoute.value.params.id
const item = store.state.movies.find((item, i) => {
                return i === Number(params)
            })
const movie = ref(item)
console.log(params)
</script>