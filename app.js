const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from NodeJs backend.");
});

app.get('/current-time', (req, res) => {
  let date = new Date();

  res.send(date.toString());
});

app.get('/json', (req, res) => {
  let array = [
    1,2, "node"
  ];

  res.send(JSON.stringify(array));
});
 
module.exports.app = app;
