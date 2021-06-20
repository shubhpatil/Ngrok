const express = require("express");
const ngrok = require("ngrok");
const app = express();

// PORT
const port = 5000;

// ROUTES
app.get("/", async (req, res) => {
  res.send("Hello NGROK world");
});

// EXPRESS SERVER
app.listen(port, async () => {
  console.log(`Server Running on Localhost : ${port}`);
  const url = await ngrok.connect(3000);
  console.log(`ngrok server : ${url}`);
});
