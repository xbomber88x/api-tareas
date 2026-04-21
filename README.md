# API de Tareas con Express.js

## Descripción
Esta API REST permite gestionar tareas utilizando Node.js y Express. Implementa operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

---

## Instalación

1. Clonar el repositorio:
git clone https://github.com/xbomber88x/api-tareas.git

2. Entrar al proyecto:
cd api-tareas

3. Instalar dependencias:
npm install

4. Ejecutar:
node index.js

---

## Endpoints

### GET /tareas
Obtiene todas las tareas.

### POST /tareas
Crea una nueva tarea.

Ejemplo:
- titulo: Nueva tarea
- descripcion: Ejemplo
- completada: false

### PUT /tareas/:id
Actualiza una tarea.

### DELETE /tareas/:id
Elimina una tarea.

---

## Pruebas

Se probaron todos los endpoints utilizando Postman:
- GET /tareas
- POST /tareas
- PUT /tareas/:id
- DELETE /tareas/:id

Ejemplos:

GET http://localhost:3000/tareas

POST http://localhost:3000/tareas
Body:
- titulo: Nueva tarea
- descripcion: Ejemplo
- completada: false

PUT http://localhost:3000/tareas/5

DELETE http://localhost:3000/tareas/5

---

## Estructura

- index.js: servidor
- routes.js: rutas
- data.js: datos
