



export function characters(array) {

    if (array.type === 'asesor') {
        createColCharacterAsesor(array);
    } 

      else if (array.type === 'escudero') {
        createColCharacterEscudero(array);
    } 
     
     else if (array.type === 'rey') {
         createColCharacterRey(array);
         console.log('is rey');
     } 
     else if (array.type === 'luchador') {
         createColCharacterLuchador(array);
         console.log('is luchador');
     } else console.log('Error');
}


export const createColCharacter = (array) => {
    document.querySelector(
        'ul.characters-list'
    ).innerHTMl += ` <li class="character col">
          <div class="card character__card">
            <img
              src="${array.image}"
              alt="${array.nameChar + array.family}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">"${array.nameChar}"</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad:"${array.age}"</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: "${array.yearsAsKing}"</li>
                  <li>Arma: "${array.weapon}"</li>
                  <li>Destreza:"${array.skill}"</li>
                  <li>Peloteo: "${array.pelotismo}"</li>
                  <li>Asesora a: "${array.advisorOf}"</li>
                  <li>Sirve a: "${array.servantOf}"</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>
        </li>`;
}

export const createColCharacterAsesor = (array) => {
    document.querySelector(
        'ul.characters-list'
    ).innerHTML += ` <li class="character col">
          <div class="card character__card">
            <img
              src="${array.image}"
              alt="${array.nameChar + array.family}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">"${array.nameChar}"</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad:"${array.age}"</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Asesora a: "${array.AdvisorOf}"</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"> 🎓 </i>
          </div>
        </li>`;
};

export const createColCharacterEscudero = (array) => {
    document.querySelector(
        'ul.characters-list'
    ).innerHTML += ` <li class="character col">
          <div class="card character__card">
            <img
              src="${array.image}"
              alt="${array.nameChar + array.family}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">"${array.nameChar}"</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad:"${array.age}"</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Peloteo: "${array.pelotismo}"</li>
                  <li>Sirve a: "${array.servantOf}"</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"> 🛡 </i>
          </div>
        </li>`;
};

export const createColCharacterRey = (array) => {
    document.querySelector(
        'ul.characters-list'
    ).innerHTML += ` <li class="character col">
          <div class="card character__card">
            <img
              src="${array.image}"
              alt="${(array.nameChar) + (array.family)}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">"${array.nameChar + " " +array.family}"</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad:"${array.age}"</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: "${array.yearsAsKing}"</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"> 👑 </i>
          </div>
        </li>`;
};

export const createColCharacterLuchador = (array) => {
    document.querySelector(
        'ul.characters-list'
    ).innerHTML += ` <li class="character col">
          <div class="card character__card">
            <img
              src="${array.image}"
              alt="${array.nameChar + array.family}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">"${
                  array.nameChar + ' ' + array.family
              }"</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad:"${array.age}"</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Arma: "${array.weapon}"</li>
                  <li>Destreza:"${array.skill}"</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"> 🗡 </i>
          </div>
        </li>`;
};