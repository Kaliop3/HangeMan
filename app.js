const rs = require("readline-sync");

let date = ["pomidor", "marchew", "pietruszka", "seler", "chrzan", "kapusta", "szpinak", "cebula", "czosnek", "por", "rzodkiew", "poziomka", "malina", "aronia", "agrest", "kalafior", "morela", "brzoskwinia", "winogrono", "cytryna", "grejpfrut", "banan"];
let los = Math.floor(Math.random() * date.length);
let secret = date[los];
let secretarray = secret.split("");
let podane = [];

const czyDobrze = (h) => {
    let dobreZnaki = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    if (dobreZnaki.indexOf(h.charCodeAt(0)) == -1) {
        console.log("Nie ma tej litery");
        return false;
    }
    else {
        return true;
    }
}

const czyWyraz = (s) => {
    if (secret.toUpperCase().indexOf(s) == -1) {
        console.log("spróboj jeszcze raz");
        return false;
    }
    else {
        return true;
    }
}

const czyCały = () => {
    for (i = 0; i < secretarray.length; i++) {
        let l = secretarray[i].toUpperCase();
        if (podane.indexOf(l) == -1) {
            return false;
        }
    }
    return true;
}

console.log("Witam w grze szubienica prosze odgadnąć hasło którym jest jakieś warzywo lub owoc")
let hange = ["+---------------------+\n|    ____________     |\n|    |/               |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |          |     |\n|    |          &     |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |          |     |\n|    |          |     |\n|    |          |     |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|     |\n|    |        / |     |\n|    |          |     |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|\\    |\n|    |        / | \\   |\n|    |          |     |\n|    |                |\n|    |                |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|\\    |\n|    |        / | \\   |\n|    |          |     |\n|    |         /      |\n|    |        /       |\n| __ | __             |\n+---------------------+",
    "+---------------------+\n|    ____________     |\n|    |/         |     |\n|    |          |     |\n|    |         ( )    |\n|    |          &     |\n|    |         /|\\    |\n|    |        / | \\   |\n|    |          |     |\n|    |         / \\    |\n|    |        /   \\   |\n| __ | __             |\n+---------------------+",]



const pokaz = () => {
    let line = "";
    for (i = 0; i < secretarray.length; i++) {
        if (podane.indexOf(secretarray[i].toUpperCase()) == -1) {
            line += "_ ";
        }
        else {
            line += secretarray[i].toUpperCase() + " ";
        }
    }
    console.log(line);
}
let proba = 7;




let string;

while (proba > 0) {
    pokaz();
    console.log("Pozostało Ci " + proba + " prób\nStrzały: " + podane);
    let wybor;
    do {
        wybor = rs.question("Posze podaj litere (A-Z): ").toUpperCase();
    } while (!czyDobrze(wybor));
    console.log("Twoim wyborem było : " + wybor + "");
    if (podane.indexOf(wybor) != -1) {
        console.log("\tByła juz ta litera ");
    }
    else {
        podane.push(wybor);
        if (czyWyraz(wybor) == true) {
            if (czyCały() == true) {
                console.log(" \t\t\tHura wygrales gre");
                break;
            }
            else {
                console.log(" \tHura zgadles litere");
            }
        }
        else {
            proba--;
            console.log(hange[hange.length - proba - 1]);
        }
    }
}
console.log("Hasło to było: " + secret);