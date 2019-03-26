function checkFullName() {
    if (document.getElementById("full-name").value.trim().length === 0) {
        alert("Full Name is missing!");    
    } else {
        alert(document.getElementById("full-name").value);
    }
}

window.addEventListener("load", function(e) {
   console.log(document.getElementById("modal").style.display); 
});

document.getElementById("submit").onclick = checkFullName; 

document.addEventListener('click', function(e){
    if (e.target.id === "calc") {
        // window.open("calculator.html", "_blank");
        document.getElementById("modal").style.display = "block";
        console.log(document.getElementById("modal").style.display);
    } 
    
//    if (e.target.id === "calc") {
//        document.getElementById("modal").style.display = "block";
//        console.log(document.getElementById("modal").style.display);        
//    }
});

document.getElementsByName("gender").forEach(function(element) {
    element.addEventListener('change', function(e) {
        alert(e.target.id);
    })
});

/*
var genders = document.getElementsByName("gender");
for (var i = 0; i < genders.length; i++) {
    genders[i].addEventListener('click', function() {
        alert(this.id);
    });
}
*/
