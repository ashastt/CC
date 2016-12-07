
var win = 0;
var loss = 0;
		
		
$(document).ready(function(){

	$("#flip").click(function(){
   		 $("#message").slideToggle('slow');
	});

	resetGame();

	$(".buttonImg").click(function() {

		var $targetSum = parseInt($('#targetNumber').text());
		var $crystalsSum = parseInt($('#resultSum').text());

		// console.log("targetSum = " + $targetSum);
		// console.log("crystalsSum = " + $crystalsSum);

		var index = $( ".buttonImg" ).index(this);
		var value = $( "#gem" + index ).val();
		
		console.log("Index = ", index , "Value = ", value);

		$crystalsSum += parseInt(value);

		$("#resultSum").html($crystalsSum);

		console.log("crystalsSum = ", $crystalsSum , "targetSum = ", $targetSum);

		if($crystalsSum === $targetSum){
			console.log("you win!" + $crystalsSum);
			$("#win").html(++win);
			resetGame();
		}else if($crystalsSum > $targetSum){
			console.log("you lose!" + $crystalsSum);
			$("#loss").html(++loss);
			resetGame();
		}
		else{
			console.log("continue....");
		}
});


});


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //(max-min) -- possible number of results
}

function resetGame(){

	$('#targetNumber').html(getRandomInt(19,120));

	$('#resultSum').html(0);

	//Assign values to gems
	for(var i=0; i < 4; i++){
		var randomGemVal = getRandomInt(1,12);
		$('#gem' + i).val(randomGemVal);
		console.log($('#gem' + i).val());
	}
	$("#message").hide();
	
}

