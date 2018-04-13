import Vue from 'vue';
import Vuex from 'vuex';

// 导入的store
import MenuStore from './menu';
import HeadStore from './head';

Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        MenuStore,
        HeadStore
    }
})