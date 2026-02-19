// returns the value of any element by ID
function getValueOfInput(id)
{
    const ip = document.getElementById(id);
    const value = ip.value;
    console.log(value);
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
function showOnly(id){
    const addMoney = document.getElementById("add-money-section");
    const cashOut = document.getElementById("cash-out-section");
    const transferMoney = document.getElementById("transfer-section");
    const getBonus = document.getElementById("bonus-section");
    const payBill = document.getElementById("pay-bill-section");
    const History = document.getElementById("history-section");


    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    History.classList.add("hidden");

   const show = document.getElementById(id);
   show.classList.remove("hidden");
}