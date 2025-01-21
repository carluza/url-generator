const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];

function generateAllUrls() {
  const urls = [];

  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        urls.push(`www.${p}_${a}_${n}.com`);
      }
    }
  }

  return urls;
}

window.onload = function () {
  const urls = generateAllUrls();
  const container = document.querySelector("#excuse");

  urls.forEach((url) => {
    const p = document.createElement("h1");
    p.textContent = url;
    container.appendChild(p);
  });
};
