```
npm i @quiss/vkui --save
```

```
import VKUI from '@quiss/vkui';

import '@quiss/vkui/dist/VKUI.css';

Vue.use(VKUI);
```


Для установки схемы, необходимо добавить к `body` аттрибут `scheme`, ну например так
```
mounted() {
  	document.body.setAttribute("scheme", "client_light");
},
```