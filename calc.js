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
	out.textContent = '0';
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
	// нажата не кнопка
	if (!event.target.classList.contains('btn')) return;
	// нажата кнопка clearAll
	if (event.target.classList.contains('ac')) clearAll;
	// очистить екран 
	out.textContent = '0';
	//получаю нажатую кнопку
	const key = event.target.textContent
	// если нажата кнопка 0-9
	if (number.includes(key)) {
		if (y === '' && symbol === '') {
			x += key;
			if (parseFloat(x) > 999999999) {
				console.log('сработал return');
				out.textContent = 'Error...'
				return;
			}
			out.textContent = x;
		}
		else if (x !== '' && y !== '' && end) {
			y = key;
			end = false;
		}
		else {
			y += key;
			if (parseFloat(y) > 999999999) {
				console.log('сработал return');
				out.textContent = 'Error...'
				return;
			}
			out.textContent = y;
		}
		console.log("x=", x, symbol, "y=", y);
		return;
	}
	//если нажата кнопка + - / * 
	if (operation.includes(key)) {
		symbol = key;
		out.textContent = symbol.substring(0, 10);
		console.log("x=", x, symbol, "y=", y);
	}
	// нажата =
	if (x.length >= 9) {
		out.textContent = "Error...";
		return;
	}

	if (key === '=') {
		if (y === '') y = x;
		switch (symbol) {
			case '+':
				x = (+x) + (+y);
				x = String(x);
				x = x.substring(0, 9);
				break;
			case '-':
				x = (x) - (y)
				x = String(x);
				x = x.substring(0, 9);
				break;
			case '*':
				x = (x) * (y);
				x = String(x);
				x = x.substring(0, 9);
				break;
			case '/':
				if (y === '0') {
					out.textContent = "error...";
					x = '';
					y = '';
					symbol = '';
					return;
				}
				x = ((x) / (y)).toFixed(2);;
				x = String(x);
				x = x.substring(0, 9);
				break;
		}
		end = true;
		out.textContent = x;
		console.log("x=", x, symbol, "y=", y);
	}
};