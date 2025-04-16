function buscarUsuario(){
    const username = document.getElementById("username").value.trim();
    const resultado = document.getElementById("resultado");
    
    resultado.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Carregando perfil...</p>
        </div>
        `;

    if (username === "") {
        resultado.innerHTML = "";
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {
                console.error(error);
            }
            return response.json()
        })

    .then (data => {
        resultado.innerHTML = `
        <div class="perfil">
            <img src="${data.avatar_url}" alt="${data.name}"/>
            <div>
                <h2>${data.name || data.login}</h2>
                <p>${data.bio || "Este usúario não possui uma bio."}</p>
            </div>
        </div>`; })
    
    .catch(() => {        
        resultado.innerHTML = `
        <div class="erro">
            <p>Nenhum perfil foi encontrado com esse nome de usário.<br>Tente novamente</p>
        </div>
        `;
    })
}

