//Try catch
var a = {}

try {
    console.log('Try method')
    a.method()
}catch (e) {
    console.log("Erreur : " + e.stack)
}finally {
    console.log('Finally')
}


//Throw
var double = function (nombre){
    var resultat = nombre * 2
    if (Number.isNaN(resultat)){
        throw new Error('Le nombre n\'est pas un chiffre')
    }
    return resultat
}

try{
    var a = 2
    console.log(double("test"))
}catch (e) {
    console.log("Impossible de multiplier 'test' par 2")
}

