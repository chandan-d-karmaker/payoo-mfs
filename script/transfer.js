document.getElementById("btn-send-money").addEventListener("click", function()
{
    // get user number and verify
    const sendNumValue = getValueOfInput("send-user-number");
    if(sendNumValue.length != 11 ){
        alert("Invalid User Number!");
        return;
    }

    // get send amount
    const transferValue = getValueOfInput("transfer-money");

    // get current balance
    const currentBalance = getBalance();

    // calculate new balance
    const newBalance = currentBalance - Number(transferValue);
  
    if(newBalance<0){
        alert("Insufficient Amount");
        return;
    }

    // get pass and verify
    const pass = getValueOfInput("user-pass");

    if(pass == '115912'){
        alert(`Transfer Money Successfully to ${sendNumValue} at ${new Date()}`);
        setBalance(newBalance);

    } else{
        alert("Invalid Pin!");
        return;
    }
    
})