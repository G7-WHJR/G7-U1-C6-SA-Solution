function add() {
    //1. Take number 1 from input box "n1" and store it in a variable named "input1"
    var input1 = Number(document.getElementById("n1").value);
    
    //2. Take number 2 from input box "n2" and store it in a variable named "input2"
    var input2 = Number(document.getElementById("n2").value);
    
    //3. Add "input1" and "input2" and store it in a variable named "result"
    var result = input1 + input2;
    
    //4.Display the result in an HTML element with id "answer"
    document.getElementById("answer").innerHTML = result;
  }
function subtract() {

    //1. Take number 1 from input box "n1" and store it in a variable named "input1"
    var input1 = Number(document.getElementById("n1").value);
    
    //2. Take number 2 from input box "n2" and store it in a variable named "input2"
    var input2 = Number(document.getElementById("n2").value);
    
    //3. Subtract "input2" from "input1" and store it in a variable named "result"
    var result = input1 - input2;
    
    //4.Display the result in an HTML element with id "answer"
    document.getElementById("answer").innerHTML = result;
}


    
    