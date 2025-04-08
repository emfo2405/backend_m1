const sqlite3 = require("sqlite3").verbose();

//Skapa en databas för projektet
const db = new sqlite3.Database("./db/courses.db");

//Skapa tabell i databas (id, kurskod, kursnamn, kursplan, progression)
//Gör så att databas raderas för att därefter uppdateras
db.serialize(() => {
    db.run("DROP TABLE IF EXISTS courses;");

    db.run(`
        CREATE TABLE courses(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        coursecode TEXT NOT NULL,
        coursename TEXT NOT NULL,
        syllabus TEXT NOT NULL,
        progression TEXT NOT NULL);
        `);
});

db.close();