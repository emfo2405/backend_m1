## Moment 1 - Backend-baserad webbutveckling
Syftet med uppgiften var att skapa en applikation där Express, EJS och SQLite används. En databas skapas för kursinformation och fylls på genom ett formulär på webbplatsen. Innehållet i databasen visas även 
på webbplatsen. Webbplatsen består av tre sidor, en för att visa tillagda kurser, en med ett formulär för att kunna lägga till kurser och en som beskriver uppgiften och tillvägagångssättet.
Databasen skapades genom att använda SQLite och består av 1 tabell med 5 kolumner, ett id-nummer, kurskod, kursnamn, kursplan och progression. Alla fält matas in med text och sparas i databasen. 
Nya kurser läggs till via ett HTML-formulär och den inmatade texten från formuläret förs in i databasen. Dessa kurser visas sedan på startsidan där även en funktion för att radera kurser finns.
