<template>
    <view class="container">
        <view class="task-todo-container">
            <text class="folder-name">Dossier: {{ navigation.getParam('folderNumber') }}</text>
            <text class="task-title">Tâches à réaliser</text>
            <view class="task" :style="{borderBottom: 0, borderWidth: 0, borderBottomColor: 'transparent', marginBottom: 0}">
                <text class="task-name">Envoi de votre pièce d'identité</text>
                <text class="task-date">Reçue le 27/05</text>
            </view>
        </view>
        <view class="task-done-container">
            <text class="task-title">Tâches complétées</text>
            <view class="task">
                <text class="task-name">Envoi de la pièce jointe</text>
                <text class="task-date">Terminée le 27/05</text>
            </view>
            <view class="task">
                <text class="task-name">Envoi d'éléments complémentaires</text>
                <text class="task-date">Terminée le 24/05</text>
            </view>
            <view class="task">
                <text class="task-name">Envoi des premiers éléments du dossier</text>
                <text class="task-date">Terminée le 23/05</text>
            </view>
            <view class="task" :style="{borderBottom: 0, borderWidth: 0, borderBottomColor: 'transparent', marginBottom: 0}">
                <text class="task-name">Création du dossier</text>
                <text class="task-date">Terminée le 21/05</text>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        navigation: {
            type: Object
        }
    }
}
</script>

<style>
.container {
    flex: 1;
    margin-top: 20px;
    padding-top: 60px;
    padding-right: 10px;
    padding-left: 10px;
}

.folder-name {
    font-size: 24px;
    padding-top: 10px;
    margin-bottom: 15px;
    color: #7aca7c;
    font-weight: 700;
}

.task-todo-container {
    padding: 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    backgroundColor: #fff;
    shadowColor: #000000;
    shadowOpacity: 0.1;
    shadowRadius: 18;
}

.task-done-container {
    margin-top: 20px;
    padding: 15px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    backgroundColor: #fff;
    shadowColor: #000000;
    shadowOpacity: 0.1;
    shadowRadius: 18;
}

.task-title {
    font-size: 20px;
    color: #7aca7c;
    font-weight: 700;
    margin-bottom: 15px;
}

.task {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom-width: 1px;
    border-style: solid;
    border-bottom-color: #E9E9E9;
}

</style>
