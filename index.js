const readline = require('readline');
const algSort = require('./algSort');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your grades sepereated by commas.', (input => {
    const numbers = input.split(',').map(num => parseInt(num.trim()));
    const sortedNumbers = algSort(numbers);
    console.log('here are your grades sorted:', sortedNumbers);
    rl.close();
}))