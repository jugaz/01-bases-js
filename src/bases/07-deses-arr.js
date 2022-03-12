/** ################################## DESESTRUCTURACIÓN DE ARRAYS ##################################

*/
const friends = ['Ross','Joey','Chandler']

const [ r , j , c ] = friends
const [ , , clr ] = friends
const [ p1 , p2  , p3 , monika='No tiene valor' ] = friends

console.log( r , j , c  )
console.log( clr )

const returnArray = ( [ letters , numbers] ) => {
    return [ letters ,numbers ]
}

const [ letters , numbers ] = returnArray( ['XYZ',9867] )
console.log( letters , numbers )

