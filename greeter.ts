/**Created by dhb on 09-16-2018 */
interface Person {
    firstName:string;
    lastName:string;
}

class User {
    fullName:string;
    constructor(firstName:string,lastName:string){
        this.fullName = firstName + " " + lastName;
    }
}

function welcome(person:Person) {
    return person.firstName + " " + person.lastName;
}

let user = {firstName:"H",lastName:"mz"}
console.log(welcome(user))