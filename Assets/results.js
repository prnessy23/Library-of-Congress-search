var body = document.getElementById("body")
var url = localStorage.getItem("url")
var option =localStorage.getItem("option")
var search =localStorage.getItem("search")
var container = document.getElementById('container');

var div2EL = document.createElement("div")
var labelEL = document.createElement("label")
var inputEL = document.createElement("input")
var selectEL = document.createElement("select")
var buttonEL = document.createElement("button")
var button2EL = document.createElement("button")
var optionMaps = document.createElement("option");
var optionAudio = document.createElement("option");
var optionPhotos = document.createElement("option");
var optionManuscripts = document.createElement("option");
var optionNewspapers = document.createElement("option");
var optionFilm = document.createElement("option");
var optionNotated = document.createElement("option");
var optionWebsites = document.createElement("option");

optionMaps.textContent = "Maps";
optionAudio.textContent = "Audio";
optionPhotos.textContent = "Photos";
optionManuscripts.textContent = "Manuscripts";
optionNewspapers.textContent = "Newspapers";
optionFilm.textContent = "Film and Video";
optionNotated.textContent = "Notated Music";
optionWebsites.textContent = "Websites";

selectEL.append(optionMaps);
selectEL.append(optionAudio);
selectEL.append(optionPhotos);
selectEL.append(optionManuscripts);
selectEL.append(optionNewspapers);
selectEL.append(optionFilm);
selectEL.append(optionNotated);
selectEL.append(optionWebsites);



inputEL.setAttribute('type', "text")
inputEL.setAttribute('placeholder', search)
selectEL.setAttribute('placeholder', option)
button2EL.setAttribute('href', "./index.html")
div2EL.setAttribute('id', 'div2El');


labelEL.textContent = "Search";
buttonEL.textContent = "Submit";
button2EL.textContent = "Go Back"

body.append(div2EL)
div2EL.append(labelEL)
labelEL.append(inputEL)
div2EL.append(selectEL)
div2EL.append(buttonEL)
div2EL.append(button2EL)


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
        title.textContent = feature[i].title
        image.setAttribute("src", "https://www.loc.gov" + feature[i].image) 
        description.textContent = "Description: " + feature[i].description 
        if(feature[i].description === undefined){
            description.textContent = "Description: No description for this item";
        }
        divEL.setAttribute('class', 'divEl');
        title.setAttribute('id', 'title'+i);
        image.setAttribute('id', 'img'+i);
        description.setAttribute('id', 'description'+i);
        container.append(divEL)  
        divEL.append(title)
        divEL.append(image) 
        divEL.append(description) 
        }
    })





button2EL.addEventListener("click", function(){
    location.replace('./index.html');
})
    
    
    