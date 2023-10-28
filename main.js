let persons = document.getElementById("persons");

const addInformation = (btn, el) => {
  btn.addEventListener("click", function () {
    window.localStorage.setItem("personajes", JSON.stringify(el));
    location.reload();
  });
};

fetch("./famous.json")
  .then((resp) => resp.json())
  .then((json) => {
    json.people.forEach((el) => {
      const cont = document.createElement("div");
      const title = document.createElement("h2");
      const img = document.createElement("img");
      const link = document.createElement("a");
      const purchaseBtn = document.createElement("button");
      cont.className = `cont_${el.id}`;
      title.textContent = `${el.first_name} ${el.last_name}`;
      img.src = el.img;
      link.href = `pagina.html?id=${el.id}`;
      link.textContent = `${el.first_name} ${el.last_name}`;
      purchaseBtn.className = "purchase_btn";
      purchaseBtn.textContent = "AÑADIR";
      persons.appendChild(cont);
      cont.appendChild(title);
      cont.appendChild(img);
      cont.appendChild(link);
      cont.appendChild(purchaseBtn);
      addInformation(purchaseBtn, el);
    });
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
