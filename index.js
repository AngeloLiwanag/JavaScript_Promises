// Resolve(data), reject(errors).
const promise = new Promise((resolve, reject) => {
});
console.log(promise)

// Promise has 3 states: pending, fulfilled, and rejected.
//      Pending is our current state and it will eventually transition into one of the other states.
//      Fulfilled state means that resolve has been called and the promise is complete.
//      Rejected indicates the promise operation failed.