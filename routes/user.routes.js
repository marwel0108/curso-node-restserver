const router = require('express').Router();

const { 
    getUsers,
    postUsers,
    putUsers,
    deleteUsers,
    patchUsers
} = require('../controllers/user.controller');

router.get('/', getUsers);

router.post('/', postUsers);

router.put('/:userId', putUsers);

router.delete('/', deleteUsers);

router.patch('/', patchUsers);


module.exports = router;