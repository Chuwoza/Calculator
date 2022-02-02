let x = ''; // first number
let y = ''; // first number
let symbol = ''; // first number
let end = false; // first number

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operation = ['+', '-', '*', '/'];

//монитор калькулятора
const out = document.querySelector('.calc-screen p');


// ac
function clearAll() {
	x = '';
	y = '';
	symbol = '';
	end = false;
	out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	// нажата не кнопка
	if (!event.target.classList.contains('btn')) return;
	// нажата кнопка clearAll
	if (event.target.classList.contains('ac')) clearAll;
	// очистить екран 
	out.textContent = '';
	//получаю нажатую кнопку
	const key = event.target.textContent
	// если нажата кнопка 0-9
	if (number.includes(key)) {
		if (y === '' && symbol === '') {
			x += key;
			out.textContent = x.substring(0, 8);
		}
		else if (x !== '' && y !== '' && end) {
			y = key;
			end = false;
			out.textContent = y.substring(0, 8);
		}
		else {
			y += key;
			out.textContent = y.substring(0, 8);
		}
		console.table(x, y, symbol);
		return;
	}
	//если нажата кнопка + - / * 
	if (operation.includes(key)) {
		symbol = key;
		out.textContent = symbol.substring(0, 8);
		console.log(x, y, symbol);
	}
	// нажата =
	if (x.length >= 8) {
		x = "много";
	}

	if (key === '=') {
		if (y === '') y = x;
		switch (symbol) {
			case '+':
				x = (+x) + (+y);
				x = String(x)
				x = x.substring(0, 8);
				break;
			case '-':
				x = (x) - (y);
				x = String(x)
				x = x.substring(0, 8);
				break;
			case '*':
				x = (x) * (y);
				x = String(x)
				x = x.substring(0, 8);
				break;
			case '/':
				if (y === '0') {
					out.textContent = "error..."
					x = '';
					y = '';
					symbol = '';
					return;
				}
				x = (x) / (y);
				x = String(x)
				x = x.substring(0, 8);
				break;
		}
		end = true;
		out.textContent = x;
		console.log(x, y, symbol)
	}
};