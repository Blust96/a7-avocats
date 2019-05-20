/*
Import
*/
// Actions
import { } from './types';
// Services
const { sendBotRequest } = require('../../services/chatbot');
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
        { author: 'bot', content: 'Ceci est un cinquième message qui est beauoup plus long que les autres pour voir comment se comporte le texte afin de pouvoir gérer leur affichage' },
        { author: 'user', content: 'Mais oui c\'est clair ! Lorsqu\'on parle de tout ces points de vues, c\'est l\'activisme vers ce qu\'on appelle la dynamique des sports, c\'est à dire mettre un accent sur les revenus aussi à voir hein, c\'est un problème de TGO, théorie générale des organisations...'}
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