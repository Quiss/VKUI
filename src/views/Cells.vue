<template>
    <VKView :activePanel="activePanel">
        <VKPanel id="list">
            <VKPanelHeader>
                Ячейки
            </VKPanelHeader>

            <VKGroup title="Простейший пример">
                <VKList>
                    <VKCell>Пятница</VKCell>
                    <VKCell>Суббота</VKCell>
                    <VKCell>Воскресение</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Переходы">
                <VKList>
                    <VKCell expandable @click="activePanel = 'nothing'">Учетная запись</VKCell>
                    <VKCell expandable @click="activePanel = 'nothing'">Основные</VKCell>
                    <VKCell expandable @click="activePanel = 'nothing'">Приватность</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Индикатор">
                <VKList>
                    <VKCell expandable @click="activePanel = 'nothing'" indicator="При использовании">Геолокация
                    </VKCell>
                    <VKCell expandable @click="activePanel = 'nothing'" indicator="Всегда">Автопроигрывание медиа
                    </VKCell>
                    <VKCell expandable @click="activePanel = 'nothing'" indicator="Выключены">Стикеры</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Многострочность">
                <VKList>
                    <VKCell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of
                        Thrones
                    </VKCell>
                    <VKCell multiline>The Avalanches</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Подпись">
                <VKList>
                    <VKCell description="Depeche Mode">Where’s the Revolution</VKCell>
                    <VKCell description="The Weeknd">I Feel It Coming (Feat. Daft Punk)</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Иконки">
                <VKList>
                    <VKCell>
                        <vkui-icon name="about" :size="24" slot="before"/>
                        Информация
                    </VKCell>
                    <VKCell>
                        <vkui-icon name="services" :size="24" slot="before"/>
                        Сервисы
                    </VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Чекбоксы">
                <VKList>
                    <VKCell selectable>
                        <VKAvatar :size="40" src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" slot="before"></VKAvatar>
                        Артур Стамбульцян
                    </VKCell>
                    <VKCell selectable>
                        <VKAvatar :size="40" src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" slot="before"></VKAvatar>
                        Тимофей Чаптыков
                    </VKCell>
                    <VKCell selectable>
                        <VKAvatar :size="40" src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" slot="before"></VKAvatar>
                        Влад Анесов
                    </VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Удаление" v-if="removeList.length > 0">
                <VKList>
                    <VKCell :key="item" removable v-for="(item, index) in removeList" :onRemove="removeCellElement.bind(null, index)">{{ item }}</VKCell>
                </VKList>
            </VKGroup>

            <VKGroup title="Перетаскивание" v-if="draggingList.length > 0">
                <VKList>
                    <VKCell :key="item" draggable v-for="item in draggingList" :onDragFinish="onDragFinish">{{ item }}</VKCell>
                </VKList>
            </VKGroup>
        </VKPanel>
        <VKPanel id="nothing">
            <VKPanelHeader>
                <VKHeaderButton slot="left" @click="activePanel = 'list'">
                    <vkui-icon :name="$VKUI_OSNAME === 'ios' ? 'chevron_back' : 'back'"
                               :size="$VKUI_OSNAME === 'ios' ? 28 : 24"/>
                </VKHeaderButton>
                Ничего
            </VKPanelHeader>
            <div :style="{ padding: '100px 0', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}">
                <div :style="{'flex': '0 0 auto', 'color': 'gray', textAlign: 'center'}">
                    Тут ничего нет
                    <br/>
                    <span @click="activePanel = 'list'" :style="{ textDecoration: 'underline' }">
                        Пошли обратно
                    </span>
                </div>
            </div>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Groups',
        data: () => {
            return {
                activePanel: 'list',
                removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
                draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend']
            }
        },
        methods: {
            removeCellElement(i) {
                this.$set(this, 'removeList', [...this.removeList.slice(0, i), ...this.removeList.slice(i + 1)]);
            },
            onDragFinish(from, to) {
                const draggingList = this.draggingList;
                draggingList.splice(from, 1);
                draggingList.splice(to, 0, this.draggingList[from]);

                this.$set(this, 'draggingList', draggingList);
            }
        }
    }
</script>
