export default {
    addIMutation: function (state, item) {
        state.items.push({...item});
    },
}
