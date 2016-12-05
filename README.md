# MapDom 

>Simples plugin para mapeamentos de elementos Html, implementado Orientação a Objetos.

## Exemplo

```js
var form = new mapDom('Input1','Input2','Input3');

ou

var form = new mapDom(['Input','Input2','Input3']);


//Mapear todas as propriedades em elementos Html 
 
form.javascript();

//Mapear uma propriedade do objeto para elemento Html 

form.javascript('Input');

//Mapear mais de uma propriedade do objeto para elementos Html

form.javascript(['Input','Input3']);


