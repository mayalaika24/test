import { createStore } from "vuex";


const store = createStore({
    state() {
        return {
            count: 0,
            movies: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [],
            movie: null,
            pageTitle: ''
        };
    },
    mutations: {
        addMovie(state, item) {
            state.movies.push(item);
            localStorage.setItem('movies', JSON.stringify(state.movies));
          },
        editMovie(state, { index, item }) {
            state.movies[index] = item;
            localStorage.setItem('movies', JSON.stringify(state.movies));
          },
        initializeMovies(state) {
            const movies = localStorage.getItem('movies');
            state.movies = movies ? JSON.parse(movies) : [];
        },
        getMovie(state, index) {
            const movie = state.movies.find((item, i) => {
                return i === Number(index)
            })
            state.movie = movie
        },
        setPageTitle (state, value) {
            state.pageTitle = value
        },
        deleteMovie (state, index ) {
            state.movies.splice(index, 1)
            localStorage.setItem('movies', JSON.stringify(state.movies));
        }
    },
    actions: {
        initializeAction ({ commit }) {
            commit('initializeMovies')
        },
        addMovieAction({ commit }, item) {
          commit('addMovie', item);
        },
        editMovieAction({ commit }, { index, item }) {
            commit('editMovie', { index, item })
        },
        getMovieAction ({ commit }, index ) {
            commit('getMovie', index)
        },
        setPageTitleAction ({ commit }, value ) {
            commit('setPageTitle', value)
        },
        deleteMovieAction ({ commit }, index ) {
            commit('deleteMovie', index)
        }
      },
    getters: {
        getCount: state => {
            return state.count;
        }
    }
});

export default store;