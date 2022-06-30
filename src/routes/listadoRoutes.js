const express = require('express');

const listadoContoller = require('../controllers/listadoController');
const router = express.Router();

router.get('/',listadoContoller.fullstack);
router.get('/backend',listadoContoller.backend);
router.get('/frontend',listadoContoller.frontend);


module.exports = router;