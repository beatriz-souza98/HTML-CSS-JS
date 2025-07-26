const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelect2 = document.querySelector(".currency-select2");


function convertValues() {
  const inputCurrencyValues = document.querySelector(".input-currency").value;
  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueToConverted = document.querySelector(".currency-value");

  const dolarToday = 5.2;
  const euroToday = 4.8;
  const realtoday = 0.18;

  if (currencySelect.value === currencySelect2.value.replace("2", "")) {
    alert("Escolha moedas diferentes para a conversão.");
    return;
}

  if (currencySelect.value == "dolar") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValues / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValues / euroToday);
  }

  if (currencySelect.value == "real") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValues / realtoday);
  }

  if (currencySelect2.value == "real2") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValues);
  }

  if (currencySelect2.value == "dolar2") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValues);
  }

  if (currencySelect2.value == "euro2") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValues);
  }
}

function changeConvert() {
  const name2 = document.getElementById("currency-name2");
  const brazilCurrency = document.querySelector(".brazil-currency");

  if (currencySelect2.value == "dolar2") {
    name2.innerHTML = "Dólar americano";
    brazilCurrency.src = "../ASSENTS/EUA-icon.png";
  }

  if (currencySelect2.value == "euro2") {
    name2.innerHTML = "Euro";
    brazilCurrency.src = "../ASSENTS/Euro-icon.png";
  }

  if (currencySelect2.value == "real2") {
    name2.innerHTML = "Real";
    brazilCurrency.src = "../ASSENTS/Brazilian-icon.png";
  }
}


function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = "../ASSENTS/EUA-icon.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "../ASSENTS/Euro-icon.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImg.src = "../ASSENTS/Brazilian-icon.png";
  }
}

  convertValues()

convertButton.addEventListener("click", convertValues);
currencySelect2.addEventListener("change", () => {
  changeConvert();
  convertValues()
;
});

currencySelect.addEventListener("change", () => {
  changeCurrency();
  convertValues();
});
