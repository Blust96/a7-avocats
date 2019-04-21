<template>
    <view class="container">
        <messages-list
            :messages="messages"
        />
        <text-input
            :style="{height: 40, borderColor: 'gray', borderWidth: 1}"
            v-model="text"
        />
    </view>
</template>

<script>

/*
Import
*/
// NodeJS

// Inner
import MessagesList from '../components/chat/MessagesList';
//

export default {
    components: { MessagesList },
    data: function() {
        return {
            text: '',
            messages: [
                { author: 'user', content: 'Ceci est un message' },
                { author: 'bot', content: 'Ceci est un deuxième message' },
                { author: 'user', content: 'Ceci est un troisème message' },
                { author: 'user', content: 'Ceci est un quatrième message' },
                { author: 'bot', content: 'Ceci est un cinquième message' },
            ]
        };
    }
}

</script>

<style>
.container {
    flex: 1;  
}
</style>
