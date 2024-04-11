function isFriendly(n) {
    let sm1 = 0;
    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            sm1 += i;
        }
    }
    let sm2 = 0;
    for (let i = 0; i < sm1; i++) {
        if (sm1 % i == 0) {
            sm2 += i;
        }
    }
    return sm2 === n && n !== sm1;
}
let res1 = [];
for (let i = 0; i < 10000; i++) {
    if (isFriendly(i)) {
        res1.push(i);
    }
}
let res2 = [];
let c = 0;
for (let i = 0; i < res1.length / 2; i++) {
    res2[i] = [];
    for (let j = 0; j < 2; j++) {
        res2[i][j] = res1[c++];
    }
}
console.log(res2);