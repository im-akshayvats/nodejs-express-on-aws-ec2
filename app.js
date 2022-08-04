const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>CI/CD Integration with Github and AWS</h1> <h4>Message: Success</h4> <p>Version 1.0</p>');
});

app.get('/products', (req, res) => {
  res.send([
    {
      productId: 101,
      price: 99
    },
    {
      productId: 102,
      price: 55
    }
  ])
});

app.listen(port, () => {
  console.log('App is listening on port: ', port);
})