/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// crea funzione che crea le celle
// Funzione che crea numeri da a

//* La funzione prende il numero di celle e la difficoltà
const createCell = (max, difficulty, destination, actualNumber) => {
  for (let i = 1; i <= max; i++) {
		const cell = document.createElement('div');
		cell.className = `cell-${difficulty}`;
		cell.id = actualNumber;
		cell.innerText = actualNumber;
		return destination.appendChild(cell);
	}
}

// document.getElementById('grid').appendChild(createCell(1, 100, 1));
/*
for (let i = 1; i <= 100; i++) {
	// console.log('Test', i);
	const cell = document.createElement('div');
	cell.className = `cell-1`;
	cell.id = i;
	cell.innerText = i;
	document.getElementById('grid').appendChild(cell);
}
*/



// ---------------------
// Dati
// ---------------------
let row = 10;
let column = 10;
let totalCells = row * column;
const grid = document.getElementById('grid');

for (let i = 1; i <= 100; i++){
	console.log(i);
	createCell(i ,1, grid, i);
}