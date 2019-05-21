/*
Import
*/
// NodeJS
import { AsyncStorage } from 'react-native';
// Actions
import { } from './types';
// Services
const { generateConversationId, sendBotRequest } = require('../../services/chatbot');
//

/*
State
*/
const state = {
    isChatReady: false,
    loadingUserMessage: false,
    loadingBotMessage: false,
    conversationId: null,
    errorMessage: '',
    messages: []
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
    // Loading conversation id from async storage => Creating if doesn't exist
    async loadConversationId ({ commit, dispatch }) {
        try {
            // Set isChatReady to false for loading render
            commit('setConversationId');
            // Waiting for AsyncStorage result
            const conversationId = await AsyncStorage.getItem('conversationId');
            // If conversationId exists
            if (conversationId !== null) {
                // State update by commit setConversationIdSuccess mutation
                commit('setConversationIdSuccess', { conversationId });
            } else { // If conversationId doesn't exist
                // Dispatch creationConversationId action to create id
                dispatch('createConversationId');
            }
        } catch (error) { // If error occurs
            console.log("Error occured on getting conversationId", error);
            commit('setConversationIdError', { errorMessage: "Message d'erreur" });
        }
    },
    // Conversation id creation and storing in async storage
    async createConversationId ({ commit }) {
        try {
            const conversationId = generateConversationId(10);
            await AsyncStorage.setItem('conversationId', conversationId);
            commit('setConversationIdSuccess', { conversationId });
        } catch (error) {
            console.log("Error occured on creating conversationId", error);
            commit('setConversationIdError', { errorMessage: "Message d'erreur" });
        }
    },
    // Sending message to bot
    async sendMessage ({ state, commit }, message) {
        try {
            commit('setMessage');
            const botMessage = await sendBotRequest(message, state.conversationId, 'fr');
            commit('setUserMessageSuccess', { message });
            commit('setBotMessageSuccess', { botMessage });
        } catch (error) {
            console.log("Error occured on sending message", error);
            commit('setMessageError', { errorMessage: "Message d'erreur" });
        }
    }
}
//

/*
Mutations
*/
const mutations = {
    // Conversation ID mutations
    setConversationId (state) {
        state.isChatReady = false;
    },
    setConversationIdSuccess (state, { conversationId }) {
        state.conversationId = conversationId;
        state.isChatReady = true;
        state.errorMessage = '';
    },
    setConversationIdError (state, { errorMessage }) {
        state.isChatReady = true;
        state.errorMessage = errorMessage;
    },
    // Message mutations
    setMessage (state) {
        state.loadingUserMessage = true;
        state.loadingBotMessage = true;
    },
    setUserMessageSuccess (state, { message }) {
        state.messages.push({
            author: 'user',
            content: message
        });
        state.loadingUserMessage = false;
        state.errorMessage = '';
    },
    setBotMessageSuccess (state, { botMessage }) {
        state.messages.push({
            author: 'bot',
            content: botMessage.content.title
        });
        state.loadingBotMessage = false;
        state.errorMessage = '';
    },
    setMessageError (state, { errorMessage }) {
        state.loadingUserMessage = false;
        state.loadingBotMessage = false;
        state.errorMessage = errorMessage;
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