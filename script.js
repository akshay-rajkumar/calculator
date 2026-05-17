const display = document.getElementById("display");

function appendToDisplay(input){
    display.value = display.value + input;
}

function cleardisp(input){
    display.value = "";
}

function calculate(input){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    } 
}