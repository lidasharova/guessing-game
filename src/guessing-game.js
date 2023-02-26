class GuessingGame {
  constructor() {
    this.left = undefined;
    this.right = undefined;
  }

  setRange(min, max) {
    this.left = min;
    this.right = max;
  }

  guess() {
    this.solution = Math.ceil((this.right - this.left) / 2) + this.left;
    return this.solution;
  }

  lower() {
    this.right = this.solution;
  }

  greater() {
    this.left = this.solution;
  }
}

module.exports = GuessingGame;
