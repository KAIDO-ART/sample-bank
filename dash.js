let myCheckingBalance = parseInt(document.getElementById("myCheckingBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 490000) {
      alert("Insufficient Balance.")
   } else {
      // var findUserBankAccount = enterName + "BankBalance";
      // var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      // var myCheckingBalance = parseInt(document.getElementById("myCheckingBalance").innerText) - enterAmount
      // document.getElementById("myCheckingBalance").innerText = myCheckingBalance
      // document.getElementById(findUserBankAccount).innerHTML = finalAmount;
    //   alert(`Successful Transaction !!  
    //   $${enterAmount} is sent to ${enterName}.`)


      alert(`Your Account has been temporarily barred from making transactions. Please contact the customer care!!`)

}

// var y = document.getElementById("myCheckingBalance").value;
// var z = document.getElementById("mySavingsBalance").value;
// var x = y + z;
// document.getElementById("myTotalBalance").innerHTML = x;


}
 
