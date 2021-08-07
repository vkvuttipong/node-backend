const express = require('express');
const router = express.Router();
const empController = require('../controllers/employee-controller');

router.get('/all', empController.getAllEmpployee); // ดึงข้อมูล 
router.get('/id/:id', empController.getAllEmpployeeByID); // ดึงข้อมูล 
router.post('/save', empController.saveEmpployee);

module.exports = router;