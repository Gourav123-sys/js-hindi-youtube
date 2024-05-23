const user = {
    username : "Gourav",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Mondal"
// user.welcomeMessage();

// console.log(this)

// function chai(){
//     let username = "gourav"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "gourav"
//     console.log(this)
// }

// chai()

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

// const addTwo = (num1,num2) => num1+num2;

// const addTwo = (num1,num2) => (num1+num2);

const addTwo = (num1,num2) => ({username:"gourav"});

console.log(addTwo(13,30));