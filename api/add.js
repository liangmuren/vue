const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://fanxf:mongo8210@mongo.3mvnf.mongodb.net/test?retryWrites=true&w=majority";

module.exports = async (req, res) => {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = await client.db('vercel');
    if (!!req.query.name) {
        res.status(500);
    }
    const item = {
        name: req.query.name,
        time: Date.now()
    }
    var result = await db.collection("notepad").insertOne(item);

    res.status(200).json(result);
}
