const mongodb = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// To fetch all pizza

// To fetch all pizza
app.get("/YourOrder", (req, res) => {
  mongodb.connect("mongodb://localhost:27017",{ useUnifiedTopology: true }, (err, conn) => {
    if (err) throw err;
    const db = conn.db("pizzeria");
    const coll = db.collection("pizza");
    coll.find({}).toArray((err, docs) => {
      if (err) throw err;
      res.send(docs);
    });
  });
});

// to fetch all ingredients
app.get("/YourPizza", (req, res) => {
  mongodb.connect("mongodb://localhost:27017",(err, conn) => {
    if (err) throw err;
    const db = conn.db("pizzeria");
    const coll = db.collection("ingredients");
    coll.find({}).toArray((err, docs) => {
      if (err) throw err;
      res.send(docs);
    });
  });
});
app.listen(3001, () => console.log("Server listening"));