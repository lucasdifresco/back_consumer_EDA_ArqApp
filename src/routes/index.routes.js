const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.post('/Initialize', controller.Initialize);

module.exports = router;