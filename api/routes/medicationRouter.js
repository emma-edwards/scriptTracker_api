const express = require('express');
const router = express.Router();

const { getMedications } = require('../controller/medicationController')

router.get('/get', getMedications);

module.exports = router;