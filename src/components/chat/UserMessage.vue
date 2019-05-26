<template>
    <view class="user-message-container">
        <view class="loading-container" v-if="loadingUserMessage && lastMessage">
            <animated:view
                class="animated-view-style"
                :style="{
                    transform: [{rotate: spin}]
                }"
            />
        </view>
        <text class="user-message">{{content}}</text>
    </view>
</template>

<script>
import { Animated, Easing } from "react-native";

export default {
    data: function() {
        return {
            spinValue: 0,
            spin: "0deg",
            animatedValueRotate: 0,
            duration: 2000
        };
    },
    created: function() {
        this.spinValue = new Animated.Value(0);
        this.animatedValueRotate = new Animated.Value(0);
    },
    mounted: function(){
        this.animationRotate()
    },    
    methods: {
        animationRotate: function() {
            this.spinValue.setValue(0);
            this.animatedValueRotate.setValue(0);

            Animated
                .sequence([
                Animated.parallel([
                    Animated.timing(this.spinValue, {
                    toValue: 1,
                    duration: this.duration,
                    easing: Easing.linear
                    }),
                    Animated.timing(this.animatedValueRotate, {
                    toValue: 1,
                    duration: this.duration,
                    easing: Easing.linear
                    })
                ]),
                Animated.parallel([
                    Animated.timing(this.spinValue, {
                    toValue: 0,
                    duration: this.duration,
                    easing: Easing.linear
                    }),
                    Animated.timing(this.animatedValueRotate, {
                    toValue: 0,
                    duration: this.duration,
                    easing: Easing.linear
                    })
                ])
            ])
            .start(event => {
                if (event.finished) {
                    this.animationRotate();
                }
            });
            this.spin = this.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ["0deg", "360deg"]
            });
        }
    },
    props: {
        content: {
            Type: String
        },
        lastMessage: {
            Type: Boolean
        },
        loadingUserMessage: {
            Type: Boolean
        },
    }
}
</script>

<style>
    .user-message-container {
        width: 80%;
        padding: 10px;
        background-color: #7aca7c;
        border-top-left-radius: 20px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        margin-bottom: 10px;
        flex-direction: row;
        align-self: flex-end;
        align-items: center;
        shadowColor: #000000;
        shadowOpacity: 0.1;
        shadowRadius: 18;
    }

    .loading-container{
        flex-direction:row;
        justify-content:flex-start;
        align-items:flex-end;
        height: 20;
    }

    .animated-view-style{
        width: 20;
        height: 20;
        margin-right: 5px;
        border-radius: 20;
        border-width: 1px;
        border-color: #ffffff;
        border-style: dashed;
    }

    .user-message {
        color: #FFFFFF;
        font-size: 16px
    }
</style>
