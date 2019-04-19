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
//

export default {
    components: { 
        Root,
        Navigation,
    }
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