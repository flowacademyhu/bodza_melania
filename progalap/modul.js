// 8. feladat

const osszead = (a, b) => {
    return a + b; 
}

const szorzas = (a, b) => {
    return a*b;
}

const hatvany = (a, b) => {
    let base = 1;
    for (let i = 1; i <= b; i++) {
        base *= a; 
    }
    return base;
}

module.exports = {
    osszead,
    szorzas,
    hatvany
};

// console.log( osszead(2, 5));
// console.log(szorzas(2, 5));
// console.log(hatvany(2, 3));