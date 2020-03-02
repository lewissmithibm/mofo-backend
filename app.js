const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from NodeJs backend. This is a test POC");
});

app.get('/current-time', (req, res) => {
  let date = new Date();

  let array = {
    time: date.toString()
  }

  res.send(JSON.stringify(array));
});

app.get('/json', (req, res) => {
  let array = [
    1,2, "node"
  ];

  res.send(JSON.stringify(array));
});
 
module.exports.app = app;
