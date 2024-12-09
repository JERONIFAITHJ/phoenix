import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import graphql from "./servers/graphql";

async function main() {
  const app = express();
  const port = 3000;

  app.use(bodyParser.json());
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("Hello NOD Readers!");
  });

  await graphql(app);

  app.listen(port, () => {
    return console.log(
      `Express server is listening at http://localhost:${port} 🚀`
    );
  });
}

void main();
