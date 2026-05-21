const number = 228;
if (number % 2 === 0) {
    console.log(number + "Является четным числом");
} else {
    console.log(number + "Не является четным числом");
}


const age = 28
const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;
console.log(`Размер скидки ${discount}%`);


const username = prompt("Введите логин:");
const password = prompt("Введите пароль:");
if ((username === "admin" || username === "user" ) && password === "123456") {
    alert("Доступ есть");
} else {
    alert("Доступа нет");
}


const weight = +prompt("Введите вес посылки")
const deliveryType = prompt(
    "Введите тип доставки(Стандарт, Экспресс, Премиум)"
);

if (weight <= 0 || isNaN(weight)) {
    alert("Некорректный вес посылки");
} else {
    const baseCost = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
    let coefficient = 0; 

    switch (deliveryType) {
        case "Стандарт":
            coefficient = 1;
            break;
        case "Экспресс":
            coefficient = 1.5;
            break;
        case "Премиум":
            coefficient = 2;
            break;
        default:
            alert("Неверный тип доставки");
            coefficient = 0;
    }
    
    if (coefficient !== 0) {
        const finalCost = baseCost * coefficient;
        alert(`Итоговая стоимость доставки: ${finalCost}`)
    }
}






