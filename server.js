const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

//Anslutning till databas
const db = new sqlite3.Database("./db/courses.db");

//Inställningar
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Routing
app.get("/", (req,res) => {
    res.render("index", {
        error: ""
    });
});

//Skapa ny kurs
app.post("/", (req,res) => {
    let coursecode = req.body.coursecode;
    let coursename = req.body.coursename;
    let syllabus = req.body.syllabus;
    let progression = req.body.progression;
    let error = "";

    //Validera input
    if(coursecode !== "" && coursename !== "" && syllabus !== "" && progression !== "") {

    }else {
        error = "Kontrollera att alla fält är korrekt ifyllda";
    }

    res.render("index", {
        error: error
    });

});

//Starta applikationen
app.listen(port, () => {
    console.log("Application started on port " + port);
});