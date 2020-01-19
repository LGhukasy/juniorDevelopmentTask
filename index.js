// function returnManipulationsWithBindedObjet(object){
//     function addUser(name, surname, key) {
//         if (typeof key !== "string") {
//             console.log(`please set key with string data type`)

//         }
//         else if(key === "A"){
//             console.log(`Please set key with another key`);
//         }
//         else if(key in this){
//             console.log(`please write another key ${key} already exists in thsi object`)
//         }
//         else {
//             this[key] = {
//                 name,
//                 surname
//             };
//             console.log(`added in object ${key} user`);
//         }
//     };
//     function deleteUser(key) {
//         if (key in this) {
//             delete this[key];
//             console.log(`deleted ${key} user `)
//         }
//         else {
//             console.log(`user${key} does not exists in this object`)
//         }
//     };
//     function getUser(key){
//         if(key in this){
//             return this[key]
//         }
//         else{
//             console.log(`user ${key} does not exists in this object`);
//             return null;
//         }
//     };
//     return {
//         addUserInObject: function(name, surname, key) {
//             addUser.call(object,name, surname, key);
//         },
//         deleteUserFromObject : function(key){
//             deleteUser.call(object,key);
//         },
//         getUserFromObject : function(key){
//            return getUser.call(object,key);
//         }
//     }
// };

// Object.prototype.callByThis = returnManipulationsWithBindedObjet();

// let users1 = {
//     user1: {
//         name: "Gor",
//         surname: "Hovakimyan"
//     }
// };

// let user2 = {

// };

// let uu = users1.callByThis;


// console.log(uu)
// let calll = users1.callByThis();
// calll.addUserInObject("Gor","Hovakimyan","A");
// console.log(calll);
// console.log(users1.callByThis);
// console.log(users1);
// let users1Manipulations = returnManipulationsWithBindedObjet(users1);
// console.log(users1);
// users1Manipulations.addUserInObject("Levon","Ghukasyan","user2");
// console.log(users1);
// users1Manipulations.addUserInObject("Tatevik","Hovakimyan","user2");
// users1Manipulations.addUserInObject("Tatevik","Hovakimyan",true);
// users1Manipulations.addUserInObject("Tatevik","Hovakimyan","user3");
// console.log(users1);
// users1Manipulations.deleteUserFromObject("user4");
// users1Manipulations.deleteUserFromObject("user3");
// console.log(users1);
// let myUser = users1Manipulations.getUserFromObject("user11");
// console.log(myUser);
// myUser = users1Manipulations.getUserFromObject("user1");
// console.log(myUser);
// console.log(myUser.name);

// let user2Manipulations = returnManipulationsWithBindedObjet(user2);
// console.log(user2);
// user2Manipulations.addUserInObject("Gor","Hovakimyan","A");
// console.log(user2);


// let obj2 = {
//     surname : "Ghukasyan"
// };
// let obj1 = {
//     name : "Levon",
//     surname : "KKK",
//     __proto__ : obj2, 
// };
// console.log(obj1.surname);


// let a = 25;
// function g(){

// };
// console.log(a);
// console.log(window.g);
// console.log(.a);

// let b = 10;
// function f(){
//     let a = 25;
//     b++;
//     console.log(b);
// };
// f();
// console.log(f.__proto__);
// var a = 10;
// function f(){
//     // var a = 15;
//     function h(){
//         console.log(a);
//     };
//     h();
// };
// f();
// console.log(a);
// {
//     let a = 15;
// }
// a

// let a = {
//     a : 10,
//     f : function(){
//         console.log(a)
//     }
// };
// a.f();

// let a = 10;
// console.log("LLL")
// function c(b){
//     console.log("KKK")
//     return function(){
//         b++;
//         console.log(b);
//     }
// };

// let r = c(10);
// r();
// r();
// c.__proto__();
// console.log(c.__proto__());

// var a = 15;
// let obj = {
//     name : "Levon",
//     surname : {

//     }
// };
// console.log(obj.surname.__proto__)


// let t = {
//     name : "Gor"
// };
// let k = t;
// k.name = "Levon";
// t = null;
// console.log(t);
// t = k;
// console.log(t);


// let obj = {
//     name : "Gor",
// };
// let obj1 = {
//     name : "levon",
// };
// let h = obj;
// h.p = obj1;
// h.p.surname = "Ghukasyan";
// obj1.surname = "OOO";
// console.log(obj,obj1);

// let obj = {
//     par : 1,
// };
// let obj1 = {
//     par1 : 2,
//    t : obj,
// };
// console.log(obj1.par);
// console.log(obj.par);
// console.log(obj1);
// obj1.t.par = 10;
// console.log(obj1,obj);
// console.log(obj1.par);
// console.log(obj.par);

// let obj = {
//     number : 5,
// };
// let obj1 = {
//     number1 : 10,
//     __proto__ : obj,
// };
// let obj2 = {
//     number2 : 15,
//     __proto__ : obj1,
// };
// let obj3 = {
//     number3 : 4,
//     __proto__ : obj,
// };
// let o = {
//     o1 : obj,
//     o2 : obj1,
//     o3 : obj2,
//     o4 : obj3,
// };
// obj2.number = 6;
// obj1.number = 7;
// obj3.__proto__ = obj2.__proto__;
// obj1.number = ob
// o.o3.__proto__ = o.o1;
// console.log(obj2.number++ + ++obj3.number);

// let obj = {
//     number : 5
// };
// let obj1 = {
//     number1 : 6,
//     __proto__ : obj,
// };
// obj1.number++;
// console.log(obj);


// let obj = {
//     number : 5,
// };
// let obj3 = {
//     number : 15,
// };
// let obj1 = {
//     number1 : 10,
//     __proto__ : obj3,
// };
// function f(o){
//     o.__proto__ = this
// };
// console.log(obj1.number);
// f.call(obj,obj1);
// console.log(obj1.number);

// function t() {
//     console.log(this);
// };
// let obj1 = {
//     o : t,
//     __proto__ : obj,
// };
// obj1.o();
// var obj = {
//     name : "Levon",
//     y : t,
//     k : {
//         dfd : "sas",
//         __proto__ : obj1,
//     },
//     __proto__ : obj1
// };
// obj.o();
// obj.k.y();
// let obj = {
//     name: "Leovn"
// };
// t.call(obj);
// t.apply(obj);
// let u = t.bind(obj);
// u();



// function ooo(aa,f){
//     return function(){
//         f.call(aa)
//     }
// };
// let u = ooo(obj,t);
// u();
// u();
// u()
// t.call("Hello");
// t();


// function f(o1,o2,fu){
    // o1.u.__proto__ = o2;
    // o2.p = fu;
    // o1.p = fu;
    // o1.p();
    // o2.p();
    // fu.call(o1.u.k);   
// };
// f({
//     name : "Gor",
//     u : {
//         name : "GOR"
//     }
// },{
//     l : 25,
//     k : {
//         name : "Levon"
//     },
// },
// function(){
//     console.log(this)
// });

// function F(name,surname){
//     return {
//         name,
//         surname
//     }
// };
// let obj = {
//     o : "OOOOO"
// };
// function F1(name,surname){
//     this.name = name;
//     this.surname = surname;
// };
// F1.prototype = obj;

// let j1 = new F1("Levon","Ghukasyan");
// console.log(j1.o);



// let obj2 = {
//     number2 : 10,
// };
// let obj1 = {
//     number1 : 5,
//     __proto__ : obj2,
// };

// function Func(cb,name = "Levon", surname = "Ghukasyan"){
//     this.name = name;
//     this.surname = surname;
//     this.number2 = name;
//     this.displayName = function(){
//         console.log(this.name,this.surname);
//     };
//     this.changePerson = function(name,surname){
//         cb.call(this,name,surname);
//     } 
// };
// Func.prototype = obj1;
// let h1 = new Func(function(n,s){
//     this.name = n;
//     this.surname = s;
// });
// h1.displayName();
// h1.changePerson("Gor","Hovakimyan");
// h1.displayName();
// console.log(h1);
// h1.displayName();
// h1.changePerson("Gor","Hovakimyan");
// console.log(h1);

// Object.prototype.o = "Hello";

// console.log(Object.prototype);

// let h = {};
// let h = new Object();
// Object.prototype.o = "Hello";
// let h = new Object();
// let obj = {
//     name : "Gor",
//     __proto__ : obj1,
// };

// let obj1 = {
//     surname : "Hovakimyan",
// };

// let obj3 = {
//     surnam = "KKKK"
// };
// let obj2 = {
//     surname : "Ghukasyan",
//     surnam = "YYY",
//     __proto__ : obj3,
// }
// let obj1 = {
//     name : "Levon",
//     surname : "HHH",
//     __proto__ : obj2,
// };
// console.log(obj1.surnam);

// let obj = {
//     name : "Levon"
// };

// function F(){
// };
// F.prototype = obj;
// let o1 = new F();
// let o2 = new F();
// console.log(o1.name);
// console.log(o2.name);

// Object.prototype.name = "Gor";

// let u = {};
// let k  = {
//     kkk : "JJJ",
// };
// u.__proto__ = k;
// k.__proto__ = null;

// console.log(u.name);


// let obj = {
//     name : "Gor",
//     p : {
//         hhh : "sduashud"
//     }
// };
// function f(){
//     console.log(this)
// };
// obj.hhh = f;
// obj.p.k = f;
// obj.hhh();
// let j = {
//     name : "SDSHDUOH",
//     opop : function(){
//         console.log(this)
//     }
// };
// obj.p.k();
// f.call(obj.p);
// j.opop();
// j.opop.apply(obj.p);

// let obj = {
//     name : "Levon",
//     number : 5,
// };
// let obj1 = {
//     number : 15
// };
// function t(){
//     // console.log(this)
//     console.log(this.number);
//     // return obj
// };

// function bi(f,o){
//     return function(){
//         f.call(o)
//     }
// }

// let o = bi(t,obj);
// o();
// o.call(obj1);