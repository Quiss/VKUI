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

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }

    /* Анимации появления и исчезновения могут иметь */
    /* различные продолжительности и динамику.       */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active до версии 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
