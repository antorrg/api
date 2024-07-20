# Apihtml

Esta api está diseñada a las apuradas nomás pero quizas te sirva para aprender y experimentar un poco.

Paso a explicarte lo principal:

Para levantar el servidor solo tenes que escribir en la terminal de vsCode:
```bash
> npm run dev

```
 o tambien: 

 ```javascript
> npm run start

```
Esto va a levantar el servidor, fijate que va a aparecer un url en la terminal:

```bash
Server is listening in port "http://localhost:4000"
```
Haciendo click + control en la url te va a abrir una ventana en el navegador con esta direccion.
Disculpa lo desprolijo e improvisado, pero luego perfeccionamos detalles y tambien esta documentacion, instale dotenv y puse una variable de entorno para que la veas y recuerdes un poco lo que habiamos hablado.
# Instrucciones:

Para definir una pagina nueva tenes que ir al archivo `router` y copiar y pegar una de las funciones que hay alli: 
```javascript
router.get('/page3', (req, res) => {
    res.sendFile(path.join(dirname, '/public', 'index3.html'))
})
//Copiamos y pegamos la funcion: 
router.get('/page3', (req, res) => {
    res.sendFile(path.join(dirname, '/public', 'index3.html'))
})
//Luego cambiamos el numero de page en la ruta y en el archivo html como muestra abajo: 
router.get('/page4', (req, res) => {
    res.sendFile(path.join(dirname, '/public', 'index4.html'))
})
```
Por supuesto, debemos colocar el archivo `index.html` en la carpeta public, el primer archivo es el `index.html`, luego, los que sigan van numerados `index2.html, index3.html, etc,` luego tenemos que ir a la carpeta (dentro de public) `linksNav` y dentro de esta a la carpeta `js`. Abrimos el archivo `nav.js` y agregamos o quitamos rutas de `routes` segun convenga: 
```javascript

const routes = ['/', '/page2', '/page3'];
//Si tuvieramos que agregar una ruta quedaria asi:
const routes = ['/', '/page2', '/page3', '/page4'];
```
Si queremos botones de navegacion abajo, tenemos que ir a la carpeta `data` y adentro de esta abrimos el archivo `Modelo.md`, leemos las instrucciones y habilitamos nuestra pequeña navbar. 
[Tambien podes hacer click aca: ](./data/Modelo.md)

Una vez hecho esto levantamos el proyecto en local, y vemos que todo quede como queremos. 
