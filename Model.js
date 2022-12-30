const fs = require('fs').promises;

class Model {
  #page = 'start';

  #topics = [];

  #currentTopic;

  async readTopics() {
    const files = await fs.readdir(`${__dirname}/topics`, 'utf-8');
    files.map((el) => {
      return this.#topics.push(el.replace('_flashcard_data.txt', ''));
    });
  }

  getTopics() {
    return this.#topics;
  }

  getCurrentTopic() {
    return this.#currentTopic;
  }
}

module.exports = Model;
