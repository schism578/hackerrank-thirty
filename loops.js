function main(n) {
    //const n = parseInt(readLine(), 10);
    for (let i = 1; i <= 10; i += 1) {
        console.log(`${n} x ${i} = ${n * i}`)
    }
}

console.log(main(3));