# Quizlet Card Extractor

Extract Quizlet cards from a Quizlet page.

## Usage

- [Developer Console] Open the developer console in your browser F12.
- [Console] Paste the code below and press Enter.

```javascript
fetch('https://raw.githubusercontent.com/MurtadhaM/Infrastructure/main/Automation/Quizlet_Card_Extractor/Quizlet_Card_Extractor.js')
  .then(response => response.text())
  .then(text => eval(text));
```
