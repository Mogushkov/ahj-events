!function(){"use strict";class t{constructor(){this.boardSize=4,this.container=null,this.cells=[],this.activeGoblin=null,this.timerId=null}init(){this.drawBoard(),this.showGoblin()}bindToDom(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}drawBoard(){for(let t=0;t<this.boardSize**2;t+=1)this.container.innerHTML+='<div class="cell"></div>';this.cells=Array.from(this.container.children)}showGoblin(){this.timerId=setInterval((()=>{this.addGoblinRandom()}),1e3)}deleteGoblin(t){this.cells[t].classList.remove("goblin")}checkRandom(){let t=Math.floor(Math.random()*this.boardSize**2);for(;t===this.activeGoblin;)t=Math.floor(Math.random()*this.boardSize**2);return t}addGoblinRandom(){null!==this.activeGoblin&&this.deleteGoblin(this.activeGoblin),this.activeGoblin=this.checkRandom(),this.cells[this.activeGoblin].classList.add("goblin")}static showMessage(t){alert(t)}}const i=new t;i.bindToDom(document.getElementById("game-container")),new class{constructor(t){this.gameplay=t,this.winCount=document.querySelector(".win-count"),this.loseCount=document.querySelector(".lose-count")}init(){this.gameplay.init(),this.bindOnCellClick=this.onCellClick.bind(this),this.gameplay.container.addEventListener("click",this.bindOnCellClick)}onCellClick(t){t.target.classList.contains("goblin")?this.winCount.textContent=+this.winCount.textContent+1:this.loseCount.textContent=+this.loseCount.textContent+1,this.showLose()}showLose(){"5"===this.loseCount.textContent&&(t.showMessage("Game Over"),clearInterval(this.gameplay.timerId),this.gameplay.container.removeEventListener("click",this.bindOnCellClick))}}(i).init()}();