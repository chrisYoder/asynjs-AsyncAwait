// SYNTAX

// WITH FUNCTION DECLARATIONS

async function myFn() {
	await console.log('Function declaration');
}

// WITH ARROW FUNCTION

const myFn2 = async () => {
	await console.log('Arrow Function');
}

// OBJECT METHODS

const obj = {
	async getName() {
		return fetch('https://www.example.com');
	}
}

// IN A CLASS

class Obj {
	// getters and setter CANNOT be async
	async getResource {
		return fetch('https://www.example.com');
	}
}



