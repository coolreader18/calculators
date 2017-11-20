var calculator = {
  data: {
    varlist: ['a','b'],
    equation: '2 * 3'
  },
  import: function(cstring) {
    calculator.data = JSON.parse(cstring);
  },
  assignvars: function() {
    var varlist = calculator.data.varlist;
    var args = Array.from(arguments);
    for (var i = 0; i < varlist.length; i++) {
      calculator.varvals[varlist[i]] = args[i];
    }
  },
  varvals: {},
  calculate: function() {
    calculator.assignvars.apply(this, arguments)
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
  adiv.id = "answers";
  genSolution();
}
function genSolution() {
  calculator.data.varlist.forEach(function(value) {
    calculator.varvals[value] = inputdex[value];
  });
  adiv.innerHTML = "$$"+calculator.calculate()+"$$";
}
