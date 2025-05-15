const express = require('express');
const client = require('prom-client');
const app = express();

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

app.get('/', (req, res) => {
  res.send('Hello from Node.js app!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => console.log('App listening on port 3000'));
