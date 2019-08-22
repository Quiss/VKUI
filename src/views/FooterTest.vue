<template>
    <VKView activePanel="list">
        <VKPanel id="list">
            <VKPanelHeader>
                Footer
            </VKPanelHeader>
            <VKGroup>
                <VKList>
                    <VKCell description="Веб-сайт"><VKAvatar slot="before"/> Команда ВКонтакте</VKCell>
                    <VKCell description="Музыкант"><VKAvatar slot="before"/> Robbie Williams</VKCell>
                    <VKCell description="Издательский дом"><VKAvatar slot="before"/> ПостНаука</VKCell>
                </VKList>
            </VKGroup>
            <VKFooter>3 cообщества</VKFooter>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'FooterTest',
    }
</script>
