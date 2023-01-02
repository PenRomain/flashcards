const fs = require('fs').promises;
const readLineSync = require('readline-sync');

class View {
  constructor() {
    this.counter = 0;
  }

  showMenu(topics) {
    topics.forEach((element, index) => {
      console.log(
        `${index + 1}. ${element[0].toUpperCase()}${element.slice(1)}\t`
      );
    });
    const choice = readLineSync.question();
    return choice;
  }

  showQuestion(question) {
    const userAnswer = readLineSync
      .question(`\n${question[this.counter]}\n`)
      .toLowerCase();
    if (userAnswer === question[this.counter + 1].toLowerCase()) {
      console.log(question[this.counter + 2]);
      this.counter += 4;
      if (question[this.counter + 1] === undefined) {
        return true;
      }
      this.showQuestion(question);
    }
  }

  showResult(question) {
    console.log(
      `Вы ответили на ${this.counter / 4} из ${question.length / 4}!`
    );
  }
}

module.exports = View;
