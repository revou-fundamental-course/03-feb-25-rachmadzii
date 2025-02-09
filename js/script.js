let conversionDirection = 'CtoF'; // Default conversion direction

function convertTemperature() {
  if (conversionDirection === 'CtoF') {
    const celsius = document.getElementById('celsius').value;
    if (celsius === '') {
      alert('Silakan masukkan nilai dalam Celsius.');
      return;
    }
    const fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  } else {
    const fahrenheit = document.getElementById('fahrenheit').value;
    if (fahrenheit === '') {
      alert('Silakan masukkan nilai dalam Fahrenheit.');
      return;
    }
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById('celsius').value = celsius.toFixed(2);
  }
}

function reverseConversion() {
  const directionText = document.getElementById('conversionDirectionText');
  const formulaText = document.getElementById('conversionFormulaText');

  if (conversionDirection === 'CtoF') {
    conversionDirection = 'FtoC';
    directionText.textContent = 'Konversi dari Fahrenheit ke Celsius';
    formulaText.textContent = 'Rumus: °C = (°F − 32) × 5/9';
  } else {
    conversionDirection = 'CtoF';
    directionText.textContent = 'Konversi dari Celsius ke Fahrenheit';
    formulaText.textContent = 'Rumus: °F = (°C × 1,8) + 32';
  }
  resetFields();
}

function resetFields() {
  document.getElementById('celsius').value = '';
  document.getElementById('fahrenheit').value = '';
}
