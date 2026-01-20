# No as a Service (NaaS)

API REST de exemplo que **aparenta ser um sistema de vendas**, mas **sempre responde com um “não” contextual**.

---

## O que é

- API em Node.js + Express
- Endpoints comuns de vendas
- Todos os métodos funcionam (`GET`, `POST`, `PUT`)
- Nenhuma operação é aceita
- Respostas negativas aleatórias (NaaS)

---

## Endpoints

Recursos disponíveis:

- `/products`
- `/clients`
- `/orders`

Métodos suportados:

- `GET`
- `POST`
- `PUT`

Exemplos:

```http
GET  /products
POST /products
PUT  /products/123

Inspirado em:
https://github.com/hotheadhacker/no-as-a-service