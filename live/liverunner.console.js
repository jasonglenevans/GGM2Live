class lrconsole {
	constructor () {
	}
	log (...msg) {
		var txt = "";
		for (var m of msg) {
			txt += " "+m;
		}
		console.log("%c[Gvbvdxx Game Maker 2 Live]:"+txt,"color:black;font-weight:bold;");
	}
	warn (...msg) {
		var txt = "";
		for (var m of msg) {
			txt += " "+m;
		}
		console.warn("%[Gvbvdxx Game Maker 2 Live]:"+txt,"color:#ffe066;background:#fab005;font-weight:bold;")
	}
	error (...msg) {
		var txt = "";
		for (var m of msg) {
			txt += " "+m;
		}
		console.warn("%[Gvbvdxx Game Maker 2 Live]:"+txt,"color:#fa5252;background:#c92a2a;font-weight:bold;")
	}
}
window.lrconsole = lrconsole;