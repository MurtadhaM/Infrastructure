/**
 * JavaScript function to extract index cards from a Quizlet set
 * Author: Murtadha Marzouq
 */


function extractIndexCards() {
    // create an array to store the index cards
    let indexCards = []
    // Select HTML elements that contain the index cards
    document.querySelectorAll('.SetPageTerms-term').forEach(element=>{
    // Extract the question and answer from the HTML elements
    let question = element.querySelectorAll('.TermText')[0].innerText;
    let answer = element.querySelectorAll('.TermText')[1].innerText
    // Create an object to store the question and answer
    let indexCard={"Question":question, "Answer":answer}
    // Add the index card to the array
    indexCards.push(indexCard)
    })
    return indexCards
}

let indexCards = extractIndexCards()
console.log(`Extracted ${indexCards.length} index cards from the Quizlet set`)