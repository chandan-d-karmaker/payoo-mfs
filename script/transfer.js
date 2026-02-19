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
    const pass = getValueOfInput("user-pass-transfer");

    if(pass == '1234'){
        alert(`Transfer Money Successfully to ${sendNumValue} at ${new Date()}`);
        setBalance(newBalance);

        // transaction history
        // get the history container
        const history = document.getElementById("history-container");

        // create new history
        const newHistory = document.createElement('div');

        // set inner text
        newHistory.innerHTML = `
            <div id="transaction-card" class="p-5 bg-base-100 rounded-xl">
                Transfer Money Successfully to ${sendNumValue} , Amount: ${transferValue}Tk  at ${new Date()}  Current balance: ${newBalance}
            </div>
            
        `
        // append to parent
        history.appendChild(newHistory);

    } else{
        alert("Invalid Pin!");
        return;
    }
    
})