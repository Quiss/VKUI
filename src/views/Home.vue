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

                <router-link to="/alerts">
                    <VKCellButton>Alerts</VKCellButton>
                </router-link>

                <router-link to="/screen-spinner">
                    <VKCellButton>Screen Spinner</VKCellButton>
                </router-link>

                <router-link to="/modals">
                    <VKCellButton>Modals</VKCellButton>
                </router-link>

                <router-link to="/buttons">
                    <VKCellButton>Buttons</VKCellButton>
                </router-link>

                <router-link to="/cell-buttons">
                    <VKCellButton>Cell Buttons</VKCellButton>
                </router-link>

                <router-link to="/div">
                    <VKCellButton>Div</VKCellButton>
                </router-link>

                <router-link to="/headers">
                    <VKCellButton>Headers</VKCellButton>
                </router-link>

                <router-link to="/groups">
                    <VKCellButton>Groups</VKCellButton>
                </router-link>

                <router-link to="/cells">
                    <VKCellButton>Cells</VKCellButton>
                </router-link>

                <router-link to="/lists">
                    <VKCellButton>Lists</VKCellButton>
                </router-link>

                <router-link to="/footer">
                    <VKCellButton>Footer</VKCellButton>
                </router-link>

                <router-link to="/spinner">
                    <VKCellButton>Spinner</VKCellButton>
                </router-link>

                <router-link to="/switch">
                    <VKCellButton>Switch</VKCellButton>
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
