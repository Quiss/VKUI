<template>
    <div>ActionSheet {{ platform }} {{ baseClassNames }} {{ osname }}</div>
</template>
<script>
  import getClassName from '../../helpers/getClassName';
  import { platform, ANDROID, IOS } from '../../lib/platform';

  const osname = platform();

  const baseClassNames = getClassName('ActionSheet');

  export default {
      name: 'my-component',
      data () {
        return {
          baseClassNames,
          platform,
          osname,
          ANDROID,
          IOS
        }
      }
  }
</script>