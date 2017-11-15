var calculator = {
  data: {
    varlist: ["a","b","c"],
    equation: "b*a*c";
  },
  definevars: function() {
    var varlist = calculator.data.varlist;
    for (i = 0; i < varlist.length; i++) {
      calculator.vars[varlist[i]] = undefined;
    }
  },
  import: function(cstring) {
  	calculator.data = JSON.parse(cstring);
  },
  assignvars: function() {
    var varlist = calculator.data.varlist;
    var args = Array.from(arguments);
    for (var i = 0; i < varlist.length; i++) {
      calculator.vars.varvals[varlist[i]] = args[i];
    }
  },
  varvals: {},
  calculate: function() {
    assignvars(arguments);
    return math.eval(calculator.data.equation, calculator.varvals);
  }
};


calculator.vars.define();
document.getElementById("thing").innerHTML = calculator.calculate(1,2,3);
