var map = new Map("plateau");


var joueur = new Personnage("hero.png", 7, 14, DIRECTION.BAS)
map.addPersonnage(joueur);


window.onload = function() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	canvas.width  = map.getLargeur() * 32;
	canvas.height = map.getHauteur() * 32;
	
	setInterval(function() {
	map.dessinerMap2(ctx);
	}, 40);

	
	// Gestion du clavier
	window.onkeydown = function(event) {
		var e = event || window.event;
	var key = e.which || e.keyCode;
	
	
	switch(key) {
	case 38 : case 122 : case 119 : case 90 : case 87 : // Flèche haut, z, w, Z, W
		joueur.deplacer(DIRECTION.HAUT, map);
		break;
	case 40 : case 115 : case 83 : // Flèche bas, s, S
		joueur.deplacer(DIRECTION.BAS, map);
		break;
	case 37 : case 113 : case 97 : case 81 : case 65 : // Flèche gauche, q, a, Q, A
		joueur.deplacer(DIRECTION.GAUCHE, map);
		break;
	case 39 : case 100 : case 68 : // Flèche droite, d, D
		joueur.deplacer(DIRECTION.DROITE, map);
		break;
	default : 
		//alert(key);
		// Si la touche ne nous sert pas, nous n'avons aucune raison de bloquer son comportement normal.
		return true;
}


	return false;
	}

}
	

function bureau()
	{
	//TESTS DESSIN TILE
	var ts = new Tileset("basique.png");
	
	ts.dessinerTile(1, ctx, 10, 10);
	ts.dessinerTile(5, ctx, 50, 10);
	ts.dessinerTile(6, ctx, 90, 10);
	ts.dessinerTile(7, ctx, 130, 10);

	ctx.strokeStyle = 'red';
	ctx.strokeRect(75, 75, 50, 50);
		
		
	//DESSIN RANDOM
	var smiley = new image();
	smiley.src = "tilesets/mik_cyril.png";
	ctx.fillstyle = 'blue';
	
	for	(var i=0; i < 5; i++)
	{
		ctx.fillrect(50 * i, 50 * i, 10 * i, 5 * i);
	}
	ctx.strokestyle = 'red';
	ctx.strokerect(75, 75, 50, 50);
	
	
	//ctx.drawimage(smiley, 200, 200);
	ctx.drawimage(smiley, 200, 200, 100, 50);
	ctx.drawimage(smiley, 0, 0, 10, 19, 200, 100, 10, 19);
	}
