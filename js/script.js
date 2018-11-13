class Map {
  constructor() {
    this.australia = document.querySelector(`#australia`);
    this.oceania = document.querySelector(`#oceania`);
    this.usa = document.querySelector(`#usa`);
    this.europe = document.querySelector(`#europ`);
    this.lamerica = document.querySelector(`#lamerica`);
    this.africa = document.querySelector(`#africa`);
    this.sng = document.querySelector(`#sng`);
    this.asia = document.querySelector(`#asia`);
    this.number = document.querySelector(`.population__info-number`);

    this.regions = [this.usa, this.europe, this.sng, this.asia, this.africa, this.oceania, this.australia, this.lamerica];
    this.points = document.querySelectorAll(`.population__map-item`);
    this.numbers = document.querySelectorAll(`.population__number`);
    this.i = 0;
    this.intervalId;
  }

  activateOn(item) {
    item.classList.add(`active`);
  }

  activateOff(item) {
    item.classList.remove(`active`);
  }

  init() {
    this.intervalId = setInterval(() => {
      if(this.i < this.regions.length) {
        this.activateOn(this.regions[this.i]);
        this.activateOn(this.points[this.i]);
        this.number.textContent = this.numbers[this.i].textContent;
      };
      this.i++;
      if (this.i > this.regions.length) {
        this.regions.forEach((item) => this.activateOff(item));
        this.points.forEach((item) => this.activateOff(item));
        this.i = 0;
        this.number.textContent = this.i;
      }
    }, 2500);
  }

  stop() {
    clearInterval(this.intervalId);
    const activateRegions = document.querySelectorAll(`g.active`);
    this.i = activateRegions.length;
    return this.i;
  }

  start() {
    this.init();
  }

  getCurrentPointValue() {
    const number = document.querySelector(`.population__info-number`);
    return number.textContent;
  }

}

const map = new Map();
