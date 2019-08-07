<template>
    <VKRoot :activeView="activeView">
        <VKView id="main" :activePanel="activePanel">
            <VKPanel id="panel1">
                <VKPanelHeader>
                    <VKHeaderButton slot="left" @click="activeView = 'main'">
                        <vkui-icon v-if="$VKUI_OSNAME !== 'ios'" name="back" :size="24"/>
                        <div v-else>Отмена</div>
                    </VKHeaderButton>
                    Стартовый экран
                </VKPanelHeader>
                <VKGroup>
                    <VKDiv>
                        Если приложение открывается как модальное окно, то в качестве левой кнопки принято использовать
                        кнопку "Отмена".
                        <br/>
                        <br/>
                        В противном случае показывается кнопка "Назад".
                    </VKDiv>
                </VKGroup>
                <VKGroup>
                    <VKCellButton @click="activePanel = 'panel2'">
                        Больше примеров
                    </VKCellButton>
                </VKGroup>
            </VKPanel>
            <VKPanel id="panel2">
                <VKPanelHeader>
                    <VKHeaderButton slot="left" @click="activeView = 'main'">
                        <vkui-icon :name="$VKUI_OSNAME === 'ios' ? 'chevron_back' : 'back'"
                                   :size="$VKUI_OSNAME ? 28 : 24"/>
                    </VKHeaderButton>
                    <VKHeaderButton slot="addon" @click="activeView = 'main'">Назад</VKHeaderButton>

                    <VKHeaderButton slot="right">
                        <vkui-icon name="story" :size="24"/>
                    </VKHeaderButton>

                    Заголовок
                </VKPanelHeader>
                <VKGroup>
                    <VKCellButton @click="activePanel = 'panel3'">
                        Несколько иконок
                    </VKCellButton>
                </VKGroup>
            </VKPanel>
            <VKPanel id="panel3">
                <VKPanelHeader>
                    <VKHeaderButton slot="left" @click="activePanel = 'panel2'">
                        <vkui-icon :name="$VKUI_OSNAME === 'ios' ? 'chevron_back' : 'back'" :size="$VKUI_OSNAME ? 28 : 24"/>
                    </VKHeaderButton>
                    <VKHeaderButton slot="addon"  @click="activePanel = 'panel2'">Назад</VKHeaderButton>
                    <VKHeaderButton slot="right"  @click="activePanel = 'panel2'">
                        <vkui-icon name="add" :size="24"/>
                        <vkui-icon name="more_vertical" :size="24"/>
                    </VKHeaderButton>
                Две иконки
                </VKPanelHeader>
                <VKGroup>
                    <VKCellButton  @click="activeView = 'modal'">
                        Модальное окно
                    </VKCellButton>
                </VKGroup>
            </VKPanel>
        </VKView>
        <VKView id="modal" header activePanel="modal-panel">
            <VKPanel id="modal-panel">
                <VKPanelHeader>
                    <VKHeaderButton slot="left" @click="activeView = 'main'">
                        <vkui-icon v-if="$VKUI_OSNAME !== 'ios'" name="cancel" :size="24"/>
                        <div v-else>Отмена</div>
                    </VKHeaderButton>
                    <VKHeaderButton slot="right" @click="activeView = 'main'">
                        <vkui-icon v-if="$VKUI_OSNAME !== 'ios'" name="done" :size="24"/>
                        <div v-else>Готово</div>
                    </VKHeaderButton>
                Модальное окно
                </VKPanelHeader>
            </VKPanel>
        </VKView>
    </VKRoot>
</template>

<script>
    export default {
        name: 'HeaderButton',
        data: () => {
            return {
                activePanel: 'panel1',
                activeView: 'main'
            }
        },
        provide: {
            webviewType: 'internal'
        },
    }
</script>
