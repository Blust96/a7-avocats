<template>
    <view class="user-message-container">
        <text class="user-message">{{content}}</text>
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
    .user-message-container {
        width: 80%;
        padding: 10px;
        background-color: #6A6665;
        border-top-left-radius: 20px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 5px;
        margin-bottom: 10px;
        align-self: flex-end;
    }

    .user-message {
        color: #FFFFFF;
        font-size: 16px
    }
</style>
