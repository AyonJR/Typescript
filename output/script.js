"use strict";
// TODO Typescript Journey
// console.log("hello typescript");
1; //? here the country is assigned as a string value , in the next line it is showing error when we reassging in the country again as a number value
// let country = "Bangladesh";
// country = 22;
// console.log(country);
2; //? but in this case , firstly we declared so it has no kind of value , so we can change it to any type of value , thats why it is not showing any kind of error
// let country;
// country = 22;
// country = "bangladesh";
// console.log(country);
3; // ? in function , we can dont declare the data type of the parametres , it will automatically show errors in the parametres and it will take the paramteres as any of the data types by default. But we can declare it by explicitely also , which will reduce the erros in developers side.
// function multiply(a, b){
//     return a*b
// }
// console.log(multiply(5,2))
// function multiply(a : string, b: number){
//     return a+b
// }
// console.log(multiply("hello",2))
4; // ? an array wont take any type of data accept the string and number , as the they already existed in the array
// let player = [11, "neymar"];
// player.push({
//     name: "neymar"
// });
// console.log(player);
5; // ? in this object typescript, took that object as a schema , so we cant change it or cant change the datatypes later , thats why in the player.name it is showing error as it is string type value , and it followed an schema it wont take another new property so it cant add the country property to it
// let player = {
//     name : "neymar" ,
//     age : 30  ,
//     best : true ,
// }
// player.name = 40
// player.country = "brazil"
6; // ? it is showing error as it is the array of the strings
// let a : string [] = [] ;
// a.push(4)
// let a : (string | number)[] = []
// a.push(false)
// let a: any[] = [];
// a.push(5, "hello ");
// console.log(a);
7; //? here we initialized c as an object , but it wont show any error as we array is one kind of object
// let c : object
// c = [1,2,3]
8; //? this is the function that we can tell the parametres datatype
// let myFunc = (a: string, b: string) => {
//   return a + b;
// };
// console.log(myFunc("hello", "neymar"));
//? we can also mention the return datatype of the function , we cant give other datatypes as it will show error in the typescript
// let myFunc = (a: string, b: string) : string => {
//     return a + b;
//   };
//   console.log(myFunc("hello", "neymar"));
9; //? Type alias in typescript , if we use same of datatype in different function we can use type alias
// type numOrStr = { id: number; name: string };
// let myFunc = (a: string | number, user: numOrStr) => {
//   console.log(`my name is ${user.name} and my id is ${user.id}`);
// };
// myFunc(12, { id: 11, name: "neymar" });
// let myFunc2 = (user: numOrStr) => {
//   console.log(`my name is ${user.name} and my id is ${user.id}`);
// };
// myFunc2({ id: 10, name: "messi" });
10.; //? function signature
let funcSign;
funcSign = (a, y) => {
    console.log(`my name is ${y} and number is ${a}`);
};
funcSign(11, "neymar");
