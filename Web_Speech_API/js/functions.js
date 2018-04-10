var logEnableControl = document.getElementById('log-enable-control');
var logMessage = document.getElementById('log-message');

logEnableControl.addEventListener('change', function(e) {
  if (this.checked) {
    logMessage.style.opacity = 0.9;
  } else {
    logMessage.style.opacity = 0;
  }
});

function transcriptionAnalyzer(transcript) {
  if (typeof transcript !== 'string') {
    return false;
  }
}
