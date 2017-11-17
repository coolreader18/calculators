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
	var inputdex = {},
        input,
        label;
	var cdiv = document.getElementById("calculator");
  calculator.data.varlist.forEach(function(value) {
    input = cdiv.appendChild(document.createElement("input"));
    input.setAttribute("type","text");
    input.id = value;
    inputdex[value] = input;
    label = cdiv.insertBefore(document.createElement("label"), input)
    label.innerHTML = "$"+value+"$: ";
    label.style.cssText = "width: "+calculator.data.varlist.reduce(function (a, b) { return a.length > b.length ? a : b; }) * 15+"px; display: inline-block;";
    cdiv.appendChild(document.createElement("br"));
  });
}
