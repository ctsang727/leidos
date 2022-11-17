//What is immutability? Write a function that updates an object in an array in an immutable way.

//immutable([1,2,3,4], 3, 5)
// [1,2,3,4]
// [1,2,5,4]

function immutable(array, index, value){
    newArray = []

    for (let i =0; i < array.length; i++){
        if (i === index){
            newArray.push(value)
        } else{
            newArray.push(array[i])
        }
    }
    return newArray 

}