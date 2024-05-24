// const arr = [1,2,3,4,5];

// // for (const ele of arr) {
    
// //     console.log(ele);
// // }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United states of america")
// map.set('Fr', "France")

// // console.log(map);

// // for (const [key, value] of map) {
    
// //     console.log(key, ':-' ,value);
// // }

// const myObject = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'ruby',
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     // console.log(`shortcut for ${key} is ${myObject[key]}`)
// }

// for (const ele in arr) {
//     // console.log(arr[ele])
// }

// for (const [key,value] in map) {
//     console.log(key, ':-', value)
// }

// for (const [key,value] of myObject) {
    
//     console.log(key , ':-', value)
// }

const coding = ['js', "ruby", "java", "python", "c++"]

// coding.forEach( function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
    languageName : "c++",
    languageFileName : "cpp"
    },
    {
    languageName : "python",
    languageFileName : "py"
    }
]

// myCoding.forEach( (item) => {
//     console.log(item.languageName)
// })

// const values = coding.forEach( (item) => {
//     console.log(item)
//     // return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4)
// const newNums = myNums.filter( (num) => {
//     return num>4
// })
// console.log(newNums)

// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num);
//     }
// })

// console.log(newNums)

// const newNums = myNums.map( (num) => num+10)

// const newNums = myNums
//                     .map( (num) => num*10)
//                     .map( (num) => num+1)
//                     .filter((num) => num>50)
// console.log(newNums)

// const myTotal = myNums.reduce( function (accumulator, curr_val){
//     console.log(`acc ${accumulator} and currval ${curr_val}`)
//     return accumulator+curr_val
// },0)

const myTotal = myNums.reduce( (accumulator, curr_val) =>accumulator+curr_val,0)
console.log(myTotal)