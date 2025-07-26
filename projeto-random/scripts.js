function generateNumber() {

  const min = Math.ceil(document.querySelector(".place-min").value);

  const max = Math.floor(document.querySelector(".place-max").value);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  alert("O resultado é " + result)
}
