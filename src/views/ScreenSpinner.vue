<template>
    <VKView activePanel="spinner1">
        <VKScreenSpinner />

        <VKPanel id="spinner1">
            <VKPanelHeader>ScreenSpinner</VKPanelHeader>
            <VKFormLayout>
                <VKCellButton @click="showSpinner = true">Запустить долгий процесс</VKCellButton>
            </VKFormLayout>
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
