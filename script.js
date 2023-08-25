//your JS code here. If required.
const str = document.getElementById("output");

let p = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("Hello, world!");
	},1000)
})

let out = p.then((data) =>{
	str.innerText = data;
})
