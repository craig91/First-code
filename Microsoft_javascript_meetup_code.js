$(document).keypress(function(e)
{
	  var button = String.fromCharCode(e.which);
	  if(button == "s"){
	  	      $("div").stop().animate({margintop : "+=10px"});
	  	  }else if (button == "w"){
	  	  	  $("div").stop().animate({margintop : "-=10px"});    
	  	  }else if (button == "a"){
	  	  	  $("div").stop().animate({margintop : "-=10px"});    
	      }else if(button == "d"){
        	  $("div").stop().animate({marginleft : "+=10px"});
          } else if(button == " "){
        	  $("div").stop().animate({marginleft : "+=10px"});
	        }
	});


	// height : "+=10px", width : "+=10px"  