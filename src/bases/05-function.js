/** ################################## FUNCTION ##################################

    * TODO: Some => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some

*/


const saludar = ( nombre = 'Jesús') => `Hola ${nombre}`


const nombre = 'Jesús' 

console.log( saludar(nombre) )

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Jesus001'

    }
}

//console.log( getUser() )

const heroes = [{
    id: 1,
    name: 'Bataman'
},
{
    id: 2,
    name: 'Superman'
}]

const existe = heroes.some( (heroes) => heroes.id === 1)
const {name} = heroes.find( (heroes) => heroes.id === 1)


console.log( existe )
console.log( name )
