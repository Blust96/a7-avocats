<template>
    <view class="container">
        <web-view
            :source="{uri: navigation.getParam('listMessageValue')}"
        />
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        },
    }
}
</script>

<style>
.container {
    flex: 1;
}
</style>
