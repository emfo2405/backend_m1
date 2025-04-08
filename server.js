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

 app.get("/courses", (req, res) => {

    db.all("SELECT * FROM courses;", (err, rows) => {
        if (err) {
            console.error(err.message);
        }
    res.render("courses", {
        error: "",
        rows: rows
    });
    });
 });

 app.get("/about", (req, res) => {

    res.render("about");
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
        //Ställ fråga till databas med inmatning av värden
        const stmt = db.prepare("INSERT INTO courses(coursecode, coursename, syllabus, progression)VALUES(?,?,?,?);");
        stmt.run(coursecode, coursename, syllabus, progression);
        stmt.finalize();
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