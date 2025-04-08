const express = require("express");
const bodyParse = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

//Anslutning till databas
const db = new sqlite3.Database("./db/courses.db");

//Inställningar
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

