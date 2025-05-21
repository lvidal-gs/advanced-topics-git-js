const card = document.querySelector("#box")
const dropZone = document.querySelector("#drop-zone")
const outOfTrash = document.querySelector(".container");

card.addEventListener("dragstart", (e) => {
  console.log(e, card.parentElement);
})

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
})

outOfTrash.addEventListener("dragover", (event) => {
  event.preventDefault();
})

dropZone.addEventListener('drop', () => {
  const parent = card.parentElement;
  if(parent.id != "drop-zone") {
    dropZone.append(card)
    console.log("entra");
    card.innerHTML = "<h3>WHY DID U DO THAT</h3>"
    card.style.width = "250px";
    card.style.backgroundColor = "crimson";
  }
})