// const mySym = Symbol("key1")

// const jsUser = {
//     name : "Gourav",
//     "full name" : "Gourav Mondal",
//     [mySym] : "myKey1",
//     age : 21,
//     location : "dhanbad",
//     email : "gour@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["monday", "sunday"]
// }

// // console.log(jsUser.name);
// // console.log(jsUser["name"]);
// // console.log(jsUser["full name"])
// // console.log(jsUser[mySym]);

// jsUser.email = "gourav1122@gmail.com";
// // Object.freeze(jsUser);
// jsUser.email = "avcdf@gmail.com"
// // console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS user")
// }
// jsUser.greetingtwo = function(){
//     console.log(`Hello JS user, ${this.name}`)
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());



// const tinderUser = new Object() // singleton object

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "gour"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Gourav",
            lastname : "Mondal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedin"))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Gourav"
}

const {courseInstructor: instructor} = course

console.log(instructor)