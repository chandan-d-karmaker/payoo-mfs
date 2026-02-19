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
    const currentBalance = getBalance();

    // calculate new balance
    const newBalance = currentBalance - Number(cashOutValue);
  
    if(newBalance<0){
        alert("Insufficient Amount");
        return;
    }

    // get pass and verify
    const pass = getValueOfInput("user-pass-out");

    if(pass == '1234'){
        alert("CashOut successful");
        setBalance(newBalance);

    } else{
        alert("Invalid Pin!");
        return;
    }
    
})