const express = require("express");
const rateLimit = require("express-rate-limit");
const naas = require("./phrases");
const path = require("path");

const app = express();
app.use(express.json());

app.use(rateLimit({
  windowMs: 60 * 1000,
  max: 60
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const allowedMethods = ["GET", "POST", "PUT"];

function handler(req, res) {
  const resource = req.params.resource;
  const method = req.method;

  if (!naas[resource] || !allowedMethods.includes(method)) {
    return res.status(404).json({
      answer: "Não sabemos o que você quer."
    });
  }

  const responses = naas[resource][method];
  const answer = responses[
    Math.floor(Math.random() * responses.length)
  ];

  res.status(200).json({
    resource,
    method,
    answer
  });
}

app.all("/:resource", handler);
app.all("/:resource/:id", handler);

app.get("/", (req, res) => {
  res.json({
    service: "No as a Service (NaaS)",
    message: "Tudo aqui retorna não."
  });
});

app.listen(3000, () => {
  console.log("NaaS REST API running on port 3000");
});
