var express = require('express');
var router = express.Router();



// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "***************";
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');

// idが１のドキュメントを取
const query = { id: 2 };
const note = await notes.findOne(query);

res.json(note.title);
})
module.exports = router;

//mongodb+srv://2401100270cu:2401100270cu@cluster0.56gxr4f.mongodb.net/?appName=Cluster0