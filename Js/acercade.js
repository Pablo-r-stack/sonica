const colaborador = [
    {
       imagecara: 1,
       nom: "Franco Rasia",
       roll: "Programador Full Stack"
    },
    {
        imagecara: 2,
       nom: "Lautaro Sanchez",
       roll: "Programador Full Stack"
    },
    {
        imagecara: 3,
       nom: "Karina Crognale",
       roll: "Programador Full Stack"
    },
    {
        imagecara: 4,
       nom: "Pablo Velasco",
       roll: "Programador Full Stack"
    }
];

let infoColaborador = document.querySelector(".colaborador");
let codigo = '';

colaborador.forEach(function(item) {
    codigo += `
        <div class="colaborador-item">
            <h2>${item.nom}</h2>
            <p>${item.roll}</p>
        </div>
    `;
});

infoColaborador.innerHTML = codigo;