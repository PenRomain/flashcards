const readLineSync = require('readline-sync');
const clc = require('cli-color');

class View {
  constructor() {
    this.counter = 0;
    this.score = 0;
  }

  showMenu(topics) {
    try {
      topics.forEach((element, index) => {
        console.log(
          `${index + 1}. ${element[0].toUpperCase()}${element.slice(1)}\t`
        );
      });
      const choice = readLineSync.question();
      process.stdout.write(clc.reset);

      return choice;
    } catch (error) {
      console.log('!!!!!!!!!!!!!!', error);
    }
  }

  showQuestion(question) {
    if (question[this.counter + 1] === undefined) {
      return true;
    }

    const userAnswer = readLineSync
      .question(`\n${question[this.counter]}\n`)
      .toLowerCase();

    if (userAnswer === question[this.counter + 1].toLowerCase()) {
      this.score += 1;
    }
    readLineSync.question();
    process.stdout.write(clc.reset);

    console.log(clc.red.bgMagentaBright.underline(question[this.counter + 2]));
    readLineSync.question();
    process.stdout.write(clc.reset);

    this.counter += 4;

    this.showQuestion(question);

    return userAnswer;
  }

  showResult(question) {
    console.log(`Вы ответили на ${this.score} из ${question.length / 4}!`);
  }
}

module.exports = View;
