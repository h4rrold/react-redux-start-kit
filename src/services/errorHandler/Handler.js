import errorConfig from "./configs";

class ErroHandler {
  static instanse = null;
  config = null;

  static getInstance() {
    if (!ErroHandler.instance) {
      ErroHandler.instance = new ErroHandler();
    }
    return ErroHandler.instance;
  }

  constructor() {
    this.config = errorConfig;
  }

  getMessage(key, input) {
    let message = "";
    const configItem = this.config.find((c) => c.key === key);
    if (configItem) {
      message = configItem?.messages[input] ?? "";
    }
    return message;
  }
}

export const errorHandler = ErroHandler.getInstance();
