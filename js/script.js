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
const createCell = (min, max, difficulty) => {
  for (let i = min; i <= max; i++) {
		const cell = document.createElement('div');
		cell.className = `cell-${difficulty}`;
		cell.id = i;
		cell.innerText = i
		return cell;
	}
}

document.getElementById('grid').appendChild(createCell(1, 100, 1));



// ---------------------
// Dati
// ---------------------
let row = 10;
let column = 10;
let totalCells = row * column;