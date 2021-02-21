$(document).ready(function(){
  $(window).scroll(function(){
  	let scroll = $(window).scrollTop();
	  if (scroll > 100) {
	    $(".navbar").css("background" , "#333");
	  }
	  else{
		  $(".navbar").css("background" , "transparent");  	
	  }
  })
})

// const resetForm = function () {
// 	$('form').trigger('reset');
// }
// resetForm();