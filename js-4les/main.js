function calculateFinalPrice(price, discountPercent, taxRate) {
    const discount = price * (discountPercent / 100);
    const discountedPrice = price - discount;
    const tax = discountedPrice * taxRate;
    return discountedPrice + tax;
}

console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));


function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен"
    } else {
        return "Доступ запрещен"
    }
}


const getTimeOfDay = () => {
    switch (true) {
        case hour >= 0 && hour <= 5:
            return "Ночь";
        case hour >= 6 && hour <= 11:
            return "Утро";
        case hour >= 12 && hour <= 17:
            return "День";
        case hour >= 18 && hour <= 23:
            return "Вечер";
        default:
            return "Некорректное время";
    }
}


const findFirstEven = (start, end) => {
    if (start > end) return "некорректный диапазон";

    const firstEven = start % 2 === 0 ? start : start + 1;

    return firstEven <= end ? firstEven : "Четных чисел нет";
}

console.log(findFirstEven(1, 10));