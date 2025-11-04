//celsius
document.getElementById("c-btn").onclick = function () {
  celsius = document.getElementById("celsius").value;
  celsiusToFahrenheit = (celsius * 9) / 5 + 32;
  celsiusToFahrenheit = Number(celsiusToFahrenheit.toFixed(3));
  document.getElementById("farenheit").value = celsiusToFahrenheit;
  celsius = Number(celsius);
  celsiusToKelvin = celsius + 273.15;
  celsiusToKelvin = Number(celsiusToKelvin.toFixed(3));
  document.getElementById("kelvin").value = celsiusToKelvin;
};
//farenheit

document.getElementById("f-btn").onclick = function () {
  farenheit = document.getElementById("farenheit").value;
  fahrenheitToCelsius = ((farenheit - 32) * 5) / 9;
  fahrenheitToCelsius = Number(fahrenheitToCelsius.toFixed(3));
  document.getElementById("celsius").value = fahrenheitToCelsius;
  farenheit = Number(farenheit);

  farenheitToKelvin = ((farenheit - 32) * 5) / 9 + 273.15;
  farenheitToKelvin = Number(farenheitToKelvin.toFixed(3));

  document.getElementById("kelvin").value = farenheitToKelvin;
};
//kelvin
document.getElementById("k-btn").onclick = function () {
  kelvin = document.getElementById("kelvin").value;
  kelvin = Number(kelvin);
  kelvintToCelsius = kelvin - 273.15;
  kelvintToCelsius = Number(kelvintToCelsius.toFixed(3));
  document.getElementById("celsius").value = kelvintToCelsius;
  kelvinToFarenheit = ((kelvin - 273.15) * 9) / 5 + 32;
  kelvinToFarenheit = Number(kelvinToFarenheit.toFixed(3));
  document.getElementById("farenheit").value = kelvinToFarenheit;

  //   reset button
};
document.getElementById("reset").onclick = function () {
  document.getElementById("celsius").value = null;
  document.getElementById("farenheit").value = null;
  document.getElementById("kelvin").value = null;
};
