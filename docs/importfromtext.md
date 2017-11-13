---
permalink: /importfromtext/
---
<input id="calcinput">

<button onClick="getCalcdata()">Get from clipboard</button>
<script>
var calctemplate;
function getCalcdata() {
  calctemplate = document.getElementById("calcinput").value;
}
</script>

