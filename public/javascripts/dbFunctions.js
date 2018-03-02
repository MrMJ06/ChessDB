var mongoclient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";


module.exports = {
    insert: function insert(obj) {
        mongoclient.connect(url, function (err, db) {

            if (err) {
                throw err;
            }
            var dbo = db.db("chessDB");

            dbo.collection("games").insertOne(obj, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log(result.result);
                db.close();
            });
        });
    },
    find: function findOne(obj){
        mongoclient.connect(url, function (err, db) {

            if (err) {
                throw err;
            }
            var dbo = db.db("chessDB");

            dbo.collection("games").findOne(obj, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log(result.result);
                db.close();
            });
        });
    },
    delete: function deleteOne(obj){
        mongoclient.connect(url, function (err, db) {

            if (err) {
                throw err;
            }
            var dbo = db.db("chessDB");

            dbo.collection("games").deleteOne(obj, function (err, result) {
                if (err) {
                    throw err;
                }
                console.log(result.result);
                db.close();
            });
        });
    }
};