function sortArrayDescending(arr) {
    arr.sort(function(a, b) {

        return b - a;
    });
}

let numbers = [5, 2, 9, 1, 5, 6];
sortArrayDescending(numbers);
console.log(numbers);