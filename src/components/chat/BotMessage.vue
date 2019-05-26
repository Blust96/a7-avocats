<template>
    <bot-loading-message v-if="lastMessage && loadingBotMessage" />
    <bot-text-message v-else-if="message.type == 'quickReplies'" :lastMessage="lastMessage" :loadingBotMessage="loadingBotMessage">
        {{ message.content.title }}
    </bot-text-message>
    <bot-text-message v-else-if="message.type == 'text'" :lastMessage="lastMessage" :loadingBotMessage="loadingBotMessage">
        {{ message.content }}
    </bot-text-message>
    <bot-list-messages v-else-if="message.type == 'list'" :listMessages="message.content.elements" />
</template>

<script>

/*
Import
*/
// Inner
import BotLoadingMessage from './BotLoadingMessage';
import BotTextMessage from './BotTextMessage';
import BotListMessages from './BotListMessages';
//

export default {
    components: { BotTextMessage, BotLoadingMessage, BotListMessages },
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
