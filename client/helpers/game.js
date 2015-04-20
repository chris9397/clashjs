Template.game.game = function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var speed = 4;
	width = game.width;
	height = game.height;

	function preload() {
		game.load.image('head', 'img/snakehead.png');
		game.load.image('body', 'img/body.png');
	}

	function create() {
            head = game.add.sprite(width/2, height/2, 'head');
	}

	function update() {
	    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		    head.x += -speed;
		}
	    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		    head.x += speed;
		}
	    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
		    head.y += -speed;
		}
	    if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
		    head.y += speed;
		}
	    }
	}

