
function listarEventos(){
    fetch('https://soundgarden-api.vercel.app/events').then((response)=>{
        response.json().then((data)=>{     
            const div = document.getElementById('dataexit')
            data.map((item)=>{
                const div2 = document.createElement('article')
                div2.setAttribute('id',item._id);
                div2.innerHTML = item.name;
                div.appendChild(div2);  
                const li2 = document.createElement('li');
                li2.innerHTML = item.attractions;
                div2.appendChild(li2)    
                const li = document.createElement('li');
                li.innerHTML = item.scheduled;
                div2.appendChild(li)
                const li3 = document.createElement('li');
                li3.innerHTML = item.number_tickets;
                div2.appendChild(li3)
           })
           
        })
    })
}

listarEventos();