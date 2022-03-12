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

const update_collection = async (req,res) => 
{
    var response = { message: '', status: true, result: null }

    try
    {
        const conn = await mongo.get_connection();

        const collection = await conn.db(req.body.name_db).collection(req.body.collection);

        console.log(req.body.filter);
        var upd_mongo = await collection.updateOne(req.body.filter,req.body.object);

        console.log(upd_mongo);
        if(upd_mongo.insertedCount > 0)
        {
            response.result = { id_mongo: upd_mongo.insertedIds['0'] }
        }
        else
        {
            response.message = 'No se pudo insertar',
            response.status = false;
        }
    } 
    catch (error)
    {
        console.log(error);
        response.message = error;
        response.status = false;
    }

    res.json(response);
}

module.exports = 
{
    add_collection,
    update_collection
}