---
permalink: /importfromtext/
---
<script>
var calcdata;

function getClipboard()
calcdata = ClipboardEvent.clipboardData.getData("text")
</script>


<button onClick="getClipboard()">Get from clipboard</button>
