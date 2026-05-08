# Frontend Chatbot

Este proyecto es el frontend de un chatbot desarrollado con React. Proporciona una interfaz de usuario interactiva para que los usuarios puedan comunicarse con un backend de chatbot, que se espera que sea una función AWS Lambda.

## Características

*   Interfaz de chat responsiva y fácil de usar.
*   Envío de mensajes a un servicio de backend (AWS Lambda).
*   Visualización de respuestas del bot en tiempo real.
*   Indicador de "Escribiendo..." mientras se espera la respuesta del bot.
*   Manejo básico de errores para la comunicación con el backend.

## Tecnologías Utilizadas

*   **React**: Biblioteca de JavaScript para construir interfaces de usuario.
*   **Create React App**: Entorno para configurar aplicaciones React de una sola página.
*   **Tailwind CSS**: Framework CSS para un estilo rápido y personalizado.
*   **PostCSS & Autoprefixer**: Para procesar CSS.

## Configuración del Proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Prerrequisitos

*   Node.js (versión 14 o superior recomendada)
*   npm o Yarn

### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/diecas88/frontend-chatbot
    ```
2.  Instala las dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```

### Variables de Entorno

Este proyecto requiere una variable de entorno para la URL del API del chatbot.

1.  Crea un archivo `.env` en el directorio `frontend-chatbot/frontend-chatbot/` (al mismo nivel que `package.json`).
2.  Agrega la siguiente variable al archivo `.env`, reemplazando `<TU_API_GATEWAY_URL>` con la URL de tu API Gateway o la URL de tu función Lambda:

    ```
    REACT_APP_API_URL=<TU_API_GATEWAY_URL>
    ```

    **Ejemplo:**
    ```
    REACT_APP_API_URL=https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/prod/chatbot
    ```

### Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

#### `npm start`

Ejecuta la aplicación en modo de desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando realices cambios. También puedes ver cualquier error de lint en la consola.

#### `npm test`

Lanza el ejecutor de pruebas en modo interactivo de observación.
Consulta la sección sobre [ejecución de pruebas](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

#### `npm run build`

Compila la aplicación para producción en la carpeta `build`.
Empaqueta correctamente React en modo de producción y optimiza la compilación para el mejor rendimiento.

La compilación está minificada y los nombres de archivo incluyen los hashes.
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.

#### `npm run eject`

**Nota: esta es una operación unidireccional. Una vez que haces `eject`, ¡no hay vuelta atrás!**

Si no estás satisfecho con las herramientas de compilación y las opciones de configuración, puedes `ejectar` en cualquier momento. Este comando eliminará la única dependencia de compilación de tu proyecto.

En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos. Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas ajustarlos. En este punto, estás por tu cuenta.

No es necesario usar `eject`. El conjunto de características seleccionado es adecuado para implementaciones pequeñas y medianas, y no debes sentirte obligado a usar esta característica. Sin embargo, entendemos que esta herramienta no sería útil if you couldn't customize it when you are ready for it.

## Estructura del Proyecto

```
frontend-chatbot/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatWidget.js
│   │   ├── ChatWindow.js
│   │   ├── InputBox.js
│   │   └── Message.js
│   ├── config/
│   │   └── env.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── ... otros archivos de React
├── .env.example
├── package.json
├── package-lock.json
├── postcss.config.js
└── tailwind.config.js
```

### Componentes Principales

*   **`App.js`**: El componente principal que renderiza el `ChatWidget`.
*   **`ChatWidget.js`**: El componente flotante del chatbot que maneja la lógica de abrir/cerrar y el estado de los mensajes.
*   **`ChatWindow.js`**: Muestra los mensajes en el chat.
*   **`InputBox.js`**: Componente para la entrada de texto del usuario.
*   **`Message.js`**: Componente individual para mostrar un mensaje (del usuario o del bot).

### Servicios

*   **`api.js`**: Contiene la función `sendQueryToLambda` que se encarga de realizar la solicitud HTTP a la API Gateway (o URL de Lambda) y manejar la respuesta.

## Despliegue

La aplicación se puede desplegar utilizando el comando `npm run build`, que crea una versión optimizada de la aplicación en la carpeta `build`. Esta carpeta puede ser servida por cualquier servidor web estático o servicio de hosting.