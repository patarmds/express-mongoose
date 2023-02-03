var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');


router.get('/users', UserController.readUsers)
.get('/user/:id', UserController.readUser)
.post('/user', UserController.createUser)
.put('/user/:id', UserController.updateUser)
.delete('/user/:id', UserController.deleteUser)

module.exports = router;
