import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('express is great');
});
app.listen(8080, () => {
  return console.log('running on 8080');
});