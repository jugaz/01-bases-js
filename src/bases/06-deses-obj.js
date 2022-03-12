/** ################################## DESESTRUCTURACIÓN DE OBJECTOS ##################################

*/

const person = {
    name: 'Jesús',
    age: 20,
    codeName: 'Jugaz',
}

const { name, age, codeName, power= 'No tiene poder' } = person 

// console.log( name )
// console.log( age )
// console.log( codeName )
// console.log( power )

const createHero = ({ name, age, codeName, power }) => ({

    id:1234435435,
    name,
    age,
    codeName,
    power,
})

console.log(createHero(person))

