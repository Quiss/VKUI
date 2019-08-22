<template>
    <VKView activePanel="list">
        <VKPanel id="list">
            <VKPanelHeader>
                List
            </VKPanelHeader>
            <VKGroup>
                <VKList>
                    <VKCell expandable><vkui-icon name="user" size="24" slot="before"></vkui-icon> Учетная запись</VKCell>
                    <VKCell expandable><vkui-icon name="settings" size="24" slot="before"></vkui-icon> Основные</VKCell>
                    <VKCell expandable><vkui-icon name="privacy" size="24" slot="before"></vkui-icon> Приватность</VKCell>
                </VKList>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Lists',
    }
</script>
