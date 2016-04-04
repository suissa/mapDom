# MapDom 

>Simples plugin para mapeamentos de elementos Html, implementado Orientação a Objetos.

## Exemplo

```js
var form = new mapDom('Input1','Input2','Input3');
//ou
var form = new mapDom(['Input','Input2','Input3']);


// Após iniciado mapear todos como jquery
form.jquery();

// Mapear como elementos javascript
form.javascript();



