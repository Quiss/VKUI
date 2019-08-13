<template>
    <VKView :activePanel='activePanel'>
        <VKPanel id="main" theme="white">
            <VKPanelHeader>Базовая страничка</VKPanelHeader>
            <VKGroup>
                <router-link to="/root">
                    <VKCellButton>Root</VKCellButton>
                </router-link>
                <router-link to="/forms">
                    <VKCellButton>Forms</VKCellButton>
                </router-link>
                <router-link to="/views">
                    <VKCellButton>Views</VKCellButton>
                </router-link>
                <router-link to="/panel-header">
                    <VKCellButton>Panel Header</VKCellButton>
                </router-link>
                <router-link to="/header-button">
                    <VKCellButton>Header Buttons</VKCellButton>
                </router-link>
                <router-link to="/panel-header-content">
                    <VKCellButton>Panel Header Content</VKCellButton>
                </router-link>
                <router-link to="/header-context">
                    <VKCellButton>Header Context</VKCellButton>
                </router-link>
                <router-link to="/epic">
                    <VKCellButton>Epic</VKCellButton>
                </router-link>

                <router-link to="/action-popout">
                    <VKCellButton>Action Popout</VKCellButton>
                </router-link>

            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Home',
        data: () => {
            return {
                activePanel: 'main',
            }
        },
    }
</script>
