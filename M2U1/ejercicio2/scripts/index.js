const area = document.querySelector("#text_area");
const numeroCaracteres = document.querySelector("p");

let cont = 0;

area.addEventListener("keyup", function (e) {
  if (e.key === "Backspace") {
    cont = cont - 1;
    if (cont < 0) {
      cont = 0;
    }
  } else {
    cont = cont + 1;
  }
  numeroCaracteres.textContent = ` caracteres:  ${cont}`;
});
