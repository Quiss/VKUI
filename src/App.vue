<template>
    <VKView :activePanel='activePanel'>
        <VKPanel id="main" theme="white">
            <VKPanelHeader>Базовая страничка</VKPanelHeader>
            <VKGroup>
                <VKCellButton @click="activePanel = 'forms'">
                    Формы
                </VKCellButton>
            </VKGroup>
        </VKPanel>
        <VKPanel id="forms" theme="white">
            <VKPanelHeader>
                <VKHeaderButton slot="left" @click="activePanel = 'main'"> < </VKHeaderButton>
                <VKHeaderButton slot="addon" @click="activePanel = 'main'">Назад</VKHeaderButton>
                Формы <icon_skip_next_48></icon_skip_next_48>

            </VKPanelHeader>
            <VKFormLayout>
                <VKFormStatus title="Некорректный мобильный номер" state="error">
                    Необходимо корректно ввести номер в международном формате
                </VKFormStatus>

                <VKSlider :step="0.2" :min="0" :max="1" v-model="slider1" top="Step [0, 1]" />
                <VKDiv>Slider Value: {{slider1}}</VKDiv>

                <VKInput type="email" top="E-mail" :status=" email ? 'valid' : 'error'" v-model="email"
                         :bottom=" email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'"/>

                <VKFormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
                    <VKInput type="password" placeholder="Введите пароль"/>
                    <VKInput type="password" placeholder="Повторите пароль"/>
                </VKFormLayoutGroup>

                <VKInput top="Имя"/>

                <VKInput top="Фамилия"/>

                <VKSelect top="Пол" placeholder="Выберите пол">
                    <option value="m">Мужской</option>
                    <option value="f">Женский</option>
                </VKSelect>

                <VKDiv top="Тип документа">
                    <VKRadio name="type">Паспорт</VKRadio>
                    <VKRadio name="type">Загран</VKRadio>
                </VKDiv>

                <VKTextarea top="О себе"/>

                <VKCheckbox>Согласен со всем
                    <VKLink>этим</VKLink>
                </VKCheckbox>

                <VKButton size="xl">Зарегистрироваться</VKButton>
            </VKFormLayout>
        </VKPanel>
    </VKView>
</template>

<script>
    import connect from '@vkontakte/vkui-connect-promise';
    import {isWebView} from './lib/webview';

    export default {
        name: 'app',
        data: () => {
            return {
                activePanel: 'main',
                email: '',
                slider1: 0
            }
        },
        mounted() {
            document.body.setAttribute("scheme", "client_light");

            const handleResponse = (data) => {
                console.log(data);
            };

            const handleError = (data) => {
                console.log(data);
            };

            connect.send('VKWebAppInit', {}).then(data => handleResponse(data)).catch(error => handleError(error));
        },
        components: {}
    }
</script>
