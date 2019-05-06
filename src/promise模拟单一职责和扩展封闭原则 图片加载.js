function loadImg(src) {
	let promise = new Promise(function(resolve, reject) {
		let img = document.createElement('img')
		img.onload = function() {
			console.log(3)
			resolve(img)
			console.log(4)
		}
		img.onerror = function() {
			reject('img not create')
		}
		console.log(1)
		img.src = src
		console.log(2)
	})
	return promise
}

let src = 'https://www.imooc.com/static/img/index/logo.png'
let result = loadImg(src)
result.then(function (img) {
	alert(`width: ${img.width}`)
	// return loadImg(src)
	console.log(img)
	return 'aaabbb'
})
.then(function(img) {
	console.log(img)
	alert(`height: ${img.height}`)
})
.catch(function(ex) {
	alert(ex)

})