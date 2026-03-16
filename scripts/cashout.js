let addMoneyBtn = document.getElementById("add-money-btn");
console.log(addMoneyBtn);

let cashoutBtn = document.getElementById("cash-out-btn");
console.log(cashoutBtn);


let addMoneySection = document.getElementById("add-money-section");
let cashOutSection = document.getElementById("cash-out-section");

addMoneyBtn.addEventListener("click", function()
{
    // sobai k age hide koro
    addMoneySection.classList.add("hidden");
    cashOutSection.classList.add("hidden");

    // remove hidden
    console.log(addMoneySection);
    
    addMoneySection.classList.remove("hidden")

})

cashoutBtn.addEventListener("click", function()
{
    // sobai k age hide koro
    addMoneySection.classList.add("hidden");
    cashOutSection.classList.add("hidden");
    console.log(cashOutSection);
    

    // remove hidden

    cashOutSection.classList.remove("hidden")

})



let withDrawbtn = document.getElementById("with-draw-btn");
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



console.log("HEllo from cashout js");
