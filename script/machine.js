function getValueOfInput(id)
{
    const ip = document.getElementById(id);
    const value = ip.value;
    return value;
}

function getBalance(){
    const balanceEle = document.getElementById("balance");
    const balance = balanceEle.innerText;
    return balance;
}

function setBalance(value){
    const balanceEle = document.getElementById("balance");
    balanceEle.innerText = value;
}