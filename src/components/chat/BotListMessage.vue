<template>
    <touchable-opacity 
        class="listMessage-button"
        :on-press="() => submitAppointment(listMessage.buttons[0].value)"
    >
        <text class="listMessage-button-text">{{ listMessage.title }}</text>
        <text class="listMessage-button-text">{{ listMessage.subtitle }}</text>
    </touchable-opacity>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    methods: {
        submitAppointment: function(listMessageValue) {
            alert(listMessageValue);
        },
        ...mapActions('chat', [
            'sendMessage'
        ])
    },
    props: {
        listMessage: {
            type: Object
        }
    }
}
</script>

<style>
.listMessage-button {
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 10px;
    borderColor: #7aca7c;
    borderWidth: 1;
    borderRadius: 20;
    backgroundColor: #fff;
}

.listMessage-button-text {
    color: #7aca7c;
}
</style>
