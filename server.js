import express from "express";
import path from "path";
import enforce from "express-sslify";
import compression from "compression";
import cors from "cors";
import {fileURLToPath} from "url";
import {dirname} from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 4000;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(enforce.HTTPS({trustProtoHeader: true}));
  app.use(compression());
}

app.use(cors());
app.use(express.static(path.join(__dirname, "dist"), {
  setHeaders(res, path) {
    if (path.endsWith(".js")) {
      res.set("Content-Type", "application/javascript");
    }
  }
}));

app.get("/*", (_, res) => {
  res.sendFile("/index.html");
});

app.listen(port, () => {
  console.log("Server is up!");
});