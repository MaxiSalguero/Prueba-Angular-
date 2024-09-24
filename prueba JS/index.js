/* Opcion

a) Implementar una funcion que determine si una cadena de texto dada esta formada por
caracteres únicos, considera mayúsculas, minúsculas y caracteres especiales

 */

function hasUniqueCharacters(string) {  
    const charSet = new Set(string);
    return charSet.size === string.length;
}

console.log(hasUniqueCharacters("String") );
console.log(hasUniqueCharacters("Some String") );
