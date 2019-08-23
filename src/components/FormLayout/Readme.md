Компонент для создания форм. Принимает в качестве `children` один или несколько элементов форм.

Для отрисовки лейблов снизу и сверху у каждой строчки, используются свойства `top` и `bottom`, которые нужно навесить
на `children` элементы.

```
<template>
    <VKView :activePanel='activePanel'>
        <VKPanel id="forms" theme="white">
            <VKPanelHeader>
                Формы
            </VKPanelHeader>
            <VKFormLayout>
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
    export default {
        name: 'app',
        data: () => {
            return {
                activePanel: 'forms',
                email: '',
            }
        },
    }
</script>
```
