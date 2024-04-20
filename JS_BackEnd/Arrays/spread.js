const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

function todosArrays(...arrays) {
    return [].concat(...arrays);
}

console.log(todosArrays(array1, array2, array3));