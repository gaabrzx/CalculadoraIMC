const form = document.querySelector("#mainForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value / 100;

  const IMC = (weight / height ** 2).toFixed(2);

  const value = document.getElementById("value");
  let description = "";

  document.getElementById("infos").classList.remove("hidden");

  if (IMC < 18.5) {
    description = "Cuidado! Você está abaixo do peso!";
  } else if (IMC >= 18.5 && IMC <= 25) {
    value.classList.remove("attention");
    value.classList.add("normal");
    description = "Você está no peso ideal!";
  } else if (IMC > 25 && IMC <= 30) {
    description = "Cuidado! Você está com sobrepeso!";
  } else if (IMC > 30 && IMC <= 35) {
    description = "Cuidado! Você está com obesidade moderada!";
  } else if (IMC > 35 && IMC <= 40) {
    value.classList.remove("normal");
    value.classList.add("attention");
    description = "Cuidado! Você está com obesidade severa!";
  } else {
    value.classList.remove("normal");
    value.classList.add("attention");
    description = "Cuidado! Você está com obesidade mórbida!";
  }

  value.textContent = IMC;
  document.querySelector("#description > p").textContent = description;
});
