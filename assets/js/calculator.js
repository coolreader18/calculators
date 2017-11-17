var calculator = {
  data: {
    varlist: [a,b],
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
var inputdex = {};
function onDivLoad(){
  var cdiv = document.getElementById("calculator"),
      input;
  for (let value of calculator.data.varlist) {
    input = cdiv.appendChild(document.createElement("input"));
    input.setAttribute("type","text");
    input.id = value;
    inputdex[value] = input;
    cdiv.insertBefore(document.createElement("label"), input).innerHTML = value+":";
  }
}