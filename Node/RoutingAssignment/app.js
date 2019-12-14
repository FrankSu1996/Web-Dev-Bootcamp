var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    if (animal === "pig") {
        res.send("The pig says 'Oink'");
    }
    else if (animal === "cow") {
        res.send("The cow says 'Moo'");
    }
    else if (animal === "dog") {
        res.send("The dog says 'Woof woof!'");
    }
});

app.get("/repeat/:string/:number", function(req, res) {
    var string = req.params.string;
    var number = req.params.number;
    res.send((string + " ").repeat(number));
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3001, process.env.IP, function() {
    console.log("Server has started!!!");
});