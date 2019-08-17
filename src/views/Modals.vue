<template>
    <VKView activePanel="modals">
        <VKModalRoot slot="modal" :activeModal="activeModal">
            <VKModalCard :id="modals.MODAL_CARD_MONEY_SEND" :onClose="activeModal = null">
                <div slot="title">Test</div>
                <div slot="caption">Test Caption</div>
            </VKModalCard>
        </VKModalRoot>

        <VKPanel id="modals">
            <VKPanelHeader>Модальные окна</VKPanelHeader>

            <VKGroup>
                <VKFormLayout>
                    <VKButton size="xl" level="secondary">
                    Открыть модальную страницу
                    </VKButton>

                    <VKButton size="xl" level="secondary" @click="activeModal = modals.MODAL_CARD_MONEY_SEND">
                    Открыть модальные карточки
                    </VKButton>
                </VKFormLayout>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    export default {
        name: 'Modals',
        data: () => {
            return {
                activeModal: null,
                modalHistory: [],
                modals: {
                    MODAL_PAGE_FILTERS: 'filters',
                    MODAL_PAGE_COUNTRIES: 'countries',
                    MODAL_PAGE_STORY_FEEDBACK: 'story-feedback',
                    MODAL_PAGE_USER_INFO: 'user-info',

                    MODAL_CARD_MONEY_SEND: 'money-send',
                    MODAL_CARD_APP_TO_MENU: 'app-to-menu',
                    MODAL_CARD_ABOUT: 'say-about',
                    MODAL_CARD_NOTIFICATIONS: 'notifications',
                    MODAL_CARD_CHAT_INVITE: 'chat-invite',

                }
            }
        },
    }
</script>
