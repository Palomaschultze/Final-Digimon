
function cargarDigimones() {
    let url = "https://digimon-api.vercel.app/api/digimon";
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let registro = "";
            data.forEach((digimon,index) => {
                registro +=`
                <tr>
                    <td>${index + 1}</td>
                    <td>${digimon.name}</td>
                    <td>${digimon.level}</td>
                    <td><button class="btn btn-primary" 
                    onclick="mostrarModal('${digimon.name}', '${digimon.level}','${digimon.img}',)">Ver Digimon</button></td>
                </tr>`;
            });

            let datos = document.getElementById("tablaDigimones");
            datos.innerHTML = registro; 
            
        })
        .catch((error) => {
            console.error(error);
        });
}
cargarDigimones()

function mostrarModal(name, level, img) {
    let staticBackdropLabel = document.getElementById("staticBackdropLabel");
    staticBackdropLabel.innerText = name;
    let modalLevel = document.getElementById("modalLevel");
    modalLevel.innerText = level;
    let modalImg = document.getElementById("imagenDigi");
    modalImg.setAttribute("src", img )
    const myModal = new bootstrap.Modal("#staticBackdrop");
    myModal.show();
  }


  function buscarDigimon(){
    let buscardor = document.getElementById("buscador");
    buscardor.innerHTML
  }