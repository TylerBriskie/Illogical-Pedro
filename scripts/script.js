var customerTypes = ["Angry", "Drunk", "Dumb", "First Timer", "Know It All", "Aloof", "Socially Awkward"];

var coWorkerTypes = ["Flirty", "Drunk", "Angry", "Lazy", "Type A", "Cheery", "Company Man"];
var coWorkerRoles = ["Line", "Cook", "Bartender", "Supervisor"];

var playerName = '';

$('.playerName').submit(function(event) {
    event.preventDefault();
    playerName = $('input[name=newPlayer]').val();
});

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: getNewCustomer(data),
});

var getNewCustomer = function(data){
  this.firstName = data.results[0].name.first;
  this.lastName = data.results[0].name.last;
  this.drunk = Math.floor(Math.random()*10);
  this.flirty = Math.floor(Math.random()*10);
  this.angry = Math.floor(Math.random()*10);
  this.cool = Math.floor(Math.random()*10);
  this.exp = Math.floor(Math.random()*10);
};
