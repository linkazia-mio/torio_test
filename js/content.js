$(function (){
  $(".bookmark").click(
  	function(){
  		$(".bookmark").toggleClass("active");
  	}
  );
  $('.carousel').carousel({
    mode: 'fade'
  });
});
