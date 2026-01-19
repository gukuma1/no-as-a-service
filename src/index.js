const express = require("express");
const rateLimit = require("express-rate-limit");
const phrases = require("./phrases");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
});

app.use(limiter);

app.get("/no", (req, res) => {
  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  res.json({ answer: phrase });
});

app.listen(3000, () => {
  console.log("NaaS running on port 3000");
});
