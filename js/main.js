/* 

============= array and function =============

*/
let array = [3, 5, 6, 7, 11, 77, 82, 8, 26, 37, nam, okkkk, oggggg, hmmmm];

for (i = 0; i < array.length; i++) {
    if(array[i] === 'nam, okkkk, oggggg, hmmmm'   ){
        array[i] = 50;
    }
    console.log(`${i} X ${array[i]} = ${i * array[i]}`);
}
