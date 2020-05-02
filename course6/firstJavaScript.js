var button = document.getElementById("calculateButton");
button.addEventListener("click", calculate);

function calculate() {
  var input = document.getElementById("fInput");
  var fahrenheit = input.value;

  var celcius = 0
  celcius = (fahrenheit - 32) / 1.8;

  if (celcius < 0 ) {
    celcius = 0;
  }

  document.getElementById("result").innerText =
  "This is temperature in Celcius: "  + celcius;
}
