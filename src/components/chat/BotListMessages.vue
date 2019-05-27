<template>
    <scroll-view class="container" horizontal="true">
        <bot-list-message
            v-for="(listMessage, index) in listMessages"
            :key="index"
            :listMessage="listMessage"
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
import BotListMessage from './BotListMessage';
//

export default {
    components: { BotListMessage },
    props: {
        navigation: {
            type: Object
        },
        listMessages: {
            Type: Array
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