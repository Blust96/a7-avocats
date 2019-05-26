<template>
    <bot-message 
        v-if="messageItem.author == 'bot'"
        :message="messageItem.message"
        :lastMessage="lastMessage"
        :loadingBotMessage="loadingBotMessage"
    />
    <user-message
        v-else
        :content="messageItem.message.content"
        :lastMessage="lastMessage"
        :loadingUserMessage="loadingUserMessage"
    />
</template>

<script>

/*
Import
*/
// Inner
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
//

export default {
    components: { UserMessage, BotMessage },
    props: {
        messageItem: {
            Type: Object
        },
        lastMessage: {
            Type: Boolean
        },
        loadingUserMessage: {
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