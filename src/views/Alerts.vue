<template>
    <VKView :header="false" activePanel="alert">
        <VKAlert slot="popout" v-if="showAlertOne" :onClose="closeAlerts" :actions="actionsModalOne">
            <h2>Подтвердите действие</h2>
            <p>Добавить пользователю право на модерацию контента.</p>
        </VKAlert>

        <VKAlert slot="popout" v-if="showAlertSecond" actionsLayout="vertical" :onClose="closeAlerts"
                 :actions="actionsModalSecond">
            <h2>Подтвердите действие</h2>
            <p>Вы уверены, что хотите лишить пользователя права на модерацию контента?</p>
        </VKAlert>

        <VKPanel id="alert">
            <VKCellButton @click="showAlertOne = true">Добавить право</VKCellButton>
            <VKCellButton level="danger" @click="showAlertSecond = true">Лишить права</VKCellButton>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Alerts',
        data: () => {
            return {
                showAlertOne: false,
                showAlertSecond: false,

                actionsModalOne: [
                    {
                        title: 'Отмена',
                        autoclose: true,
                        style: 'cancel'
                    }, {
                        title: 'Добавить',
                        action: () => {
                            console.log('clicked item alert');
                        },
                        autoclose: true,
                    }
                ],
                actionsModalSecond: [
                    {
                        title: 'Лишить права',
                        autoclose: true,
                        action: () => {
                            console.log('clicked item alert');
                        },
                        style: 'destructive'
                    },
                    {
                        title: 'Отмена',
                        autoclose: true,
                        style: 'cancel'
                    }
                ],
            }
        },
        methods: {
            closeAlerts() {
                this.showAlertOne = false;
                this.showAlertSecond = false;
            }
        }
    }
</script>
