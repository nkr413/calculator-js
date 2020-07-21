(function () {
	let calc_block = document.querySelector(".number-block");
	let main_block = document.querySelector(".main-block");
	let view_block = document.createElement('div');
	view_block.setAttribute("id", "result-block");
	view_block.innerHTML = 'Hello';

	main_block.prepend(view_block);

	let calc_numbers = [
		"C", "<i class='fas fa-backspace'></i>", "(", ")",
		1, 2, 3, "+",
		4, 5, 6, "-",
		7, 8, 9, "&#215;",
		0, ".", "%", "&#247;",
		"="
	];

	calc_numbers.forEach((item, index) => {
		let div = document.createElement('div');
		div.innerHTML = item;
		calc_block.append(div);
	});
})();

document.querySelector('.number-block > div:nth-of-type(1)').addEventListener('click', (e) => calc_start(100));
document.querySelector('.number-block > div:nth-of-type(2)').addEventListener('click', (e) => calc_start(404));
document.querySelector('.number-block > div:nth-of-type(3)').addEventListener('click', (e) => calc_start("("));
document.querySelector('.number-block > div:nth-of-type(4)').addEventListener('click', (e) => calc_start(")"));
document.querySelector('.number-block > div:nth-of-type(5)').addEventListener('click', (e) => calc_start(1));
document.querySelector('.number-block > div:nth-of-type(6)').addEventListener('click', (e) => calc_start(2));
document.querySelector('.number-block > div:nth-of-type(7)').addEventListener('click', (e) => calc_start(3));
document.querySelector('.number-block > div:nth-of-type(8)').addEventListener('click', (e) => calc_start("+"));
document.querySelector('.number-block > div:nth-of-type(9)').addEventListener('click', (e) => calc_start(4));
document.querySelector('.number-block > div:nth-of-type(10)').addEventListener('click', (e) => calc_start(5));
document.querySelector('.number-block > div:nth-of-type(11)').addEventListener('click', (e) => calc_start(6));
document.querySelector('.number-block > div:nth-of-type(12)').addEventListener('click', (e) => calc_start("-"));
document.querySelector('.number-block > div:nth-of-type(13)').addEventListener('click', (e) => calc_start(7));
document.querySelector('.number-block > div:nth-of-type(14)').addEventListener('click', (e) => calc_start(8));
document.querySelector('.number-block > div:nth-of-type(15)').addEventListener('click', (e) => calc_start(9));
document.querySelector('.number-block > div:nth-of-type(16)').addEventListener('click', (e) => calc_start("*"));
document.querySelector('.number-block > div:nth-of-type(17)').addEventListener('click', (e) => calc_start(0));
document.querySelector('.number-block > div:nth-of-type(18)').addEventListener('click', (e) => calc_start("."));
document.querySelector('.number-block > div:nth-of-type(19)').addEventListener('click', (e) => calc_start("%"));
document.querySelector('.number-block > div:nth-of-type(20)').addEventListener('click', (e) => calc_start("/"));
document.querySelector('.number-block > div:nth-of-type(21)').addEventListener('click', (e) => calc_start(202));

function calc_start(num) {
	let res_blc = document.getElementById("result-block");
	if (res_blc.innerHTML == "Hello") res_blc.innerHTML = "";

	if (num == 202) res_blc.innerHTML = eval(res_blc.innerHTML); // num == 202 -> Начинает вычесление
	else {
		if (num == 100) res_blc.innerHTML = ""; // num == 100 -> Полное удаление символов из строки
		else {
			if (num == 404) {
				let new_res = res_blc.innerHTML.slice(0, -1);
    		res_blc.innerHTML = new_res; // num == 404 -> Удаление последнего символа из строки
			}
			else res_blc.innerHTML += num;
		}
	}
}