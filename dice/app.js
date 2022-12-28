const ejs = require("ejs");
const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function (req, res) {
    res.render("Home");
})



app.listen(3000, function () {
    console.log("this app is listening on port 3000");
})

