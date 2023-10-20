let user = prompt("Select your Choice");
let comp = Math.floor(Math.random()*3);
let rc = {
    0: "S",
    1: "W",
    2: "G"
}
// console.log(rc[comp]);
function matchValue(a, b){
    if (rc[comp] == user){
        return "Nobody"
    }
    else if(rc[comp] === "S" && user === "G"){
        return "User"
    }
    else if(rc[comp] === "S" && user === "W"){
        return "Computer"
    }
    else if(rc[comp] === "W" && user === "G"){
        return "Computer"
    }
    else if(rc[comp] === "G" && user === "W"){
        return "User"
    }
    else if(rc[comp] === "G" && user === "S"){
        return "Computer"
    }
    else if(rc[comp] === "W" && user === "S"){
        return "User"
    }
}
let result = matchValue(rc[comp], user)
document.getElementById("main_div").innerHTML = `computer ${rc[comp]} <br> User ${user} <br> Winner is ${result}`;