const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const router = require("./router/api");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", "./views");
app.set("view engine", "ejs");
app.use("/", router);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
