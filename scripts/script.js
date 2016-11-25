// $.ajax({
//   url: 'https://randomuser.me/api/?nat=us',
//   dataType: 'json',
//   success: function(data){
//     this.firstName = data.results[0].name.first;
//     this.lastName = data.results[0].name.last;
//     $('.customers-go-here').append('<p>' + this.firstName + " " + this.lastName + '</p>');
//   },
// });

$(document).ready(function() {

  $('.playerName').submit(function(event) {
    event.preventDefault();
    var $playerName = $('input[name=userName]').val();
    if ($playerName.length === 0) {
        alert("We have to call you something!");
    } else {
      $('#headerOne').html('Congrats ' + $playerName + ", you're hired!");
      $('#headerTwo').html('');
      $('.playerName').html('');
      $('.startGame').html('<a href="day1.html"><button type="submit" id="dayOne">that was easy</button></a>')
    }
  });
  $('#dayOne').click(function(event){
    event.preventDefault();

  });

  // $('#getCustomers')



});
