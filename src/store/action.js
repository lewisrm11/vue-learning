export default {
    /**
     * The handler function receives a context object that exposes the following properties:
     * {
     *  state,      // same as `store.state`, or local state if in modules
     *  rootState,  // same as `store.state`, only in modules
     *  commit,     // same as `store.commit`
     *  dispatch,   // same as `store.dispatch`
     *  getters,    // same as `store.getters`, or local getters if in modules
     *  rootGetters // same as `store.getters`, only in modules
     *  }
     *
     *  we can use destructuring array or object to unzip the passed values that we want
     *  {state, rootState, commit, dispatch, getters, rootGetters}
     *
     * @param commit
     * @param item or payload
     */

    addIAction({commit}, item) {
        commit('addIMutation', item)//send item or payload
    }
}
