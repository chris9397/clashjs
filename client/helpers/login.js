
		var attempts = 0;
Template.login.events({
	'click button': function() {  
		var user = $('#username').val();
		var pass = $('#password').val();
		if(Player.find({username: user, password: pass}).count() != 0) {
			//Session.set("user", Meteor.userId());
			Router.go('game');
		}  
		else if(attempts < 3)
		{
		
                    alert("Not a valid login, try agian");
		    attempts = attempts + 1;
		    console.log("attempts: " + attempts);
                }
		else
		{
		    Router.go('newaccount');
		}
	}
});

Template.newaccount.events({
	'click button': function() {
		var user = $('#username').val();
		var pass1 = $('#password1').val();
		var pass2 = $('#password2').val();
		console.log(user + " " + pass1 + " " + pass2);
		if(Player.find({username: user}).count() != 0){
			alert("Username is in use, please choose another");
			return;
		}
		if(pass1 == pass2) { 
			Player.insert({username: user,
					   password: pass1});
			alert("Thank you for signing up, your game is ready");
			Router.go('game');
		} else {
			alert("Passwords do not match! Please try again");
		}
				
	}
});
