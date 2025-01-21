const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];

// Función para generar todas las combinaciones
function generateAllUrls() {
  const urls = []; // Aquí almacenaremos las combinaciones

  // Tres bucles anidados para recorrer los arreglos
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        urls.push(`www.${p}_${a}_${n}.com`); // Crear y guardar cada URL
      }
    }
  }

  return urls; // Devolver el arreglo con todas las combinaciones
}

window.onload = function () {
  const urls = generateAllUrls(); // Generar todas las URLs
  const container = document.querySelector("#excuse");

  // Crear un elemento <p> por cada URL y agregarlo al contenedor
  urls.forEach((url) => {
    const p = document.createElement("p");
    p.textContent = url;
    container.appendChild(p);
  });
};
