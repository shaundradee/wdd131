
//get elements from the document to later manipulate by adding content
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

//initialize
let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;