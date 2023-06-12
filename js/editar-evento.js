const botaoEditar = document.querySelector(".btn-primary");

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


const editarEvento = async () => {
    return fetch(`https://soundgarden-api.vercel.app/events/${idEvento}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: ""
    }).then((response) => {
      return response.body;
    });
}

// Função para formatar a data e hora do evento
const formatarData = (data) => {
    const [date, time] = data.split(', ');
    const [day, month, year] = date.split('/');

    return `${year}-${month}-${day}T${time}:00.000Z`
}

// Adiciona um evento ao formulário na página
const form = document.querySelector("form");
form.addEventListener("submit",async (e) => {
    e.preventDefault();

    const attractionsValues = form.atracoes.value.split(',');
    const criarEvento = {
        name: form.nome.value,
        poster:"url-img",
        attractions: attractionsValues,
        description: form.descricao.value,
        scheduled: formatarData(form.data.value),
        number_tickets: form.lotacao.value,
    };

    try {
        await editarEvento(criarEvento);
        alert("Evento Editado com Sucesso")
        window.location.replace("admin.html");
        
    } catch (error) {
        alert("ERROR: "+ error.data +"\nErro ao editar evento. Tente Novamente")
        
    }
});
