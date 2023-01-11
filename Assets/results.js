var body = document.getElementById("body")
var url = localStorage.getItem("url")
var option =localStorage.getItem("option")
var search =localStorage.getItem("search")
console.log(search)
fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        var feature = data.featured_items
        for (var i = 0; i < 5; i++){
        
        var divEL = document.createElement("div")
        var title = document.createElement("h2")
        var image = document.createElement("img")
        var description = document.createElement("p")
                // settAttributes for CSS styling for our cards
        title.textContent = "Title: " + feature[i].title
        image.setAttribute("src", "https://www.loc.gov" + feature[i].image) 
        
        description.textContent = "Description: " + feature[i].description 
        

        body.append(divEL)  
        divEL.append(title)
        divEL.append(image) 
        divEL.append(description) 
        }
    })

var div2EL = document.createElement("div")
var labelEL = document.createElement("label")
var inputEL = document.createElement("input")
var selectEL = document.createElement("select")
var buttonEL = document.createElement("button")
var button2EL = document.createElement("button")


inputEL.setAttribute('type', "text")
inputEL.setAttribute('placeholder', search)
selectEL.setAttribute('placeholder', option)
button2EL.setAttribute('href', "./index.html")

labelEL.textContent = "Search";
buttonEL.textContent = "Submit";
button2EL.textContent = "Go Back"

body.append(div2EL)
div2EL.append(labelEL)
labelEL.append(inputEL)
div2EL.append(selectEL)
div2EL.append(buttonEL)
div2EL.append(button2EL)


    
    
    