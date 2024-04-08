const Client = require('../models/clientModel');

const clientController = {
    getAllClients: async(req,res) => {
        try {
            const client = await Client.find();
            res.json(client);
        } catch (error) {
            console.error('Error getting all clients: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getClient: async(req,res) => {
        const id = req.params._id;
        try {
            const clientById = await Client.findById(id);
            res.json(clientById);
        } catch (error) {
            console.error('Error getting client: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getClientByEmail: async(req,res) => {
        const {email} = req.params;
        try {
            const clientByEmail = await Client.find({email:email});
            res.json(clientByEmail);
        } catch (error) {
            console.error('Error getting client: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getClientByGender: async(req,res) => {
        const {gender} = req.params;
        try {
            const clientByGender = await Client.find({gender:gender});
            res.json(clientByGender);
        } catch (error) {
            console.error('Error getting client by gender: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    getClientByAge: async(req,res) => {
        const {age} = req.params;
        try {
            const clientByAge = await Client.find({age:age});
            res.json(clientByAge);
        } catch (error) {
            console.error('Error getting client by age: ', error);
            res.status(500).json({messge:'Internal Server Error'});
        }
    },
    createClient: async(req,res) => {
        try {
            const clientData = req.body;
            const newClient = new Client(clientData);
            const savedClient = await newClient.save();
            res.status(201).json(savedClient);
        } catch (error) {
            console.error('Error creating client: ', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    updateClient: async(req,res) => {
        try {
            const{_id} = req.params;
            const clientUpdate = await Client.findOneAndUpdate({_id:_id},{$set:{name:'Pablo'}});
            res.json(clientUpdate);
        } catch (error) {
            console.error('Error updating client', error);
            res.status(500).json({message: 'Internal Server Error'})
        }
    },
    deleteClient: async(req,res) => {
        try {
            const {_id} = req.params;
            const deleteClient = await Client.findOneAndDelete({_id:_id});
            res.json(deleteClient);
        } catch (error) {
            console.error('Error when deleting client',error);
            res.status(500).json({message: 'Internal Server Error'})
        }
    }
};

module.exports = clientController;