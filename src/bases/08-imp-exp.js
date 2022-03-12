/** ################################## IMPORT Y EXPORT ##################################

*/


// import { owners } from './data/heroes'

// const [ dc, marvel ] = owners

// console.log( dc )
// console.log( marvel )

import superHeroes from '../data/heroes'

export const getHeroById = ( id ) => {
    return superHeroes.find( hero  =>  hero.id === id )
}

export const getHeroesByOwnser = ( letters ) => {
    return superHeroes.filter( hero  =>  hero.owner === letters)
}

console.log( getHeroById(1) ) // Spiderman
console.log(getHeroesByOwnser('DC')) // []


// import {getHeroById, getHeroesByOwnser} from './bases/08-imp-exp'


// console.log(getHeroById(1) ) // Spiderman


// console.log(getHeroesByOwnser('DC')) // []