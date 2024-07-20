# Modelo de navbar:

[Para volver al README: ](../README.md)


Este es un modelo para que veas como quedaria en el archivo html y como tenes que declarar el css y el script: 

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./linksNav/css/nav.css">
</head>
<body>
    <div class="linksNav">
  <a href="/">Inicio</a>
  <a href="#" id="prev">Anterior</a>
  <span id="current">number</span>
  <a href="#" id="next">Siguiente</a>
  <a href="#" id="last">Fin</a>
</div>
    <script type="module" src="./linksNav/js/nav.js"></script>
</body>
</html>
```

Este es el div que tenes que pegar :

```html
<div class="linksNav">
  <a href="/">Inicio</a>
  <a href="#" id="prev">Anterior</a>
  <span id="current">number</span>
  <a href="#" id="next">Siguiente</a>
  <a href="#" id="last">Fin</a>
</div>
```
Le puse un nombre medio extraño a la clase para que no se pise con ninguna que vos pongas, en el ejemplo pegué el bloque al final, que creo que va a ser lo mas comodo.
Nota: Es importante que no te olvides de pegar el script abajo, no importa si hay otro, asi como con los estilos haces un nuevo script o un nuevo Link llegado el caso y lo pegas, si no pegas el link no va a tener estilos y si no pegas el script no va a funcionar.

