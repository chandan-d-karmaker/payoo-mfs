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
    // console.log(AddAmount);

    // update balance
    const currBal = getBalance();
    const newBalance = currBal + Number(AddAmount);

    // check pass
    const pass = getValueOfInput("user-pass-add");

    if(pass == '1234'){
        alert(`Add Money Successfully from ${bankAcc} at ${new Date()}`);
        setBalance(newBalance);

        // transaction history
        // get the history container
        const history = document.getElementById("history-container");

        // create new history
        const newHistory = document.createElement('div');

        // set inner text
        newHistory.innerHTML = `
            <div id="transaction-card" class="p-5 bg-base-100 rounded-xl">
                Add Money Successfully from ${bankAcc} account number ${accNum} at ${new Date()}
            </div>
            
        `
        // append to parent
        history.appendChild(newHistory);

    } else{
        alert("Invalid Pin!");
        return;
    }
})