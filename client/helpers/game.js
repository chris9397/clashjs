Template.game.game = function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

	function preload() {
		game.load.image('head', 'img/snakehead.png');
		game.load.image('body', 'img/body.png');
	}

	function create() {
		game.add.sprite(50, 50, 'head');
	}

	function update() {
	}
}