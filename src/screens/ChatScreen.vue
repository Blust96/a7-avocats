<template>
    <keyboard-avoiding-view behavior="padding" class="container" keyboardVerticalOffset=70 enabled>
        <messages-list
            :messages="messages"
        />
        <view>
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
    computed: mapState({
        messages: state => state.chat.messages
    }),
    methods: {
        submitMessage: function() {
            this.sendMessage(this.messageContent);
            this.messageContent = '';
        },
        ...mapActions('chat', [
            'sendMessage'
        ])
    },
    components: { KeyboardAvoidingView, MessagesList }
}

</script>

<style>
.container {
    flex: 1;  
}
</style>
