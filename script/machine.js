// returns the value of any element by ID
function getValueOfInput(id)
{
    const ip = document.getElementById(id);
    const value = ip.value;
    return value;
}

//  returns the current balance
function getBalance(){
    const balanceEle = document.getElementById("balance");
    const balance = balanceEle.innerText;
    return Number(balance);
}

// set new balance
function setBalance(value){
    const balanceEle = document.getElementById("balance");
    balanceEle.innerText = value;
}

// pass check




// hide and show
// function ShowOnly(id){
//     const 
// }