<template>
    <BotMessage 
        v-if="message.author == 'bot'"
        :message="message"
    />
    <UserMessage
        v-else
        :message="message"
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