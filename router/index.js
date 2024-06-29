import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Handle Movie',
        component: () => import('../src/views/Home.vue')
    },
    {
        path: '/add-movie',
        name: 'Add Movie',
        component: () => import('../src/views/AddMovie.vue')
    },
    {
        path: '/edit-movie/:id',
        name: 'Edit Movie',
        component: () => import('../src/views/EditMovie.vue')
    },
    {
        path: '/view-movie/:id',
        name: 'View Movie',
        component: () => import('../src/views/MovieDetails.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;