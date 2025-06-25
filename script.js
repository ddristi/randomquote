const quoteText = document.querySelector('.quote-content')
const button = document.querySelector('button')
const authorName = document.querySelector('.name')
const soundbtn = document.querySelector('.sound')
const copybtn = document.querySelector('.copy')
const tweetbtn = document.querySelector('.twitter')

synth = speechSynthesis

function randomQuote (){
    fetch("http://localhost:4000/quotes")
        .then((response) => response.json())
        .then((data) => {
            quoteText.textContent = `"${data.q}"`;
            authorName.textContent = `${data.a}`
        })
    
}

soundbtn.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`)
    synth.speak(utterance)
})

copybtn.addEventListener("click", ()=> {
    navigator.clipboard.writeText(quoteText.innerText)
})

tweetbtn.addEventListener("click", ()=>{
    let tweeturl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweeturl, "_blank")
})




button.addEventListener('click', randomQuote)
