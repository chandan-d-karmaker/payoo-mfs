document.getElementById("btn-pay-now").addEventListener("click", function()
{   
    // get service type
    const serviceType = getValueOfInput("service");
    if(serviceType == 'Services'){
        alert("Select a service First");
        return;
    }

    // get biller number
    const billerNum = getValueOfInput("biller-acc-number");

    // get pay amount
    const payValue = getValueOfInput("pay-money");

    // get current balance
    const currentBalance = getBalance();

    // calculate new balance
    const newBalance = currentBalance - Number(payValue);
  
    if(newBalance<0){
        alert("Insufficient Amount");
        return;
    }

    // get pass and verify
    const pass = getValueOfInput("user-pass-pay");

    if(pass == '1234'){
        alert(`${serviceType} bill paid successfully at ${new Date()}`);
        setBalance(newBalance);

        // transaction history
        // get the history container
        const history = document.getElementById("history-container");

        // create new history
        const newHistory = document.createElement('div');

        // set inner text
        newHistory.innerHTML = `
            <div id="transaction-card" class="p-5 bg-base-100 rounded-xl">
                Pay Bill Successfully of ${serviceType}  ,Biller number: ${billerNum}  ,Amount: ${payValue}Tk at ${new Date()}  ,Current balance: ${newBalance}
            </div>
            
        `
        // append to parent
        history.appendChild(newHistory);

    } else{
        alert("Invalid Pin!");
        return;
    }
    
})