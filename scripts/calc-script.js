var leftOperand = null;
var rightOperand = null;
var operation = null;

document.addEventListener('click', function(e){
    var result = document.getElementById("result").value;
    if (!(e.target.id === "0" && (result.trim() === "0" || result.trim().length === 0))) {
        if(e.target.className.includes("green")){
            if (result.trim() === "0") {
                document.getElementById("result").value = "";    
            }
            document.getElementById("result").value += e.target.innerText;
        }        
    }
    if (e.target.className === "operator") {
        leftOperand = document.getElementById("result").value;
        operation = e.target.id;
    }
    
    else {
        document.getElementById("result").value = leftOperand;
    }

    if (e.target.id === "equals") {
        document.getElementById("result").value = performOperation(leftOperand, operation, Number(document.getElementById("result").value));
        leftOperand = null;
        operation = null;
        rightOperand = null;
        console.log(leftOperand + e.target.textContent + rightOperand + " 4");
    }
});

function performOperation(left, operator, right) {
    switch(operator) {
        case 'add':         return left + right;
        case 'subtract':    return left - right;
        case 'multiply':    return left * right;
        case 'divide':      return left / right;
    }
}