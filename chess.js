var activeRow = 0
var activeElem = 0
var toRow = 0
var toElem = 0
var listenControl = true
var remaining = ""
var blackRemovedFromGame = []
var whiteRemovedFromGame = []
var turnCounter = 0
var activeTeam = ""
var activePiece = ""
var sEast = true
var sWest = true
var nEast = true
var nWest = true
var north = true
var east = true
var south = true
var west = true
var style = ""
var deadCounterBlack = 0
var deadCounterBlack2 = 0
var blackOneZero = 1
var deadCounterWhite = 0
var deadCounterWhite2 = 0
var whiteOneZero = 0
var directory = ""
var checked = []
var blackKingLoc = [0,4]
var whiteKingLoc = [7,4]

function checkCheck(row,elem,activePiece,activeTeam) {
	console.log(row,elem,"konge")
	north = true
	east = true
	south = true
	west = true
	sEast = true
	sWest = true
	nEast = true
	nWest = true
	//activeElement.className = "selected"
	for (i=1;i<8;i++) {
		var j=i*-1
		var zero = 0
		var type = "tarn"
		if (north == true){
			var dir = "north"
			checkSelector(row,elem,j,zero,activePiece,activeTeam,dir,type);
			delete dir
		}
		if (east == true){
			var dir = "east"
			checkSelector(row,elem,zero,i,activePiece,activeTeam,dir,type);
			delete dir
		}
		if (south == true){
			var dir = "south"
			checkSelector(row,elem,i,zero,activePiece,activeTeam,dir,type);
			delete dir
		}
		if (west == true){
			var dir = "west"
			checkSelector(row,elem,zero,j,activePiece,activeTeam,dir,type);
			delete dir
		}
		var dir = "loper"
		if (sEast == true){
			var dir = "sEast"
			checkSelector(row,elem,i,i,activePiece,activeTeam,dir,type);
			delete dir
		}
		if (sWest == true){
			var dir = "sWest"
			checkSelector(row,elem,i,j,activePiece,activeTeam,dir,type);
			delete dir
		}
		if (nEast == true){
			var dir = "nEast"
			checkSelector(row,elem,j,i,activePiece,activeTeam,dir,type);
			delete dir
		}
		if (nWest == true){
			var dir = "nWest"
			checkSelector(row,elem,j,j,activePiece,activeTeam,dir,type);
			delete dir
		}
		var dir = ""
		var type = "springer"
		var rowArray = [2,2,1,-1,-2,-2,-1,1]
		var elemArray = [-1,1,2,2,1,-1,-2,-2]
		for (i=0;i<8;i++) {
			o = rowArray[i]
			p = elemArray[i]
			checkSelector(row,elem,o,p,activePiece,activeTeam,type)
		}
	}
}

function checkSelector(row,elem,o,p,activePiece,activeTeam,dir,type) {
	if (row+o > -1 && row+o < 8 && elem+p > -1 && elem+p < 8) {
		if (activeTeam == "w.png" && board.children[row+o].children[elem+p].children[0].src.slice(-5) == "b.png") {
			console.log("sjakk hvit",row+o,elem+p)
			if (type == "springer" && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "sb.png") {
				board.children[row+o].children[elem+p].className = "target"
			}
			/*if (type == "konge" && o < 1 && o > -1 && p < 1 && p > -1 && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "kb.png") {
				board.children[row+o].children[elem+p].className = "target"
			}*/
			if (type == "tarn" && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "tb.png" || board.children[row+o].children[elem+p].children[0].src.slice(-6) == "db.png") {
				board.children[row+o].children[elem+p].className = "target"
			}
			if (type == "loper" && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "lb.png" || board.children[row+o].children[elem+p].children[0].src.slice(-6) == "db.png") {
				board.children[row+o].children[elem+p].className = "target"
			}
		}
		else if (activeTeam == "b.png" && board.children[row+o].children[elem+p].children[0].src.slice(-5) == "w.png") {
			console.log("sjakk svart",row+o,elem+p)
			if (type == "springer" && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "sw.png") {
				board.children[row+o].children[elem+p].className = "target"
			}
			/*if (type == "konge" && o < 1 && o > -1 && p < 1 && p > -1 && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "kw.png") {
				board.children[row+o].children[elem+p].className = "target"
			}*/
			if (type == "tarn" && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "tw.png" || board.children[row+o].children[elem+p].children[0].src.slice(-6) == "db.png") {
				board.children[row+o].children[elem+p].className = "target"
			}
			if (type == "loper" && board.children[row+o].children[elem+p].children[0].src.slice(-6) == "lw.png" || board.children[row+o].children[elem+p].children[0].src.slice(-6) == "db.png") {
				board.children[row+o].children[elem+p].className = "target"
			}
		}
		if (board.children[row+o].children[elem+p].children[0].src.slice(-5) == "b.png" || board.children[row+o].children[elem+p].children[0].src.slice(-5) == "w.png"){
			if (dir == "sEast"){
				sEast = false
			}
			if (dir == "sWest"){
				sWest = false
			}
			if (dir == "nEast"){
				nEast = false
			}
			if (dir == "nWest"){
				nWest = false
			}
		}
		if (board.children[row+o].children[elem+p].children[0].src.slice(-5) == "b.png" || board.children[row+o].children[elem+p].children[0].src.slice(-5) == "w.png"){
			if (dir == "north"){
				north = false
			}
			if (dir == "east"){
				east = false
			}
			if (dir == "south"){
				south = false
			}
			if (dir == "west"){
				west = false
			}
		}
	}
}

function postBlackDead() {
	console.log(deadCounterBlack)
	console.log(blackOneZero)
	deadBlack.children[deadCounterBlack].children[blackOneZero].children[0].src = directory+blackRemovedFromGame[deadCounterBlack2]+".png"
	deadCounterBlack += 1
	deadCounterBlack2 += 1
	if (deadCounterBlack == 8) {
		blackOneZero -= 1
		deadCounterBlack = 0
	}
}
function postWhiteDead() {
	console.log(deadCounterWhite)
	console.log(whiteOneZero)
	deadWhite.children[deadCounterWhite].children[whiteOneZero].children[0].src = directory+whiteRemovedFromGame[deadCounterWhite2]+".png"
	deadCounterWhite += 1
	deadCounterWhite2 += 1
	if (deadCounterWhite == 8) {
		whiteOneZero += 1
		deadCounterWhite = 0
	}
}
function movePiece(board,toRow,toElem) {
	var oldPlace = board.children[activeRow].children[activeElem]
	if ((oldPlace.children[0].src.slice(-5) == "b.png" && turnCounter%2 != 0)||(oldPlace.children[0].src.slice(-5) == "w.png" && turnCounter%2 == 0)) {
		console.log(activeRow,activeElem," moves to ",toRow,toElem)
		var oldPlace = board.children[activeRow].children[activeElem]
		var newPlace = board.children[toRow].children[toElem]
		var toBeRemoved = newPlace.children[0].src
		var toBeMoved = oldPlace.children[0].src
		if (toBeRemoved != remaining) {
			if (toBeRemoved.slice(-5) == "b.png"){
				blackRemovedFromGame.push(toBeRemoved.slice(-6,-4))
				console.log(whiteRemovedFromGame)
				console.log(blackRemovedFromGame)
				postBlackDead()
			}
			if (toBeRemoved.slice(-5) == "w.png"){
				whiteRemovedFromGame.push(toBeRemoved.slice(-6,-4))
				console.log(whiteRemovedFromGame)
				console.log(blackRemovedFromGame)
				postWhiteDead()
			}
		}
		oldPlace.children[0].src = remaining
		newPlace.children[0].src = toBeMoved
		turnCounter += 1
		if (turnCounter%2 == 0) {
			document.getElementById("style1").innerHTML = ".selected {background-color: #ff6600;}"
			document.getElementById("style2").innerHTML = ".choice {background-color: #ffcc00;}"
			document.getElementById("style3").innerHTML = "td:hover {background-color: #ff6600;}"
			console.log("White Teams Turn")
		}
		else if (turnCounter%2 != 0) {
			document.getElementById("style1").innerHTML = ".selected {background-color: #0055cc;}"
			document.getElementById("style2").innerHTML = ".choice {background-color: #0099ff;}"
			document.getElementById("style3").innerHTML = "td:hover {background-color: #0055cc;}"
			console.log("black Teams Turn")
		}
		if (activePiece == "kb.png") {
			blackKingLoc[0] = toRow
			blackKingLoc[1] = toElem
		}
		if (activePiece == "kw.png") {
			whiteKingLoc[0] = toRow
			whiteKingLoc[1] = toElem
		}
	}
}
function bonde(activeElement,activePiece,row,elem) {
	if (activePiece == "bw.png") {
		var ifRow = 6
		var one = -1
		var two = -2
		var teamPng = "b.png"
		bonde2(activeElement,activePiece,row,elem,ifRow,one,two,teamPng)
	}
	if (activePiece == "bb.png") {
		var ifRow = 1
		var one = 1
		var two = 2
		var teamPng = "w.png"
		bonde2(activeElement,activePiece,row,elem,ifRow,one,two,teamPng)
	}
}
function bonde2(activeElement,activePiece,row,elem,ifRow,one,two,teamPng) {
	if (board.children[row+one].children[elem].children[0].src.slice(-6) == "in.png"){
		board.children[row+one].children[elem].className = "choice";
		if (row == ifRow && board.children[row+two].children[elem].children[0].src.slice(-6) == "in.png") {
			board.children[row+two].children[elem].className = "choice";
		}
	}
	if (elem != 7 && board.children[row+one].children[elem+1].children[0].src.slice(-5) == teamPng) {
		board.children[row+one].children[elem+1].className = "target";
	}
	if (elem != 0 && board.children[row+one].children[elem-1].children[0].src.slice(-5) == teamPng) {
	board.children[row+one].children[elem-1].className = "target";
	}
}
function konge(activeElement,activePiece,row,elem,activeTeam) {
	var dir = ""
	var o = 0
	var p = 0
	for (i=-1;i<2;i++) {
		for (j=-1;j<2;j++) {
			selector(row,elem,i,j,activePiece,activeTeam,dir)
		}
	}
	activeElement.className = "selected"
}
function loper(activeElement,activePiece,row,elem,activeTeam){
	sEast = true
	sWest = true
	nEast = true
	nWest = true
	activeElement.className = "selected"
	for (i=1;i<8;i++) {
		var j=i*-1
		if (sEast == true){
			var dir = "sEast"
			selector(row,elem,i,i,activePiece,activeTeam,dir);
		}
		if (sWest == true){
			var dir = "sWest"
			selector(row,elem,i,j,activePiece,activeTeam,dir);
		}
		if (nEast == true){
			var dir = "nEast"
			selector(row,elem,j,i,activePiece,activeTeam,dir);
		}
		if (nWest == true){
			var dir = "nWest"
			selector(row,elem,j,j,activePiece,activeTeam,dir);
		}
	}
}
function selector(row,elem,o,p,activePiece,activeTeam,dir) {
	if (row+o > -1 && row+o < 8 && elem+p > -1 && elem+p < 8) {
		if (board.children[row+o].children[elem+p].children[0].src.slice(-6) == "in.png"){
			board.children[row+o].children[elem+p].className = "choice"
		}
		else if (activeTeam == "w.png" && board.children[row+o].children[elem+p].children[0].src.slice(-5) == "b.png") {
			board.children[row+o].children[elem+p].className = "target"
		}
		else if (activeTeam == "b.png" && board.children[row+o].children[elem+p].children[0].src.slice(-5) == "w.png") {
			board.children[row+o].children[elem+p].className = "target"
		}
		if (activePiece == "lb.png" || activePiece == "lw.png" || activePiece == "db.png" || activePiece == "dw.png"){
			if (board.children[row+o].children[elem+p].children[0].src.slice(-5) == "b.png" || board.children[row+o].children[elem+p].children[0].src.slice(-5) == "w.png"){
				if (dir == "sEast"){
					sEast = false
				}
				if (dir == "sWest"){
					sWest = false
				}
				if (dir == "nEast"){
					nEast = false
				}
				if (dir == "nWest"){
					nWest = false
				}
			}
		}
		if (activePiece == "tb.png" || activePiece == "tw.png" || activePiece == "db.png" || activePiece == "dw.png") {
			if (board.children[row+o].children[elem+p].children[0].src.slice(-5) == "b.png" || board.children[row+o].children[elem+p].children[0].src.slice(-5) == "w.png"){
				if (dir == "north"){
					north = false
				}
				if (dir == "east"){
					east = false
				}
				if (dir == "south"){
					south = false
				}
				if (dir == "west"){
					west = false
				}
			}
		}
	}
}
function springer(activeElement,activePiece,row,elem,activeTeam,dir) {
	var dir = ""
	var rowArray = [2,2,1,-1,-2,-2,-1,1]
	var elemArray = [-1,1,2,2,1,-1,-2,-2]
	for (i=0;i<8;i++) {
		o = rowArray[i]
		p = elemArray[i]
		selector(row,elem,o,p,activePiece,activeTeam)
	}
}
function tarn(activeElement,activePiece,row,elem,activeTeam){
	north = true
	east = true
	south = true
	west = true
	activeElement.className = "selected"
	for (i=1;i<8;i++) {
		var j=i*-1
		var zero = 0
		if (north == true){
			var dir = "north"
			selector(row,elem,j,zero,activePiece,activeTeam,dir);
		}
		if (east == true){
			var dir = "east"
			selector(row,elem,zero,i,activePiece,activeTeam,dir);
		}
		if (south == true){
			var dir = "south"
			selector(row,elem,i,zero,activePiece,activeTeam,dir);
		}
		if (west == true){
			var dir = "west"
			selector(row,elem,zero,j,activePiece,activeTeam,dir);
		}
	}
}
function dronning(activeElement,activePiece,row,elem,activeTeam){
	north = true
	east = true
	south = true
	west = true
	sEast = true
	sWest = true
	nEast = true
	nWest = true
	activeElement.className = "selected"
	for (i=1;i<8;i++) {
		var j=i*-1
		var zero = 0
		if (north == true){
			var dir = "north"
			selector(row,elem,j,zero,activePiece,activeTeam,dir);
			delete dir
		}
		if (east == true){
			var dir = "east"
			selector(row,elem,zero,i,activePiece,activeTeam,dir);
			delete dir
		}
		if (south == true){
			var dir = "south"
			selector(row,elem,i,zero,activePiece,activeTeam,dir);
			delete dir
		}
		if (west == true){
			var dir = "west"
			selector(row,elem,zero,j,activePiece,activeTeam,dir);
			delete dir
		}
		if (sEast == true){
			var dir = "sEast"
			selector(row,elem,i,i,activePiece,activeTeam,dir);
			delete dir
		}
		if (sWest == true){
			var dir = "sWest"
			selector(row,elem,i,j,activePiece,activeTeam,dir);
			delete dir
		}
		if (nEast == true){
			var dir = "nEast"
			selector(row,elem,j,i,activePiece,activeTeam,dir);
			delete dir
		}
		if (nWest == true){
			var dir = "nWest"
			selector(row,elem,j,j,activePiece,activeTeam,dir);
			delete dir
		}
	}
}
function actionFunction(row,elem) {
	listenControl = false
	var activeElement = board.children[row].children[elem];
	activePiece = activeElement.children[0].src.slice(-6)
	var activeType = activePiece.slice(0,1)
	activeTeam = activePiece.slice(-5)
	activeElement.className = "selected"
	if (activeType == "b") {
		bonde(activeElement,activePiece,row,elem,activeTeam);
	}
	else if (activeType == "k") {
		konge(activeElement,activePiece,row,elem,activeTeam);
	}
	else if (activeType == "d") {
		dronning(activeElement,activePiece,row,elem,activeTeam)
	}
	else if (activeType == "l") {
		loper(activeElement,activePiece,row,elem,activeTeam)
	}
	else if (activeType == "t") {
		tarn(activeElement,activePiece,row,elem,activeTeam)
	}
	else if (activeType == "s") {
		springer(activeElement,activePiece,row,elem,activeTeam)
	}
}
function deSelect() {
	for (i=0;i<8;i++) {
		for (j=0;j<8;j++) {
			if (i%2==0){
				if (j%2==0){
					board.children[i].children[j].className = "white"
				}
				if (j%2!=0){
					board.children[i].children[j].className = "black"
				}
			}
			if (i%2!=0){
				if (j%2!=0){
					board.children[i].children[j].className = "white"
				}
				if (j%2==0){
					board.children[i].children[j].className = "black"
				}
			}
		}
	}
}
function createBoard() {
	boardArray = [[],[],[],[],[],[],[],[]];
	for (var i = 0; i < 8; i++) {
		for (var j = 0; j < 8; j++) {
			boardArray[i].push(board.children[i].children[j].innerHTML)
		}
	}
}
window.addEventListener("load", function() {
	board = document.getElementById("board").children[0];
	deadBlack = document.getElementById("deadBlack").children[0];
	deadWhite = document.getElementById("deadWhite").children[0];
	remaining = board.children[2].children[0].children[0].src
	directory = remaining.slice(0,40)
	createBoard();
	addListeners();
});

function addListeners() {
	if (listenControl == true) {
		for (i=0;i<8;i++) {
			for (j=0;j<8;j++) {
				board.children[i].children[j].addEventListener("click", function() {
					toRow = parseInt(this.dataset.row);
					toElem = parseInt(this.dataset.elem);
					if (board.children[toRow].children[toElem].className != "choice" && board.children[toRow].children[toElem].className != "target"){
						deSelect();
						activeRow = parseInt(this.dataset.row);
						activeElem = parseInt(this.dataset.elem);
						actionFunction(activeRow,activeElem);
					}	
					if (board.children[toRow].children[toElem].className == "choice" || board.children[toRow].children[toElem].className == "target") {
						movePiece(board,toRow,toElem);
						deSelect();
						console.log(blackKingLoc,whiteKingLoc)
						checkCheck(blackKingLoc[0],blackKingLoc[1],"kb.png","b.png")
						checkCheck(whiteKingLoc[0],whiteKingLoc[1],"kw.png","w.png")
					}
				})
			}
		}
	}
}
