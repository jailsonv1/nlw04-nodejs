import 'reflect-metadata';
import express from 'express';

import './database';

const app = express();

// Get => Busca
// Post => Salvar
// Put => Alterar
// Delete => Deletar
// Patch => Alteração Especifica

app.get('/', (req, res) => {
  return res.send('Hello World -NLW04');
});

// 1 param => Rota(Recurso API)
// 2 param => request, response

app.post('/', (req, res) => {
  return res.json({ message: 'Os dados foram salvos com sucesso' });
});

app.listen(3000, () => {
  console.log('server is runing');
});

