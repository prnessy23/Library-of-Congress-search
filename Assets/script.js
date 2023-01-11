
var form = document.getElementById("form");
var url;
var city = document.getElementById("city").value;

form.addEventListener("submit", function(event){
    event.preventDefault();
    city = document.getElementById("city").value;
    var option = document.getElementById("options").value;
    url = `https://www.loc.gov/${option}/?q=${city}&fo=json`;

    console.log(option);
    location.replace('./results.html');
    return url;
})

