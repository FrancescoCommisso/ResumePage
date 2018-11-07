const functions = require("firebase-functions");
const express = require("express");

const app = express();

app.get("/api/customers", (req, res) => {
  console.log("/api/customers be loggin!");
  const customers = [
    { id: 1, firstName: "Marco's ", lastName: "girl" },
    { id: 2, firstName: "Giuliano's", lastName: "girl" },
    { id: 3, firstName: "Gio's", lastName: "girl" },
    { id: 4, firstName: "Diego's", lastName: "girl" }
  ];

  res.json(customers);
});

exports.app = functions.https.onRequest(app);

// const port = 5000;

// app.listen(port, () => `Server running on port ${port}`);
