var Personne = {
    nom: 'Paul',
    age: 27,
    moyenne: 12
}

console.log(Personne.nom + ' a ' + Personne.age + ' ans')

if(Personne.age >= 18){
    console.log(Personne.nom + ' est majeur.')
}else{
    console.log(Personne.nom + ' est mineur.')
}

if(Personne.age >= 18 && Personne.age <= 25){
    console.log(Personne.nom + ' a entre 18 et 25')
}else{
    console.log(Personne.nom + ' n\'a entre 18 et 25')
}

//Condition ternaire
console.log(Personne.age >= 18 ? 'La personne a 18 ans' : 'La personne n\'a pas 18 ans')

// Triple égal compare la valeur ET le type
if(Personne.age === "27"){
    console.log('On ne rentre pas ici, age est de type int et on compare à un string avec triple égal')
} else{
    console.log('Pas égal')
}

if(Personne.age == "27"){
    console.log('Égal')
}

//Switch
switch(Personne.age){
    case 18:
        console.log(Personne.nom + ' a 18 ans')
        break
    case 25:
        console.log(Personne.nom + ' a 25 ans')
        break
    default:
        console.log(Personne.nom + ' n\'a pas 18 ni 25 ans')
        break
}