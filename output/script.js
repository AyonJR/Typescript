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
10; //? function signature , if we make void in the structure , we are not allowed to do return anything .
// let funcSign : (a : number , y: string) => void
// funcSign = (a : number , y: string) => {
//     console.log(`my name is ${y} and number is ${a}`)
// }
// funcSign(11,"neymar")
11; // ? constructor function and access modifier
// import {player} from './classes//Player.js' // importing from the saparate ts file , imported from player.js because it will ultimately convert to the js file
// import {isPlayer} from "./interfaces/IsPlayer.js"
// let neymar = new player("neymar", 11, "brazil");
// let ronaldo : isPlayer  // which means it will follow the isPlayer interface
// ronaldo = new player("ronaldo", 10, "brazil");  //ultimately in  new Player , it is following the condition that is saying it will follow the isPlayer interface , as player implments the isPlayer interface
// console.log(neymar.name) // we can see the id outside of the constructor function , which is not secure or accessable publicly
// // console.log(neymar.country) // it is showing error , because we make it private but by default it remains public
// console.log(neymar.id) // readonly is used for only reading we cant change it or modify it
// let players: player[] = [];
// // players.push("messi") // it will show error as we initialized the array for the player class
// players.push(neymar);
// players.push(ronaldo);
12; // ? interfaces (almost similar ly type alias but it is used for objects and classes)
// interface heightAndWidth  {
//     height : number , width : number
// }
// let area = (options : heightAndWidth) => {
//     let height = options.height
//     let width = options.width
//     return height * width
// }
// area({height : 10 , width : 10 })
13; // ? Generics <T> means the input it will receive will the return the same type of input , if string then only string , if number then only number type
// function remove<T>(arr : Array<T>) : Array<T> {
// return arr
// }
// remove([1,2,3,4])
// ? we can also say that the generics should be an object , so if we send send any other value it will show error
// let myFunc = <T extends object >(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return {...obj , id }
// };
// let user = "neymar"
// console.log(myFunc(user))
// ? we can also say that the generics should be an object , we can also mention the object schema also 
let myFunc = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = "neymar";
console.log(myFunc(user));
