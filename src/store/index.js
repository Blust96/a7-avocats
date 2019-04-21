/*
Import
*/
// NodeJS
import Vue from 'vue-native-core';
import Vuex from 'vuex';
// Inner
import chat from './modules/chat';
import folderTracking from './modules/folderTracking';
import news from './modules/news';
//

// Vue configuration
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        chat,
        folderTracking,
        news
    }
});