# API de Tareas con Express.js

## Descripción
Esta API REST permite gestionar tareas utilizando Node.js y Express. Implementa operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

## Instalación

1. Clonar el repositorio:
git clone https://github.com/xbomber88x/api-tareas.git

2. Entrar al proyecto:
cd api-tareas

3. Instalar dependencias:
npm install

4. Ejecutar:
node index.js

## Endpoints

### GET /tareas
Obtiene todas las tareas.

### POST /tareas
Crea una nueva tarea.

Ejemplo:
{
  "titulo": "Nueva tarea",
  "descripcion": "Ejemplo",
  "completada": false
}

### PUT /tareas/:id
Actualiza una tarea.

### DELETE /tareas/:id
Elimina una tarea.

## Pruebas
Se probaron todos los endpoints con Postman (GET, POST, PUT, DELETE).

## Estructura
- index.js: servidor
- routes.js: rutas
- data.js: datos
