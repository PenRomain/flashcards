const fs = require('fs').promises;

class Model {
  async getTopics() {
    const menu = (await fs.readdir(`${__dirname}/topics`, 'utf-8')).map(
      (file) => file.replace(/_flashcard_data.txt/, '')
    );
    return menu;
  }

  async getQuestion(topics, printTopic) {
    const number = topics.find((el, i) => i === printTopic - 1);
    const question = await fs.readFile(
      `${__dirname}/topics/${number}_flashcard_data.txt`,
      'utf-8'
    );
    return question.split('\n');
  }
}

module.exports = Model;
