const express = require("express");
const rateLimit = require("express-rate-limit");
const naas = require("./naasResponses");

const app = express();
app.use(express.json());

app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 60
}));

const allowedMethods = ["GET", "POST", "PUT"];

app.all("/:resource/:id?", (req, res) => {
  const resource = req.params.resource;
  const method = req.method;

  if (!naas[resource] || !allowedMethods.includes(method)) {
    return res.status(404).json({
      answer: "Não sabemos o que você quer."
    });
  }

  const responses = naas[resource][method];

  const answer = Array.isArray(responses)
    ? responses[Math.floor(Math.random() * responses.length)]
    : responses;

  res.status(403).json({
    resource,
    method,
    answer
  });
});

app.get("/", (req, res) => {
  res.json({
    service: "No as a Service (NaaS)",
    message: "Tudo aqui retorna não."
  });
});

app.listen(3000, () => {
  console.log("NaaS REST API running on port 3000");
});
