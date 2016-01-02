$(document).keypress(function(e)
{
	  var button = String.fromCharCode(e.which);
	  if(button == "s"){
	  	      $("div").stop().animate({margintop : "+=10px"}, 4000);
	  	}
});