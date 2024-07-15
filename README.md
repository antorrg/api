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

Hoy: 15-07-2024 habiendome quedado con la duda acerca de lo que habia hecho (no me convencia el metodo render para lo que estaba haciendo con public y los archivos html) me puse a investigar un poquito y descubri el metodo sendFile, que funciono bien al asignar un ruta, por lo que lo implemente y te permite renderizar sin muchas complicaciones html estatico, aca te paso la explicacion que Don Chatgpt me dio de las diferencias entre los dos metodos, es muy simple y creo que mas adelante te va a servir.

Claro, te explico las diferencias entre los métodos `render` y `sendFile`, y la diferencia entre usar un motor de plantillas y no.

### Diferencia entre `render` y `sendFile`

1. **`res.render`**:
   - **Uso**: Se usa para renderizar una vista utilizando un motor de plantillas.
   - **Contexto**: Necesita que el motor de plantillas esté configurado en tu aplicación Express. Los motores de plantillas permiten inyectar datos dinámicos en las vistas antes de enviarlas al cliente.
   - **Ejemplo de motores de plantillas**: EJS, Pug, Handlebars, etc.
   - **Ventaja**: Permite generar contenido HTML dinámico en el servidor, utilizando variables y lógica de programación dentro de las plantillas.
   - **Código ejemplo**:
     ```javascript
     app.set('view engine', 'ejs'); // Configura el motor de plantillas EJS

     app.get('/', (req, res) => {
         res.render('index', { title: 'Página de Inicio' }); // Renderiza la vista 'index.ejs' y pasa un objeto con datos
     });
     ```

2. **`res.sendFile`**:
   - **Uso**: Se usa para enviar un archivo estático al cliente.
   - **Contexto**: No requiere configuración de un motor de plantillas. Simplemente envía el archivo tal como está.
   - **Ventaja**: Es simple y directo para servir archivos estáticos como HTML, imágenes, CSS, etc.
   - **Código ejemplo**:
     ```javascript
     app.get('/', (req, res) => {
         res.sendFile(path.join(__dirname, 'public', 'index.html')); // Envía el archivo 'index.html'
     });
     ```

### Diferencia entre usar un motor de plantillas y no

1. **Con motor de plantillas**:
   - **Dinamismo**: Permite generar contenido HTML dinámico en el servidor. Puedes usar variables, bucles y condicionales dentro de las plantillas para personalizar el contenido que se envía al cliente.
   - **Separación de lógica y presentación**: Facilita la separación entre la lógica de negocio y la presentación, lo que puede hacer que tu código sea más modular y fácil de mantener.
   - **Ejemplo**:
     ```ejs
     <!-- index.ejs -->
     <html>
     <head>
         <title><%= title %></title>
     </head>
     <body>
         <h1><%= heading %></h1>
         <p>Bienvenido a <%= title %>!</p>
     </body>
     </html>
     ```

2. **Sin motor de plantillas**:
   - **Estático**: El contenido HTML es estático y no puede ser modificado dinámicamente desde el servidor antes de enviarlo al cliente.
   - **Simplicidad**: Es más simple y directo. No necesitas configurar un motor de plantillas y simplemente sirves los archivos tal como están.
   - **Ejemplo**:
     ```html
     <!-- index.html -->
     <html>
     <head>
         <title>Página de Inicio</title>
     </head>
     <body>
         <h1>Bienvenido</h1>
         <p>Bienvenido a la Página de Inicio!</p>
     </body>
     </html>
     ```

En resumen, si necesitas generar contenido dinámico en tus páginas HTML basándote en datos o lógica del servidor, un motor de plantillas es la mejor opción. Si solo necesitas servir archivos HTML estáticos, `res.sendFile` es suficiente y más simple de implementar.