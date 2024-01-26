// Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    if (args.length > 0 && args.length <= 100) {
        return args.length;
    } else {
        throw new Error("Array Length Should be Greater than 0 and less than or equal to 100");
    }
};
argumentsLength({}, null, 3);

