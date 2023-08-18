function calculateTriangleArea() {
  // triangle base
  const base = getInputValue("triangle-base");
  // triangle height
  const height = getInputValue("triangle-height");
  if (getValidation(base) || getValidation(height)) {
    return;
  } else {
    const area = 0.5 * base * height;
    setElementInnerText("triangle-area", area);
    addToCalculationEntry("Triangle", area);
  }
}
function calculateRectangleArea() {
  // rectangle width

  const width = getInputValue("rectangle-width");
  // rectangle length

  const length = getInputValue("rectangle-length");

  if (getValidation(width) || getValidation(length)) {
    return;
  } else {
    const area = width * length;
    setElementInnerText("rectangle-area", area);
    addToCalculationEntry("Rectangle", area);
  }
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (getValidation(base) || getValidation(height)) {
    return;
  } else {
    const area = base * height;
    setElementInnerText("parallelogram-area", area);
    addToCalculationEntry("Parallelogram", area);
  }
}

function calculateRhombusArea() {
  const side1 = getInputValue("rhombus-side1");
  const side2 = getInputValue("rhombus-side2");
  if (getValidation(side1) || getValidation(side2)) {
    return;
  } else {
    const area = 0.5 * side1 * side2;
    setElementInnerText("rhombus-area", area);
    addToCalculationEntry("Rhombus", area);
  }
}

function calculatePentagonArea() {
  const side1 = getInputValue("p");
  const side2 = getInputValue("b");
  if (getValidation(side1) || getValidation(side2)) {
    return;
  } else {
    const area = 0.5 * side1 * side2;
    setElementInnerText("pentagon-area", area);
    addToCalculationEntry("Pentagon", area);
  }
}

function calculateEllipseArea() {
  const radius1 = getInputValue("ellipse-radius1");
  const radius2 = getInputValue("ellipse-radius2");
  if (getValidation(radius1) || getValidation(radius2)) {
    return;
  } else {
    const area = Math.PI * radius1 * radius2;
    setElementInnerText("ellipse-area", area.toFixed(2));
    addToCalculationEntry("Ellipse", area);
  }
}

// reusable get input value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  inputField.value = "";
  return inputValue;
}
function setElementInnerText(elementId, area) {
  const elementText = document.getElementById(elementId);
  elementText.innerText = area;
}
function getValidation(number) {
  if (isNaN(number)) {
    alert("Enter valid number.");
    return true;
  } else {
    return false;
  }
}
// add to calculation entry

function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const count = calculationEntry.childElementCount + 1;
  const p = document.createElement("p");
  p.classList.add("py-4");
  p.innerHTML = `${count}. ${areaType} ${area.toFixed(
    2
  )} cm<sup>2</sup> <button class="btn btn-primary bg-[#1090D8] text-white" onclick="convertToMeter(${area}, this, ${count}, '${areaType}')">Convert</button>`;

  calculationEntry.appendChild(p);
}

function convertToMeter(area, data, count, areaType) {
  areaMeter = area / 10000;
  data.parentNode.innerHTML = `${count}. ${areaType} ${areaMeter} m<sup>2</sup> <button  class="btn btn-primary bg-[#1090D8] text-white" onclick="convertToCentimeter(${area}, this, ${count}, '${areaType}')">Convert</button>`;
}
function convertToCentimeter(area, data, count, areaType) {
  areaMeter = area;
  data.parentNode.innerHTML = `${count}. ${areaType} ${areaMeter.toFixed(
    2
  )} cm<sup>2</sup> <button  class="btn btn-primary bg-[#1090D8] text-white" onclick="convertToMeter(${area}, this, ${count}, '${areaType}')">Convert</button>`;
}
