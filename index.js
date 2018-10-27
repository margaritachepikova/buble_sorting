var myArr = [5, 17, 5, 5, 5, 2, 6, 7, 3];

function bubleSort (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubleSort(myArr);

function indexOf (arr, number) {
    const arrLength = arr.length;

    var tempIndex = Math.floor(arrLength/2) || 1;
    var tempArray = arr.slice(0);
    var findIndex = tempIndex;
    while (tempArray.length > 1) {
        if (tempArray[findIndex] === number) {
            while (tempArray[findIndex - 1] === number) {
                findIndex--;
            }
            return findIndex;
        }
        if (number < tempArray[tempIndex]) {
            tempArray = tempArray.slice(0, tempIndex);
            tempIndex = tempArray.length > 1 && Math.floor(tempArray.length/2) || 1;
            findIndex -= tempIndex;
        } else {
            tempArray = tempArray.slice(tempIndex + 1);
            tempIndex = tempArray.length > 1 && Math.floor(tempArray.length/2) || 1;
            findIndex += tempIndex;
        }
    }
    if (tempArray[0] === number) {
        return findIndex;
    } else {
        return -1;
    }
}

console.log('indexOf', indexOf([1,1,1,1,1,3,3],3));

var testStr = 'a1([;2)]{a:1}a23';

function isStingBalanced (str) {
    const braces = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const stack = [];

    let isBalanced = true;
    const openBraces = Object.keys(braces);
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (openBraces.indexOf(ch) > -1) {
            stack.push(ch);
        } else if (braces[ch]) {
            let tempBrace = stack.pop();
            if (braces[tempBrace] !== ch) {
                isBalanced = false;
                break;
            }
        }
    }
    return isBalanced;
}

console.log(isStingBalanced(testStr));

let treeData = {
    value: 5,
    children: [
        {
            value: 6,
            children: [
                {
                    value: 1,
                    children: [
                        {
                            value: 3
                        }
                    ]
                }
            ]
        },
        {
            value: 12,
            children: [
                {
                    value: 4
                }
            ]
        }
    ]
};

var numbers = [];

function calculate (tree) {
    if (tree.children) {
        tree.children.forEach(function(child) {
            calculate(child);
        });
    }
    numbers.push(tree.value);
}

calculate(treeData);

function goInWidth (tree) {
    const queue = [];
    const numbers = [];
    queue.push(tree);
    for(var i = 0; i < queue.length; i++) {
        if (queue[i].children) {
            Array.prototype.push.apply(queue, queue[i].children);
        }
    }
    queue.forEach(function (item) {
        numbers.push(item.value);
    });
    return numbers;
}

console.log(goInWidth(treeData));

function getPrimeNumbers (someValue) {
    const primeNumbers = [2];
    let n = 3;
    while (n < someValue) {
        let isPrime = true;
        let maxValue = Math.sqrt(n);
        for (var i = 0; i < primeNumbers.length && primeNumbers[i] < maxValue; i++) {
            if (n % primeNumbers[i] === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(n);
        }
        n += 2;
    }
    return primeNumbers;
}

console.log(getPrimeNumbers(1000));

const arr1 = [2, 16, 22, 3, 9, 5, 30];

function shakeSort (inArr) {
    let maxIndex = 0;
    let minIndex = 0;
    const temp1 = [];
    const temp2 = [];
    let length = inArr.length;
    while (length > 0) {
        for (let i = 1; i < inArr.length; i++) {
            if (inArr[maxIndex] < inArr[i]) {
                maxIndex = i;
            }
            if (inArr[minIndex] > inArr[i]) {
                minIndex = i;
            }
        }

        temp1.push(inArr.splice(Math.max(maxIndex, minIndex), 1));
        temp2.push(inArr.splice(Math.min(maxIndex, minIndex), 1));

        length -= 2;
        if (length === 1) {
            break;
        }
    }

    Array.prototype.push.apply(temp2, inArr, temp1.reverse());
    return temp2;
}

console.log(shakeSort(arr1));