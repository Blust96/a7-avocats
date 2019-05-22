<template>
    <button 
        :on-press="() => submitReply(reply.value)" 
        :title="reply.title"
    />
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

</style>
