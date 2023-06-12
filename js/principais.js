/*function listarEventos() {
    fetch('https://soundgarden-api.vercel.app/events').then((response) => {
        response.json().then((data) => {
            const div = document.getElementById("proximoseventos");
            div.className = "container d-flex justify-content-center flex-wrap";
            for (i = 0; i < 4; i++){
                data.map(
                    (item) => {
                        const div3 = document.createElement('article')
                        div3.setAttribute('id', item._id);
                        div3.className = "evento card p-5 m-3";
                        div.appendChild(div3);
                        const div2 = document.createElement('h2')
                        div2.innerHTML = item.name;
                        div3.appendChild(div2);
                        const li2 = document.createElement('h4');
                        li2.innerHTML = item.attractions
                        div3.appendChild(li2)
                        const p = document.createElement('p');
                        p.innerHTML = (item.description);
                        div3.appendChild(p)
                        const li = document.createElement('h4');
                        li.innerHTML = ("Data do Evento: " + item.scheduled);
                        div3.appendChild(li)
                        const li3 = document.createElement('h4');
                        li3.innerHTML = ("Lotação máxima: " + item.number_tickets);
                        div3.appendChild(li3)
                        const botaoReservar = document.createElement('button');
                        botaoReservar.className = "btn btn-primary";
                        botaoReservar.innerHTML = ("Reservar ingresso");
                        div3.appendChild(botaoReservar)

                    })
                }


        })
    })
}
listarEventos();*/