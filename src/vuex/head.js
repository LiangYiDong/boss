export default {
    state: {
        isClose: false
    },
    mutations: {
        toggleMenu(state) {
            if (!state.isClose) {
                state.isClose = true;
            }else{
                state.isClose = false;
            }
        }
    },
    actions: {
        toggleMenu({commit}){
            commit("toggleMenu");
        }
    }
}