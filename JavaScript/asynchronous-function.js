// Execute Asynchronous Functions in Parallel
// Given an array of asynchronous functions functions, return a new promise promise.
// Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const results = [];
    let counter = 0;

    if (functions.length === 0) {
      resolve(results);
    }

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          results[i] = result;
          counter++;

          if (counter === functions.length) {
            resolve(results);
          }
        })
        .catch((reason) => {
          reject(reason);
        });
    }
  });
};

const promise = promiseAll([() => new Promise(res => res(42))]);
promise.then(console.log); // [42]
