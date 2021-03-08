const classDecorator = (target) => {
    console.log(target);
}

@classDecorator
class User {
    firstname;
    secondname;

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // Добавили метод, который возвращaет полное имя пользователя
    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}