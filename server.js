const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3400;

app.use((req, res) => {
  res.status(200).send({
    mensagem: 'Ok, deu certo'
  });
});

app.listen(port, () => `Server listening on port ${port}`);