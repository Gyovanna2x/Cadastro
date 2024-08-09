const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const inputNameValue = nome.value;
    const inputEmailValue = email.value;
    const inputCellValue = telefone.value;

    const templateHTML = `
 
    <li class="item">${inputNameValue}</li>
    <li class="item">${inputEmailValue}</li>
    <li class="item">${inputCellValue}</li>
     <button class= "delete">Delete</button>
    `;


    if (inputNameValue === "") {
        alert("Digite o nome");
        return false;
    }

    /* incluindo itens do html */
    lista.innerHTML += templateHTML;

    /* Limpando meus campos */
    nome.value = "";
    email.value = "";
    telefone.value = "";

    const excluirButtons = lista.querySelectorAll('.delete');
    excluirButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.target.parentNode.remove();
        });
    });
 
});
