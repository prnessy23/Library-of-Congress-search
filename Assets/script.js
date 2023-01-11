
var form = document.getElementById("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var option = document.getElementById("options").value;
    var search = document.getElementById("city").value;
    var url = `https://www.loc.gov/${option}/?q=${city}&fo=json`;
    localStorage.setItem("url", url)
    localStorage.setItem("search", search)
    localStorage.setItem("option", option)
    
    console.log(option);
    location.replace('./results.html');
})

