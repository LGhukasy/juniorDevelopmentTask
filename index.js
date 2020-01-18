function returnManipulationsWithBindedObjet(object){
    function addUser(name, surname, key) {
        if (typeof key !== "string") {
            console.log(`please set key with string data type`)
            
        }
        else if(key in this){
            console.log(`please write another key ${key} already exists in thsi object`)
        }
        else {
            this[key] = {
                name,
                surname
            };
            console.log(`added in object ${key} user`);
        }
    };
    function deleteUser(key) {
        if (key in this) {
            delete this[key];
            console.log(`deleted ${key} user `)
        }
        else {
            console.log(`user${key} does not exists in this object`)
        }
    };
    function getUser(key){
        if(key in this){
            return this[key]
        }
        else{
            console.log(`user ${key} does not exists in this object`);
            return null;
        }
    };
    return {
        addUserInObject: function(name, surname, key) {
            addUser.call(object,name, surname, key);
        },
        deleteUserFromObject : function(key){
            deleteUser.call(object,key);
        },
        getUserFromObject : function(key){
           return getUser.call(object,key);
        }
    }
};


let users1 = {
    user1: {
        name: "Gor",
        surname: "Hovakimyan"
    }
};

let users1Manipulations = returnManipulationsWithBindedObjet(users1);
console.log(users1);
users1Manipulations.addUserInObject("Levon","Ghukasyan","user2");
console.log(users1);
users1Manipulations.addUserInObject("Tatevik","Hovakimyan","user2");
users1Manipulations.addUserInObject("Tatevik","Hovakimyan",true);
users1Manipulations.addUserInObject("Tatevik","Hovakimyan","user3");
console.log(users1);
users1Manipulations.deleteUserFromObject("user4");
users1Manipulations.deleteUserFromObject("user3");
console.log(users1);
let myUser = users1Manipulations.getUserFromObject("user11");
console.log(myUser);
myUser = users1Manipulations.getUserFromObject("user1");
console.log(myUser);
console.log(myUser.name);