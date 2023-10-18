


// console.log('Our Team');

// - prendiamo l'elemento ROW nel DOM dove inseriremo tutti gli utenti
const rowDomElement = document.querySelector('.row');

// - fare un array di oggetti dove ci sarà la lista dei membri del team con i loro dettagli
//     - nome e cognome
//     - posizione lavorativa
//     - immagine

const userTeamArray = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',

    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',

    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',

    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',

    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',

    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',

    }
]

// - per separare gli oggetti dentro l'array dobbiamo utilizzare un ciclo for per ciclare i diversi elementi

for (let i = 0; i < userTeamArray.length; i++) {

    // - prendo ogni utente corrente dentro l'array
    const usersCurrent = userTeamArray[i];
    // console.log(usersCurrent);

    // - prendiamo i valori degli oggetti di ogni utente dentro l'array
    const usersDetails = `${usersCurrent.name} ${usersCurrent.role} ${usersCurrent.image}`;
    console.log(usersDetails);

    // - creiamo 6 elementi nel DOM
    const htmlStringUsers = `
    <div class="col-4">
        <div class="card">
            <figure class="card-image">
                <img src="./img/angela-caroll-chief-editor.jpg" alt="angela">
            </figure>
            <div>
                <h3 class="name">Angle Caroll</h3>
                <p class="work">Chieaf Editor</p> 
            </div>
        </div>
    </div>
    `
    console.log(htmlStringUsers);

    // - stampo nel DOM dento al div contenete la classe row, le stringhe degli utenti prese dall'array
    rowDomElement.innerHTML += htmlStringUsers;

    
}
