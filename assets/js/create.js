function onDivLoad() {
  crdiv = document.getElementById("create");
  varinput = crdiv.appendChild(document.createElement("input"));
  varinput.setAttribute("type","text");
  var label = crdiv.insertBefore(document.createElement("label"), varinput);
  label.innerHTML = "Variable names here, separated by a comma: ";
  crdiv.appendChild(document.createElement("br"));
  equation = crdiv.appendChild(document.createElement("input"));
  equation.setAttribute("type","text");
  crdiv.appendChild(document.createElement("br"));
  var button = crdiv.appendChild(document.createElement("button"));
  button.className = "btn";
  button.innerHTML = "Generate Calculator";
  button.setAttribute("onclick","genCalc();")
}
function genCalc() {
  calculator.data.varlist = JSON.parse('[' + varinput.value + ']');
  calculator.data.equation = equation.value;
}
