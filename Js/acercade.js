import { colaborador } from "../data/colaborador.js";

//VARIABLES
const contenedor = document.querySelector(".contenedor");
//EVENTOS
document.addEventListener('DOMContentLoaded', function () {
    cargarTarjeta(colaborador);
})



function cargarTarjeta(nosotros) {
    let codigo = "";
    if (nosotros.length > 0) {
        nosotros.forEach(function (item) {
            codigo += `
        <div class="contendorcartas">
        <div class="cartadeImg">
            <img class="imagecara" src="${item.imagecara}" alt="foto">
            <div class="cartadeInfo">
                <div>
                    <h1 class="nom">${item.nom}</h1>
                </div>
                <div>
                    <h2 class="roll">${item.roll}</h2>
                    <a href="${item.linked}"><img class="iconolinkedin" src="img/icons/LinkedInIcon.png" alt="linkedin"></a>
                    <a href="${item.github}"><img class="iconogithub" src="img/icons/GitHubIcon.png" alt="github"></a>
                </div>
            </div>
        </div>
    </div>
        `;
        });
    }else{
        codigo = `
        <h2>No se encontraron datos, vuelve a intentarlo mas tarde</h2>
        `;
    }
    contenedor.innerHTML += codigo;
}