import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

export { router as HelloRouter };
