let persons = document.getElementById("persons");

fetch("./famous.json")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(`este es el arr ${JSON.stringify(json, null, 2)}`);

    json.people.forEach((el) => {
      const cont = document.createElement("div");
      const title = document.createElement("h2");
      const img = document.createElement("img");
      const link = document.createElement("a");
      cont.className = `cont_${el.id}`;
      title.textContent = `${el.first_name} ${el.last_name}`;
      img.src = el.img;
      link.href = `pagina.html?id=${el.id}`;
      link.textContent = `${el.first_name} ${el.last_name}`;
      persons.appendChild(cont);
      cont.appendChild(title);
      cont.appendChild(img);
      cont.appendChild(link);
    });
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
