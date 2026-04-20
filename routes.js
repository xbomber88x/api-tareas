const express = require('express');
const router = express.Router();
let tareas = require('./data');

// GET: listar todas las tareas
router.get('/', (req, res) => {
  res.status(200).json(tareas);
});

// GET: obtener una tarea por id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  res.status(200).json(tarea);
});

// POST: crear una nueva tarea
router.post('/', (req, res) => {
  const { titulo, descripcion, completada } = req.body;

  if (!titulo || !descripcion || typeof completada !== 'boolean') {
    return res.status(400).json({
      mensaje: 'Datos inválidos. Debes enviar titulo, descripcion y completada(boolean).'
    });
  }

  const nuevaTarea = {
    id: tareas.length + 1,
    titulo,
    descripcion,
    completada
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// PUT: actualizar una tarea existente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  const { titulo, descripcion, completada } = req.body;

  if (!titulo || !descripcion || typeof completada !== 'boolean') {
    return res.status(400).json({
      mensaje: 'Datos inválidos. Debes enviar titulo, descripcion y completada(boolean).'
    });
  }

  tarea.titulo = titulo;
  tarea.descripcion = descripcion;
  tarea.completada = completada;

  res.status(200).json(tarea);
});

// DELETE: eliminar una tarea
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  tareas = tareas.filter(t => t.id !== id);
  res.status(200).json({ mensaje: 'Tarea eliminada correctamente' });
});

module.exports = router;