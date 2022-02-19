const express = require('express');

const { getUser, deleteUser, editUser } = require('../controllers/user-controller');

const router = express.Router();

router.get('/user/:id', getUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', editUser);

module.exports = router;
