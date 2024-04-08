const mongoose = require('mongoose');

const connectDatabase = async() => {
    try {
        await mongoose.connect('mongodb+srv://juanhoyos0422:juan123@filtro.ulxmfsa.mongodb.net/')
        .then(()=>console.log('MongoDB Connected'))
        .catch((err)=>console.log(err))

    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectDatabase;