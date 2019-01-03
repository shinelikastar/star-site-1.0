$(document).ready(function(){
	var $timing = (1000);

	$('.hover-space').hover(
		function() {
			$('#lit').fadeIn(0);
			$('.show-when-dark').fadeIn(1000).hide(0).delay(200).show(0).delay(100).hide(0).delay(100).show(0);
			$('body').animate({backgroundColor:"#000000"},$timing);
			$('#unlit').css("display","none");

		}, function() {
			$('#lit').css("display","none");
			$('.show-when-dark').css("display","none");;
			$('body').animate({backgroundColor:"#fff6d9"},$timing);
			$('#unlit').fadeIn(0);
	}); 
});