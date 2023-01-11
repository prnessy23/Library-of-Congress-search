window.glob = "city"
console.log(city)
fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })