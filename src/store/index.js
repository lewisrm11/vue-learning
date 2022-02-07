import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state:      {
        items: [
            {
                id:          1,
                descripcion: "Some representative placeholder content, with some information about this user. Imagine this being some sort of status update, perhaps?",
                user:        "@user1"
            },
            {
                id:          2,
                descripcion: "Some more representative placeholder content, related to this other user. Another status update, perhaps.",
                user:        "@user2"
            },
            {
                id:          3,
                descripcion: "This user also gets some representative placeholder content. Maybe they did something interesting, and you really want to highlight this in the recent updates.",
                user:        "@user3"
            }
        ]
    },
    actions,
    mutations
})
