---
permalink: /importfromtext/
---
<script>
var calcdata;
</script>
<input id="calcdata">

<button onClick="getCalcdata()">Get from clipboard</button>
<script>
function getCalcdata() {
  calcdata = document.getElementById("calcdata").value;
}
</script>

