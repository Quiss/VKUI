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
                <VKPanelHeaderContent @click="toggleContext">
                    <vkui-icon slot="aside" name="dropdown" :size="16"/>
                    <div>
                        Communities
                    </div>
                </VKPanelHeaderContent>
            </VKPanelHeader>
            <VKHeaderContext :opened="contextOpened" :onClose="toggleContext">
                <VKList>
                    <VKCell @click="mode = 'all'">
                        <vkui-icon slot="before" name="users" :size="24"/>
                        <vkui-icon v-if="mode === 'all'" color="var(--accent)" slot="asideContent" name="done" :size="24"/>
                        Communities
                    </VKCell>
                    <VKCell @click="mode = 'managed'">
                        <vkui-icon slot="before" name="settings" :size="24"/>
                        <vkui-icon v-if="mode === 'managed'" color="var(--accent)" slot="asideContent" name="done" :size="24"/>
                        Managed Communities
                    </VKCell>
                </VKList>
            </VKHeaderContext>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'PanelHeaderContent',
        data: () => {
            return {
                contextOpened: true,
                mode: 'all'
            }
        },
        methods: {
            toggleContext() {
                this.contextOpened = !this.contextOpened;
            }
        },
        watch: {
            mode(val, oldVal) {
                requestAnimationFrame(this.toggleContext);
            }
        },
        provide: {
            webviewType: 'internal'
        },
    }
</script>
