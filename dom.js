// var test = document.getElementsByClassName('class')
// var test = document.getElementsByTagName('p')
// On utilisera plutôt le querySelector(All) qui permet d'être plus générique
// #id .class

// querySelector : 1 résultat
var test = document.querySelector('#js')

window.setInterval(function(){
    test.classList.toggle('black')
}, 1000)

// querySelectorAll : tous les résultats qui correspondent à la recherche
var tabElements = document.querySelectorAll('p')
for(var i = 0; i < tabElements.length; i++){
    (function(p){
        window.setInterval(function () {
            p.classList.toggle('green')
        }, 700)
    })(tabElements[i])
}