Template.game.game = function(){
	var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
	var speed = 4;
	width = game.width;
	height = game.height;

	function preload() {
		game.load.image('head', 'img/snakehead.png');
		game.load.image('body', 'img/body.png');
		game.load.image('apple', 'img/apple.png');
	}

	function create() {
	    game.physics.startSystem(Phaser.Physics.P2JS);
            head = game.add.sprite(width/2, height/2, 'head');
	    head.pivot.x = head.width * .5;
	    head.pivot.y = head.width * .5;
	    game.physics.p2.enable(head);
	    apple = game.add.sprite(Math.floor(Math.random() * width - 20), Math.floor(Math.random() * height - 20), 'apple');
	    game.physics.p2.enable(apple);
	    
	}

	function update() {
	    positionListener();
	    keyListener();
	}


//Listeners
        keyListener = function(){
             if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                    head.body.velocity.x += -speed;
                    head.angle = 90;
                }
            if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                    head.body.velocity.x += speed;
                    head.angle = 270;
                }
            if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
                    head.body.velocity.y += -speed;
                    head.angle = 180;
                }
            if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
                    head.body.velocity.y += speed;
                    head.angle = 0;
                }
        }
	
	appleController = function(){
	    apple = game.add.sprite(Math.floor(Math.random() * width - 20), Math.floor(Math.random() * height - 20), 'apple');
	}

	positionListener = function(){
	    if(head.x < 0 + 10 || head.x > width -10){
		shutdown();
	    }
	    if(head.y < 0 + 10 || head.y > height - 10){
		shutdown();
	    }
	}
}

