<template>
    <bot-text-message v-if="message.type == 'quickReplies'" :lastMessage="lastMessage" :loadingBotMessage="loadingBotMessage">
        {{ message.content.title }}
    </bot-text-message>
    <bot-text-message v-else-if="message.type == 'text'" :lastMessage="lastMessage" :loadingBotMessage="loadingBotMessage">
        {{ message.content }}
    </bot-text-message>
</template>

<script>

/*
Import
*/
// Inner
import BotTextMessage from './BotTextMessage';
//

export default {
    components: { BotTextMessage },
    props: {
        message: {
            Type: Object
        },
        lastMessage: {
            Type: Boolean
        },
        loadingBotMessage: {
            Type: Boolean
        },
    }
}
</script>

<style>

</style>
