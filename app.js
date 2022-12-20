let root = document.getElementById("main")

root.innerText = "Hello World"

let hash = window.location.hash

addEventListener('hashchange', (event) => {
	hash = window.location.hash
	console.log(has)
})


