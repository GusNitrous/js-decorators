'strit mode'

// Объявляем декоратор запрещающий переопределять свойство
const readonly = (target) => {
    target.descriptor.writable = false;
    // После изменения дескриптора обязательно возвращаем target
    return target;
}

class User {
    @readonly
    firstname = 'Chuck';

    constructor(firstname) {
        this.firstname = firstname;
    }
}

// Пытаемся создать экземпляр пльзователя
// const user = new User('John');