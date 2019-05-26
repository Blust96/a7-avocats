<template>
    <touchable-opacity 
        class="reply-button"
        :on-press="() => submitReply(reply.value)"
        :disabled="loadingUserMessage"
    >
        <text class="reply-button-text">{{ reply.title }}</text>
    </touchable-opacity>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    methods: {
        submitReply: function(replyValue) {
            this.sendMessage(replyValue);
        },
        ...mapActions('chat', [
            'sendMessage'
        ])
    },
    props: {
        reply: {
            type: Object
        },
        loadingUserMessage: {
            type: Boolean
        }
    }
}
</script>

<style>
.reply-button {
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 10px;
    borderRadius: 20;
    backgroundColor: #7aca7c;
}

.reply-button-text {
    color: #ffffff;
}
</style>
