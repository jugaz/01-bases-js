/** ################################## PROMESAS ##################################

*/

import {getHeroById, getHeroesByOwnser} from './08-imp-exp'

// console.log("Inicio")

// new Promise( (resolve, reject) => {

//     console.log("cuerpo de la promesa")
//     reject( 'Promesa resuelta con error' )
    
// })
// .then( msg  => console.log( msg ) )
// .catch( err => console.log( err ) )



// console.log("Fin")



const getHeroByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            
            const hero = getHeroById( id )

            if( hero ) {
                resolve( hero ) 
            } 
            else {
                reject ( 'Hero no existe' )
            }

            
        }, 1000);

    });
}
getHeroByIdAsync ( 1 )
    .then( h => {

        console.log(`El héroe es: ${h.name}` )

    })
    .catch( console.log )
