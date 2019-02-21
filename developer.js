class Developer {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName () {
        return this.firstname + " " + this.lastname;
    }
}
var Developer1 = new Developer('Mr.', 'X');
console.log(Developer1.getName());

class JavaScriptDeveloper extends Developer {
    getJob () {
        return 'JavaScript Developer';
    }
}
var Developer1 = new JavaScriptDeveloper('Mr.', 'Y');
console.log(Developer1.getName());
console.log(Developer1.getJob());

const getGreeting = () => {
    return 'Welcome to React Dev';
}
console.log(getGreeting());