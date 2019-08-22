<template>
    <VKView activePanel="switch">
        <VKPanel id="switch">
            <VKPanelHeader>
                Switch
            </VKPanelHeader>
            <VKGroup>
                <VKList>
                    <VKCell><VKSwitch slot="asideContent"></VKSwitch> Комментарии к записям</VKCell>
                    <VKCell><VKSwitch slot="asideContent" v-model="checked"></VKSwitch> Ссылки</VKCell>
                    <VKCell><VKSwitch slot="asideContent" disabled></VKSwitch> Фотоальбомы</VKCell>
                </VKList>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Switchs',
        data: () => {
            return {
                checked: true,
            }
        },
    }
</script>
