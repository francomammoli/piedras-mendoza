const express = require('express');

const listadoContoller = require('../controllers/listadoController');
const router = express.Router();

router.get('/',listadoContoller.home);


module.exports = router;