let todos = [
	// 	id: 1,
	// 	task: "Купить луну",
	// 	time: "14:05",
	// 	completed: true,
	// },
	// {
	// 	id: 2,
	// 	task: "Купить mandarin",
	// 	time: "14:05",r
	// 	completed: false,
	// },
];

let form = document.forms.add_task_form;
let container = document.querySelector(".container");
let modal = document.querySelector('.modal')
let close_btn = document.querySelector('.Okey')
let cancel = document.querySelector('.cancel')




form.onsubmit = (event) => {
	event.preventDefault();

	let todo = {
		id: Math.random(),
		completed: false,
		time: new Date().getHours() + ":" + new Date().getMinutes(),
	};

	let fm = new FormData(form);

	fm.forEach((value, key) => {
		todo[key] = value;
	});


	todos.push(todo)
	reload(todos)
};

const reload = (arr) => {
	container.innerHTML = ""

	for (let item of arr) {
		let box = document.createElement("div");
		let img = document.createElement("img");
		let h3 = document.createElement("h3");
		let span = document.createElement("span");

		box.classList.add("box");
		img.classList.add("img");
		h3.classList.add("h3");
		span.classList.add("span");

		h3.innerHTML = item.task;
		img.src = "./close.svg";
		span.innerHTML = item.time;

		container.append(box);
		box.append(img, h3, span);
		img.onclick = () => {
			box.style.display = 'none'
			box.style.opacity = '0'
		}

		// close_btn.onclick = () => {
		// 	modal.style.display = 'none'
		// 	modal.style.opacity = '0'
		// 	box.style.display = 'none'
		// }

		// cancel.onclick = () => {
		// 	modal.style.display = 'none'
		// 	modal.style.opacity = '0'
		// }

	     h3.onclick = () => {
			 
			 if(item.completed === true){
				 h3.style.textDecoration = 'line-through'
				 item.completed = false
				}else {
				item.completed = true
				h3.style.textDecoration = 'none'
			}
		 }
	}
};

reload(todos)