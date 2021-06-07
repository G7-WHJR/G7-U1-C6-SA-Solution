function add() {

    var input1=Number(document.getElementById("n1").value);
    var input2=Number(document.getElementById("n2").value)
    var result = input1 + input2;

    console.log(result);
    document.getElementById("answer").innerHTML=result;
}
function subtract() {

    var input1=Number(document.getElementById("n1").value);
    var input2=Number(document.getElementById("n2").value)
    var result = input1 - input2;
    
    console.log(result);
    document.getElementById("answer").innerHTML=result;
}


    
    