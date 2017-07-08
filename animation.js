$(document).ready(function(){
	var play_button = document.getElementById("play_button");
	if(play_button){
 	play_button.addEventListener('click',function(event){
    	$('.container').slideUp();
  });
}
});