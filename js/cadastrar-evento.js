/*const botaoEnviar = document.querySelector('.btn-primary');
const botaoSelector = document.querySelector('#descricao');

botaoEnviar.addEventListener("click", () => cadastrarEvento())

function cadastrandoEvento(url, corpo) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': "application/json", },
        body: JSON.stringify(corpo)
    })
        .then(() => console.log(JSON.stringify(corpo)))
        .then(() => alert("Evento Cadastrado com sucesso"))
        .then(() => window.location.href = "admin.html")
        .catch((error) => alert("Não foi possível realizar o cadastro, tente novamente!"))
}

function cadastrarEvento() {
    event.preventDefault()
    const url = "https://soundgarden-api.vercel.app/events"
    const nome = document.querySelector('#nome').value
    const atracoes = document.querySelector('#atracoes').value.split(", ")
    const descricao = document.querySelector('#descricao').value
    const data = document.querySelector('#data').value
    const lotacao = document.querySelector('#lotacao').value
   
    corpo = {
        "name": nome, 
        "poster": "https://i.imgur.com/fQHuZuv.png",
        "attractions": atracoes,
        "description": descricao,
        "scheduled": data,
        "numer_tickets": lotacao
    }

    cadastrandoEvento(url, corpo)
    
}
*/
const btnSubmit = document.querySelector(".btn-primary");
const descriptionSelector = document.querySelector('#descricao');

btnSubmit.addEventListener("click", () => cadastrarEvento());


function fazPost(url, corpo) {
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': "application/json", },
        body: JSON.stringify(corpo),
    })
        .then(() => console.log(JSON.stringify(corpo)))
        .then(() => alert('Evento Cadastrado com Sucesso'))
        .then(() => window.location.href = "admin.html")
        .catch((error) => alert('Não foi possível realizar o cadastro, tente novamente'))

}

function cadastrarEvento() {
    event.preventDefault()
    const url = "https://soundgarden-api.vercel.app/events";
    const nameSelector = document.querySelector('#nome').value;
    const attractionsSelector = document.querySelector('#atracoes').value.split(", ");
    const descriptionSelector = document.querySelector('#descricao').value;
    const dateSelector = document.querySelector('#data').value;
    const capacitySelector = document.querySelector('#lotacao').value;

    corpo =
    {
        "name": nameSelector,
        "poster": "https://i.imgur.com/fQHuZuv.png",
        "attractions": attractionsSelector,
        "description": descriptionSelector,
        "scheduled": dateSelector,
        "number_tickets": capacitySelector
    }
    fazPost(url, corpo);
}