//jshint esversion6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var items = [];


app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    day:"numeric",
    weekday:"long",
    month:"long",
  }

  var day = today.toLocaleDateString("en-UK", options);

   res.render("list", {DAY:day, newListItems: items})
});

app.post("/", function (req, res) {
 var item = req.body.newItem;
items.push(item);

  res.redirect("/");
});





app.listen(3000, function () {
  console.log("Server started at port 3000");
});
