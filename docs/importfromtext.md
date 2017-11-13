---
permalink: /importfromtext/
---


<button onClick="getClipboard()">Get from clipboard</button>
text
<script>
var calcdata;
function getClipboard() {
    calcdata = window.clipboardData.getData('Text');
}
</script>
