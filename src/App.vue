<template>
    <VKView activePanel='new-user'>
    	<VKPanel id="new-user" theme="white">
        <VKPanelHeader>Регистрация</VKPanelHeader>
        <VKFormLayout>
          <VKInput type="email" top="E-mail" />
          <VKFormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
            <VKInput type="password"  placeholder="Введите пароль" />
            <VKInput type="password" placeholder="Повторите пароль" />
          </VKFormLayoutGroup>
          <VKInput top="Имя" />
          <VKInput top="Фамилия" />
          <VKSelect top="Пол" placeholder="Выберите пол">
            <option value="m">Мужской</option>
            <option value="f">Женский</option>
          </VKSelect>
          <VKDiv top="Тип документа">
            <VKRadio name="type">Паспорт</VKRadio>
            <VKRadio name="type">Загран</VKRadio>
          </VKDiv>
          <VKTextarea top="О себе" />
          <VKFormLayoutGroup>
            <VKCheckbox>Согласен со всем <VKLink>этим</VKLink></VKCheckbox>
            <VKDiv>
              <VKCellButton>Зарегистрироваться</VKCellButton>
            </VKDiv>
          </VKFormLayoutGroup>
        </VKFormLayout>
      </VKPanel>
    </VKView>
</template>

<script>
import connect from '@vkontakte/vkui-connect-promise';
import { isWebView } from './lib/webview';

export default {
  name: 'app',
  data: () => {
  	return { 
  		activePanel: 'panel1'
  	}
  },
  mounted() {
  	console.log(this.$VKUI_OSNAME);
    console.log(isWebView);
  	document.body.setAttribute("scheme", "client_light");
 
    connect.send('VKWebAppInit', {}).then(data => handleResponse(data)).catch(error => handleError(error));
  },
  components: {}
}
</script>
