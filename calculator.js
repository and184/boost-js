function calculate() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const result = a + b;
  document.getElementById("result").innerText = `Результат: ${result}`;
}
