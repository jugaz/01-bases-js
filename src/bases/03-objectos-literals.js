/** ################################## OBJECTOS LITERALS ##################################

    * TODO: Simbolo Operador Spread => ... 

*/
const persona = {
    nombre: 'Jesús',
    apellido: 'Ugaz',
    edad: 20,
    direccion: {
        ciudad: 'New York',
        zip: 234324,
        lat: 14.3232,
        lng: 34.13445
    }

}

const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)