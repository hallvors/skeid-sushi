const express = require("express");
const { engine } = require("express-handlebars");

const sushi = require('./data/sushi.json');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use("/foto", express.static("foto"));


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get("/", (req, res) => {
  res.render("home", {
    items: sushi
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
