# Visión General

Crear una API en Node.js con el framework Serverless para un despliegue en AWS.
Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
Integrar la API de prueba StarWars API (líneas abajo está el link) se deben integrar uno o más endpoints.
Crear un modelo de su elección mediante el uso de un endpoint POST, la data se tendrá que almacenar dentro de una base de datos.
Crear un endpoint GET que muestre la data almacenada.

### Ficheros

    .
    ├── serverless.yml
    ├── src
    │ └── controllers
    │ │   ├── GetPeople.js
    │ │   └── PostPlaneta.js
    │ ├── db
    │ │    └── dynamoDB.js
    │ ├── helpers
    │ │   └── starwars.js
    │ ├── models
    │ │   └── People.js
    │ ├── test
    │     └── People.js
    |
    ├── package.json
    ├── README.md

# HOW TO DEPLOY

1. serverless config credentials --provider aws --key ### --secret ###
2. npm install
3. serverless deploy

# Documentation API | SWAGER API

> swager.yml
> server on : [https://app.swaggerhub.com/apis/L4fv/reto-rimac/1.0.0]
