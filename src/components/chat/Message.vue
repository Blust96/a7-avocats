<template>
    <BotMessage 
        v-if="message.author == 'bot'"
        :content="message.content"
    />
    <UserMessage
        v-else
        :content="message.content"
    />
</template>

<script>

/*
Import
*/
// NodeJS

// Inner
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';
//

export default {
    components: { UserMessage, BotMessage },
    props: {
        message: {
            Type: Object
        }
    }
}
</script>

<style>

</style>