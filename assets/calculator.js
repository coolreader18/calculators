var calculator = {
  data: {
    varlist: [],
    equation: "2*3"
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
    calculator.assignvars.apply(this, arguments);
    return math.eval(calculator.data.equation, calculator.varvals);
  }
};

document.getElementById("calculator").innerHTML = "kay";
alert(math.eval('1 * 2'));
