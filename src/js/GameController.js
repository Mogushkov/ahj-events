import GamePlay from './GamePlay';

export default class GameController {
  constructor(gameplay) {
    this.gameplay = gameplay;
    this.winCount = document.querySelector('.win-count');
    this.loseCount = document.querySelector('.lose-count');
  }

  init() {
    this.gameplay.init();
    this.bindOnCellClick = this.onCellClick.bind(this);

    this.gameplay.container.addEventListener('click', this.bindOnCellClick);
  }

  onCellClick(event) {
    if (event.target.classList.contains('goblin')) {
      this.winCount.textContent = +this.winCount.textContent + 1;
    } else {
      this.loseCount.textContent = +this.loseCount.textContent + 1;
    }
    this.showLose();
  }

  showLose() {
    if (this.loseCount.textContent === '5') {
      GamePlay.showMessage('Game Over');
      clearInterval(this.gameplay.timerId);
      this.gameplay.container.removeEventListener('click', this.bindOnCellClick);
    }
  }
}
