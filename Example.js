let body = document.body; //selects body tag
let h1 = document.createElement('h1'); //creates tag, assigns it a value.

h1.innerText = 'Our Favorite Books!'; //puts string in h1 tag
body.appendChild(h1);

const books = ['Grandmaster of Demonic Cultivation', 'Legend of Fei', 'Full Marks, Hidden Marriage']

let table = document.createElement('table'); // <table></table>
let rowHeader = document.createElement('tr'); //<tr></tr>
let tHeader = document.createElement('th') //<th></th>

tHeader.innerText = 'Book Names';

rowHeader.appendChild(tHeader);
table.appendChild(rowHeader);
body.appendChild(table);

books.forEach(function (current) {
    console.log(current);

    let row2 = document.createElement('tr');
    let firstBook = document.createElement('td');

    firstBook.innerText = current;

    table.appendChild(row2)
    row2.appendChild(firstBook)
})

//Normal for loop:
for (let i = 0; i < books.length; i++) {
    let row2 = document.createElement('tr');
    let firstBook = document.createElement('td');

    firstBook.innerText = books[i];

    table.appendChild(row2)
    row2.appendChild(firstBook)
}