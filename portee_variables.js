// // Une variable définie à l'intérieur d'une function n'est pas accessible à l'extérieur
// var demo = function(){
//     var a = "Salut"
//     console.log(a) //Est affiché
// }
// demo()
// console.log(a) // a is undefined

// // Dans ce cas là, on aura "Salut Le monde", le deuxieme log de a est init
// var a = "Le monde"
// var demo = function(){
//     var a = "Salut"
//     console.log(a) //Est affiché
// }
// demo()
// console.log(a)

// // Dans ce cas là, la variable n'est pas init dans la function et utilisera donc la variable globale et affichera le message
// // Les functions ont accès aux variables extérieurs. Les functions qui ont besoin des variables extérieurs sont appellées CLOSURES
// var a = "Salut"
// var demo = function(){
//     console.log(a) //Est affiché
// }
// demo()

// // Pas de var devant le a, on utilise donc la variable déjà existante et on change sa valeur
// var a = "Salut"
// var demo = function(){
//     a = "Pas de var devant le a, on utilise donc la variable déjà existante et on change sa valeur"
//     console.log(a) //Est affiché
// }
// demo()

// Les variables ont une portée limité seulement dans le cadre des fonctions !
for(var i = 0; i < 10; i++){
}
console.log(i) // Sera affiché alors qu'on n'est pas dans la boucle

// JavaScript fait du Hoisting pour les variables et les fonctions càd qu'ils sont remontés en haut du code lors de l'écriture
// Ici, la fonction retournera 5 alors que le return a() est avant. C'est parce que la function où il y a le return 5 est "Hoistée" en haut du code
// On aura donc les deux functions a la suite (return 3 et la return 5) ET ENSUITE le return a()
// A noter que le hoisting ne fonctionne qu'avec l'init des functions de façon "function a(){}" et non pas "var bla = function (){}"
var demo = function(){
    function a(){
        return 3
    }
    return a()

    function a(){
        return 5
    }
}
console.log(demo())