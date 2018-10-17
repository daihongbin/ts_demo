var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
function welcome(person) {
    return person.firstName + " " + person.lastName;
}
var user = { firstName: "H", lastName: "mz" };
console.log(welcome(user));
