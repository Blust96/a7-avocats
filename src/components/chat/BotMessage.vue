<template>
    <bot-text-message v-if="message.type == 'quickReplies'">
        {{ message.content.title }}
    </bot-text-message>
    <bot-text-message v-else-if="message.type == 'text'">
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
        }
    }
}
</script>

<style>

</style>
