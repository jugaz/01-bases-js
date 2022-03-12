/** ################################## TEMPLATE LITERALS ################################## 

    * TODO: Simbolo back tick => `` 

*/

const nombre  = 'Jesús'
const apellido = 'Ugaz'

const nombreCompleto = `${ nombre }  ${ apellido }`

console.log("nombreCompleto",nombreCompleto)
console.log(`Resultado: ${ 1 + 5 }`)

function getSaludo( nombre) {
    return 'Hola ' + nombre
}

console.log(`Esto es un texto: ${ getSaludo(nombre) }`)