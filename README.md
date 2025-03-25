# PanaderiasMayeNJ
Proyecto formativo en NodeJS

# INTEGRANTES:
**Santiago Gonzalez**
**Nicolas Perez**
**Manuel Clavijo**
**Jhony Diaz**

#CONVENCIONES

#NOMBRE DE CARPETAS
Las carpetas creadas por nosotros deben ser en minuscula y singular. Si la carpeta conlleva más de dos palabras se separan con un guión(-) Ejemplo: admin-dasboard
Las carpetas se deben separar en la parte front-end y back-end dependiendo su funcionalidad

#NOMBRE DE ARCHIVOS
Los archivos convencionales como lo son index, navbar, footer, head, dasboard, etc. Seguirán con el mismo nombre, sin embargo, los archivos creados por nosotros deben ser en español, en singular.
Si la lleva más de dos palabras se seperan con un guión(-) 

#NOMBRE DE FUNCIONES
Para el nombre de las funciones se debe usar camelCase, en español y en singular, además se debe especificar que realizará esa función 

#NOMBRES DE VARIABLES
Para la creación de variables, dependiendo del tipo de variable se creará de una manera en especifica.
Variables locales (let): se escribe en español, en singular, en minusculas y con camelCase si lo requiere
Constantes: se ecribe en español, en singular y en MAYUSCULA


#panaderiasmayenj/
├── src/
│   ├── views/
│   │   ├── partials/
│   │   │   ├── navbar.ejs
│   │   │   ├── footer.ejs
│   │   │   └── head.ejs
│   │   └── pages/
│   │       ├── admin/
│   │       │   ├── admin-dashboard.ejs
│   │       │   ├── crud-usuario.ejs
│   │       │   ├── crud-producto.ejs
│   │       │   ├── crud-factura.ejs
│   │       │   └── crud-categoria.ejs
│   │       ├── usuario/
│   │       │   ├── reserva.ejs
│   │       │   ├── editar-usuario.ejs
│   │       │   ├── carrito.ejs
│   │       │   └── recuperar-clave.ejs
│   │       ├── factura.ejs
│   │       ├── nosotros.ejs
│   │       ├── login.ejs
│   │       ├── regitro.ejs
│   │       └── index.ejs
│   ├── controllers/
│   │   ├── producto.controller.js
│   │   ├── usuario.controller.js
│   │   ├── categoria.controller.js
│   │   ├── factura.controller.js
│   │   └── reserva.controller.js
│   ├── models/
│   │   ├── producto.models.js
│   │   ├── usuario.models.js
│   │   ├── categoria.models.js
│   │   ├── factura.models.js
│   │   └── reserva.models.js
│   ├── routes/
│   │   └── router.js
│   └── public/
│       ├── css/
│       │   └── estilos.css
│       └── img/
│           └── logon.png
├── config/
│   ├── bd.js
│   └── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json 


