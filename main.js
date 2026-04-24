var g1="Boy";
var g2="Girl";
var chosen = false;
var gender = prompt("are you boy or girl?");
if(gender==g1){
    console.log("A boy character has been chosen to play with");
}
else if(gender==g2){
    chosen=true;
    console.log("A girl character has been chosen to play with");
}

if(chosen==false){
    var firstQ = prompt("both paths first found money and second linos choose one?");
    if(firstQ == "money"){
        var secondQ = prompt("choose kind of money Euro currency or Egyptian pound?")
        if(secondQ == "Egyptian pound"){
            console.log("you win🏆");
        }
        else{
            console.log("you die because , someone kill you and take it");
            console.log("why don't choose egyptian pound , euro currency don't found this days idoit😅");
            console.log("game over");
            console.log("try again");
        }
    }
    else{
        console.log("You are dead, you are crazy this lion😂");
        console.log("game over");
        console.log("try again");
    }
}

if(chosen==true){
    var firstQ = prompt("both paths first found makeup and second lions choose one?");
    if(firstQ == "makeup"){
        var secondQ = prompt("choose kind of makeup france makeup or Egyptian makeup?")
        if(secondQ == "Egyptian makeup"){
            console.log("you win🏆 ");
        }
        else{
            console.log("you die because , makeup contains a toxic elements ");
            console.log("why don't choose egyption makeup , egyption win forever😅😎");
            console.log("game over");
            console.log("try again");
        }
    }
    else{
        console.log("You are dead, you are crazy this lion😂");
        console.log("game over");
        console.log("try again");
    }
}


