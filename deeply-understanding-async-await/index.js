// SYNTAX

// WITH FUNCTION DECLARATIONS

// async function myFn() {
// 	await /*console.log('Function declaration')*/
// }

// // WITH ARROW FUNCTION

// const myFn2 = async () => await /*console.log('Arrow Function')*/

// // OBJECT METHODS

// const obj = {
// 	async getName() {
// 		return fetch('https://www.example.com');
// 	}
// }

// // IN A CLASS

// class Obj {
// 	// getters and setter CANNOT be async
// 	async getResource {
// 		return fetch('https://www.example.com');
// 	}
// }



// Semantics and evaluation

async function fn() {
	return 'hello';
}

// fn().then(console.log);

// utility function to cause delay and get random value

const delayAndGetRandom = (ms) => {
	// resolve to random value
	return new Promise (resolve => {
		setTimeout(() => {
			const val = Math.trunc(Math.random() * 100);
			resolve(val);
		}, ms);
	});
};

async function fn2() {
	console.time('fn2')
	const a = await 9; // transformed to: const a = await Promise.resolve(9)
	const b = await delayAndGetRandom(1000); // pauses function for one second
	const c = await 5 // transformed to: const c = await Promise.resolve(5)
	
	await delayAndGetRandom(1000); // pauses function for 1 second
	
	console.timeEnd('fn2');
	return a + b * c;
	
}

// fn2().then(console.log);

const wait = (i, ms) => new Promise(resolve => setTimeout(() => resolve(i), ms));

async function printNumbersUsingAsync() {
	for(let i = 0; i < 10; i++) {
		console.time(`${i} time`);
		await wait(i, Math.random() * 1000);
		// console.log(i);
		console.timeEnd(`${i} time`);
	}
}

// printNumbersUsingAsync();

// ERROR HANDLING

async function canRejectOrReturn() {
	// wait one second
	await new Promise(resolve => setTimeout(resolve, 1000));
	
	// reject with 50% probability
	if(Math.random() > 0.5) {
		throw new Error('Sorry, number too big');
	}
	
	return 'perfect number';
}

async function foo() {
	try {
		return canRejectOrReturn();
	}
	
	catch(e) {
		return 'error caught';
	}
}

// console.log(foo());

// async functions in callbacks

const url = 'https://api.github.com/users';

const fetchPublicReposCount = async (username) => {
	// Utility fn to fetch repo counts
	const response = await fetch(`${url}/${username}`); // wait while the api endpoint is hit
	const json = await response.json(); // once we get response wait while we parse the data
	return json['public_repos']; // returns public_repos count. 
}

const users = [
	'ArfatSalman', 
	'octocat',
	'norvig'
]; 

const counts = users.map(async username => {
	try{
		const count = await fetchPublicReposCount(username);
		return `${username}: ${count} public repos`;
	}
	
	catch (e) {
		return e.message;
	}
	
}); 

console.log(counts);
