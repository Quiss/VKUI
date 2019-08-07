<template>
    <VKView activePanel="brand">
        <VKPanel id="brand">
            <VKPanelHeader>
                <VKHeaderButton slot="left" @click="activePanel = 'main'">
                    <vkui-icon :name="$VKUI_OSNAME === 'ios' ? 'chevron_back' : 'back'"
                               :size="$VKUI_OSNAME === 'ios' ? 28 : 24"/>
                </VKHeaderButton>
                <VKHeaderButton slot="right" @click="activePanel = 'main'">
                    <vkui-icon name="phone" :size="24"/>
                </VKHeaderButton>
                <VKPanelHeaderContent>
                    <div slot="status">
                        был в сети сегодня, в 18:46
                    </div>
                    <vkui-icon slot="aside" name="dropdown" :size="16"/>
                    <VKAvatar slot="before" :size="40"
                              src="https://sun9-5.userapi.com/c834100/v834100961/4f8f1/hjsBzq433co.jpg?ava=1"/>
                    <div>
                        Влад Анесов
                    </div>
                </VKPanelHeaderContent>
            </VKPanelHeader>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'PanelHeaderContent',
        provide: {
            webviewType: 'internal'
        },
    }
</script>
