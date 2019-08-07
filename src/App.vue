<template>
    <router-view></router-view>
</template>

<script>
  import connect from '@vkontakte/vkui-connect-promise';

  export default {
    name: 'App',
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
