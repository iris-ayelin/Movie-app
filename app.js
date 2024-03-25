let input = document.querySelector('input');
let btn = document.querySelector('button');
let p = document.querySelector('p');
let img = document.querySelector('img');

function loadData() {
    const API_KEY = '6ee2fa60';
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&t=${input.value}`)
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log(data);
        img.src = data.Poster;
        p.innerText = ''; 
        
        let paragraphs = [
            { label: 'Title', content: data.Title },
            { label: 'Genre', content: data.Genre },
            { label: 'Year', content: data.Year },
            { label: 'Plot', content: data.Plot },
            { label: 'Director', content: data.Director },
            { label: 'Actors', content: data.Actors }
        ];

        paragraphs.forEach(paragraphInfo => {
            let newParagraph = document.createElement('p');
            newParagraph.innerText = `${paragraphInfo.label}: ${paragraphInfo.content}`;
            p.appendChild(newParagraph);
        });
    });
}