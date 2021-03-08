// Функция сложения 2-x чисел
const sum = (a, b) => {
    return a + b;
};

// Декоратор для логирования имени вызываемой функции
const logName = (fn) => {
    // Здесь мы возвращаем функцию в теле которой выводим 
    // наименование функции-аргумента
    return (...args) => {
        console.log(`Call function "${fn.name}"`);
        return fn(...args);
    }
}

// Декоратор для валидации переданных аргументов функции
const integerArgs = (fn) => {
    return (...args) => {
        if (args.some((arg) => !Number.isInteger(arg))) {
            throw new Error('Переданные аргументы должны быть целыми числами');
        }

        return fn(...args);
    }
}


{

    // Применение декоратора
    const wrappedSum = logName(sum);
    const result = wrappedSum(2, 3);
    console.log(result);
}


{
    // Применение декоратора для валидации
    const wrappedSum = integerArgs(sum);
    const result = wrappedSum('2', 3);
    console.log(result);
}

{
    // Применяем несколько декораторов к одной функции
    const wrappedSum = integerArgs(logName(sum));
    const result = wrappedSum(2, 3);
    console.log(result);
}