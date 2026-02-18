document.getElementById("btn-cashout").addEventListener("click", function()
{
    // get agent number and verify
    const agentNumValue = getValueOfInput("agent-number");
    if(agentNumValue.length != 11 ){
        alert("Invalid Agent Number!");
        return;
    }

    // get cashout amount
    const cashOutValue = getValueOfInput("cashout-money");

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
    const pass = getValueOfInput("user-pass");

    if(pass == '115912'){
        alert("CashOut successful");
        console.log("New balance: ", newBalance);
        balanceEle.innerText = newBalance;

    } else{
        alert("Invalid Pin!");
        return;
    }
    
})