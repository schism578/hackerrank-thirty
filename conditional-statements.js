function main() {
    const N = parseInt(readLine(), 10);
    ( N % 2 === 1 || N > 5 && N <= 20 ? console.log('Weird') : console.log('Not Weird') )
}

console.log(main());