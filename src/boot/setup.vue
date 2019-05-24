<template>
    <view class="container">
        <app-loading v-if="!isAppReady"></app-loading>
        <app v-if="isAppReady"></app>
    </view>
</template>

<script>
/*
Import
*/
// NodeJS
import Vue from 'vue-native-core';
import { VueNativeBase } from 'native-base';
import { AppLoading } from 'expo';
// Inner
import App from '../App.vue';
//

// Vue configuration
Vue.use(VueNativeBase);

export default {
    components: { App, AppLoading },
    data: function() {
        return {
            isAppReady: false
        };
    },
    created: function() {
        this.loadFonts();
    },
    methods: {
        loadFonts: async function() {
            try {
                this.isAppReady = false;
                await Expo.Font.loadAsync({
                    Roboto: require("native-base/Fonts/Roboto.ttf"),
                    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
                    Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
                });
                this.isAppReady = true;
            } catch (error) {
                console.log("Error occured on setup", error);
                this.isAppReady = true;
            }
        }
    }
};
</script>

<style>
.container {
    flex: 1;
}
</style>