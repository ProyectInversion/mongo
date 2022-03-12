const mongo = require('../Connection/conn_sql');

const add_collection = async (req, res) => 
{
    var response = { message: '', status: true, result: null }

    try
    {
        const conn = await mongo.get_connection();

        const collection = await conn.db(req.body.name_db).collection(req.body.collection);

        var add_mongo = await collection.insertMany([req.body.object]);

        if(add_mongo.insertedCount > 0)
        {
            response.result = { id_mongo: add_mongo.insertedIds['0'] }
        }
        else
        {
            response.message = 'No se pudo insertar',
            response.status = false;
        }
    } 
    catch (error)
    {
        response.message = error;
        response.status = false;
    }

    res.json(response);

} 

module.exports = 
{
    add_collection
}