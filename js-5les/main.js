let person = {
    name: "Artem",
    lastName: "Petrukhin",
    age: 18,  
    hobby: "hobbyhoring"
}

console.log(person)


const isEmpty = (object) => {
    for (const key in object) {
        return false;
    }
    return true;
}

const sss = {};

console.log(isEmpty(sss))


const task = {
    title: "Купить продукты",
    description: "Купить молоко, хлеб и яйца",
    isCompleted: false,
}

function cloneAndModify(object, modifications) {
    return { ...object, ...modifications };
}

console.log(cloneAndModify(task, { isCompleted: true, priority: "Высокий"}))


const callAllMethods = obj => {
  for (const key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

const myObject = {
    method1() {
        console.log("Метод 1 вызван");
    },
    method2() {
        console.log("Метод 2 вызван");
    },
    property: "Это не метод",
};

callAllMethods(myObject);



