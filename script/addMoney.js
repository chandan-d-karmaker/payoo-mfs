document.getElementById("btn-add").addEventListener("click", function(){
    // console.log("Add money btn clicked")

    // get bank account
    const bankAcc = getValueOfInput("bank");
    if(bankAcc == 'Select a bank'){
        alert("Select a bank First");
        return;
    }

    // get account number
    const accNum = getValueOfInput("acc-number");
    if(accNum.length != 11){
        alert("Invalid Account Number");
        return;
    }

    // get add money amount
    const AddAmount = getValueOfInput("add-money");

    // update balance
    const currBal = getBalance();
    const newBalance = currBal + Number(AddAmount);

    // check pass
    const pass = getValueOfInput("user-pass");

    if(pass == '115912'){
        alert(`Add Money Successfully from ${bankAcc} at ${new Date()}`);
        setBalance(newBalance);

    } else{
        alert("Invalid Pin!");
        return;
    }
})