<template>
    <VKView :header="false" activePanel="spinner_test">
        <VKScreenSpinner slot="popout"></VKScreenSpinner>
        <VKPanel id="spinner_test">
            <VKCellButton @click="showAlertOne = true">Добавить право</VKCellButton>
            <VKCellButton level="danger" @click="showAlertSecond = true">Лишить права</VKCellButton>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'ScreenSpinners',
        data: () => {
            return {
                showSpinner: false,
            }
        },
        watch: {
            showSpinner(val) {
                if(val) {
                    setTimeout(() => {
                        this.showSpinner = false;
                    }, 2000)
                }
            }
        }
    }
</script>
