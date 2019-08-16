<template>
    <VKView activePanel="spinner_test">
        <VKScreenSpinner v-if="showSpinner" slot="popout"></VKScreenSpinner>
        <VKPanel id="spinner_test" theme="white">
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
