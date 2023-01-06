class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async run() {
    const topics = await this.model.getTopics();
    const printTopic = await this.printTopicsController(topics);
    const question = await this.model.getQuestion(topics, printTopic);
    await this.view.showQuestion(question);
    await this.view.showResult(question);
  }

  async printTopicsController(topics) {
    const choice = await this.view.showMenu(topics);
    if (!choice) {
      console.log('Была выбрана случайная тема:');
    }
    return choice;
  }
}

module.exports = Controller;
