# Quizlet Card Extractor

Extract Quizlet cards from a Quizlet page.

## Usage
- [x] Open the Quizlet set page.
- [x] Open the developer console in your browser **F12**.
- [x] Paste the code below and press Enter.

## Code
```javascript

function extractIndexCards() {
    let indexCards = []
    document.querySelectorAll('.SetPageTerms-term').forEach(element=>{
    let question = element.querySelectorAll('.TermText')[0].innerText;
    let answer = element.querySelectorAll('.TermText')[1].innerText
    let indexCard={"Question":question, "Answer":answer}
    indexCards.push(indexCard)
    })
    return indexCards
}

let indexCards = extractIndexCards()
console.log(`Extracted ${indexCards.length} index cards from the Quizlet set.`)
indexCards 

```

