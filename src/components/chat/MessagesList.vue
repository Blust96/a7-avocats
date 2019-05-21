<template>
    <scroll-view class="container">
        <message
            v-for="message in messages"
            :key="message.message"
            :message="message"
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
        messages: {
            Type: Array
        }
    }
}

</script>

<style>
.container {
    flex: 1;
    padding: 10px;
}
</style>