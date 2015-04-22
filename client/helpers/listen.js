        keyListener = function(){
             if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                    head.x += -speed;
                    head.angle = 90;
                }
            if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                    head.x += speed;
                    head.angle = 270;
                }
            if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
                    head.y += -speed;
                    head.angle = 180;
                }
            if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
                    head.y += speed;
                    head.angle = 0;
                }
        }
