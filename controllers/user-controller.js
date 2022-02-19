const User = require('../models/user');

const handleError = (res, error) => {
    console.log(error);
    res.send({ msg: 'error' });
}

const getUser = (req, res) => {
    User
        .findById(req.params.id)
        .then(user => res.send(user))
        .catch((error) => handleError(res, error));
}

const deleteUser = (req, res) => {
    User
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => handleError(res, error));
}

const editUser = (req, res) => {
    const { name } = req.body;

    const { id } = req.params;
    User
        .findByIdAndUpdate(id, { name })
        .then((result) => res.send('edited'))
        .catch((error) => handleError(res, error));
}

module.exports = {
    getUser,
    deleteUser,
    editUser
};
