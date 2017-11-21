function oncrDivLoad() {
  crdiv = document.getElementById("create");
  varinput = crdiv.appendChild(document.createElement("input"));
  varinput.setAttribute("type","text");
  var.setAttribute("placeholder","eg. a,b,c");
  var label = crdiv.insertBefore(document.createElement("label"), varinput);
  label.innerHTML = "Variable names: ";
  crdiv.appendChild(document.createElement("br"));
  equation = crdiv.appendChild(document.createElement("input"));
  equation.setAttribute("type","text");
  equation.setAttribute("placeholder","eg. (-b + sqrt((b^2)-4*a*c))/2a")
  label = crdiv.insertBefore(document.createElement("label"), equation);
  label.innerHTML = "Equation: "
  crdiv.appendChild(document.createElement("br"));
  var button = crdiv.appendChild(document.createElement("button"));
  button.className = "btn";
  button.innerHTML = "Generate Calculator";
  button.setAttribute("onclick","genCalc();")
}
function genCalc() {
  calculator.data.varlist = varinput.value.split(",");
  calculator.data.equation = equation.value;
  cdiv = document.getElementById("calculator");
  setupCalc();
  MathJax.Hub.Queue(['Typeset',MathJax.Hub,"questions"]);
}
