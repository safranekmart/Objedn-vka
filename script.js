"use strict";

/*zaklad*/
function getCar() {
  let car = document.querySelector("#car").value;
  return car;
}

/*barva*/
function getColor(price) {
  let color = document.getElementsByName("color");
  let colorPrice = 0;
  for (let i = 0; i < color.length; i++) {
    if (color[i].checked) {
      let chColor = color[i].value;
      switch (chColor) {
        case "lak":
          colorPrice = price * 0.05;
          break;
        case "metal":
          colorPrice = price * 0.07;
          break;
        default:
          colorPrice = Number(0);
      }
    }
  }
  return colorPrice;
}

/*vybava*/
function getAddons(price) {
  let addon = document.getElementsByName("vybava");
  let addonPrice = 0;
  for (let i = 0; i < addon.length; i++) {
    if (addon[i].checked) {
      let chAddon = addon[i].value;
      switch (chAddon) {
        case "Cam":
          addonPrice += 10000;
          break;
        case "wheels":
          addonPrice += 20000;
          break;
        case "leather":
          addonPrice += 50000;
          break;
        case "tuning":
          addonPrice += (price / 100) * 20;
          break;
        default:
          addonPrice = Number(0);
      }
    }
  }
  return addonPrice;
}
/*check*/
function checkPrices(cenaMax, celkovaCena) {
  let msg = "";
  if (cenaMax < celkovaCena) {
    msg = ` Vaše cena je o ${celkovaCena - cenaMax} nizsi než cena automobilu.`;
  } else if (cenaMax > celkovaCena) {
    msg = `Vaše cena cena je o ${
      cenaMax - celkovaCena
    } vyšší než cena automobilu.`;
  } else {
    msg = `Vaše cena je rovna ceně automobilu`;
  }
  return msg;
}

function calculate() {
  let price = getCar();
  let limitCena = Number(document.querySelector("#expected").value);
  let celkovaCena = 0;
  let priceInfo = document.querySelector("#priceInfo");
  let priceInfo2 = document.querySelector("#outputVyslCena");
  priceInfo.innerHTML = ``;

  celkovaCena +=
    Number(price) + Number(getColor(price)) + Number(getAddons(price));
  priceInfo.innerHTML = checkPrices(limitCena, celkovaCena);
  priceInfo2.innerHTML = `Celková cena automobilu je ${celkovaCena}`;
}

let odeslat = document.querySelector("#submit");
odeslat.addEventListener("click", (e) => {
  e.preventDefault();
  let email = document.querySelector("#email").value;
  let form = document.querySelector("#order");
  if (email.includes("@")) {
    form.submit();
  }
  document.querySelector("#error").innerText =
    "Zadejte platnou emailovou adresu!";
});
