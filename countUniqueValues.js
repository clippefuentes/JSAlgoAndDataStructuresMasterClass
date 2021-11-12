function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let count = 0;
    let mark = 0;
    let currentNumber = 0;
    while(mark <= arr.length) {
        if(mark == 0) {
            currentNumber = arr[mark];
        }
        if (currentNumber != arr[mark]) {
            currentNumber = arr[mark];
            count++;
        }
        mark++;
    }
    return count;
  }