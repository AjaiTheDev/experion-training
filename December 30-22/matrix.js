const m1 = [
    [1,2],
    [3,4]
];

const m2 = [
    [1,2],
    [3,4]
];

const m3 = [];

for (let i = 0; i < 2; i++) {

    for(let j = 0; j < 2; j++) {

        m3.push(m1[i][j]+m2[j][i]);

    }
}

console.log(m3);