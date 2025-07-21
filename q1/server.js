const express = require('express');
// const path = require('path');
const app = express();
// const PORT = 3000;

app.use(express.static(__dirname));

app.get('/gethello', (req, res) => {
  res.send("Hello NodeJS!!");
});

app.listen(8000,()=>{
  console.log("server running at 8000");
});