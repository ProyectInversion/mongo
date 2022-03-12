/*
const mongoose = require('mongoose');

const mongo =
{
    useNewUrlParser:true,
    useUnifiedTopology:true
} 

mongoose.connect(urlMongo,mongo)
.then(db=>console.log('connected to mongo'))
.catch(err=>console.error(err))

module.exports = mongoose;
*/
const config = require('../config')

var urlMongo = `mongodb://${config.SERVIDOR}:${config.PUERTO_BD}`;

const { MongoClient } = require('mongodb');

const client = new MongoClient(urlMongo);

const get_connection = async () => 
{
    var respuesta = null;    
    try {
        
        respuesta = await client.connect();

    } catch (error) {
        console.log(error);
    }
    return respuesta
}

module.exports = {get_connection};


