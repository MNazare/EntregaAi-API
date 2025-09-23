const express = require('express');
const app = express();
const port = 3000;

// Mock de pacotes fictícios
const pacotes = [
  {
    id: 1,
    codigo_rastreio: "BR123456789SP",
    nome: "Smartphone Samsung Galaxy A54",
    descricao: {
      detalhes: "Aparelho novo, lacrado, cor preta",
      peso: "0.45 kg",
      dimensoes: "16x8x5 cm",
      categoria: "Eletrônicos"
    },
    preco: 2200.00,
    origem: "São Paulo - SP",
    destino: "Fortaleza - CE",
    transportadora: "Correios",
    tipo_envio: "SEDEX",
    status_atual: "Em trânsito",
    previsao_entrega: "2025-09-28",
    historico: [
      {
        data: "2025-09-20 08:32",
        local: "Agência São Paulo - SP",
        status: "Objeto postado"
      },
      {
        data: "2025-09-21 14:10",
        local: "Centro de Distribuição - SP",
        status: "Objeto encaminhado para Fortaleza - CE"
      }
    ]
  },
  {
    id: 2,
    codigo_rastreio: "BR987654321RJ",
    nome: "Livro - Inteligência Artificial para Negócios",
    descricao: {
      detalhes: "Livro capa dura, edição 2025",
      peso: "0.80 kg",
      dimensoes: "24x17x4 cm",
      categoria: "Livros"
    },
    preco: 89.90,
    origem: "Rio de Janeiro - RJ",
    destino: "Recife - PE",
    transportadora: "Jadlog",
    tipo_envio: "Econômico",
    status_atual: "Saiu para entrega",
    previsao_entrega: "2025-09-23",
    historico: [
      {
        data: "2025-09-18 09:15",
        local: "Centro de Distribuição - RJ",
        status: "Objeto recebido pela transportadora"
      },
      {
        data: "2025-09-19 18:45",
        local: "Centro de Distribuição - Recife - PE",
        status: "Objeto em rota de entrega"
      }
    ]
  },
  {
    id: 3,
    codigo_rastreio: "BR555333111MG",
    nome: "Fone de Ouvido Bluetooth",
    descricao: {
      detalhes: "Cor branca, bateria 24h, com case",
      peso: "0.15 kg",
      dimensoes: "10x8x4 cm",
      categoria: "Acessórios"
    },
    preco: 350.00,
    origem: "Belo Horizonte - MG",
    destino: "Curitiba - PR",
    transportadora: "Loggi",
    tipo_envio: "Expresso",
    status_atual: "Entregue",
    previsao_entrega: "2025-09-20",
    historico: [
      {
        data: "2025-09-18 11:00",
        local: "Belo Horizonte - MG",
        status: "Objeto coletado"
      },
      {
        data: "2025-09-19 16:20",
        local: "Curitiba - PR",
        status: "Objeto entregue ao destinatário"
      }
    ]
  }
];

app.use(express.json());

// Rota para listar todos os pacotes
app.get('/pacotes', (req, res) => {
  res.json(pacotes);
});

// Rota para buscar um pacote específico pelo ID
app.get('/pacotes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const pacote = pacotes.find(p => p.id === id);
  if (!pacote) {
    return res.status(404).json({ erro: "Pacote não encontrado" });
  }
  res.json(pacote);
});

// Endpoint inicial
app.get('/', (req, res) => {
  res.send('🚚 API de Pacotes Mockada - Rastreamento de Entregas');
});

app.listen(port, () => {
  console.log(`API mockada rodando em http://localhost:${port}`);
});
