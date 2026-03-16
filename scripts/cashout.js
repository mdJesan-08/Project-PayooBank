    let withDrawbtn = document.getElementById("withdraw-btn");
    console.log(withDrawbtn);

    withDrawbtn.addEventListener("click",function(){

        // get account Number the number
        let accNum = getValue("agent-number");

        if(accNum.length != 11)
        {
            alert("acc number is not correct");
            return;
        }


        // get the amount
        let amount = getValue("cashout-amount");

        // get current balance
        // let currBal = document.getElementById("balance");

        const newBalance =getBalance()  - Number(amount);
        
        

        if(newBalance < 0)
        {
            alert("Invalid amount");
            return;
        }

        // get the password
        let pass = getValue("cashout-pin");

        if(pass == '1234')
        {
            alert("withdraw Successful");
            setBalance(newBalance);
            return;
        }
        else  alert("Password is wrong");


    })


