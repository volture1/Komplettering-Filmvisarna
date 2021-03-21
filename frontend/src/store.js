import { createStore } from 'vuex'

const state = {
    movie: [],
    allViewings: []
}

const mutations = {
    updateViewing(state, viewing) {
        let tempViewing = state.allViewings.filter((v) => v.id == viewing.id)[0]
        tempViewing.seat_amount = viewing.seat_amount

        console.log('store viewing', state.allViewings.filter((v) => v.id == viewing.id)[0]) // Test!

    },
    setMovies(state, movies) {
        state.movie = movies
    },
    setViewings(state, list) {
        state.allViewings = list
    },
}

const actions = {
    async fetchAllMovies(store) {
        let response = await fetch('/rest/movie')
        let movies = await response.json()
        console.log(movies);

        store.commit('setMovies', movies)
    },
    async fetchViewings(store) {
        let list = await fetch('/rest/viewings')
        list = await list.json()
        console.log(list)
        store.commit('setViewings', list)
    },
    async updateViewing(store, viewing) {
        let res = await fetch("/rest/viewings/" + viewing.id,
            {
                method: "PUT",
                body: JSON.stringify(viewing)
            })
        if (res.ok) {
            store.commit('updateViewing', viewing)
        }
    }

}

export default createStore({ state, mutations, actions })