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

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  const area = base * height;
  setElementInnerText("parallelogram-area", area);
}

function calculateEllipseArea() {
  const radius1 = getInputValue("ellipse-radius1");
  const radius2 = getInputValue("ellipse-radius2");
  const area = Math.PI * radius1 * radius2;
  setElementInnerText("ellipse-area", area.toFixed(2));
}

// reusable get input value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}
function setElementInnerText(elementId, area) {
  const elementText = document.getElementById(elementId);
  elementText.innerText = area;
}
