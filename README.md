# MapDom 

>Simples plugin para mapeamentos de elementos Html, implementado Orientação a Objetos.

## Exemplo

```js
var form = new mapDom('Input1','Input2','Input3');

ou

var form = new mapDom(['Input','Input2','Input3']);


//Mapear todas as propriedades para javascript
 
form.javascript();

//Mapear uma propriedade do objeto para javascript

form.javascript(form.Input1);

//Mapear mais de uma propriedade do objeto para javascript

form.javascript(['Input','Input3']);


