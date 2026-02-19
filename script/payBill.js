document.getElementById("btn-pay-now").addEventListener("click", function()
{   
    // get service type
    const serviceType = getValueOfInput("service");
    if(serviceType == 'Services'){
        alert("Select a service First");
        return;
    }

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

    if(pass == '115912'){
        alert(`${serviceType} bill paid successfully at ${new Date()}`);
        setBalance(newBalance);

    } else{
        alert("Invalid Pin!");
        return;
    }
    
})