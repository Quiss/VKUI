<template>
    <VKView :activePanel="activePanel">
        <VKPanel id="panel1">
            <VKPanelHeader>Panel 1</VKPanelHeader>
            <VKGroup>
                <VKCellButton @click="activePanel = 'panel2'">
                    Go to panel 2
                </VKCellButton>
            </VKGroup>
        </VKPanel>
        <VKPanel id="panel2">
            <VKPanelHeader>Panel 2</VKPanelHeader>
            <VKGroup>
                <VKCellButton @click="activePanel = 'panel3'">
                    Go to panel 3
                </VKCellButton>
            </VKGroup>
        </VKPanel>
        <VKPanel id="panel3">
            <VKPanelHeader>Panel 3</VKPanelHeader>
            <VKGroup>
                <VKCellButton @click="activePanel = 'panel1'">
                    Back to panel 1
                </VKCellButton>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Views',
        data: () => {
            return {
                activePanel: 'panel1',
            }
        },
    }
</script>
