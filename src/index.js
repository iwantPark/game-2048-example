import 'game-2048/style/main.css';
import Game from 'hayoung';

var gameContainerDiv = document.createElement('div');
gameContainerDiv.setAttribute('id', 'game-container');
gameContainerDiv.className = 'container';
document.body.appendChild(gameContainerDiv);

const game = new Game({
  gameContainer: gameContainerDiv
}); 
