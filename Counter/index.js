//Initialisation
let number = document.getElementById("number");
//Color of Number
function color(){
    if (number.innerHTML>0)
        number.style.color = 'green';   
    else if (number.innerHTML==0)
        number.style.color = 'black';
    else 
        number.style.color = 'red';
}

/************************************************************************ RESET ********************************************************************/
function reset(){
    number.innerHTML = 0;
    color();
}
/************************************************************************ INCREASE ********************************************************************/
function increase(){
    number.innerHTML++;
    color();
}
/************************************************************************ RESET ********************************************************************/
function decrease(){
    number.innerHTML--;
    color();
}

