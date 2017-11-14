var calculator = {
  variables: [],
  equation:
};
function openCalc(calc) {
  calculator = JSON.parse(calc);
}
var hash = window.location.hash.split("#")[1];
if(hash) {
  openCalc(hash);
}
