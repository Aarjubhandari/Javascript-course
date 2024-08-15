// singleton 
//Object.create

//objects literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Aarju", 
    "full Name": "Aarju Bhandari",
    [mySym]: "mykey1",
    age : 16,
    location : "Butwal",
    email : "aarju@gmail.com",
    isLoggedIn: false,
    lastLonginDays : ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "Aarju@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Aarju@netflix.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(JsUser.greeting);

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());