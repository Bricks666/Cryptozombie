export class RangeErrorE extends RangeError {
  #code;

  constructor(message, code) {
    super(message);
    this.#code = code;
  }

  get code() {
    return this.#code;
  }
}
