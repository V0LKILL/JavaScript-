let a = 11;

function evenOrOdd() {
    if (a % 2 === 0) 
        alert (a + ' - четное число');
    else (a % 2 === 1)
        alert (a + ' - нечетное число');
} 

evenOrOdd();

// --- ---

function setArray (a, b) {
    let length = a;
    let filledArray = Array(length).fill(b)
    console.log(filledArray)
}

setArray(4,9)

// --- ---

function newReverse (x){
    let a = [];
    for (i=0; i<x.length; i++){
        a[i]=x[(x.length - 1) -i]
    }
    return a
}

let arr = [1,3,7,9]
 console.log( newReverse(arr))



