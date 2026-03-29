# KanbanPro - Sprint 3

Aplicación tipo tablero Kanban desarrollada con Node.js, Express, Handlebars, Sequelize y PostgreSQL.

Este proyecto corresponde al Sprint 3, donde se implementa una API RESTful completa, autenticación con JWT y conexión de la interfaz con datos reales desde la base de datos.

---

## Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* Sequelize
* Handlebars (hbs)
* bcryptjs
* jsonwebtoken
* dotenv

---

## Instalación

1. Clonar repositorio:

git clone URL_DEL_REPOSITORIO

2. Entrar a la carpeta:

cd EF-M7-sprint2

3. Instalar dependencias:

pnpm install

---

## Variables de entorno (.env)

Crear archivo `.env` en la raíz del proyecto:

PORT=3000
DB_NAME=kanbanpro
DB_USER=postgres
DB_PASSWORD=mi_password
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=mi_clave_secreta

---

## Ejecutar proyecto

pnpm dev

Abrir en navegador:

http://localhost:3000

---

## Poblar base de datos

pnpm seed

---

## Probar CRUD

pnpm crud

---

## Autenticación

### Registro

POST /api/auth/register

Body:

{
"nombre": "Angela",
"email": "[angela@email.com](mailto:angela@email.com)",
"contrasena": "1234567"
}

---

### Login

POST /api/auth/login

Respuesta:

{
"token": "JWT"
}

---

## Uso del token

Agregar en headers:

Authorization: Bearer TU_TOKEN

---

## API REST

### Tableros

GET /api/tableros
POST /api/tableros
PUT /api/tableros/:tableroId
DELETE /api/tableros/:tableroId

---

### Listas

POST /api/tableros/:tableroId/listas
PUT /api/listas/:listaId
DELETE /api/listas/:listaId

---

### Tarjetas

POST /api/listas/:listaId/tarjetas
PUT /api/tarjetas/:tarjetaId
DELETE /api/tarjetas/:tarjetaId

---

## Cómo probar la API (Thunder Client)

1. Registrar usuario usando POST /api/auth/register
2. Iniciar sesión usando POST /api/auth/login
3. Copiar el token que devuelve la API
4. En cada petición agregar header:

Authorization: Bearer TU_TOKEN

5. Probar endpoints protegidos (tableros, listas, tarjetas)

---

## Vistas disponibles

* / → página principal
* /login → iniciar sesión
* /register → registro
* /dashboard → panel principal

El dashboard muestra datos reales desde la base de datos usando Sequelize.

---

## Seguridad implementada

* Contraseñas hasheadas con bcrypt
* Autenticación mediante JWT
* Middleware que protege rutas privadas
* Validación de acceso a recursos

---

## Estructura básica del proyecto

models/
src/
controllers/
routes/
middlewares/
views/
public/

---

## Estado del proyecto

✔ API REST funcional
✔ Autenticación con JWT
✔ Base de datos conectada
✔ Vistas renderizando datos reales

---

## Mejoras futuras

* Editar y eliminar desde la interfaz
* Validaciones más completas
* Mejorar diseño visual
* Implementar migraciones Sequelize

---

## Autor

KanbanPro - Sprint 3
