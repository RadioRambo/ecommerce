const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const client = await MongoClient.connect(
      "mongodb://root:example@mongodb:27017",
      { useUnifiedTopology: true }
    );
    const db = client.db("yourdbname");
    const collection = db.collection("yourcollectionname");
    const data = await collection.find().toArray();
    res.json(data);
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
