<template>
    <VKView activePanel="list">
        <VKPanel id="list">
            <VKPanelHeader>
                Spinner
            </VKPanelHeader>
            <div :style="{ display: 'flex', alignItems: 'center', flexDirection: 'column' }">
                <VKSpinner size="large" :style="{ marginTop: '20px' }"/>
                <VKSpinner size="medium" :style="{ marginTop: '20px' }"/>
                <VKSpinner size="regular" :style="{ marginTop: '20px' }"/>
                <VKSpinner size="small" :style="{ marginTop: '20px' }"/>
            </div>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Spinners',
    }
</script>
