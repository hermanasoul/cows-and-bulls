// Здесь и далее с трудом изучаю гитхаб СНОВА

const generate = () => {
  let numbers = [];
  while (numbers.length < 4) {
    let randomNum = Math.floor(Math.random() * 10).toString();
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers.join('');
}

const checkNumber = (guess, secretNum) => {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secretNum[i]) {
      bulls++;
    } else if (secretNum.includes(guess[i])) {
      cows++;
    }
  }
  return { bulls: bulls, cows: cows };
}

const game = () => {
  let secretNum = generate();
  let attempts = 10;
  console.log('Добро пожаловать в игру "Быки и коровы"! Угадайте 4-значное число.');

  for (let i = 0; i < attempts; i++) {
    let guess = prompt('Введите ваше число:');
    if (guess === secretNum) {
      console.log('Поздравляем! Вы отгадали число:', secretNum);
      return;
    } else {
      let result = checkNum(guess, secretNum);
      console.log('Быки:', result.bulls, 'Коровы:', result.cows);
    }
  }

  console.log('К сожалению, Вы не угадали. Загаданное число:', secretNumb);
};