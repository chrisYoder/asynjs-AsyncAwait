// LEARN ASYNC/AWAIT BY EXAMPLE

// EXAMPLE 1:

function doubleAfter2SecondsPromise(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x * 2);
		}, 2000)
	});
}


doubleAfter2SecondsPromise(5).then( r => console.log(r));

async function addAsync(x) {
	console.time('async');
	const a = await doubleAfter2SecondsPromise(10);
	const b = await doubleAfter2SecondsPromise(20);
	const c = await doubleAfter2SecondsPromise(30);
	return x + a + b + c;
	console.timeEnd('async');
}

addAsync(10).then( sum => console.log(sum));

async function addPromiseAll(x){
	console.time('promise');
	const [a, b, c] = await Promise.all([
		doubleAfter2SecondsPromise(10),
		doubleAfter2SecondsPromise(20),
		doubleAfter2SecondsPromise(30)
	]); 
	
	return x + a + b + c;
	console.timeEnd('promise');
}

addPromiseAll(10)
	.then( sum => console.log(sum));
