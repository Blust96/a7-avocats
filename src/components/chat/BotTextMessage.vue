<template>
    <view class="bot-message-container">
        <text class="bot-message-text">
            <slot></slot>
        </text>
    </view>
</template>

<script>
export default {
    
}
</script>

<style>
    .bot-message-container {
        width: 85%;
        padding: 10px;
        /* background-color: rgba(23,166,56,0.7); */
        background-color: #ffffff;
        opacity: 0.7;
        border-top-left-radius: 5px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        margin-bottom: 10px;
        shadowColor: #000000;
        shadowOpacity: 0.1;
        shadowRadius: 18;
    }

    .bot-message-text {
        color: #6A696E;
        font-size: 16px
    }
</style>
