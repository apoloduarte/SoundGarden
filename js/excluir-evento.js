const botaoExcluir = document.querySelector(".btn-danger");
const url = 'https://soundgarden-api.vercel.app/events/:id';



const eventoLista = async (id) => {
    try {
        const response = await fetch(`https://soundgarden-api.vercel.app/events/${id}`);
        if (!response.ok) {
            throw new Error('ERRO: Impossível carregar a lista!');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('ERRO: Falha ao carregar lista!');
    }
  };

  const carregarEvento = async (id) => {
    const data = await eventoLista(id)
    return data;
};

const params = new URL(document.location).searchParams;
const idEvento = params.get("id");

// Função para carregar os dados na página
const carregarData = async () => {
    // Formatação da data
    const opcoes = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    };

    
    const data = await carregarEvento(idEvento)
    
    document.getElementById("nome").value = data.name;
    document.getElementById("banner").value = data.poster;
    document.getElementById("atracoes").value = data.attractions;
    document.getElementById("descricao").value = data.description;
    document.getElementById("data").value = new Date(data.scheduled).toLocaleDateString('pt-BR', opcoes);
    document.getElementById("lotacao").value = data.number_tickets;
}


carregarData()


const excluirEvento = async () => {
    return fetch(`https://soundgarden-api.vercel.app/events/${idEvento}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: ""
    }).then((response) => {
      return response.body;
    });
}

const form = document.querySelector("form");
form.addEventListener("submit",async (e) => {
    e.preventDefault();

    try {
        await excluirEvento();
        alert("Evento excluido com sucesso")
        window.location.replace("admin.html");
        
    } catch (error) {
        alert("ERROR: "+ error.data +"\nErro ao excluir evento. Tente Novamente")
        
    }
});