// Join Two arrays by id

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    return Object.values([...arr1, ...arr2].reduce((d, a) => (d[a.id] = {...d[a.id], ...a}) && d, {}));
};

join(
  [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ],
  [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ]
);