class CoinFlipper {
  constructor(desiredHeadsInARow) {
    this.desiredHeadsInARow = desiredHeadsInARow;
    this.reset();
  }
  
  reset() {
    this.flips = 0;
    this.currentHeadsInARow = 0;
  }

  flip() {
    let isHeads = Math.random() < .5;
    this.flips++;
    if (isHeads && this.currentHeadsInARow > 0) {
      this.currentHeadsInARow++;
    } else if (isHeads) {
      this.currentHeadsInARow = 1;
    } else {
      this.currentHeadsInARow = 0;
    }
  }

  flipToFinish() {
    return new Promise((resolve, reject) => {
      const flipAgain = () => {
        if (this.currentHeadsInARow < this.desiredHeadsInARow) {
          setTimeout(() => {
            this.flip();
            flipAgain();
          });
        } else {
          resolve({heads: this.currentHeadsInARow, flips: this.flips});
        }
      };

      flipAgain();
    });
  }
}

module.exports = CoinFlipper;
