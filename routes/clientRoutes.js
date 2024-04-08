const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController.js');

router.get('/api/v1/clients',clientController.getAllClients);

router.get('/api/v1/getClient/:_id', clientController.getClient);

router.get('/api/v1/getClientByEmail/:email', clientController.getClientByEmail);

router.get('/api/v1/getClientByGender/:gender', clientController.getClientByGender);

router.get('/api/v1/getClientByAge/:age', clientController.getClientByAge);

router.post('/api/v1/createClient', clientController.createClient);

router.put('/api/v1/updateClient/:_id', clientController.updateClient);

router.delete('/api/v1/deleteClient/:_id', clientController.deleteClient);

module.exports = router;