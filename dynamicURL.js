const urlParams = new URLSearchParams(window.location.search);
const personId = urlParams.get("id");
const personName = document.getElementById("personName");
const personImage = document.getElementById("personImage");
const pageTitle = document.getElementById("pageTitle");

console.log(`urlParams ${urlParams} personId ${personId}`);
fetch("./famous.json")
  .then((resp) => resp.json())
  .then((data) => {
    const person = data.people.find((p) => p.id === parseInt(personId, 10));
    if (person) {
      personName.textContent = `${person.first_name} ${person.last_name}`;
      personImage.src = person.img;
      pageTitle.textContent = `${person.first_name} ${person.last_name}`;
    } else {
      console.error("No se encontró la persona con el ID especificado.");
    }
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });
