<template>
    <keyboard-avoiding-view behavior="padding" class="container" keyboardVerticalOffset=70 enabled>
        <app-loading v-if="!isChatReady"></app-loading>
        <messages-list
            v-if="isChatReady"
            :messages="messages"
        />
        <view v-if="isChatReady">
            <text-input
                :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
                v-model="messageContent"
            />
            <button
                :on-press="() => submitMessage()"
                title="Envoyer"
            />
        </view>
    </keyboard-avoiding-view>
</template>

<script>

/*
Import
*/
// NodeJS
import { mapState, mapActions } from 'vuex';
import { KeyboardAvoidingView } from 'react-native';
import { AppLoading } from 'expo';
// Inner
import {  } from '../store/modules/types';
import MessagesList from '../components/chat/MessagesList';
//

export default {
    data: function() {
        return {
            messageContent: '',
        };
    },
    created: function() {
        this.loadConversationId();
    },
    computed: mapState({
        isChatReady: state => state.chat.isChatReady,
        messages: state => state.chat.messages
    }),
    methods: {
        submitMessage: function() {
            this.sendMessage(this.messageContent);
            this.messageContent = '';
        },
        ...mapActions('chat', [
            'loadConversationId',
            'sendMessage'
        ])
    },
    components: { KeyboardAvoidingView, AppLoading, MessagesList }
}

</script>

<style>
.container {
    flex: 1;  
}
</style>
