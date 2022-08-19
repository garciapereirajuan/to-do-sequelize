const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')

router.route('/tasks')
    .get(TaskController.index)
    .post(TaskController.create)

router.route('/tasks/:id')
    .get(TaskController.show)

module.exports = router