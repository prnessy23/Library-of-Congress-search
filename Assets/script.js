var form = document.getElementById("form");


form.addEventListener("submit", function(event){
    event.preventDefault();
    var city = document.getElementById("city").value;
    var option = document.getElementById("options").value;
    console.log(option);
    var url = `https://www.loc.gov/${option}/?q=${city}&fo=json`;
    fetch(url)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
        })
    location.replace('./results.html');
})
