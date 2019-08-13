<template>
    <VKView :header="false" activePanel="panel">
        <VKActionSheet :onClose="closePopout" @click="clickItem" v-if="showPopout" slot="popout" title="Hi!" text="I am action sheet">
            <VKActionSheetItem :autoclose="true" :key="period" v-for="period in periodItems">{{period}}</VKActionSheetItem>
            <VKActionSheetItem @click="clickItem" :autoclose="true" theme="destructive">Деструктивный пункт</VKActionSheetItem>
            <VKActionSheetItem @click="clickItem" :autoclose="true" theme="cancel" v-if="$VKUI_OSNAME === 'ios'">Cancel</VKActionSheetItem>
        </VKActionSheet>
        <VKPanel id="panel">
            <VKCellButton @click="showPopout = true">Open Sheet</VKCellButton>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'PanelHeader',
        data: () => {
            return {
                showPopout: false,
                periodItems: ['По дням', 'По неделям', 'По месяцам']
            }
        },
        methods: {
            closePopout() {
                this.showPopout = false
            },
            clickItem(e) {
                console.log('clicked item', e);
            }
        }
    }
</script>
