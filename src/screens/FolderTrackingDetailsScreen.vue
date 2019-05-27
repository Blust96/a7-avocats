<template>
    <view class="container">
        <text>{{ navigation.getParam('folderNumber') }}</text>
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        }
    }
}
</script>

<style>
.container {
    flex: 1;
    padding-top: 60px;
}
</style>
