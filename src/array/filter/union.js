/**
 * 数组并集函数(ES6+)（只限基本数据类型）
 * @param {array} a 需要处理的数组
 * @param {array} b 需要处理的数组
 * @returns {array} 返回并集数组
 * @example
 *
 * union([1, 2, 3], [4, 5])
 * // => [1, 2, 3, 4, 5]
 */
const union = (a, b) => [...new Set([...a, ...b])];

// ES7+
const unionES7 = (a, b) => a.concat(b.filter(v => !a.includes(v)));

export { union, unionES7 };
