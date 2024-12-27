const max = prompt("Enter Max number ")
let random = Math.floor(Math.random() * max) + 1;

let guss = prompt("Guss the Number ");
while (true) {
    if (guss == random) {
        console.log("You Are Right !!!");

    }
    else if (guss == "quit") {
        console.log("You Are Quit Game!!");
    }
    else {
        guss = prompt("your guss is worng please try again later !!");
    }

}
