import {
    infoBronn,
    infoDaenerys,
    infoJoffrey,
    infoTyrion,
    infoJaime,
} from './Personajes.js';

import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';
import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';

/*export const Tyrion = new Asesor(...infoTyrion)*/
export const Tyrion = createCharacterCard(...infoTyrion);
export const Bronn = createCharacterCard(...infoBronn);
export const Joffrey = createCharacterCard(...infoJoffrey);
export const Daenerys = createCharacterCard(...infoDaenerys);
export const Jaime = createCharacterCard(...infoJaime)
function createCharacterCard(...array) {
    if (array.includes('asesor') === true) {
        new Asesor(...array);
        return new Asesor(...array);
    }
    if (array.includes('escudero') === true) {
        new Escudero(...array);
        return new Escudero(...array);
    }
    if (array.includes('rey') === true) {
        new Rey(...array);
        return new Rey(...array);
    } 
    if (array.includes('luchador') === true) {
        new Luchador(...array);
        return new Luchador(...array);
    
    } else console.log('ERROR CHCARD');
}
