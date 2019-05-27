<template>
    <keyboard-avoiding-view behavior="padding" class="container" enabled>
        <app-loading v-if="!isChatReady"></app-loading>
        <messages-list
            v-if="isChatReady"
            :messages="messages"
            :loadingUserMessage="loadingUserMessage"
            :loadingBotMessage="loadingBotMessage"
            :navigation="navigation"
        />
        <view v-if="isChatReady" class="keyboard">
            <scroll-view horizontal="true" class="quick-replies-container" keyboardShouldPersistTaps="always" showsHorizontalScrollIndicator="false">
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
                <font-awesome
                    :on-press="() => 
                        loadingUserMessage
                        ? null
                        : messageContent !== ''
                        ? submitMessage()
                        : null"
                    name="send"
                    :style="{marginLeft: 20, opacity: loadingUserMessage
                        ? 0.4
                        : messageContent !== ''
                        ? 1
                        : 0.4}"
                    :size=30
                    color="#7aca7c"
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
import { FontAwesome } from '@expo/vector-icons';
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
    props: {
        navigation: {
            type: Object
        },
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
    components: { KeyboardAvoidingView, ScrollView, AppLoading, FontAwesome, MessagesList, QuickReply }
}

</script>

<style>
.container {
    flex: 1; 
    padding-top: 60px;
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
