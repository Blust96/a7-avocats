/*
Import
*/
// Actions
import { } from './types';
//

/*
State
*/
const state = {
    messages: [
        { author: 'user', content: 'Ceci est un message' },
        { author: 'bot', content: 'Ceci est un deuxième message' },
        { author: 'user', content: 'Ceci est un troisème message' },
        { author: 'user', content: 'Ceci est un quatrième message' },
        { author: 'bot', content: 'Ceci est un cinquième message' },
    ]
}
//

/*
Getters
*/
const getters = {

}
//

/*
Actions
*/
const actions = {
    sendMessage ({ commit }, content) {
        commit('setMessage', { author: 'user', content: content });
    }
}
//

/*
Mutations
*/
const mutations = {
    setMessage (state, { author, content }) {
        state.messages.push({
            author,
            content
        });
    }
}
//

/*
Export
*/
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
//