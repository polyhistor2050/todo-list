const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//array to store new items 
let newItems = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get("/", function(req, res){
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("list", {listTitle: day, newListItems: newItems});
});

app.post("/", function(request, respond){
    let newItem = request.body.newItem;
    if(request.body.list === "Work"){
        workItems.push(newItem);
        respond.redirect("/work");
    }else {
        newItems.push(newItem);
        respond.redirect("/");
    }
});



app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.listen(3000, function(){
    console.log("Server is started on port 3000");
});