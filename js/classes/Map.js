function Map(nom) {
	
	// Création de l'objet XmlHttpRequest
	var xhr = getXMLHttpRequest();

	// Chargement du fichier
	xhr.open("GET", './maps/' + nom + '.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
		throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var mapJsonData = xhr.responseText;
	
	// Analyse des données
	var mapData = JSON.parse(mapJsonData);
	var nomTileSet = 'tilesheet_shooter.png'
	this.tileset = new Tileset(nomTileSet);
	this.terrain = mapData.layers[0].data;

	// Liste des personnages présents sur le terrain.
	this.personnages = new Array();
	
	// Pour ajouter un personnage
	Map.prototype.addPersonnage = function(perso) {
		this.personnages.push(perso)
	};
	
	
	// Pour récupérer la taille (en tiles) de la carte
	Map.prototype.getHauteur = function() {
		return this.terrain.length / 15;
	}
	Map.prototype.getLargeur = function() {
		return 15;
	}
	
	
	Map.prototype.dessinerMap = function(context) {
		
		//Dessin du plateau
		var nbLignes = this.terrain.length / 15;
		var ligne = 0;
		var colonne = 0;
		for(ligne; ligne < nbLignes ; ligne++) {
			
			for(var colonne = 0, nbColonne = 15 ; colonne < nbColonne ; colonne++) {
				var tuile = this.terrain[(ligne  * 15) + colonne];
				this.tileset.dessinerTile(tuile, context, colonne * 32, ligne * 32);
			}
		}
		
		// Dessin des personnages
		for(var i = 0, l = this.personnages.length ; i < l ; i++) {
			this.personnages[i].dessinerPersonnage(context);
		}

	}

}
