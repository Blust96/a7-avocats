<template>
    <scroll-view class="container">
        <message
            v-for="(messageItem, index) in messages"
            :key="index"
            :messageItem="messageItem"
            :loadingUserMessage="loadingUserMessage"
            :loadingBotMessage="loadingBotMessage"
            :lastMessage="index + 1 === messages.length"
            :navigation="navigation"
        />
    </scroll-view>
</template>

<script>

/*
Import
*/
// NodeJS

// Inner
import Message from './Message';
//

export default {
    components: { Message },
    props: {
        navigation: {
            type: Object
        },
        messages: {
            Type: Array
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
.container {
    flex: 1;
    padding: 10px;
}
</style>