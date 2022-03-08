//Initialisation
let bodyColor = document.body;
let colorCode = document.getElementById("colorCode");

/************************************************************** FINITE NUMBER OF COLORS ***********************************************************/
//Random number inside [m,M]
function randint(m,M){			
    return (Math.floor(Math.random()*(M-m)));
}	

//Main Program
let colors = ["blue","green","brown","grey","red","pink","yellow","black","orange","purple","aqua"];
function changeBackgroundFinite(){
    let x = randint(0,colors.length);
    colorCode.innerHTML = colors[x];
    bodyColor.style.backgroundColor = colors[x];
}
/************************************************************* INFINITE NUMBER OF COLORS **********************************************************/
//Random string of 6 characters
function randstr(){
    let str = "";
    let ch = "0123456789abcdefABCDEF";
    for (let i = 0;i<6;i++){
        let index = randint(0,ch.length);
        str += ch[index];
    }
    return(str);
}

//Main Program
function changeBackgroundInfinite(){
    let str = randstr();
    colorCode.innerHTML = '#' + str;
    bodyColor.style.backgroundColor = '#' + str;
}