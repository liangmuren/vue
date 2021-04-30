const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fanxf:mongo8210@mongo.3mvnf.mongodb.net/test?retryWrites=true&w=majority";

module.exports = async (req, res) => {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = await client.db('vercel');

    var result = await db.collection("notepad").find().toArray();

    res.status(200).json(result);
}
