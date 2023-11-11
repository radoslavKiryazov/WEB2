import express from "express";
import { HelloRouter } from "./routes/hello.js";
import { PokemonRouter } from "./routes/pokemonRoute.js";

const app = express();
app.use(logger);
app.use("/hello ", HelloRouter);
app.use("/pokemon", PokemonRouter);

function logger(req, res, next) {
  console.log(
    `${req.protocol}//${req.get("host")} ${
      req.originlUrl
    } ${new Date().toLocaleDateString()}`
  );
  next();
}

app.listen(3000);
