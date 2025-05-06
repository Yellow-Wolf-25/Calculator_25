const display = document.getElementById("display");


function append(input){
    display.value+=input;
    console.log(input);
}

function calc(){
    display.value = eval(display.value);
    console.log(display.value);
}

function ClearTheDisplay(){
    display.value = "";
    console.clear();
    console.log("clear");
}