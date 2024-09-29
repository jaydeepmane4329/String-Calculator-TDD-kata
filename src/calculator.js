function add(numbers) {
    if (numbers === '') return 0;

    let delimiter = /[\n,]/;

    if (numbers.startsWith('//')) {
        const delimiterPart = numbers.match(/^\/\/(.)\n/);
        delimiter = new RegExp(`[${delimiterPart[1]}]`);
        numbers = numbers.slice(4);
    }

    const nums = numbers.split(delimiter);
    return nums.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add }; 