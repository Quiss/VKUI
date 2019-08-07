<template>
    <VKView activePanel='new-user'>
        <VKPanel id="new-user" theme="white">
            <VKPanelHeader>Регистрация</VKPanelHeader>
            <VKFormLayout>
                <VKFormStatus title="Некорректный мобильный номер" state="error">
                    Необходимо корректно ввести номер в международном формате
                </VKFormStatus>

                <VKInput type="email" top="E-mail" :status=" email ? 'valid' : 'error'" v-model="email" :bottom=" email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'" />

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

                <VKCheckbox>Согласен со всем <VKLink>этим</VKLink></VKCheckbox>

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
                activePanel: 'panel1',
                email: '',
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
