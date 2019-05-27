<template>
    <view class="container">
        <image
            :style="{width: 180, height: 169, marginBottom: 50}"
            :source="require('./../../assets/lawyer.png')"
        />
        <touchable-opacity
            :on-press="navigateSuiviDeDossier" 
            class="button">
            <text class="button-text">Suivi de dossier</text>
        </touchable-opacity>
        <touchable-opacity
            :on-press="navigateQuestionsReponses"
            class="button">
            <text class="button-text">Questions/Réponses</text>
        </touchable-opacity>
    </view>
</template>

<script>

export default {
    props: {
        navigation: {
            type: Object
        }
    },
    methods: {
        navigateSuiviDeDossier: function() {
            this.navigation.navigate('FolderTracking')
        },
        navigateQuestionsReponses: function() {
            this.navigation.navigate('Chat')
        }
    },
}
</script>

<style>
.container {
    flex: 1;
    flexDirection: column;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #7aca7c;
}

.button {
    width: 200px;
    paddingHorizontal: 20px;
    paddingVertical: 10px;
    margin-bottom: 20px;
    borderColor: #ffffff;
    backgroundColor: #ffffff;
    borderRadius: 20px;
    borderWidth: 1px;
    text-align: center;
}

.button-text {
    color: #7aca7c;
    font-size: 16px;
    text-align: center;
}

</style>
