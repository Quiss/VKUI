<template>
    <VKView activePanel="header">
        <VKPanel id="header" theme="white">
            <VKPanelHeader>
                Header
            </VKPanelHeader>
            <VKHeader>
                Плейлисты
            </VKHeader>
            <VKHeader level="2">
                Импорт друзей
            </VKHeader>
            <VKHeader level="2">
                <VKLink slot="aside">Показать все</VKLink>
                Приглашения
            </VKHeader>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Headers'
    }
</script>
