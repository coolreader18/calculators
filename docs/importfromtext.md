---
permalink: /importfromtext/
---
<input id="calcinput">

<button onClick="getCalcdata()">Get from clipboard</button>
<script>
function getCalcdata() {
  alert(document.getElementById("calcinput").value);
  alert("wow");
  document.getElementById("calcinput").value = "hey";
}
</script>

