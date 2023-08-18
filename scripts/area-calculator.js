function calculateTriangleArea() {
  // triangle base
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  // triangle height
  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  const area = 0.5 * base * height;
  console.log(base, height, area);
  document.getElementById("triangle-area").innerText = area;
}
function calculateRectangleArea() {
  // rectangle width
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  // rectangle length
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);

  const area = width * length;
  console.log(width, length, area);
  document.getElementById("rectangle-area").innerText = area;
}
