// Calculate the sum of the 
function getCost(){
    // get user qty for each fruit
    //ParseInt convets (value, 10) 10 signals a decimal number

    var apple = parseInt(document.getElementById("apples").value, 10);
    var orange = parseInt(document.getElementById("oranges").value, 10);
    var banana = parseInt(document.getElementById("bananas").value, 10);

    //toFixed Set the max decimal point to 2 i.e $2.99
    var taxSum = ((apple *.69 + orange * .59 + banana * .49) * .0775)
   document.getElementById("sum").value ="$ "+((apple *.69 + orange * .59 + banana * .49) + taxSum).toFixed(2);
}
// //event listener
// document.getElementById("apples").addEventListener("invalid", inputError);
// document.getElementById("oranges").addEventListener("invalid", inputError);
// document.getElementById("bananas").addEventListener("invalid", inputError);


// Error Event listener
function inputError(){
    //event listener
alert("Must pick a number between 1 to 99 you have " + this.value);
}
// Submit alert key to process order
function s() {
    if (confirm('Do you want to order?')) {
        document.submit();
    } else {
        return false;
    }
 }
// Reset key to reset orders
 function r() {
    if (confirm('Do you want to reset?')) {
        document.getElementById("fruitsForm").reset();
    } else {
        return false;
    }
 }