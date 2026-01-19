module.exports = {
  products: {
    GET: [
      "Não podemos listar produtos.",
      "Catálogo indisponível.",
      "Você não precisa ver isso."
    ],
    POST: [
      "Não vendemos isso aqui.",
      "Esse produto não será cadastrado.",
      "Produto recusado."
    ],
    PUT: [
      "Produto não pode ser alterado.",
      "Não mexa nisso.",
      "Atualização negada."
    ]
  },

  clients: {
    GET: [
      "Não podemos expor clientes.",
      "Lista de clientes bloqueada."
    ],
    POST: [
      "Não estamos aceitando novos clientes.",
      "Cadastro recusado."
    ],
    PUT: [
      "Dados do cliente não podem ser alterados.",
      "Atualização negada."
    ]
  },

  orders: {
    GET: [
      "Não há pedidos para mostrar.",
      "Nada para ver aqui."
    ],
    POST: [
      "Pedido recusado.",
      "Não vamos processar esse pedido."
    ],
    PUT: [
      "Esse pedido não será alterado.",
      "Mudança de pedido negada."
    ]
  }
};
