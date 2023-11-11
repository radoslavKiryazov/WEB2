import express from "express";
import { POKEMON } from "../pokemon.js";

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const result = POKEMON[id - 1];
  result
    ? res.status(200).send(result.name.japanese)
    : res.status(404).send("Could not fetch pokemon");
});

export { router as PokemonRouter };
