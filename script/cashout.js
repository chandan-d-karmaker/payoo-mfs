document.getElementById("btn-cashout").addEventListener("click", function()
{
    // get agent number and verify
    const agentNum = document.getElementById("agent-number");
    const agentNumValue = agentNum.value;
    // console.log(agentNumValue);
    if(agentNumValue.length != 11 ){
        alert("Invaild Agent Number!");
        return;
    }

    // get cashout amount
    const cashoutMoney = document.getElementById("cashout-money");
    const cashOutValue = cashoutMoney.value;
    console.log(cashOutValue);

    // get current balance
    const balanceEle = document.getElementById("balance");
    const balance = balanceEle.innerText;
    console.log(balance);

    // calculate new balance
    const newBalance = Number(balance) - Number(cashOutValue);
  
    if(newBalance<0){
        alert("Insufficient Amount");
        return;
    }

    // get pass and verify
    const userPass = document.getElementById('user-pass');
    const pass = userPass.value;

    if(pass == '115912'){
        alert("CashOut successful");
        console.log("New balance: ", newBalance);
        balanceEle.innerText = newBalance;

    } else{
        alert("Invalid Pin!");
        return;
    }
    
})