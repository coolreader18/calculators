var calculator = {
  data: {
    varlist: [],
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

function onDivLoad(){
  var div = document.getElementById("calculator");
  div.appendChild(document.createElement("input")).setAttribute("style", "border: 1px solid;border-radius: 5px;height: 30px;font-size: 30px;");
}
