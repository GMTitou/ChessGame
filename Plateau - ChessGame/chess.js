// ???????????????
{
  var WRook1 = {
    color: 'W',
    type: 'rook',
    letter: 'T',
    position: [0, 0],
    moves: [],
    alreadyMoved: false
  };

  var WRook2 = {
    color: 'W',
    type: 'rook',
    letter: 'T',
    position: [7, 0],
    moves: [],
    alreadyMoved: false
  };

  var WKnight1 = {
    color: 'W',
    type: 'knight',
    letter: 'C',
    position: [1, 0],
    moves: [],
  };

  var WKnight2 = {
    color: 'W',
    type: 'knight',
    letter: 'C',
    position: [6, 0],
    moves: [],
  };

  var WBishop1 = {
    color: 'W',
    type: 'bishop',
    letter: 'F',
    position: [2, 0],
    moves: [],
  };

  var WBishop2 = {
    color: 'W',
    type: 'bishop',
    letter: 'F',
    position: [5, 0],
    moves: [],
  };

  var WQueen = {
    color: 'W',
    type: 'queen',
    letter: 'D',
    position: [3, 0],
    moves: [],
  };

  var WKing = {
    color: 'W',
    type: 'king',
    letter: 'R',
    position: [4, 0],
    moves: [],
    alreadyMoved: false
  };

  var WPawn1 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [0, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn2 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [1, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn3 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [2, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn4 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [3, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn5 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [4, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn6 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [5, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn7 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [6, 1],
    moves: [],
    jump: 'never'
  };

  var WPawn8 = {
    color: 'W',
    type: 'pawn',
    letter: '',
    position: [7, 1],
    moves: [],
    jump: 'never'
  };

  //BLACK

  var BRook1 = {
    color: 'B',
    type: 'rook',
    letter: 'T',
    position: [7, 7],
    moves: [],
    alreadyMoved: false
  };

  var BRook2 = {
    color: 'B',
    type: 'rook',
    letter: 'T',
    position: [0, 7],
    moves: [],
    alreadyMoved: false
  };

  var BKnight1 = {
    color: 'B',
    type: 'knight',
    letter: 'C',
    position: [6, 7],
    moves: [],
  };

  var BKnight2 = {
    color: 'B',
    type: 'knight',
    letter: 'C',
    position: [1, 7],
    moves: [],
  };

  var BBishop1 = {
    color: 'B',
    type: 'bishop',
    letter: 'F',
    position: [5, 7],
    moves: [],
  };

  var BBishop2 = {
    color: 'B',
    type: 'bishop',
    letter: 'F',
    position: [2, 7],
    moves: [],
  };

  var BQueen = {
    color: 'B',
    type: 'queen',
    letter: 'D',
    position: [3, 7],
    moves: [],
  };

  var BKing = {
    color: 'B',
    type: 'king',
    letter: 'R',
    position: [4, 7],
    moves: [],
    alreadyMoved: false
  };

  var BPawn1 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [7, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn2 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [6, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn3 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [5, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn4 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [4, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn5 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [3, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn6 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [2, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn7 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [1, 6],
    moves: [],
    jump: 'never'
  };

  var BPawn8 = {
    color: 'B',
    type: 'pawn',
    letter: '',
    position: [0, 6],
    moves: [],
    jump: 'never'
  };
}

var turn = 'W';
var checkedKing = 'x';
var legalMoves = [];
var checkpoint = 0
var checkpoint2 = 0
var filteredLegalMoves = []
var finalMove = []

let a = [WRook1, WPawn1, 'x', 'x', 'x', 'x', BPawn8, BRook2];
let b = [WKnight1, WPawn2, 'x', 'x', 'x', 'x', BPawn7, BKnight2];
let c = [WBishop1, WPawn3, 'x', 'x', 'x', 'x', BPawn6, BBishop2];
let d = [WQueen, WPawn4, 'x', 'x', 'x', 'x', BPawn5, BQueen];
let e = [WKing, WPawn5, 'x', 'x', 'x', 'x', BPawn4, BKing];
let f = [WBishop2, WPawn6, 'x', 'x', 'x', 'x', BPawn3, BBishop1];
let g = [WKnight2, WPawn7, 'x', 'x', 'x', 'x', BPawn2, BKnight1];
let h = [WRook2, WPawn8, 'x', 'x', 'x', 'x', BPawn1, BRook1];
let board = [a, b, c, d, e, f, g, h];
let ListeValue = [];

// KICKSTART
updateGUI();
checkSquare();

// CHECKSQUARE  
function checkSquare() {
  legalMoves = [];
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[x][y] !== 'x') {
        let mouvsPossiblesPourPieceI = dep3(dep1et2(x, y))
        for (let i = 0; i < mouvsPossiblesPourPieceI.length; i++) {
          legalMoves.push(mouvsPossiblesPourPieceI[i])
        }
      }
    }
  }
  let legalMovesPruned = [];
  legalMoves.forEach(x => {

    if (board[x[0]][x[1]].color == turn) {
      legalMovesPruned.push(x);
    }
  });
  legalMoves = legalMovesPruned
  checkMate();// call checkMate

  function checkMate() {


    if (legalMoves == false) {
      if (checkedKing == 'W') {
        window.alert('Black wins !');
      } else if (checkedKing == 'B') {
        window.alert('White wins !');
      } else {
        window.alert('Pat !');
      }
    } else if (legalMoves !== false) {
      //play();
    };

    if (turn == 'W') {
      console.log('White to play')
    }
    if (turn == 'B') {
      console.log('Black to play')
    };
  }

};


function dep1et2(x, y) {
  let type = board[x][y].type
  let color = board[x][y].color
  let dep1 = []
  //DEP 1

  function rookcheck(a, b, c) {                                   //Rook movements
    for (let i = 1; i <= c; i++) {
      if (board[x + i * a][y + i * b] == 'x') {
        dep1.push([x + i * a, y + i * b, 0])
      } else if (board[x + i * a][y + i * b].color !== color) {
        dep1.push([x + i * a, y + i * b, 0])
        break
      } else {
        break
      }
    };
  }

  function knightcheck(a, b) {                                    //Knight movements
    if (board[x + a] == undefined || board[x + a][y + b] == undefined || board[x + a][y + b].color == color) { } else {
      dep1.push([x + a, y + b, 0])
    }
  }

  function bishopcheck(a, b, c) {                                 //Bishop movements
    for (let i = 1; i <= c; i++) {
      if (board[x + i * a][y + i * b] == 'x') {
        dep1.push([x + i * a, y + i * b, 0])
      } else if (board[x + i * a][y + i * b].color !== color) {
        dep1.push([x + i * a, y + i * b, 0])
        break
      } else {
        break
      }
    };
  }

  function kingcheck(a, b) {                                       //King movements
    if (board[x + 1 * a] == undefined || board[x + 1 * a][y + 1 * b] == undefined || board[x + 1 * a][y + 1 * b].color == color) { } else {
      dep1.push([x + 1 * a, y + 1 * b, 0])
    }
  }

  function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
    if (board[x][y + 1 * a] == 'x') {
      dep1.push([x, y + 1 * a, 4])                                 //Mouvement simple avant
    };
    if (3.5 - 2.5 * a == y && board[x][y + 1 * a] == 'x' && board[x][y + 2 * a] == 'x') {
      dep1.push([x, y + 2 * a, 0])                                 //Mouvement double avant
    };

    for (let j = -1; j < 2; j++) {
      if (board[x + 1 * j] !== undefined && board[x + 1 * j][y + 1 * a] !== undefined && board[x + 1 * j][y + 1 * a] !== 'x' && board[x + 1 * j][y + 1 * a].color !== color) {
        dep1.push([x + 1 * j, y + 1 * a, 0])                         //Mange
      } else if (board[x + 1 * j] !== undefined && board[x + 1 * j][y] !== 'x' && board[x + 1 * j][y].jump == 'wow') {
        dep1.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
      };
      j++
    }
  };

  if (type == 'rook') {

    rookcheck(0, 1, 7 - y)                                       //Haut
    rookcheck(0, -1, y)                                          //Bas
    rookcheck(1, 0, 7 - x)                                       //Droite
    rookcheck(-1, 0, x)                                          //Gauche

  } else if (type == 'knight') {

    knightcheck(2, 1);
    knightcheck(1, 2);
    knightcheck(-1, 2);
    knightcheck(-2, 1);
    knightcheck(1, -2);
    knightcheck(2, -1);
    knightcheck(-1, -2);
    knightcheck(-2, -1);

  } else if (type == 'bishop') {

    bishopcheck(1, 1, 7 - Math.max(x, y))
    bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
    bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
    bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

  } else if (type == 'queen') {

    rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
    rookcheck(0, -1, y)
    rookcheck(1, 0, 7 - x)
    rookcheck(-1, 0, x)
    bishopcheck(1, 1, 7 - Math.max(x, y))                        //Bishop part of Queen
    bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
    bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
    bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

  } else if (type == 'king') {
    kingcheck(1, 1);
    kingcheck(1, 0);
    kingcheck(0, 1);
    kingcheck(-1, 1);
    kingcheck(-1, 0);
    kingcheck(-1, -1);
    kingcheck(1, -1);
    kingcheck(0, -1);

    function depBigRock() {
      let BigRokPos1 = [];
      let BigRokPos2 = [];
      let KingPoz = [];
      let illegalCount = 0;
      let boardT = board

      if (turn == 'W') {
        BigRokPos1 = [2, 0];
        BigRokPos2 = [3, 0];
        KingPoz = [4, 0];
      } else if (turn == 'B') {
        BigRokPos1 = [2, 7];
        BigRokPos2 = [3, 7];
        KingPoz = [4, 7];
      }

      function checkCubeBR() { //checkCube calcule la pos des rois et teste si une pièce adverse peut l'atteindre

        for (let o = 0; o < 8; o++) {                               //Premiere boucle pour splice et foutre checkKingT=0
          for (let p = 0; p < 8; p++) {
            if (board[o][p] !== 'x' && board[o][p].color !== turn) {                      //Pour chaque position du board qui contient une pièce adverse
              let depT = dep1et2TBR(o, p);                               //depT est l'array de tous les moves que pourrait faire cette pièce
              for (k = 0; k < depT.length; k++) {                     //Pour tous les moves de cette pièce :
                if (BigRokPos1[0] == depT[k][2] && BigRokPos1[1] == depT[k][3]) {    illegalCount++;
                } else if (BigRokPos2[0] == depT[k][2] && BigRokPos2[1] == depT[k][3]) {
                  illegalCount++;
                } else if (KingPoz[0] == depT[k][2] && KingPoz[1] == depT[k][3]) {
                  illegalCount++;
                }
              }
            }
          }
        }
      }


      function dep1et2TBR(x, y) {
        let type = boardT[x][y].type
        let color = boardT[x][y].color
        let dep1T = []
        //DEP 1

        function rookcheck(a, b, c) {                                   //Rook movements
          for (let i = 1; i <= c; i++) {
            if (boardT[x + i * a][y + i * b] == 'x') {
              dep1T.push([x + i * a, y + i * b, 0])
            } else if (boardT[x + i * a][y + i * b].color !== color) {
              dep1T.push([x + i * a, y + i * b, 0])
              break
            } else {
              break
            }
          };
        }

        function knightcheck(a, b) {                                    //Knight movements
          if (boardT[x + a] == undefined || boardT[x + a][y + b] == undefined || boardT[x + a][y + b].color == color) { } else {
            dep1T.push([x + a, y + b, 0])
          }
        }

        function bishopcheck(a, b, c) {                                 //Bishop movements
          for (let i = 1; i <= c; i++) {
            if (boardT[x + i * a][y + i * b] == 'x') {
              dep1T.push([x + i * a, y + i * b, 0])
            } else if (boardT[x + i * a][y + i * b].color !== color) {
              dep1T.push([x + i * a, y + i * b, 0])
              break
            } else {
              break
            }
          };
        }

        function kingcheck(a, b) {                                       //King movements
          if (boardT[x + 1 * a] == undefined || boardT[x + 1 * a][y + 1 * b] == undefined || boardT[x + 1 * a][y + 1 * b].color == color) { } else {
            dep1T.push([x + 1 * a, y + 1 * b, 0])
          }
        }

        function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
          if (boardT[x][y + 1 * a] == 'x') {
            dep1T.push([x, y + 1 * a, 0])                                 //Mouvement simple avant
          };
          if (3.5 - 2.5 * a == y && boardT[x][y + 1 * a] == 'x' && boardT[x][y + 2 * a] == 'x') {
            dep1T.push([x, y + 2 * a, 0])                                 //Mouvement double avant
          };

          for (let j = -1; j < 2; j++) {
            if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y + 1 * a] !== undefined && boardT[x + 1 * j][y + 1 * a] !== 'x' && boardT[x + 1 * j][y + 1 * a].color !== color) {
              dep1T.push([x + 1 * j, y + 1 * a, 0])                         //Mange
            } else if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y] !== 'x' && boardT[x + 1 * j][y].jump == 'wow') {
              dep1T.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
            };
            j++
          }
        };

        if (type == 'rook') {

          rookcheck(0, 1, 7 - y)                                       //Haut
          rookcheck(0, -1, y)                                          //Bas
          rookcheck(1, 0, 7 - x)                                       //Droite
          rookcheck(-1, 0, x)                                          //Gauche

        } else if (type == 'knight') {

          knightcheck(2, 1);
          knightcheck(1, 2);
          knightcheck(-1, 2);
          knightcheck(-2, 1);
          knightcheck(1, -2);
          knightcheck(2, -1);
          knightcheck(-1, -2);
          knightcheck(-2, -1);

        } else if (type == 'bishop') {

          bishopcheck(1, 1, 7 - Math.max(x, y))
          bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
          bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
          bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

        } else if (type == 'queen') {

          rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
          rookcheck(0, -1, y)
          rookcheck(1, 0, 7 - x)
          rookcheck(-1, 0, x)
          bishopcheck(1, 1, 7 - Math.max(x, y))                        //Bishop part of Queen
          bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
          bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
          bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

        } else if (type == 'king') {
          kingcheck(1, 1);
          kingcheck(1, 0);
          kingcheck(0, 1);
          kingcheck(-1, 1);
          kingcheck(-1, 0);
          kingcheck(-1, -1);
          kingcheck(1, -1);
          kingcheck(0, -1);

          if (boardT[x][y].color == 'W') { //White
            if (boardT[x][y].alreadyMoved == false && boardT[0][0].alreadyMoved == false && boardT[0][0] == WRook1
              && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x') { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x - 2, y, 3])
            };
            if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
              && boardT[5][0] == 'x' && boardT[6][0] == 'x') { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x + 2, y, 2])
            }
          };
          if (boardT[x][y].color == 'B') { //Black
            if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
              && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x') { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x - 2, y, 3])
            };
            if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
              && boardT[5][7] == 'x' && boardT[6][7] == 'x') { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x + 2, y, 2])
            }
          };

        } else if (type == 'pawn') {

          if (boardT[x][y].color == 'W') {
            pawncheck(1);
          };
          if (boardT[x][y].color == 'B') {
            pawncheck(-1);
          };

        } else if (boardT[x][y] == 'x') {
          console.log('Ceci est un X !!!!!!!!!!')
          console.log(x, y)
          console.log(boardT[x][y])
        } else {
          console.log("Cette pièce a un type qui n'existe pas !")
        }
        //DEP 2
        // Si une coordonnée est inférieure à 0 ou supérieure à 7 => suppr selection piece
        for (i = 0; i < dep1T.length; i++) {
          if (dep1T[i][0] < 0 || dep1T[i][0] > 7 || dep1T[i][1] < 0 || dep1T[i][1] > 7) {
            dep1T.splice(i, 1);
            i--
          }
        };

        for (let i = 0; i < dep1T.length; i++) {           //Rajoute x et y au début de chaque élément de dep1T
          dep1T[i].unshift(x, y)                         //ici, dep1T renvoi tous les déplacements possibles en pratique sans compter l'échec
        }

        console.log(type)
        //console.log(dep1T)
        //for (i = 0; i < dep1T.length; i++) {
            console.log(dep1T[i])
        //};
        // console.log(dep1T)
        return dep1T
      };

      //console.log('autre move ' + w)
      checkCubeBR();
      return illegalCount
    }

    function depSmallRock() {
      let SmallRokPos1 = [];
      let SmallRokPos2 = [];
      let KingPoz = [];
      let illegalCount = 0;
      let boardT = board

      if (turn == 'W') {
        SmallRokPos1 = [6, 0];
        SmallRokPos2 = [5, 0];
        KingPoz = [4, 0];
      } else if (turn == 'B') {
        SmallRokPos1 = [6, 7];
        SmallRokPos2 = [5, 7];
        KingPoz = [4, 7];
      }

      function checkCubeSR() { //checkCube calcule la pos des rois et teste si une pièce adverse peut l'atteindre

        for (let o = 0; o < 8; o++) {                               //Premiere boucle pour splice et foutre checkKingT=0
          for (let p = 0; p < 8; p++) {
            if (board[o][p] !== 'x' && board[o][p].color !== turn) {                      //Pour chaque position du board qui contient une pièce adverse
              let depT = dep1et2TSR(o, p);                               //depT est l'array de tous les moves que pourrait faire cette pièce
              for (k = 0; k < depT.length; k++) {                     //Pour tous les moves de cette pièce :
                if (SmallRokPos1[0] == depT[k][2] && SmallRokPos1[1] == depT[k][3]) {               illegalCount++;
                } else if (SmallRokPos2[0] == depT[k][2] && SmallRokPos2[1] == depT[k][3]) {
                  illegalCount++;
                } else if (KingPoz[0] == depT[k][2] && KingPoz[1] == depT[k][3]) {
                  illegalCount++;
                }
              }
            }
          }
        }
      }


      function dep1et2TSR(x, y) {
        let type = boardT[x][y].type
        let color = boardT[x][y].color
        let dep1T = []
        //DEP 1

        function rookcheck(a, b, c) {                                   //Rook movements
          for (let i = 1; i <= c; i++) {
            if (boardT[x + i * a][y + i * b] == 'x') {
              dep1T.push([x + i * a, y + i * b, 0])
            } else if (boardT[x + i * a][y + i * b].color !== color) {
              dep1T.push([x + i * a, y + i * b, 0])
              break
            } else {
              break
            }
          };
        }

        function knightcheck(a, b) {                                    //Knight movements
          if (boardT[x + a] == undefined || boardT[x + a][y + b] == undefined || boardT[x + a][y + b].color == color) { } else {
            dep1T.push([x + a, y + b, 0])
          }
        }

        function bishopcheck(a, b, c) {                                 //Bishop movements
          for (let i = 1; i <= c; i++) {
            if (boardT[x + i * a][y + i * b] == 'x') {
              dep1T.push([x + i * a, y + i * b, 0])
            } else if (boardT[x + i * a][y + i * b].color !== color) {
              dep1T.push([x + i * a, y + i * b, 0])
              break
            } else {
              break
            }
          };
        }

        function kingcheck(a, b) {                                       //King movements
          if (boardT[x + 1 * a] == undefined || boardT[x + 1 * a][y + 1 * b] == undefined || boardT[x + 1 * a][y + 1 * b].color == color) { } else {
            dep1T.push([x + 1 * a, y + 1 * b, 0])
          }
        }

        function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
          if (boardT[x][y + 1 * a] == 'x') {
            dep1T.push([x, y + 1 * a, 0])                                 //Mouvement simple avant
          };
          if (3.5 - 2.5 * a == y && boardT[x][y + 1 * a] == 'x' && boardT[x][y + 2 * a] == 'x') {
            dep1T.push([x, y + 2 * a, 0])                                 //Mouvement double avant
          };

          for (let j = -1; j < 2; j++) {
            if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y + 1 * a] !== undefined && boardT[x + 1 * j][y + 1 * a] !== 'x' && boardT[x + 1 * j][y + 1 * a].color !== color) {
              dep1T.push([x + 1 * j, y + 1 * a, 0])                         //Mange
            } else if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y] !== 'x' && boardT[x + 1 * j][y].jump == 'wow') {
              dep1T.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
            };
            j++
          }
        };

        if (type == 'rook') {

          rookcheck(0, 1, 7 - y)                                       //Haut
          rookcheck(0, -1, y)                                          //Bas
          rookcheck(1, 0, 7 - x)                                       //Droite
          rookcheck(-1, 0, x)                                          //Gauche

        } else if (type == 'knight') {

          knightcheck(2, 1);
          knightcheck(1, 2);
          knightcheck(-1, 2);
          knightcheck(-2, 1);
          knightcheck(1, -2);
          knightcheck(2, -1);
          knightcheck(-1, -2);
          knightcheck(-2, -1);

        } else if (type == 'bishop') {

          bishopcheck(1, 1, 7 - Math.max(x, y))
          bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
          bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
          bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

        } else if (type == 'queen') {

          rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
          rookcheck(0, -1, y)
          rookcheck(1, 0, 7 - x)
          rookcheck(-1, 0, x)
          bishopcheck(1, 1, 7 - Math.max(x, y))                        //Bishop part of Queen
          bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
          bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
          bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

        } else if (type == 'king') {
          kingcheck(1, 1);
          kingcheck(1, 0);
          kingcheck(0, 1);
          kingcheck(-1, 1);
          kingcheck(-1, 0);
          kingcheck(-1, -1);
          kingcheck(1, -1);
          kingcheck(0, -1);

          if (boardT[x][y].color == 'W') { //White
            if (boardT[x][y].alreadyMoved == false && boardT[0][0].alreadyMoved == false && boardT[0][0] == WRook1
              && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x') { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x - 2, y, 3])
            };
            if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
              && boardT[5][0] == 'x' && boardT[6][0] == 'x') { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x + 2, y, 2])
            }
          };
          if (boardT[x][y].color == 'B') { //Black
            if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
              && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x') { //Grand roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x - 2, y, 3])
            };
            if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
              && boardT[5][7] == 'x' && boardT[6][7] == 'x') { //Petit roc
              //Rajouter condition : ni roi ni cases entre non menacé
              dep1T.push([x + 2, y, 2])
            }
          };

        } else if (type == 'pawn') {

          if (boardT[x][y].color == 'W') {
            pawncheck(1);
          };
          if (boardT[x][y].color == 'B') {
            pawncheck(-1);
          };

        } else if (boardT[x][y] == 'x') {
          console.log('Ceci est un X !!!!!!!!!!')
          console.log(x, y)
          console.log(boardT[x][y])
        } else {
          console.log("Cette pièce a un type qui n'existe pas !")
        }
        //DEP 2
        // Si une coordonnée est inférieure à 0 ou supérieure à 7 => Suppr selection !
        for (i = 0; i < dep1T.length; i++) {
          if (dep1T[i][0] < 0 || dep1T[i][0] > 7 || dep1T[i][1] < 0 || dep1T[i][1] > 7) {
            dep1T.splice(i, 1);
            i--
          }
        };

        for (let i = 0; i < dep1T.length; i++) {           //Rajoute x et y au début de chaque élément de dep1T
          dep1T[i].unshift(x, y)                         //ici, dep1T renvoi tous les déplacements possibles en pratique sans compter l'échec
        }

        //console.log(type)
        //console.log(dep1T)
        //for (i = 0; i < dep1T.length; i++) {
        //    console.log(dep1T[i])
        //};
        // console.log(dep1T)
        return dep1T
      };

      //console.log('autre move ' + w)
      checkCubeSR();
      return illegalCount
    }

    if (board[x][y].color == 'W') { //White
      if (board[x][y].alreadyMoved == false && board[0][0].alreadyMoved == false && board[0][0] == WRook1
        && board[1][0] == 'x' && board[2][0] == 'x' && board[3][0] == 'x' && depBigRock() == 0) { 
        dep1.push([x - 2, y, 3])
      };
      if (board[x][y].alreadyMoved == false && board[7][0].alreadyMoved == false && board[7][0] == WRook2
        && board[5][0] == 'x' && board[6][0] == 'x' && depSmallRock() == 0) { //Petit roc
        dep1.push([x + 2, y, 2])
      }
    };
    if (board[x][y].color == 'B') { //Black
      if (board[x][y].alreadyMoved == false && board[0][7].alreadyMoved == false && board[0][7] == BRook2
        && board[1][7] == 'x' && board[2][7] == 'x' && board[3][7] == 'x' && depBigRock() == 0) { 
        dep1.push([x - 2, y, 3])
      };
      if (board[x][y].alreadyMoved == false && board[7][7].alreadyMoved == false && board[7][7] == BRook1
        && board[5][7] == 'x' && board[6][7] == 'x' && depSmallRock() == 0) { //Petit roc
        dep1.push([x + 2, y, 2])
      }
    };

  } else if (type == 'pawn') {

    if (board[x][y].color == 'W') {
      pawncheck(1);
    };
    if (board[x][y].color == 'B') {
      pawncheck(-1);
    };

  } else if (board[x][y] == 'x') {
    console.log('Ceci est un X !!!!!!!!!!')
    console.log(x, y)
    console.log(board[x][y])
  } else {
    console.log("Cette pièce a un type qui n'existe pas !")
  }
  //DEP 2
  // If any coordinate is less than 0 or greater than 7, KILL IT!
  for (i = 0; i < dep1.length; i++) {
    if (dep1[i][0] < 0 || dep1[i][0] > 7 || dep1[i][1] < 0 || dep1[i][1] > 7) {
      dep1.splice(i, 1);
      i--
    }
  };

  for (let i = 0; i < dep1.length; i++) {           //Rajoute x et y au début de chaque élément de dep1
    dep1[i].unshift(x, y)                         //ici, dep1 renvoi tous les déplacements possibles en pratique sans compter l'échec
  }

  //console.log(type)
  //console.log(dep1)
  //for (i = 0; i < dep1.length; i++) {
  //    console.log(dep1[i])
  //};
  // console.log(dep1)

  return dep1
};



function dep3(dep1) {
  //dep1 est l'array de tous les mouvements possibles d'une pièce
  let depOutput = JSON.parse(JSON.stringify(dep1));
  for (let w = 0; w < depOutput.length; w++) {//Pour chaque array de dep1    
    let boardT = JSON.parse(JSON.stringify(board));
    if (depOutput[w] !== undefined) {
      updateT(depOutput[w][0], depOutput[w][1], depOutput[w][2], depOutput[w][3], depOutput[w][4]); //UpdateT va update le boardT en fonction du move w
      //On veut maintenant checker si le roi peut être atteint avec ce move. Pour le roque, on checkera aussi si sa case et la case intermédiaire peuvent l'être 
      checkCube();
      //On lance checkCube.
      function updateT(x, y, x2, y2, z) {
        boardT = JSON.parse(JSON.stringify(board));
        boardT[x2].splice(y2, 1, boardT[x][y]);
        boardT[x].splice(y, 1, 'x');                                      // suppr piece sur xy
        //console.log(boardT[x][y])
        if (z == 1) {                                                     // Z en passant
          boardT[x2].splice(y, 1, 'x');
        } else if (z == 2) {
          boardT[5].splice(y, 1, boardT[7][y]);                         // Z petit roque copie tour
          boardT[7].splice(y, 1, 'x');                                 // Z petit roque suppr tour
        } else if (z == 3) {
          boardT[3].splice(y, 1, boardT[0][y]);                         // Z grand roque copie tour
          boardT[0].splice(y, 1, 'x');                                 // Z grand roque suppr tour
        }
      };

      function checkCube() {  //checkCube prend la pos des rois et teste si une pièce adverse peut l'atteindre
        function KingPos() {//checkKingPos prend le boardT et renvoie la position des rois
          for (let KingPosx = 0; KingPosx < 8; KingPosx++) {
            for (let KingPosy = 0; KingPosy < 8; KingPosy++) {
              if (boardT[KingPosx][KingPosy] !== 'x' && boardT[KingPosx][KingPosy].type == 'king') {
                if (boardT[KingPosx][KingPosy].color == turn) {
                  AKingPos.push(KingPosx, KingPosy)
                } else {
                  EKingPos.push(KingPosx, KingPosy)
                }
              }
            }
          }
        };
        let AKingPos = [];
        let EKingPos = [];
        KingPos();
        let Spliceit = 0;
        //console.log(AKingPos)
        function dep1et2T(x, y) {
          let type = boardT[x][y].type
          let color = boardT[x][y].color
          let dep1T = []
          //DEP 1

          function rookcheck(a, b, c) {                                   //Rook movements
            for (let i = 1; i <= c; i++) {
              if (boardT[x + i * a][y + i * b] == 'x') {
                dep1T.push([x + i * a, y + i * b, 0])
              } else if (boardT[x + i * a][y + i * b].color !== color) {
                dep1T.push([x + i * a, y + i * b, 0])
                break
              } else {
                break
              }
            };
          }

          function knightcheck(a, b) {                                    //Knight movements
            if (boardT[x + a] == undefined || boardT[x + a][y + b] == undefined || boardT[x + a][y + b].color == color) { } else {
              dep1T.push([x + a, y + b, 0])
            }
          }

          function bishopcheck(a, b, c) {                                 //Bishop movements
            for (let i = 1; i <= c; i++) {
              if (boardT[x + i * a][y + i * b] == 'x') {
                dep1T.push([x + i * a, y + i * b, 0])
              } else if (boardT[x + i * a][y + i * b].color !== color) {
                dep1T.push([x + i * a, y + i * b, 0])
                break
              } else {
                break
              }
            };
          }

          function kingcheck(a, b) {                                       //King movements
            if (boardT[x + 1 * a] == undefined || boardT[x + 1 * a][y + 1 * b] == undefined || boardT[x + 1 * a][y + 1 * b].color == color) { } else {
              dep1T.push([x + 1 * a, y + 1 * b, 0])
            }
          }

          function pawncheck(a) {                                          //Pawn movements (color = W => a = 1, color = B => a = -1)
            if (boardT[x][y + 1 * a] == 'x') {
              dep1T.push([x, y + 1 * a, 4])                                 //Mouvement simple avant
            };
            if (3.5 - 2.5 * a == y && boardT[x][y + 1 * a] == 'x' && boardT[x][y + 2 * a] == 'x') {
              dep1T.push([x, y + 2 * a, 0])                                 //Mouvement double avant
            };

            for (let j = -1; j < 2; j++) {
              if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y + 1 * a] !== undefined && boardT[x + 1 * j][y + 1 * a] !== 'x' && boardT[x + 1 * j][y + 1 * a].color !== color) {
                dep1T.push([x + 1 * j, y + 1 * a, 0])                         //Mange
              } else if (boardT[x + 1 * j] !== undefined && boardT[x + 1 * j][y] !== 'x' && boardT[x + 1 * j][y].jump == 'wow') {
                dep1T.push([x + 1 * j, y + 1 * a, 1])                         //Prise en passant
              };
              j++
            }
          };

          if (type == 'rook') {

            rookcheck(0, 1, 7 - y)                                       //Haut
            rookcheck(0, -1, y)                                          //Bas
            rookcheck(1, 0, 7 - x)                                       //Droite
            rookcheck(-1, 0, x)                                          //Gauche

          } else if (type == 'knight') {

            knightcheck(2, 1);
            knightcheck(1, 2);
            knightcheck(-1, 2);
            knightcheck(-2, 1);
            knightcheck(1, -2);
            knightcheck(2, -1);
            knightcheck(-1, -2);
            knightcheck(-2, -1);

          } else if (type == 'bishop') {

            bishopcheck(1, 1, 7 - Math.max(x, y))
            bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
            bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

          } else if (type == 'queen') {

            rookcheck(0, 1, 7 - y)                                      //Rook part of Queen
            rookcheck(0, -1, y)
            rookcheck(1, 0, 7 - x)
            rookcheck(-1, 0, x)
            bishopcheck(1, 1, 7 - Math.max(x, y))                        //Bishop part of Queen
            bishopcheck(1, -1, 7 - Math.max(x, 7 - y))
            bishopcheck(-1, -1, 7 - Math.max(7 - x, 7 - y))
            bishopcheck(-1, 1, 7 - Math.max(7 - x, y))

          } else if (type == 'king') {
            kingcheck(1, 1);
            kingcheck(1, 0);
            kingcheck(0, 1);
            kingcheck(-1, 1);
            kingcheck(-1, 0);
            kingcheck(-1, -1);
            kingcheck(1, -1);
            kingcheck(0, -1);



            if (boardT[x][y].color == 'W') { //White
              if (boardT[x][y].alreadyMoved == false && boardT[0][0].alreadyMoved == false && boardT[0][0] == WRook1
                && boardT[1][0] == 'x' && boardT[2][0] == 'x' && boardT[3][0] == 'x' && depBigRock() == true) { //Grand roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1T.push([x - 2, y, 3])
              };
              if (boardT[x][y].alreadyMoved == false && boardT[7][0].alreadyMoved == false && boardT[7][0] == WRook2
                && boardT[5][0] == 'x' && boardT[6][0] == 'x' && depSmolRock() == true) { //Petit roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1T.push([x + 2, y, 2])
              }
            };
            if (boardT[x][y].color == 'B') { //Black
              if (boardT[x][y].alreadyMoved == false && boardT[0][7].alreadyMoved == false && boardT[0][7] == BRook2
                && boardT[1][7] == 'x' && boardT[2][7] == 'x' && boardT[3][7] == 'x' && depBigRock() == true) { //Grand roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1T.push([x - 2, y, 3])
              };
              if (boardT[x][y].alreadyMoved == false && boardT[7][7].alreadyMoved == false && boardT[7][7] == BRook1
                && boardT[5][7] == 'x' && boardT[6][7] == 'x' && depSmolRock() == true) { //Petit roc
                //Rajouter condition : ni roi ni cases entre non menacé
                dep1T.push([x + 2, y, 2])
              }
            };

          } else if (type == 'pawn') {

            if (boardT[x][y].color == 'W') {
              pawncheck(1);
            };
            if (boardT[x][y].color == 'B') {
              pawncheck(-1);
            };

          } else if (boardT[x][y] == 'x') {
            console.log('Ceci est un X !!!!!!!!!!')
            console.log(x, y)
            console.log(boardT[x][y])
          } else {
            console.log("Cette pièce a un type qui n'existe pas !")
          }
          //DEP 2
          // If any coordinate is less than 0 or greater than 7, KILL IT!
          for (i = 0; i < dep1T.length; i++) {
            if (dep1T[i][0] < 0 || dep1T[i][0] > 7 || dep1T[i][1] < 0 || dep1T[i][1] > 7) {
              dep1T.splice(i, 1);
              i--
            }
          };

          for (let i = 0; i < dep1T.length; i++) {           //Rajoute x et y au début de chaque élément de dep1T
            dep1T[i].unshift(x, y)                         //ici, dep1T renvoi tous les déplacements possibles en pratique sans compter l'échec
          }

          //console.log(type)
          //console.log(dep1T)
          //for (i = 0; i < dep1T.length; i++) {
          //    console.log(dep1T[i])
          //};
          // console.log(dep1T)
          return dep1T
        };
        for (let o = 0; o < 8; o++) {
          for (let p = 0; p < 8; p++) {
            if (boardT[o][p] !== 'x' && boardT[o][p].color !== turn) {
              let depT = dep1et2T(o, p);
              for (k = 0; k < depT.length; k++) {
                if (AKingPos[0] == depT[k][2] && AKingPos[1] == depT[k][3]) {
                  Spliceit++;
                } else {
                }
              }
            }
            if (boardT[o][p] !== 'x' && boardT[o][p].color == turn) {
              let depT = dep1et2T(o, p)
              for (k = 0; k < depT.length; k++) {
                if (EKingPos[0] == depT[k][2] && EKingPos[1] == depT[k][3]) {
                  if (turn == 'W') {
                    depOutput[w][5] = 'B';
                  } else {
                    depOutput[w][5] = 'W';
                  }
                }
              }
            }
          }
        }
        if (Spliceit == 0) {
        } else {
          depOutput.splice(w, 1);
          w--;
        }
      }
    }
  }
  return depOutput
}

function choix(choice) {
  console.log('Vous avez choisi :');
  console.log(choice);
  for (let i = 0; i < 8; i++) {
    if (board[i][7].type == 'pawn') {
      board[i][7].type = choice
    } else if (board[i][0].type == 'pawn') {
      board[i][0].type = choice
    }
  }
  document.getElementById("wehaveawinner").innerHTML = ''
  updateGUI()
};

function checkPromo() {
  for (let i = 0; i < 8; i++) {
    function askPromotion() {
      document.getElementById("wehaveawinner").innerHTML = '<div style="top: 235px; left: 155px; position: absolute; width: 280px; height: 100px; font-size: 20px; color: white; z-index: 1;"> <table> <td class="choice" id="queen" onClick="choix(this.id)"> <div id="queen">Queen</div> </td> <td class="choice" id="knight" onClick="choix(this.id)"> <div id="knight">Knight</div> </td> <td class="choice" id="rook" onClick="choix(this.id)"> <div id="rook">Rook</div> </td> <td class="choice" id="bishop" onClick="choix(this.id)"><div id="bishop">Bishop</div> </td> </table> </div>'
    }

    if (board[i][7].type == 'pawn' || board[i][0].type == 'pawn') {
      askPromotion();
    }
  }
  checkSquare();
};

function reply_click() {
  //alert(event.srcElement.id);
  let click = event.srcElement.id;
  //console.log(click)
  play(click)
}

// PLAY: Gere la selection de piece.                                
function play(click) {

  let x = click[0];
  let y = click[1];
  let input = [x, y];
  let idgros = input[0] + input[1]
  //let idgrospoint = 'a' + idgros
  //console.log(idgrospoint)
  //console.log(x);
  //console.log(y);
  //console.log(input);
  //console.log(filteredLegalMoves);

  //Gere la taille des piece lors de la selection
  if (filteredLegalMoves.length !== 0) {
    filteredLegalMoves.forEach(move => {
      if (move[2] == input[0] && move[3] == input[1]) {
        finalMove.push(move);
        document.getElementById(idgros).style.height = "80%";
        document.getElementById(idgros).style.width = "80%";
        filteredLegalMoves = []
        update(finalMove);
      } else {
        let idgrosancien = move[0].toString() + move[1].toString()
        //console.log(idgrosancien)
        filteredLegalMoves = [];
        document.getElementById(idgrosancien).style.height = "80%";
        document.getElementById(idgrosancien).style.width = "80%";
      }
    })
  } else {
    filteredLegalMoves = [];
    legalMoves.forEach(move => {
      if (move[0] == input[0] && move[1] == input[1]) {
        filteredLegalMoves.push(move)
        console.log(move)
        document.getElementById(idgros).style.height = "60%";
        document.getElementById(idgros).style.width = "60%";
        //console.log(document.getElementById(idgros).parentNode.parentNode)
        //document.getElementById(idgros).parentNode.parentNode.style.color = "green !important";
        ////////////////////////////////////////////////////////////////////////////////////////
      };
    })
  }
  //console.log('filteredLegalMoves : ')
  //console.log(filteredLegalMoves)
  //console.log('finalMove : ')
  //console.log(finalMove)  
};


function update(finalMoveInput) {
  x = finalMoveInput[0][0]                                                           // supprimer ces 5 lignes plus tard
  y = finalMoveInput[0][1]
  x2 = finalMoveInput[0][2]
  y2 = finalMoveInput[0][3]
  z = finalMoveInput[0][4]
  checkedKingT = finalMoveInput[0][5]
  finalMove = []
  //console.log(x, y, x2, y2, z, checkedKingT)  

  function jumpingJacks(y, y2) {                           // teste si pion jump
    if (y - y2 == 2 || y - y2 == -2) {
      return true;
    }
  }

  board[x2].splice(y2, 1, board[x][y]);                           // copie piece sur xy2
  board[x].splice(y, 1, 'x');                                      // suppr piece sur xy

  checkedKing = checkedKingT;                                      // update checkedKing
  if (checkedKing == 'B') {
    console.log('Roi Noir en échec !');
  } else if (checkedKing == 'W') {
    console.log('Roi Blanc en échec !');
  }

  if (z == 1) {                                                     // Z en passant
    board[x2].splice(y, 1, 'x');
  } else if (z == 2) {
    board[5].splice(y, 1, board[7][y]);                         // Z petit roque copie tour
    board[7].splice(y, 1, 'x');                                 // Z petit roque suppr tour
  } else if (z == 3) {
    board[3].splice(y, 1, board[0][y]);                         // Z grand roque copie tour
    board[0].splice(y, 1, 'x');                                 // Z grand roque suppr tour
  }

  board.forEach(boardChild => {
    boardChild.forEach(boardGrandChild => {
      if (boardGrandChild.type == 'pawn' && boardGrandChild.jump == 'wow') { // update jump de wow en jumped
        boardGrandChild.jump = 'jumped'
      }
    })
  })

  if (board[x2][y2].type == 'rook' || board[x2][y2].type == 'king') {      // update de la propriété roque
    board[x2][y2].alreadyMoved = true;
  } else if (board[x2][y2].type == 'pawn' && jumpingJacks(y, y2) == true) { // update jump de never en wow
    board[x2][y2].jump = 'wow';
  } else if (board[x2][y2].type == 'pawn' && board[x2][y2].jump == 'wow') { // update jump de wow en jumped
    board[x2][y2].jump = 'jumped';
  }

  board[x2][y2].position = [x2, y2];                                     // update de la propriete position
  
  if(x2 == 0) {
    xValue = "a";
  } else if (x2 == 1) {
    xValue = "b";
  } else if (x2 == 2) {
    xValue = "c";
  } else if (x2 == 3) {
    xValue = "d";
  } else if (x2 == 4) {
    xValue = "e";
  } else if (x2 == 5) {
    xValue = "f";
  } else if (x2 == 6) {
    xValue = "g";
  } else if (x2 == 7) {
    xValue = "h";
  }

  if(y2 == 0) {
    yValue = "1";
  } else if (y2 == 1) {
    yValue = "2";
  } else if (y2 == 2) {
    yValue = "3";
  } else if (y2 == 3) {
    yValue = "4";
  } else if (y2 == 4) {
    yValue = "5";
  } else if (y2 == 5) {
    yValue = "6";
  } else if (y2 == 6) {
    yValue = "7";
  } else if (y2 == 7) {
    yValue = "8";
  }

  console.log(board[x2][y2].type)

  piece = board[x2][y2].letter
  console.log(piece)

  let coup = " " + piece + xValue + yValue;

  console.log(coup)

  ListeValue.push(coup)

  console.log(ListeValue)
  showLineMovement(ListeValue)

  console.log(board[0])
  if (turn == 'W') {                                                     // turn switcher
    turn = 'B'
  } else {
    turn = 'W'
  };
  //console.log('Jump Status : ')
  //console.log(board[x2][y2].jump)
  updateGUI()
  checkSquare();                                                          // a reactiver plus tard pour boucler

  return ListeValue;
};

function updateGUI() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      let type = board[x][y].type
      //console.log(type)
      let idToFind = x.toString() + y.toString()
      //console.log(idToFind)
      if (board[x][y].color == 'W') {
        switch (type) {
          case 'rook':
            document.getElementById(idToFind).src = "./assets/W_Rook.png"
            break;
          case 'pawn':
            document.getElementById(idToFind).src = "./assets/W_Pawn.png"
            break;
          case 'knight':
            document.getElementById(idToFind).src = "./assets/W_Knight.png"
            break;
          case 'bishop':
            document.getElementById(idToFind).src = "./assets/W_Bishop.png"
            break;
          case 'queen':
            document.getElementById(idToFind).src = "./assets/W_Queen.png"
            break;
          case 'king':
            document.getElementById(idToFind).src = "./assets/W_King.png"
            break;
          default:
            console.log('bonjour default');
        }
      } else if (board[x][y].color == 'B') {
        switch (type) {
          case 'rook':
            document.getElementById(idToFind).src = "./assets/B_Rook.png"
            break;
          case 'pawn':
            document.getElementById(idToFind).src = "./assets/B_Pawn.png"
            break;
          case 'knight':
            document.getElementById(idToFind).src = "./assets/B_Knight.png"
            break;
          case 'bishop':
            document.getElementById(idToFind).src = "./assets/B_Bishop.png"
            break;
          case 'queen':
            document.getElementById(idToFind).src = "./assets/B_Queen.png"
            break;
          case 'king':
            document.getElementById(idToFind).src = "./assets/B_King.png"
            break;
          default:
            console.log('bonjour default');
        }
      } else {
        document.getElementById(idToFind).src = "./assets/No_Img.svg"
      }

      /*
        let type = board[0][0].type;
        console.log(type);
        
      */
    };
  };
  checkPromo();
}