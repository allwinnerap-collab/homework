for (let i = 1; i <= 20; i += 1) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}


const num = +prompt("Число для вычисления факториала", 0)
let factorial = 1;

for (let i = 1; i <= num; i += 1){
    factorial = factorial * i;
}
console.log(factorial);


let board = "";

for (let i = 1; i <= 8; i += 1){
    let row = "";
    for (let j = 1; j <=8; j += 1){
        row += (i + j) % 2 === 0 ? "Ч " : "Б ";
    }
    board += row + "\n";
}
console.log(board)