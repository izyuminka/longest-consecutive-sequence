module.exports = function longestConsecutiveLength(array) {
    if (array.length === 0) return 0;
    array.sort((a, b) => a - b);
    let counted = [];
    let counter = 0;
    array.forEach((v, i, a) => {
        if (a[i + 1] === v + 1) {
            counter++;
        } else if (a[i + 1] !== v) {
            if (counter > 0) {
                counted.push(counter + 1);
            }
            counter = 0;
        }
    });
    return counted.length === 0 ? 1 : counted.sort((a, b) => b - a)[0];
};