let todo = [];
let req = prompt("Enter your Request ");
while (true) {
    if (req == "quit") {
        console.log("Exit Task !!");
        break;
    }
    else if (req == "add") {

        let item = prompt("Enter item name ");
        todo.push(item);
        console.log("Add Iteam !!");
    }
    else if (req == "list") {
        console.log("------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        console.log("------------");
    }
    else if (req == "delete") {
        let indx = prompt("Enter delete Index ");
        todo.pop(indx, 1);
        console.log("Delete Index");

    }
    else {
        console.log("Enter Valid Request !!");
    }
    req = prompt("Enter your Request ");
}



