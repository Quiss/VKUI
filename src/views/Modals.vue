<template>
    <VKView activePanel="modals">
        <VKPanel id="modals">
            <VKPanelHeader>Модальные окна</VKPanelHeader>

            <VKGroup>
                <VKFormLayout>
                    <VKButton size="xl" level="secondary">
                    Открыть модальную страницу
                    </VKButton>

                    <VKButton size="xl" level="secondary">
                    Открыть модальные карточки
                    </VKButton>
                </VKFormLayout>
            </VKGroup>
        </VKPanel>
    </VKView>
</template>

<script>
    const MODAL_PAGE_FILTERS = 'filters';
    const MODAL_PAGE_COUNTRIES = 'countries';
    const MODAL_PAGE_STORY_FEEDBACK = 'story-feedback';
    const MODAL_PAGE_USER_INFO = 'user-info';

    const MODAL_CARD_MONEY_SEND = 'money-send';
    const MODAL_CARD_APP_TO_MENU = 'app-to-menu';
    const MODAL_CARD_ABOUT = 'say-about';
    const MODAL_CARD_NOTIFICATIONS = 'notifications';
    const MODAL_CARD_CHAT_INVITE = 'chat-invite';

    export default {
        name: 'Modals',
        data: () => {
            return {
                activeModal: null,
                modalHistory: []
            }
        },
    }
</script>
