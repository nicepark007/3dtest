var circle = new Array();
var floor;

var init = function() {
	floormake();
	circlemake();
	document.querySelector('#stage');
};

window.onload = function() {
    init();  
};

var floormake = function() {
	floor = document.createElement('div');
	floor.style.width = 200 + 'px';
	floor.style.height = 200 + 'px';
	floor.style.backgroundColor = "#ddd";
	floor.style.position = "absolute";
	floor.style.marginTop = "0px";
	floor.style.marginLeft = "-100px";
	floor.style['-webkit-transform'] = 'rotateX(90deg)';
	
	stage.appendChild(floor);
};

var circlemake = function() {
	for(i=0; i<10; i++){
		circle[i] = document.createElement('div');
		var rs = Math.random()*50;
		circle[i].style.width = rs+100+'px';
		circle[i].style.height = rs+100+'px';
		circle[i].style.position = "absolute";
		circle[i].style.opacity = "0.5";
		rs = rs/2;
		circle[i].style.borderRadius = 50+rs+'px';
		circle[i].style.marginTop = -rs-50+"px";
		circle[i].style.marginLeft = -rs-50+"px";
		var rgb = Math.round(Math.random()*0xFFFFFF).toString(16);
		circle[i].style.backgroundColor = '#'+ rgb;
		stage.appendChild(circle[i]);
	}
}

window.onmousemove = function(e) {
    var dx = window.innerWidth / 2 - e.pageX;
    dx = dx/3;
    var dy = window.innerHeight / 2 - e.pageY;
    dy = dy/3;
    for(i=0; i<10; i++){
    	dx = dx + i*9;	
		dy = dy + i*9;
    	var rx = 'rotateY(' + dx + 'deg) rotateX(' + dy + 'deg)';
    	circle[i].style['-webkit-transform'] = rx;
	};
};
