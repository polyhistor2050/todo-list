const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
let newItems = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfDay: day, newListItems: newItems});
});

app.post("/", function(request, respond){
    let newItem = request.body.newItem;
    newItems.push(newItem);
    respond.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is started on port 3000");
});