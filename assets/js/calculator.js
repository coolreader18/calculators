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
    return math.eval(calculator.data.equation);
  }
};

function calculateindiv() {
  document.getElementById("calculator").innerHTML = calculator.calculate();
}
alert(math.eval(calculator.data.equation));
