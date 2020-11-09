const {osszead, szorzas, hatvany} = require('./modul');

// 1. feladat

//    'szám'      'szting'        'logikai érték'           'tömb'              'objekt'
let a = 8;   let b = 'szia';     let c = true;       let d = [];     let e = {name: 'Anna', age: 15}; 

// 2. feladat
//const : konstanst hozunk vele létre, tehát a későbbiek során az érétke nem változtatható
//let: változót hozunk vele létre, értéke később megváltoztatható
let n = 5;
const m = 10;

n = n*2;
//m = m*2;  //nem lehetséges

// 3. feladat

//referencia szerinti paraméterátadás az összetett adattípusokra jellemző, pl objekt vagy tömb. Ha egy fgv-nek átadjuk, annak értéke meg tud változni.
//érték szerinti paraméterátadás az egyszerű adattípusokra jellemző, pl sztring vagy szám esetén. Ha egy fgv-nek átadjuk, annak értéke nem fog megváltozni.

let egyszeru = 5;
let osszetett = [2];

const fgv = (szam, tomb) => {
    szam= 15;
    tomb.push = [36];
    console.log(szam);
}
console.log(egyszeru);
console.log(osszetett);
fgv(egyszeru, osszetett);
console.log(egyszeru);
console.log(osszetett);

// 4. feladat

const containsElement = (arr, num) => {
    for (let i = 0; i < arr.length; i++){
        if (num === arr[i]){
            return true;
        }
    }
    return false 
}

console.log(containsElement([1, 2, 4, 6, 10, 15], 3));

// 5. feladat


const getOlder = (tomb => {
  if (a.age > b.age) {
      console.log(a);
  } else if (a.age < b.age){
      console.log(b)
  }
  
  else {
      console.log('A koruk megegyezik.');
      }
};


// const selectAge = (obj) => {
//     let ev = obj[0].age;
//     let index = 0;
//     for (let i = 1; i < obj.length; i++){
//         if (ev < obj[i].age){
//             ev = obj[i].age;
//             index = i;
//         }
//     }
//     return obj[index].name;
// }

// console.log(selectAge({name: 'Feri', age: 25}, {name: 'Mari', age: 13}, {name: 'Jani', age: 23}, {name: 'Juli', age: 46}));

//NEM JÓÓÓÓ

// 6. feladat

const paros = () =>  {
    for (let i = 0; i < 100; i++){
        if (i % 2 === 0) {
            console.log(i);
        };
    };
};

paros();


// 7. feladat 

const section = (source1, source2) => {
    const target = [];
    for (let i = 0; i < source1.length; i++) {
      for (let j = 0; j < source2.length; j++) {
        if (source1[i] === source2[j]) {
          if (!target.includes(source1[i])) {
            target.push(source1[i]);
          }
          break;
        }
      }
    }
    return target;
  };
  const tomb1 = [1, 2, 3, 4, 5, 6, 8, 10, 12];
  const tomb2 = [2, 3, 4, 5, 6, 2, 10, ];
  console.log(section(tomb1, tomb2));


// 9. feladat 

const tomb2d = (n, m) => {
    let tomb = [];
    for (let i = 0; i < n; i++) {
      tomb[i] = [];
      for (let j = 0; j < m; j++) {
        tomb[i][j] = i * j;
      }
    }
    return tomb;
  };
  console.log(tomb2d(4, 4));



