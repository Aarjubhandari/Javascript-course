// const tinderUser = new Object() this is singleton object
const tinderUser = {}      // this is non singleton object. both gives same output

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aarju",
            lastname: "Bhandari"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

const object1 = {1: "a", 2: "b"}
const object2 = {3: "a", 4: "b"}
const object4 = {5: "a", 6: "b"}
// const object3 = {object1, object2}
// const object3 = Object.assign({}, object1, object2, object4)

const object3 = {...object1, ...object2}
// console.log(object3);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "Aarju"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor)

const navbar = ({company}) => {    // here company syntax is destructured because it is in curly bracket

}
navbar(company = "Aarju")



// ***********APIs Concept****************

// {
//     "name": "AARJU",
//     "Coursename": "js in hindi",
//     "price": "free"
// }

[
    
]
