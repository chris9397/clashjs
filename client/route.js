Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('login', {path: '/'});
	this.route('game', {path: '/game'});
	this.route('newaccount', {path: '/newaccount'});
})
