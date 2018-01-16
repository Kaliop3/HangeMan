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
let proba = 7;
let podane = [];
let zleZnaki = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
let dobreZnaki = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
console.log(line);
secretarray = secret.split("");
let wybor = rs.question("Posze podaj litere : ");
for (proba; proba > 0; proba--) {
    console.log("Pozostało Ci " + proba + " prób\nStrzały trafione: " + podane + "\nProsze zgadnij litere! ");
    console.log("Twoim wyborem było : " + wybor.toUpperCase() + "");
    for (i = 0; i < podane.length; i++) {
        if (wybor.charCodeAt(0) == podane[i]) {
            console.log("Czy nie podawałeś już tej liczby ?");
        }
        podane.push(wybor.charCodeAt(0));
    }
    for (let n = 0; n < zleZnaki.length; n++) {
        if (wybor.charCodeAt(0) == zleZnaki[n]) {
            console.log("Nie podałeś litery alfabetu ");
        }
    }
    for (let n = 0; n < dobreZnaki.length; n++) {
        if (wybor.charCodeAt(0) == dobreZnaki[n]) {
            for (let i = 0; i < secretarray.length; i++) {
                if (wybor.charCodeAt(0) == secretarray[i]) {
                    console.log("Super!");
                }
            }
        }

    }
    console.log("Spróboj ponownie");

}