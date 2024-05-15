// Здесь и далее с трудом изучаю гитхаб СНОВА

const generateNumber = () => {
  let digits = [];
  while (digits.length < 4) {
    let randomDigit = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }
  return digits.join('');
}

const checkNumber = (guess, secretNumber) => {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secretNumber[i]) {
      bulls++;
    } else if (secretNumber.includes(guess[i])) {
      cows++;
    }
  }
  return { bulls: bulls, cows: cows };
}

const playGame = () => {
  let secretNumber = generateNumber();
  let attempts = 10; // Ограничение по количеству ходов
  console.log('Игра "Быки и коровы". Угадайте 4-значное число.');

  for (let i = 0; i < attempts; i++) {
    let guess = prompt('Введите ваше число:');
    if (guess === secretNumber) {
      console.log('Поздравляем! Вы угадали число:', secretNumber);
      return;
    } else {
      let result = checkNumber(guess, secretNumber);
      console.log('Быки:', result.bulls, 'Коровы:', result.cows);
    }
  }

  console.log('К сожалению, вы не угадали. Загаданное число было:', secretNumber);
}
