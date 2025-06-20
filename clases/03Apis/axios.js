const boton = document.getElementById("btnCargar");
const contResult = document.getElementById("resultado");

boton.addEventListener("click", () =>{
    contResult.innerHTML = "<p>Cargando...</p>";
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";

    axios.get(url)
        .then(response => {
            contResult.innerHTML = ''; // Limpiar el contenedor
            response.data.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('post');
                postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;
            contResult.appendChild(postElement);
            })
        })

        .catch(error => {
            console.error("Error al obtener los datos:", error.message);
            contResult.innerHTML = `<p style = "color: red"> datos: ${error.message}</p>`
        })
})