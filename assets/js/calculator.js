var calculator = {
  equation: "",
  import: function(cstring) {
    var regex = /%([^%]*)%/g;
    calculator.varlist = cstring.match(regex);
    calculator.reference = 
    setupCalc();
  },
  varvals: {},
  calculate: function() {
    return math.eval(calculator.data.equation, calculator.varvals);
  }
};
function oncDivLoad() {
  cdiv = document.getElementById("calculator");
  hash = window.location.hash;
  if (hash) {
    calculator.import(hash.split("#")[1]);
    window.location.hash = "";
  } else {
    calcInput();
  }
}
function calcInput() {
  var cinput = cdiv.appendChild(document.createElement("input"));
  cinput.setAttribute("type","text");
  cinput.id = "calcinput";
  var label = cdiv.insertBefore(document.createElement("label"), cinput);
  label.innerHTML = "Paste here: ";
  cdiv.appendChild(document.createElement("br"));
  var button = cdiv.appendChild(document.createElement("button"));
  button.innerHTML = "Load Calculator";
  button.className = "btn";
  button.setAttribute("onclick", "calculator.import(document.getElementById('calcinput').value);");
}
function setupCalc() {
  cdiv.innerHTML = "";
  inputdex = {};
  var input,
  label;
  qdiv = cdiv.appendChild(document.createElement("div"));
  qdiv.id = "questions";
  calculator.data.varlist.forEach(function(value, i) {
    input = qdiv.appendChild(document.createElement("input"));
    input.setAttribute("type","text");
    input.id = value;
    input.setAttribute("oninput","genSolution();");
    input.setAttribute("tabindex","'"+i+"'");
    inputdex[value] = input;
    label = qdiv.insertBefore(document.createElement("label"), input)
    label.innerHTML = "$"+value+"$: ";
    label.style.cssText = "width: "+(calculator.data.varlist.reduce(function (a, b) { return a.length > b.length ? a : b; })+': ').length * 10+"px; display: inline-block;";
    label.setAttribute("tabindex","-1");
    qdiv.appendChild(document.createElement("br"));
  });
  MathJax.Hub.Typeset(qdiv);
  adiv = cdiv.appendChild(document.createElement("div"));
  adiv.id = "answer";
  adiv.innerHTML = "$${}$$";
  MathJax.Hub.Typeset(adiv);
  answer = MathJax.Hub.getAllJax(adiv)[0];
  genSolution();
}
function genSolution() {
  calculator.data.varlist.forEach(function(value) {
    calculator.varvals[value] = math.eval(inputdex[value].value);
  });
  answer.Text(calculator.calculate());
}
