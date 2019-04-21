<template>
    <text>{{message.author}} : {{message.content}}</text>
</template>

<script>
export default {
    props: {
        message: {
            Type: Object
        }
    }
}
</script>

<style>

</style>