const rs = require("readline-sync");
console.log("Witam w grze szubienica prosze odgadnąć hasło którym jest jakieś warzywo lub owoc")
let hange = ["+---------------------+\n|    ____________     |\n|    |/               |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |          |     |\n|    |          &     |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |          |     |\n|    |          |     |\n|    |          |     |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|     |\n|    |        / |     |\n|    |          |     |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|\\    |\n|    |        / | \\   |\n|    |          |     |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|\\    |\n|    |        / | \\   |\n|    |          |     |\n|    |         /      |\n|    |        /       |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|\\    |\n|    |        / | \\   |\n|    |          |     |\n|    |         / \\    |\n|    |        /   |\   |\n| __ | __             |\n+---------------------+",]
let date = ["pomidor", "marchew", "pietruszka", "seler", "chrzan", "kapusta", "szpinak", "cebula", "czosnek", "por", "rzodkiew", "poziomka", "malina", "aronia", "agrest", "kalafior", "morela", "brzoskwinia", "winogrono", "cytryna", "grejpfrut", "banan"];
let los = Math.floor(Math.random() * date.length);
let secret = date[los];
let line = "";
console.log(hange[0]);
for (i = 0; i < secret.length; i++) {
    line += " _";
}
let proba = 0;
let podane = "";
let wybor = "";
console.log(line);
for (let n = 0; n < 31; n++) {
    console.log("Pozostało Ci " + proba + "prób\nStrzały trafione" + podane + "\nProsze zgadnij litere ");
    console.log("Twoim wyborem było : " + wybor + "");
}