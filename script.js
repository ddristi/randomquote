const quoteText = document.querySelector('.quote-content')
const button = document.querySelector('button')
const authorName = document.querySelector('.name')
function randomQuote (){
    fetch("http://localhost:4000/quotes")
        .then((response) => response.json())
        .then((data) => {
            quoteText.textContent = `"${data.q}"`;
            authorName.textContent = `${data.a}`
        })
    
}




button.addEventListener('click', randomQuote)
