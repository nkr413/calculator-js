let calculating;
let calcFinish;
let x = 0;

let funBase = {
	lastDelete() {
		let res_blc = document.getElementById("result-block");
		let new_res = res_blc.innerHTML.slice(0, -1);
    		res_blc.innerHTML = new_res;
	},
	deleteAll() {
		let res_blc = document.getElementById("result-block");
		res_blc.innerHTML = "";
	},
	showHideList() {
		let history = document.querySelector(".history-block");
		if (x % 2 == 0) {
			history.style.display = "block";	
			setTimeout(() => {
				history.style.transform = "translate(-40px, 0px)";
				setTimeout(() => {
					history.style.transform = "translate(-20px, 0px)";
					setTimeout(() => {
						history.style.transform = "translate(20px, 0px)";
					}, 30);
				}, 30);
			}, 30);	
		}
		else {
			history.style.transform = "translate(-60px, 0px)";
			history.style.display = "none";				
		}
		x++;

		document.querySelector(".number-block > button > i").style.transform = "rotate(360deg)";
		setTimeout(() => document.querySelector(".number-block > button > i").style.transform = "rotate(0deg)", 600);
	}
};

(function () {
	let calc_block = document.querySelector(".number-block");
	let main_block = document.querySelector(".main-block");
	let view_block = document.createElement('div');
	view_block.setAttribute("id", "result-block");
	main_block.prepend(view_block);

	let calc_numbers = [
		"C", "<i class='fas fa-backspace'></i>", "(", ")",
		1, 2, 3, "+",
		4, 5, 6, "-",
		7, 8, 9, "&#215;",
		0, ".", "%", "&#247;",
		"=", "<i class='fas fa-history'></i>"
	];

	calc_numbers.forEach((item, index) => {
		if (item == "<i class='fas fa-history'></i>") {
			let btn = document.createElement('button');
			btn.innerHTML = item;
			calc_block.append(btn);
		}
		else {
			let div = document.createElement('div');
			div.innerHTML = item;
			calc_block.append(div);
		}
	});
})();

document.querySelector('.number-block > div:nth-of-type(1)').addEventListener('click', (e) => funBase.deleteAll());
document.querySelector('.number-block > div:nth-of-type(2)').addEventListener('click', (e) => funBase.lastDelete());
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
document.querySelector('.number-block > div:nth-of-type(21)').addEventListener('click', (e) => calc_start(100));
document.querySelector('.number-block > button').addEventListener('click', (e) => funBase.showHideList());

function calc_start(num) {
	let res_blc = document.getElementById("result-block");
	if (num == 100) {
		calculating = res_blc.innerHTML;
		res_blc.innerHTML = eval(res_blc.innerHTML);
		calcFinish = res_blc.innerHTML;
		
		//Update History
		let listBlock = document.querySelector("#list-block");
		let list = document.createElement("div");
		let div1 = document.createElement('div');
		div1.innerHTML = calculating;

		let div2 = document.createElement('div');
		div2.innerHTML = calcFinish;

		listBlock.prepend(list);
		list.append(div1);
		list.append(div2);

		let block = document.querySelectorAll('#listBlock > div');
		for (i = 0; i < block.length; i++) block[i].style = "font-size: 14pt";
	}
	else {
		let res_blc = document.getElementById("result-block");
		res_blc.innerHTML += num;
	}
}
