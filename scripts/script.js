document.getElementById("submit").onclick = checkFullName; 

function checkFullName() {
    if (document.getElementById("full-name").value == 0) {
        alert("Full Name is missing!");    
    } else {
        alert(document.getElementById("full-name").value);
    }
}

document.addEventListener('click', function(e){
    if(e.target.name == "gender"){
        alert(e.target.id);
    }
});

/*
var genders = document.getElementsByName("gender");
for (var i = 0; i < genders.length; i++) {
    genders[i].addEventListener('click', function() {
        alert(this.id);
    });
}
*/