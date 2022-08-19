const Task = require('../models').Task

module.exports = {
  index: (req, res) => {
    Task.findAll().then((tasks) => {
      if (tasks.length === 0) {
        res.status(400).send({ message: 'No se encontraron tareas' })
      } else {
        res.status(200).send({ tasks })
      }
    })
  },
  show: (req, res) => {
    const { id } = req.params
    Task.findByPk(id).then((taskStored) => {
      if (!taskStored) {
        res.status(404).send({ message: 'La tarea no existe' })
      } else {
        res.status(200).send({ task: taskStored })
      }
    })
  },
  create: (req, res) => {
    Task.create({
      description: req.body.description,
    })
      .then((result) => {
        res.status(200).send({ message: 'Tarea creada correctamente', result })
      })
      .catch((err) => {
        res.status(500).send({ message: 'Ha ocurrido un error interno', err })
      })
  },
}
