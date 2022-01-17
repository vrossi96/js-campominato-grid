/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/


// crea funzione che crea le celle
//* La funzione prende il numero di celle e la difficoltà
const createCell = (difficulty, destination, actualNumber, toggledClass) => {
		const cell = document.createElement('div');
		cell.className = `cell-${difficulty} fw-bold d-flex justify-content-center align-items-center`;
		cell.id = actualNumber;
		cell.innerText = actualNumber;
		cell.addEventListener('click', function() {
			cell.classList.toggle(toggledClass);
		})
		return destination.appendChild(cell);
}

// ---------------------
// Dati
// ---------------------
const selectDifficulty = document.getElementById('difficulty'); 
const refresh = document.getElementById('refresh');
const clear = document.getElementById('clear');
const grid = document.getElementById('grid');

refresh.addEventListener('click', function() {
	grid.innerHTML = "";
	const level = selectDifficulty.value;
	let max;
	let tipo;
	let toggledClass = 'colored';

	if (level == 'diff-1'){
		max = 100;
		tipo = 1;
	} else if (level == 'diff-2') {
		max = 81;
		tipo = 2;
	} else {
		max = 49;
		tipo = 3;
	}
	for (let i = 1; i <= max; i++){
		createCell(tipo, grid, i, toggledClass);
	}
})

clear.addEventListener('click', function() {
	grid.innerHTML = "";
})
