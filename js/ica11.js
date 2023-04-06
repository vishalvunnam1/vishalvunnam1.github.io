const button = document.querySelector(".new-quote");
button.addEventListener('click', getQuote);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
async function getQuote() {
    try{
        const response = await fetch(endpoint); 
        if(!response.ok)
        {
            throw Error(response.statusText);
        }
        const json = await response.json();
        console.log(json.question);

        displayQuote(json.question);
    }
    catch(err){
        console.log(err);
        alert('failed to fetch trivia');
    }
}
function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote; 
}

getQuote();