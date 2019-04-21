<template>
    <root>
        <navigation></navigation>
    </root>
</template>

<script>

/*
Import
*/
// NodeJS
import { Root } from 'native-base';
// Inner
import Navigation from './navigation/MainTabNavigator';
import store from './store';
//

export default {
    components: { 
        Root,
        Navigation,
    },
    store,
}

</script>

<style>
.container {
    background-color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
}
.text-color-primary {
    color: blue;
}
</style>