<template>
    <keyboard-avoiding-view behavior="padding" class="container" keyboardVerticalOffset=70 enabled>
        <app-loading v-if="!isChatReady"></app-loading>
        <messages-list
            v-if="isChatReady"
            :messages="messages"
            :loadingUserMessage="loadingUserMessage"
            :loadingBotMessage="loadingBotMessage"
        />
        <view v-if="isChatReady" class="keyboard">
            <scroll-view horizontal="true" class="quick-replies-container" keyboardShouldPersistTaps="always">
                <quick-reply
                    v-for="(quickReply, index) in quickReplies"
                    :key="index"
                    :reply="quickReply"
                    :loadingUserMessage="loadingUserMessage"
                />
            </scroll-view>
            <view class="input-container">
                <text-input
                    class="input-message"
                    :style="{height: 40}"
                    placeholder="Quelle est votre question ?"
                    v-model="messageContent"
                />
                <button
                    class="input-button"
                    :on-press="() => submitMessage()"
                    title="Envoyer"
                />
            </view>
        </view>
    </keyboard-avoiding-view>
</template>

<script>

/*
Import
*/
// NodeJS
import { mapState, mapActions } from 'vuex';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
// Inner
import MessagesList from '../components/chat/MessagesList';
import QuickReply from '../components/chat/QuickReply';
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
        messages: state => state.chat.messages,
        quickReplies: state => state.chat.quickReplies,
        loadingUserMessage: state => state.chat.loadingUserMessage,
        loadingBotMessage: state => state.chat.loadingBotMessage,
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
    components: { KeyboardAvoidingView, ScrollView, AppLoading, MessagesList, QuickReply }
}

</script>

<style>
.container {
    flex: 1; 
    background-color: #ffffff;
}

.keyboard {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;    
    background-color: #ffffff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    shadowColor: #000000;
    shadowOpacity: 0.1;
    shadowRadius: 18;
}

.quick-replies-container {
    padding-top: 10px;
}

.input-container {
    flex-direction: row;
}

.input-message {
    width: 80%;
    padding-left: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-width: 1px;
    border-style: solid;
    border-bottom-color: #7aca7c;
}

.input-button {
    width: 20%
}
</style>
