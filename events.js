//Ajout d'un event sur un seul element
var p = document.querySelector('li')
var zoom = function () {
    p.classList.toggle('zoom')
}

p.addEventListener('click', zoom)

// Ajout d'un event sur plusieurs elements (querySelectorAll)
// TEST Hover li : zoom/dezoom (inutile, :hover en css)
var elements = document.querySelectorAll('li')
for (var x = 0; x < elements.length; x++) {
    var ele = elements[x]
    var zoomin = function () {
        this.classList.add('zoom')
    }
    var zoomout = function () {
        this.classList.remove('zoom')
    }
    ele.addEventListener('mouseover', zoomin)
    ele.addEventListener('mouseout', zoomout)
    console.log('Events added to ' + ele )
}

var links = document.querySelectorAll('a.url-link')
for(var y = 0; y < links.length; y++){
    var ele2 = links[y]

    var confirmation = function(event){
        console.log(event)
        var reponse = window.confirm('Voulez-vous ouvrir ce lien ?')
        if(reponse === false){
            event.preventDefault()
            event.stopPropagation()
        }
    }

    ele2.addEventListener('click', confirmation)

    //Pour supprimer un event
    //ele2.removeEventListener('click', confirmation)
}