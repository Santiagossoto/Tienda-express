// index.js

/** 
 * Required External Modules
 */
import express from 'express'; // Importa el módulo Express para crear la aplicación web
import path from 'path'; // Importa el módulo path para manejar rutas de archivos
import { fileURLToPath } from 'url'; // Importa fileURLToPath para convertir URL a ruta de archivo
import { dirname } from 'path'; // Importa dirname para obtener el directorio de un archivo
/**
 * App Variables
 */
const _filename = fileURLToPath(import.meta.url); // Obtiene el nombre del archivo actual
const _dirname = dirname(_filename); // Obtiene el directorio del archivo actual
const app = express(); // Crea una instancia de la aplicación Express
const port = process.env.PORT || "8002"; // Define el puerto en el que se ejecutará la aplicación, usando el valor de la variable de entorno o 8002

/**
 * App Configuration
 */
app.set("view engine", "pug"); // Configura Pug como motor de plantillas
app.set("views", path.join(_dirname, "views")); // Define la ruta de las vistas
app.use(express.static(path.join(_dirname, "public"))); // Sirve archivos estáticos desde la carpeta "public"

/**
 * Routes Definitions
 */
app.get("/", (req, res) => { // Define la ruta raíz
    res.render("index", { title: "Home" }); // Renderiza la vista "index" con un título de "Home"
});

app.get('/login', (req, res) => { // Define la ruta para la página de inicio de sesión
    res.render('login', { title: 'Iniciar Sesión' }); // Renderiza la vista "login" con un título de "Iniciar Sesión"
});

app.get('/singUp', (req, res) => { // Define la ruta para la página de registro
    res.render('singUp', { title: 'Registrarse' }); // Renderiza la vista "singUp" con un título de "Registrarse"
});

/**
 * Server Activation
 */
app.listen(port, () => { // Inicia el servidor en el puerto definido
    console.log(`El servidor esta funcionando en http://localhost:${port}`); // Imprime un mensaje en la consola con la URL del servidor
});
