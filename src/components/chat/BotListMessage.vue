<template>
    <touchable-opacity 
        class="listMessage-button"
        :on-press="() => submitAppointment(listMessage.buttons[0].value)"
    >
        <view class="listMessage-icon-container">
            <material-icons
                name="call"
                :size=30
                color="#ffffff"
            />
        </view>
        <text class="listMessage-button-title">{{ listMessage.title }}</text>
        <text class="listMessage-button-text">{{ listMessage.subtitle }}</text>
    </touchable-opacity>
</template>

<script>

import { mapActions } from 'vuex';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';

export default {
    methods: {
        submitAppointment: function(listMessageValue) {
            this.navigation.navigate('Appointment', { listMessageValue })
        },
    },
    props: {
        navigation: {
            type: Object
        },
        listMessage: {
            type: Object
        }
    },
    components: { FontAwesome, MaterialIcons, Entypo }
}
</script>

<style>
.listMessage-button {
    width: 200px;
    margin-left: 10px;
    margin-bottom: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    backgroundColor: #fff;
    shadowColor: #000000;
    shadowOpacity: 0.1;
    shadowRadius: 18;
}

.listMessage-icon-container {
    backgroundColor: #7aca7c;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-top-left-radius: 5px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 20px;
}

.listMessage-button-title {
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    margin-bottom: 8px;
    color: #7aca7c;
    font-weight: 700;
    text-align: center;
}

.listMessage-button-text {
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    color: #6A696E;
    text-align: center;
}
</style>
