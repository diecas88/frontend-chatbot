# Chatbot Frontend (React + AWS Amplify)

## Descripción
Este proyecto corresponde al frontend de un chatbot desarrollado en **React**, desplegado en **AWS Amplify**. Proporciona una interfaz interactiva donde los usuarios pueden enviar mensajes y recibir respuestas en tiempo real.

El frontend se comunica con un backend serverless a través de **AWS API Gateway**, el cual invoca una **AWS Lambda** encargada de procesar la lógica del chatbot.

---

## Arquitectura General
- **Frontend:** React (Single Page Application)
- **Hosting:** AWS Amplify
- **API:** AWS API Gateway
- **Backend:** AWS Lambda
- **Comunicación:** HTTP (REST)

---

## Funcionamiento
1. El usuario interactúa con el componente de chat.
2. El mensaje es enviado desde el frontend al endpoint de **API Gateway**.
3. API Gateway invoca una función **Lambda**.
4. La Lambda procesa la solicitud (IA / lógica).
5. Se retorna la respuesta al frontend.
6. El mensaje se renderiza en la interfaz del chatbot.

---

## Estructura del Proyecto
```bash
frontend-chatbot/
│── build/                # Build de producción
│── public/               # Archivos públicos
│── src/
│   │── components/       # Componentes del chatbot
│   │   ├── ChatWidget.js
│   │   ├── ChatWindow.js
│   │   ├── InputBox.js
│   │   └── Message.js
│   │
│   │── config/
│   │   └── env.js        # Configuración de variables de entorno
│   │
│   │── services/
│   │   └── api.js        # Llamadas a API Gateway
│   │
│   │── App.js            # Componente principal
│   │── index.js          # Punto de entrada
│   │── widget.js         # Inicialización del widget embebible
│
│── .env                  # Variables de entorno
│── .env.example          # Ejemplo de configuración
│── package.json
│── tailwind.config.js    # Configuración de estilos (Tailwind)
```

---

## Configuración
El proyecto utiliza variables de entorno para definir la conexión con el backend:

```bash
REACT_APP_API_URL=https://api.example.com
```

Estas variables son consumidas desde `src/config/env.js`.

---

## Despliegue
El frontend se despliega en **AWS Amplify**, lo que permite:
- CI/CD automático desde el repositorio
- Hosting escalable
- HTTPS y dominio gestionado

---

## Consideraciones Importantes
- Actualmente, **CORS está deshabilitado o configurado de forma abierta para pruebas**.
- Para pasar a **producción**, se debe:
  - Habilitar correctamente **CORS en API Gateway**
  - Restringir los orígenes permitidos
  - Definir headers y métodos necesarios (`GET`, `POST`, etc.)
  - Validar manejo de credenciales si aplica

---

## Ejecución Local
```bash
npm install
npm start
```

---

## Notas
- El proyecto está diseñado como un **widget reutilizable** (`widget.js`), lo que permite integrarlo en otros sistemas.
- La lógica de comunicación con el backend está centralizada en `services/api.js`.
- Usa **Tailwind CSS** para estilos.
- Puede integrarse fácilmente con servicios de IA como AWS Bedrock u otros.
