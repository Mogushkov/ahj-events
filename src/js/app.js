import GamePlay from './GamePlay';
import GameController from './GameController';

const gameplay = new GamePlay();
gameplay.bindToDom(document.getElementById('game-container'));

const gameCtrl = new GameController(gameplay);
gameCtrl.init();
