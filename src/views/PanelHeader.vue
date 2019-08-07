<template>
    <VKView :activePanel="activePanel">
        <VKPanel id="brand">
            <VKPanelHeader>
                Настройки
            </VKPanelHeader>
            <VKGroup>
                <VKCellButton @click="activePanel = 'light'">Альтернативная тема</VKCellButton>
            </VKGroup>
        </VKPanel>
        <VKPanel id="light">
            <VKPanelHeader theme="light">
                <VKHeaderButton slot="left" @click="activePanel = 'brand'">
                    <vkui-icon :name="$VKUI_OSNAME === 'ios' ? 'chevron_back' : 'back'" :size="$VKUI_OSNAME ? 28 : 24"/>
                </VKHeaderButton>
                <VKHeaderButton slot="addon" @click="activePanel = 'brand'">Назад</VKHeaderButton>
                Котики
            </VKPanelHeader>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'PanelHeader',
        data: () => {
            return {
                activePanel: 'brand',
            }
        },
    }
</script>
