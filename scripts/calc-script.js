var leftOperand = null;
var rightOperand = null;
var operation = null;
var operatorPressed = false;

document.addEventListener('click', function(e){
    var result = document.getElementById("result").value;

    if (!(e.target.id === '0' && result === '0')) {
        if(e.target.className.includes("green")){
            //document.getElementById("result").value += result;    
            if (!operatorPressed) {
                leftOperand = leftOperand == null ?  e.target.id : leftOperand += e.target.id;
                document.getElementById("result").value = leftOperand;
                console.log(leftOperand + " : " + document.getElementById("result").value);
            } else {
                rightOperand = rightOperand == null ?  e.target.id : rightOperand += e.target.id;
                document.getElementById("result").value = rightOperand;
                console.log(rightOperand + " - " + document.getElementById("result").value);
            }
        }        
    }
    if (e.target.className.includes("operator")) {
        operatorPressed = true;
        console.log("opPressed = " + operatorPressed + " : " + rightOperand);
        if (leftOperand != null && rightOperand != null) {
            leftOperand = performOperation(Number(leftOperand), operation, Number(rightOperand));
            document.getElementById("result").value = leftOperand;            
            rightOperand = null;
        }
        console.log("opPressed = " + operatorPressed + " : " + rightOperand);
        operation = e.target.id;
    }

    if (e.target.id === "equals") {
        leftOperand = performOperation(Number(leftOperand), operation, Number(rightOperand));
         document.getElementById("result").value = leftOperand;
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