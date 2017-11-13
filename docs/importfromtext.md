---
permalink: /importfromtext/
---
<script>
var calcdata;
</script>
<input id="calcinput">

<button onClick="getCalcdata()">Get from clipboard</button>
<script>
function getCalcdata() {
  calcdata = document.getElementById("calcinput").value;
  alert("wow");
}
</script>

