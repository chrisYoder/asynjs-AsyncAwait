# Async Await in JS

---

### [Deeply Understanding JavaScript Async and Await with Examples](https://blog.bitsrc.io/understanding-javascript-async-and-await-with-examples-a010b03926ea)

- Callbacks
	- Difficult to read
	- Error handling is difficult
	
- Promises
	- easier to read because we chain .then for callbacks
	- Error handling uses .catch instead of try/catch
	- Looping over multiple promises in a sequence is challenging and non-intuitive.
	
- Async/Await	
	- Works on top of promises
	- Alternative promise syntax
	- avoids chaining .then statements
	- allows asynchronous execution while maintaining a regular synchronous feel.
	
- Semantics and Evaluation
	- an async function always 