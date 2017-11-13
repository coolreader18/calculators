---
permalink: /importfromtext/
---
<script>
var calcdata;

function getClipboard() {
  navigator.clipboard.readText().then(function(text){
    calcdata = text;
  }
}
</script>


<button onClick="getClipboard()">Get from clipboard</button>
text
