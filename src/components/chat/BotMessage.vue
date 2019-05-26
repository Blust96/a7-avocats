<template>
    <bot-loading-message v-if="lastMessage && loadingBotMessage" />
    <bot-text-message v-else-if="message.type == 'quickReplies'" :lastMessage="lastMessage" :loadingBotMessage="loadingBotMessage">
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
import BotLoadingMessage from './BotLoadingMessage';
import BotTextMessage from './BotTextMessage';
//

export default {
    components: { BotTextMessage, BotLoadingMessage },
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
