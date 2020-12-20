const express = require('express');

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Docker!');
});

app.listen(PORT, HOST, () => {
  console.log('⚙️  Server is running on port 3333');
});
