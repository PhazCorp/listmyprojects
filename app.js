let root = document.getElementById("main")

root.innerText = "Hello World"

let hash 

addEventListener('load', e => {
	hash = window.location.hash
	if (hash != ''){
		console.log('on load hash: ', hash)
	}
})

addEventListener('hashchange', (event) => {
	hash = window.location.hash
	console.log('on change hash: ', hash)
})


