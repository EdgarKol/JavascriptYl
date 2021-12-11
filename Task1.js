let array1 = [1, 2, 3]
let array2 = [2, 30, 1]
    // console.log(mergeArray(array1, array2));

function mergeArray() {
    let array = array1.concat(array2);
    array = array.filter((i, p) =>
        array.indexOf(i) === p)
    return array
}
console.log(mergeArray())