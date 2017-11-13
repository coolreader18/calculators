---
permalink: /importfromtext/
---
<script>
var calcdata;

function getClipboard() {
  ClipboardEvent("paste");
  calcdata = ClipboardEvent.clipboardData.getData("text");
}
</script>


<button onClick="getClipboard()">Get from clipboard</button>
text
