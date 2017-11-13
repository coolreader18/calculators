---
permalink: /importfromtext/
---
<input id="calcinput">

<button onClick="getCalcdata()">Get from clipboard</button>
<script>
function getCalcdata() {
  var calcdata = document.getElementById("calcinput").value;
  alert("wow");
}
</script>

