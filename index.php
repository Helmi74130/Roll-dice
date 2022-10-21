<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/a501fe9880.js" crossorigin="anonymous"></script>
    <link rel="icon" type="image/png" sizes="16x16" href="https://img1.freepng.fr/20180519/jey/kisspng-dice-dribbble-3d-computer-graphics-5b0077083b5628.6679690315267571282431.jpg">
    <title>Roll dice online</title>
    <meta name="description" content="Découvrez et jouez au tout dernier jeux de dés pour pc ou mobiles.  ">
  </head>
  <body>
    <button class="button-top" id="newGame">
      <i class="fa-solid fa-dice"></i> NEW GAME </button>
    <button class="button-top" id="rules">
      <i class="fa-solid fa-book"></i> RULES </button>
    <audio src="son/9054.mp3" id="sound"></audio>
    <audio src="son/buzzer.mp3" id="buzzer"></audio>
    <audio src="son/hold.mp3" id="holdMp3"></audio>
    <audio src="son/applaudissements.wav" id="apllaudissement"></audio>
    <div class="parent-ecran">
      <!-- PLAYER 1-->
      <div class="ecran">
        <div class="player">
          <h2 id="namePlayer1">PLAYER 1</h2>
          <p id="online">
            <i class="fa-solid fa-user-check fa-shake fa-2x" style="--fa-animation-duration: 3s; --fa-animation-iteration-count: 1;"></i>
          </p>
        </div>
        <div class="points">
          <h2 id="total1">0</h2>
        </div>
        <div class="current">
          <h3>CURRENT</h3>
          <h2 id="totalCurrent1">0</h2>
        </div>
      </div>
      <!-- MIDLE-->
      <div class="ecran-midlle">
        <button id="bouton">ROLL DICE</button>
        <canvas id="canvas" height="300px" width="200px"></canvas>
        <button id="hold">
          <i class="fa-solid fa-rotate"> HOLD</i>
        </button>
      </div>
      <!-- PLAYER 2-->
      <div class="ecran">
        <div class="player">
          <h2 id="namePlayer2">PLAYER 2</h2>
          <p id="online2">
            <i class="fa-solid fa-user-check fa-shake fa-2x" style="--fa-animation-duration: 3s; --fa-animation-iteration-count: 1;"></i>
          </p>
        </div>
        <div class="points">
          <h2 id="total2">0</h2>
        </div>
        <div class="current">
          <h3>CURRENT</h3>
          <h2 id="totalCurrent2">0</h2>
        </div>
      </div>
    </div>
    <div id="simpleModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <span class="closeBtn"> x</span>
          <h2>New-Game</h2>
        </div>
        <div class="modal-body">
          <p>PLAYER 1</p>
          <input id="inputPlayer1" type="text" placeholder="Firstname Player 1">
          <p>PLAYER 2</p>
          <input id="inputPlayer2" type="text" placeholder="Firstname Player 2">
        </div>
        <div>
          <button id="play" class="button-play">Play</button>
        </div>
      </div>
    </div>
    <!-- MODAL RULES -->
    <div id="modalRules" class="modalRules">
      <div class="modal-content rules-content">
        <div class="modal-header rules-header">
          <h3 class="textLanguageEn">Rules of the game</h3>
          <h3 class="textLanguageFr">Règles du jeu</h3>
          <div>
            <button id="french">Francais</button>
            <button id="english">English</button>
          </div>
          <span class="closeBtn2">
            <button id="closeBtn2">X</button>
          </span>
        </div>
        <div class="modal-body rules-body">
          <p class="textLanguageEn"> The game includes 2 players on a single screen <br> Each player has a temporary score (ROUND) and an overall score (GLOBAL) <br> At each turn, the player has his ROUND initialized to 0 and can roll a dice as many times as he wishes. <br> The result of a throw is added to the ROUND <br> During his turn, the player can decide at any time to: <br> - Click on the “Hold” option, which sends the points of the ROUND to the GLOBAL. It will then be the other player's turn. <br> - Roll the dice. If he rolls a 1, his ROUND score is lost and his turn ends. <br> The first player to reach 100 points on global wins the game. </p>
          <p class="textLanguageFr"> Le jeu comprend 2 joueurs sur un seul et même écran <br> Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL) <br> À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite <br> Le résultat d’un lancer est ajouté au ROUND <br> Lors de son tour, le joueur peut décider à tout moment de: <br> - Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le tour de l’autre joueur <br> - Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour <br> Le premier joueur qui atteint les 100 points sur global gagne le jeu </p>
        </div>
      </div>
    </div>
    <!-- MODAL WINNER -->
    <div id="modalWin">
      <div class="content-win">
        <div>
          <p>Bravo</p>
          <p id="winner"></p>
          <p>Vous avez gagné!!!</p>
        </div>
        <button class="button-play" id="buttonModalWin">Rejouer</button>
      </div>
    </div>
    <script src="three.min.js"></script>
    <script src="script.js"></script>
    <script src="canvas.js"></script>
  </body>
</html>
