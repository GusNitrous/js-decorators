'strit mode'

{
    // Объявляем простой декоратор метода
    const methodDecorator = (target) => {
        console.log(target);
    }

    class User {
        firstname;
        secondname;

        // Применяем декоратор для метода
        @methodDecorator
        getFullName() {
            return this.firstname + ' ' + this.lastname;
        }
    }
}

{
    // Объявляем декоратор запрещающий переопределять свойство
    const readonly = (target) => {
        // Запрещаем перезаписывать свойство
        target.descriptor.writable = false;
        // После изменения дескриптора обязательно возвращаем target
        return target;
    }

    class User {
        firstname;
        secondname;

        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        // Применяем readonly декоратор для метода
        @readonly
        getFullName() {
            return this.firstname + ' ' + this.lastname;
        }
    }

    // Создаём пользователя
    const user = new User('John', 'Doue');

    // Вызов метода до переопределения
    let userName = user.getFullName();
    console.log(userName);

    // Пытаемся переопределить метод
    // Если используется 'strit mode', то получим ошибку:
    // TypeError: Cannot assign to read only property 'getFullName' of object '#<User>
    user.getFullName = function() {
        return 'Overrided method';
    }

    // Без 'strict mode' исполнение дойдёт до этого места, 
    // но результат будет как и до переопределения
    userName = user.getFullName();
    console.log(userName);
}