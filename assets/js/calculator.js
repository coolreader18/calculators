var calculator = {
  data: {
    varlist: ['a','b'],
    equation: 'a * b'
  },
  import: function(cstring) {
    calculator.data = JSON.parse(cstring);
  },
  varvals: {},
  calculate: function() {
    return math.eval(calculator.data.equation, calculator.varvals);
  }
};
function onDivLoad() {
  inputdex = {};
  var input,
      label;
  cdiv = document.getElementById("calculator");
  qdiv = cdiv.appendChild(document.createElement("div"));
  qdiv.id = "questions";
  calculator.data.varlist.forEach(function(value) {
    input = qdiv.appendChild(document.createElement("input"));
    input.setAttribute("type","text");
    input.id = value;
    input.setAttribute("oninput","genSolution();")
    inputdex[value] = input;
    label = qdiv.insertBefore(document.createElement("label"), input)
    label.innerHTML = "$"+value+"$: ";
    label.style.cssText = "width: "+(calculator.data.varlist.reduce(function (a, b) { return a.length > b.length ? a : b; })+': ').length * 10+"px; display: inline-block;";
    qdiv.appendChild(document.createElement("br"));
  });
  adiv = cdiv.appendChild(document.createElement("div"));
  adiv.id = "answer";
  genSolution();
}
function genSolution() {
  calculator.data.varlist.forEach(function(value) {
    calculator.varvals[value] = inputdex[value].value;
  });
  adiv.innerHTML = "$$"+calculator.calculate()+"$$";
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,"answer"]);

}
