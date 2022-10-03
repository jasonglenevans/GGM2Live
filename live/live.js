(function () {
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
})();
(async function () {
var console = new lrconsole();console.log("GGM2L Loaded");
//some copy and paste stuff from the code
var gui = {};
var dialogBox = document.getElementById("dialogBox");
var dialogBackground = document.getElementById("dialogBackground");
var cursorsvg = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMy45NjQzMiIgaGVpZ2h0PSIxNi4wODQzIiB2aWV3Qm94PSIwLDAsMTMuOTY0MzIsMTYuMDg0MyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzMi44OTk2LC0xNzEuNzU4NjkpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnPjxwYXRoIGQ9Ik0yMzYuODQwMjksMTg1LjY1MTg3bC0zLjIwNDIxLC0xMi45OTQ4NmwxMS43NDg3Nyw1LjUxODM2eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQxLjExMjU3LDE4Mi4wOTE2NGw1LjI1MTM1LDUuMjUxMzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo3LjEwMDQwMTUyNTc5MTc5Njo4LjI0MTMxNDg5NzE2NzIyOS0tPg==";
var dialogOptions = {
    inputs: {
        txt: document.getElementById("dialogInput")
    },

    buttons: {
        ok: document.getElementById("dialogButtonOk"),

        cancel: document.getElementById("dialogButtonCancel")

    },
    name: document.getElementById("dialogName"),

    txt: document.getElementById("dialogText"),

    hideAll: function () {
        document.getElementById("dialogInput").hidden = true;
        document.getElementById("dialogText").hidden = true;
        document.getElementById("dialogButtonOk").hidden = false;
        document.getElementById("dialogButtonCancel").hidden = false;
    }
};
gui.alert = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    document.getElementById("dialogButtonCancel").hidden = true;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback();
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

gui.confirm = (function (message, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(true);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(false);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});

gui.prompt = (function (message, defaultValue, callback) {
    dialogBackground.style.display = "block";

    dialogBox.style.display = "block";

    dialogOptions.hideAll();

    dialogOptions.name.innerHTML = message;

    dialogOptions.inputs.txt.value = defaultValue;

    dialogOptions.inputs.txt.hidden = false;

    let dialogInput = dialogOptions.inputs.txt;

    dialogOptions.buttons.ok.onclick = function () {
        try {
            callback(dialogInput.value);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };

    dialogOptions.buttons.cancel.onclick = function () {
        try {
            callback(null);
        } catch (e) {}
        dialogBackground.style.display = "none";
        dialogBox.style.display = "none";
    };
});
//end dialog script//
function ggm2alert(msg) {
	return new Promise((a) => {
		gui.alert(msg,a);
	})
}
function ggm2confirm(msg) {
	return new Promise((a) => {
		gui.confirm(msg,a);
	})
}
function ggm2prompt(msg) {
	return new Promise((a) => {
		gui.prompt(msg,"",a);
	})
}
function WebSocketASYNC(wsurl) {
	return new Promise((accept,decline) => {
		var ws = new WebSocket();
		ws.onopen = function () {
			accept(ws);
		};
		ws.onerror = function () {
			decline();
		};
	}) 
}
function waitUntilElementIDExists(id) {
    return new Promise((a) => {
        var interval1 = setInterval(() => {
            if (document.getElementById(id)) {
                clearInterval(interval1);
                a(document.getElementById(id));
            }
        })
    });
}
//first, inject a new style definition
var style = document.createElement("style");
style.innerHTML = `
.ggm2lsREDButton {
    color: white;
    border-radius: 8px;
    width: auto;
    height: 35px;
    border: none;
    font-weight: bold;
    float: left;
    margin-top: 7px;
    margin-left: 15px;
    background-color: #ff6b6b;
    transition: 0.07s;
	/*Live Red Button*/
}
.ggm2lsREDButton:hover {
	background-color:#f03e3e;
	cursor:pointer;
}
`;
document.body.appendChild(style);

var menubar = await waitUntilElementIDExists("main_menu");
if (getID()) {
	menubar.innerHTML += `
		<button id="Ggm2LiveStart" class="ggm2lsREDButton">
		</button>
	`;
}
var gls = document.getElementById("Ggm2LiveStart");
gls.innerHTML = "GGM2Live";
async function ggm2lclick () {
	if (!(localStorage.getItem("username"))) {
		await ggm2alert("Login To Use GG2L")
	} else {
		var res = await ggm2confirm("start connection?");
		if (res) {
			console.log("User Accepted Start Request")
			//var res = await ggm2prompt("server ip/localhost:");
			//if (res) {
			//	if (res.length > 0) {
					window.startConnection("wss://"+"little-fuschia-debt.glitch.me"+"/")
			//	}
			//}
		}
	}
};
gls.onclick = ggm2lclick;
var rsu = document.getElementById("resourceupload");
var rsuu = rsu.onchange;
window.editorChanged = function () {};
rsu.onchange = function () {
	rsuu();
	setTimeout(()=>{window.editorChanged()},900);
};
var gt = document.getElementById("gameTitle");
var gtc = document.getElementById("gameTitle").onchange;
gt.onchange = function () {
	gtc();
	setTimeout(()=>{window.editorChanged()},100);
};
function getID() {
	var tmpparams = (new URL(document.location)).searchParams;
	return Number(tmpparams.get('id'));
}
window.workspace.addChangeListener(function () {setTimeout(()=>{window.editorChanged()},100)});
window.startConnection = function (ws) {
	var ws = new WebSocket(ws);
	var cdiv = document.createElement("div");
	gls.onclick = null;
	window.connectionID = null;
	window.currentFile = null;
	ws.onerror = function () {
		gls.innerHTML = "Failed";
		setTimeout(() => {
			gls.innerHTML = "GGM2Live";
			gls.onclick = ggm2lclick;
		},800)
	};
	function tick() {
		return new Promise((a)=>{setTimeout(a,1);});
	}
	function senddata(data) {
		ws.send(JSON.stringify({
			room:getID(),
			data:data
		}))
	}
	ws.onopen = function () {
		window.MX = 0;
		window.MY = 0;
		document.onmousedown = function () {
			window.stopSend = true;
		};
		document.onmouseup = function () {
			window.stopSend = false;
		};
		senddata({
			scommand:"getFile"
		});
		gls.innerHTML = "Stop Connection";
		gls.onclick = function () {
			try{
				ws.close();
				window.editorChanged = function () {};
				gls.innerHTML = "GGM2Live";
				gls.onclick = ggm2lclick;
				document.onmousedown = null;
				document.onmouseup = null;
				document.onmousemove = null;
				if (cdiv) {
					for (var cur of cdiv.children) {
						cur.remove();
					}
					cdiv.remove();
					cdiv = null;
				}
				if (window.intervalSend) {
					clearInterval(window.intervalSend);
					window.intervalSend = null;
				}
			}catch(e){console.log(e.toString());}
		};
		window.editorChanged = async function () {
			if (!(window.dontLoadTimer)) {
				setTimeout(async () => {
					while (window.stopSend) {
						await tick();
					}
					//for no overload, check the last one with the sent one, for less server lag.
					var newFile = window.gui.editorToJsonText("file");
					if (window.currentFile == newFile) {
						console.log("Prevented Server Lag: Same File Detected")
					} else {
						window.currentFile = newFile;
						senddata({
							scommand:"updateFile",
							data:window.gui.editorToJsonText("file"),
							id:window.connectionID
						});
					}
				},400)
			}
		};
	};
	ws.onclose = function () {
		try{
			//ws.close();
			window.editorChanged = function () {};
			gls.innerHTML = "GGM2Live";
			gls.onclick = ggm2lclick;
			document.onmousedown = null;
			document.onmouseup = null;
			document.onmousemove = null;
			if (cdiv) {
				for (var cur of cdiv.children) {
					cur.remove();
				}
				cdiv.remove();
				cdiv = null;
			}
			if (window.intervalSend) {
				clearInterval(window.intervalSend);
				window.intervalSend = null;
			}
		}catch(e){console.log(e.toString());}
	};
	var _Username_ = localStorage.getItem("username");
	document.body.appendChild(cdiv);
	ws.onmessage = function (e) {
		var data2 = JSON.parse(e.data);
		if (data2.room == getID() || data2.room == "ForceSend") {
			var data = data2.data;
			if (data.type == "updateFile") {
				window.dontLoadTimer = true;
				if (!(window.connectionID == data.id)) {
					window.gui.jsonTextToEditor(data.data,"file");
					window.currentFile = data.data;
				}
				setTimeout(() => {
					window.dontLoadTimer = false;
				},900)
				
			}
			if (data.type == "LocalID") {
				window.connectionID = data.id;
				document.onmousemove = function (e) {
					window.MX = e.x;
					window.MY = e.y;
				};
				window.intervalSend = setInterval(() => {
						senddata({
							scommand:"cursorMove",
							x:MX/window.innerWidth,
							y:MY/window.innerHeight,
							id:window.connectionID,
							username:_Username_
						});
				},80)
			}
			if (data.type == "cursorMove") {
				if (!(window.connectionID == data.id)) {
					var cs = document.getElementById("ggm2l_cursor_"+data.id);
					var csn = document.getElementById("ggm2l_cursor_username_"+data.id);
					if (!(cs)) {
						cs = document.createElement("img");
						csn = document.createElement("span");
						cs.setAttribute("draggable","false");
						cs.onselectstart = function () {return false};
						cs.ondragstart = function () {return false};
						cs.id = "ggm2l_cursor_"+data.id;
						csn.id = "ggm2l_cursor_username_"+data.id;
						cs.src = cursorsvg;
						cs.style.position = "fixed";
						cs.style.zIndex = "10000000000000000";
						cdiv.appendChild(cs);
						cdiv.appendChild(csn);
						csn.innerHTML = data.username;
						csn.setAttribute("style","font-weight: bold;color:white;");
						csn.style.position = "fixed";
						csn.style.zIndex = "10000000000000000";
					}
					cs.style.left = data.x*window.innerWidth+"px";
					cs.style.top = data.y*window.innerHeight+"px";
					csn.style.left = data.x*window.innerWidth+"px";
					csn.style.top = (data.y*window.innerHeight)-20+"px";
				}
			}
			if (data.type == "cursorRemove") {
				if (!(window.connectionID == data.id)) {
					var cs = document.getElementById("ggm2l_cursor_"+data.id);
					var csn = document.getElementById("ggm2l_cursor_username_"+data.id);
					if (cs) {
						cs.remove();
						csn.remove();
					}
				}
			}
		}
	};
};
})();