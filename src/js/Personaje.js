
import {infoBronn, infoTyrion} from './Personajes.js';
import {Asesor} from "./Asesor.js"
import { Escudero } from './Escudero.js';

/*export const Tyrion = new Asesor(...infoTyrion)*/
export const Tyrion = createCharacterCard(...infoTyrion)
export const Bronn = createCharacterCard(...infoBronn)

function createCharacterCard(...array){
if (array.includes("asesor")=== true) {
new Asesor(...array)
return new Asesor(...array)}
if (array.includes("escudero")===true) {
new Escudero(...array)
return new Escudero(...array)
}
 else
console.log("ERROR")
}



