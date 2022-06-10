//Initialisation
let result = document.getElementById("result");

//Value Of Select Option
function change() {
    var select_option = document.getElementById('select_option');
    var option = select_option.options[select_option.selectedIndex];
    var value = option.value;
    return (value);
}

//Random string of n characters
function randstr(n) {
    let str = "";
    let ch = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < n; i++) {
        let index = Math.floor(Math.random() * ch.length);
        str += ch[index];
    }
    return (str);
}

//Main Program
function generate() {
    var value = change();
    let str = randstr(value);
    result.innerHTML = str;
}
