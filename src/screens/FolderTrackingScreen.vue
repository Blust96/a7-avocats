<template>
    <KeyboardAvoidingView class="container" behavior="padding" enabled>
        <view class="form-container">
            <text-input
                class="form-input"
                :style="{height: 40}"
                placeholder="Numéro de dossier"
                v-model="folderNumber"
            />
            <text-input
                class="form-input"
                :style="{height: 40}"
                placeholder="Mot de passe"
                v-model="password"
                :secureTextEntry="true"
            />
            <touchable-opacity class="form-submit" :disabled="!correctForm()" :on-press="() => submitForm()" :style="{opacity: !correctForm() ? 0.4 : 1}">
                <text :style="{color: '#7aca7c'}">Accéder au dossier</text>
            </touchable-opacity>
        </view>
    </KeyboardAvoidingView>
</template>

<script>

import { KeyboardAvoidingView } from 'react-native';

export default {
    data: function() {
        return {
            folderNumber: '',
            password: ''
        }
    },
    props: {
        navigation: {
            type: Object,
        }
    },
    methods: {
        submitForm: function() {
            this.navigation.navigate('FolderTrackingDetails', { folderNumber: this.folderNumber })
        },
        correctForm: function() {
            if(this.folderNumber === '') return false;
            if(this.password === '') return false;
            return true;
        }
    },
    components: { KeyboardAvoidingView }
}
</script>

<style>
.container {
    flex: 1;
    padding-top: 60px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
}
.form-input {
    width: 220px;
    background-color: #ffffff;
    padding: 10px;
    borderRadius: 20;
    margin-bottom: 20px;
    shadowColor: #000000;
    shadowOpacity: 0.1;
    shadowRadius: 18;
}
.form-submit {
    padding: 10px;
    margin-top: 20px;
    borderRadius: 20;
    borderWidth: 2;
    borderColor: #7aca7c;
    backgroundColor: #ffffff;
    justify-content: center;
    align-items: center;
}
</style>
