/* Variable Declarations */
let quotes = []
let quote

/* Quotes Import */
$.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', 
    (data) => {
        quotes = data.quotes
        refreshQuote()
    }
);

/*Functions */
let refreshQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length)
    quote = quotes[randomIndex]
    $('#text').text(quote.quote)
    $('#author').text('- ' + quote.author)
}

/* JQuery Document Scripts */
$('#new-quote').click(refreshQuote)
//$('#tweet-quote').attr("href", "https://twitter.com/intent/tweet");

$('#tweet-quote').click(() => {
    window.open('https://twitter.com/intent/tweet?&text=' + '"' + quote.quote + '" ' + quote.author, '_blank');
})
