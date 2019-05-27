<template>
    <view class="bot-message">
        <view class="bot-icon-container">
            <image
                :style="{width: 30, height: 30}"
                :source="require('./../../../assets/bot-green.png')"
            />
        </view>
        <bot-loading-message v-if="lastMessage && loadingBotMessage" />
        <bot-text-message v-else-if="message.type == 'quickReplies'" :lastMessage="lastMessage" :loadingBotMessage="loadingBotMessage">
            {{ message.content.title }}
        </bot-text-message>
        <bot-text-message v-else-if="message.type == 'text'" :lastMessage="lastMessage" :loadingBotMessage="loadingBotMessage">
            {{ message.content }}
        </bot-text-message>
        <bot-list-messages v-else-if="message.type == 'list'" :listMessages="message.content.elements" :navigation="navigation" :style="{zIndex: -1}" />
    </view>
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
        navigation: {
            type: Object
        },
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
    .bot-message {
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .bot-icon-container {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 15px;
        background-color: #7aca7c;
    }
</style>
