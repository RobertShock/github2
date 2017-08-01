var cat = "fluffy";
console.log("inside main.js", cat);
console.log("fixed problem");

var catzContainer = document.getElementById('catz');

console.log(catzContainer);
catzContainer.innerHTML = '<h1>' + cat + '</h1>';
// <h1> tags + plus sign + ver name prints to the webpage



