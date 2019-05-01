<template>
    <view class="bot-message-container">
        <text class="bot-message">{{content}}</text>
    </view>
</template>

<script>
export default {
    props: {
        content: {
            Type: String
        }
    }
}
</script>

<style>
    .bot-message-container {
        width: 80%;
        padding: 10px;
        /* background-color: rgba(23,166,56,0.7); */
        background-color: rgb(23,166,56);
        opacity: 0.7;
        border-top-left-radius: 5px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 20px;
        margin-bottom: 10px;
    }

    .bot-message {
        color: #FFFFFF;
        font-size: 16px
    }
</style>
