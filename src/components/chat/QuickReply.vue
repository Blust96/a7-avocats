<template>
    <touchable-opacity 
        class="reply-button"
        :on-press="() => submitReply(reply.value)" 
    >
        <text>{{ reply.title }}</text>
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
        }
    }
}
</script>

<style>
.reply-button {
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 5px;
    borderColor: #7aca7c;
    borderWidth: 2;
    borderRadius: 20;
    backgroundColor: #fff;
    color: #7aca7c;
}
</style>
