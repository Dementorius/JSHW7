// Task 1

// Создать поиск кандидатов в массиве candidateArr по номеру телефона. Номер
// телефона может быть указан не полностью и в любом формате.

function searchCandidatesByPhoneNumber(arr, number) {
  return arr.filter((candidate) =>
    candidate.phone.replace(/\D/g, '').includes(number.replace(/\D/g, ''))
  );
}


// console.log(searchCandidatesByPhoneNumber(condidateArr, '43'));
// console.log(searchCandidatesByPhoneNumber(condidateArr, '+1(869) 40'));
// console.log(searchCandidatesByPhoneNumber(condidateArr, '43'));
// console.log(searchCandidatesByPhoneNumber(condidateArr, '+1(869)408-39-82'));

// Task 2

// Создать функию которая найдет кандидата по  _id и вернет его из массива
// candidatesArr c отформатированной датой регистрации (поле registred). Дата
// должна иметь формат DD/MM/YY.



function deepCopy(data) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  const res = Array.isArray(data) ? [] : {};
  for (let key in data) {
    res[key] = deepCopy(data[key]);
  }

  return res;
}

function getCandidateById(arr, id) {
  const copy = deepCopy(arr.find((candidate) => candidate._id === id));
  copy.registered = new Date(copy.registered)
    .toLocaleDateString()
    .replace(/\./g, '/');
  return copy;
}


// console.log(getCandidateById(condidateArr, '5e216bc9a6059760578aefa4'));

// Task 3

// Написать функцию которая будет сортировать массив canidatesArr по количеству
// денег лежащих на балансе (смотрим свойство balance)   в том порядке, в
// котором ей укажут в аргементе sortBy. Если параметр не был передан, то вернет
// массив в первоначальном состоянии.


function sortCandidatesArr(arr, order) {
  if (!order) {
    return arr;
  }

  switch (order) {
    case 'asc':
      return deepCopy(arr).sort(
        (a, b) =>
          Number(a.balance.slice(1).replace(/\,/, '')) -
          Number(b.balance.slice(1).replace(/\,/, ''))
      );

    case 'desc':
      return deepCopy(arr).sort(
        (a, b) =>
          Number(b.balance.slice(1).replace(/\,/, '')) -
          Number(a.balance.slice(1).replace(/\,/, ''))
      );

    default:
      return arr;
  }
}


// console.log(sortCandidatesArr(condidateArr, 'asc'));
// console.log(sortCandidatesArr(condidateArr, 'desc'));
// console.log(sortCandidatesArr(condidateArr, 'jaja'));

// Task 4

// Написать функцию, которая вернет объект в котором название ключей будут цвета
// глаз, а значением - массив с кандидатами имеющие такой цвет глаз. При этом
// нельзя самому указывать первоначальный объект с возможными вариантами цветами
// глаз, а сгенерировать их на основе массива с кандидатами, то есть пройтись по
// массиву candidatesArr и брать смотреть на свойство eyeColor и добавлять
// значение цвета глаз кандидата как ключ объекта, если такого ключа не
// существует, ну и не добавлять - если  одноименный ключ уже существует


function splitByProp(arr, propertyName) {
  const uniquePropertyValues = [];
  const res = {};
  for (let candidate of arr) {
    if (!uniquePropertyValues.includes(candidate[propertyName])) {
      uniquePropertyValues.push(candidate[propertyName]);
    }
  }

  for (let uniquePropertyValue of uniquePropertyValues) {
    res[uniquePropertyValue] = arr.filter(
      (candidate) => candidate[propertyName] === uniquePropertyValue
    );
  }
  return res;
}



// console.log(splitByProp(condidateArr, 'age'));

