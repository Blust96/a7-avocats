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
            :on-press="navigateAideXDLOL"
            class="button2">
            <text class="button-text2">Aide XD LOL</text>
        </touchable-opacity>
    </view>
</template>

<script>
export default {
    methods: {
        navigateSuiviDeDossier: function() {
            alert('Suivi de dossier')
        },
        navigateAideXDLOL: function() {
            alert('Aide XD LOL')
        }
    }
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
    padding: 10px;
    margin-bottom: 20px;
    borderColor: #ffffff;
    borderRadius: 20px;
    borderWidth: 1px;
}

.button-text {
    color: #ffffff;
    font-size: 16px;
}

.button2 {
    paddingHorizontal: 20px;
    paddingVertical: 10px;
    margin-bottom: 20px;
    borderColor: #ffffff;
    backgroundColor: #ffffff;
    borderRadius: 20px;
    borderWidth: 1px;
}

.button-text2 {
    color: #7aca7c;
    font-size: 16px;
}

</style>
