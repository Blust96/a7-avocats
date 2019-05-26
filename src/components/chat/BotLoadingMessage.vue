<template>
    <view class="bot-message-container">
        <view class="loading-container">
            <animated:view
                class="animated-view-style"
                :style="{
                    marginBottom: movingMargin1,
                    opacity: 0.5
                }"
            />
            <animated:view
                class="animated-view-style"
                :style="{
                    marginBottom: movingMargin2,
                    opacity: 0.6
                }"
            />
            <animated:view
                class="animated-view-style"
                :style="{
                    marginBottom: movingMargin3,
                    opacity: 0.7
                }"
            />
        </view>
    </view>
</template>

<script>
import { Animated, Easing } from "react-native";

export default {
    data: function() {
        return {
            movingMargin1: 0,
            movingMargin2: 0,
            movingMargin3: 0,
            animatedValue1: 0,
            animatedValue2: 0,
            animatedValue3: 0,
            duration: 1000,
        };
    },
    created: function() {
        this.animatedValue1 = new Animated.Value(0),
        this.animatedValue2 = new Animated.Value(0),
        this.animatedValue3 = new Animated.Value(0)
    },
    mounted: function(){
        this.animate()
    },
    methods: {
        animate: function() {
            this.animatedValue1.setValue(0);
            this.animatedValue2.setValue(0);
            this.animatedValue3.setValue(0);

            Animated.stagger(100, [
                Animated.timing(this.animatedValue1, {
                    toValue: 1,
                    duration: this.duration,
                    easing: Easing.linear
                }),
                Animated.timing(this.animatedValue2, {
                    toValue: 1,
                    duration: this.duration,
                    easing: Easing.linear
                }),
                Animated.timing(this.animatedValue3, {
                    toValue: 1,
                    duration: this.duration,
                    easing: Easing.linear
                })
            ])
            .start(event => {
                if (event.finished) {
                    this.animate();
                }
            });
            this.movingMargin1 = this.animatedValue1.interpolate({
                inputRange: [0, 0.5, 1, 1.5, 2],
                outputRange: [0, 11, 0, 11, 0]
            })
            this.movingMargin2 = this.animatedValue2.interpolate({
                inputRange: [0, 0.5, 1, 1.5, 2],
                outputRange: [0, 11, 0, 11, 0]
            })
            this.movingMargin3 = this.animatedValue3.interpolate({
                inputRange: [0, 0.5, 1, 1.5, 2],
                outputRange: [0, 11, 0, 11, 0]
            })
        }
    }
};
</script>

<style>
    .bot-message-container {
        width: 80%;
        padding: 9px;
        /* background-color: rgba(23,166,56,0.7); */
        background-color: rgb(23,166,56);
        opacity: 0.7;
        border-top-left-radius: 5px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 20px;
        margin-bottom: 10px;
        flex-direction:column;
        justify-content:center;
    }

    .loading-container{
        flex-direction:row;
        justify-content:flex-start;
        align-items:flex-end;
        height: 22;
    }

    .animated-view-style{
        width: 12;
        height: 12;
        margin-right: 5px;
        border-radius: 12;
        background-color: #FFFFFF;
    }

    .bot-message {
        color: #FFFFFF;
        font-size: 16px
    }
</style>
