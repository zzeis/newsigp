const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors()); // Habilita o CORS para todas as rotas

app.get('/tweets', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.twitter.com/2/tweets/search/recent',
      {
        headers: {
          Authorization: 'Jul6yFm0K3jhIJtfl39QsQVh2ZfPYwsp8032KCsDWFhqT'
        },
        params: {
          query: 'iguape',
          'tweet.fields': 'created_at,author_id,text'
        }
      }
    );

    res.json(response.data.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Erro ao obter tweets' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
