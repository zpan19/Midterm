
function enter(){
    let input =document.getElementById("numberInput").value;
    


    if (input < 0) return "Factorial is not defined for negative numbers";
  
    let result = 1; 
    for (let i = 1; i <= input; i++) {
        result *= i; // Multiply the result by the current number
    }
  
    document.getElementById("output").textContent=`${input} != ${result}`;

  }


