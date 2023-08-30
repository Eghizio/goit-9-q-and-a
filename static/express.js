const express = require("express");
const fs = require("node:fs");

const createFilesList = (directory) => {
  const files = fs.readdirSync(directory);
  const items = files.map(filename => `<li><a href="/images/${filename}">${filename}</a></li>`);
  return `<ul>${items.join("\n")}</ul>`;
};

const app = express();

app.use("/images", express.static("./public"));

app.get("/", (req, res) => res.send(createFilesList("./public")));

app.listen(3002, () => console.log("Hello from express on 3002"));