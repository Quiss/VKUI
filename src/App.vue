<template>
  <Root>
    <VKView activePanel='new-user'>
    	<Panel id="new-user" theme="white">
        <PanelHeader>Регистрация1</PanelHeader>
        <FormLayout>
          <Input type="email" top="E-mail" />
          <FormLayoutGroup top="Пароль" bottom="Пароль может содержать только латинские буквы и цифры.">
            <Input type="password"  placeholder="Введите пароль" />
            <Input type="password" placeholder="Повторите пароль" />
          </FormLayoutGroup>
          <Input top="Имя" />
          <Input top="Фамилия" />
          <Select top="Пол" placeholder="Выберите пол">
            <option value="m">Мужской</option>
            <option value="f">Женский</option>
          </Select>
          <div top="Тип документа">
            <Radio name="type">Паспорт</Radio>
            <Radio name="type">Загран</Radio>
          </div>
          <Textarea top="О себе" />
          <FormLayoutGroup>
            <Checkbox>Согласен со всем <Link>этим</Link></Checkbox>
            <div>
              <CellButton>Зарегистрироваться</CellButton>
            </div>
          </FormLayoutGroup>
        </FormLayout>
      </Panel>
    </VKView>
  </Root>
</template>

<script>

export default {
  name: 'app',
  data: () => {
  	return { 
  		activePanel: 'panel1'
  	}
  },
  mounted() {
  	console.log(this.$VKUI_OSNAME);
  	document.body.setAttribute("scheme", "client_light");
  },
  components: {}
}
</script>
