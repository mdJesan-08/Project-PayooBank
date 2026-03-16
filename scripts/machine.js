console.log("Hello from MAchine.js");

function getBalance()
{
    let currBal = document.getElementById("balance");
    return Number(currBal.innerText);
}

function getValue(id)
{
      let selected = document.getElementById(id);
      return selected.value;
}

function setBalance(value)
{
    let currBal = document.getElementById("balance");
    currBal.innerText = value;
}