var calculator = {
  data: {
    varlist: ['a','b'],
    equation: 'a * b'
  },
  import: function(cstring) {
    calculator.data = JSON.parse(cstring);
    setupCalc();
  },
  varvals: {},
  calculate: function() {
    return math.eval(calculator.data.equation, calculator.varvals);
  }
};
function onDivLoad() {
  cdiv = document.getElementById("calculator");
  hash = window.location.hash;
  if (hash) {
    calculator.import(hash.split("#")[1]);
    history.pushState("", document.title, window.location.pathname);
  }
  setupCalc();
}
function setupCalc() {
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
  adiv = cdiv.appendChild(document.createElement("div"));
  adiv.id = "answer";
  genSolution();
}
function genSolution() {
  calculator.data.varlist.forEach(function(value) {
    calculator.varvals[value] = math.eval(inputdex[value].value);
  });
  adiv.innerHTML = "$$"+calculator.calculate()+"$$";
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"answer"]);
}
