//(function() {
//Global variables 
$(document).ready(function(){
	var tileImages = ['images/tiles/tile1.png', 'images/tiles/tile2.png', 'images/tiles/tile3.png', 'images/tiles/tile4.png', 'images/tiles/tile5.png', 'images/tiles/tile6.png', 'images/tiles/tile7.png', 'images/tiles/tile8.png', 'images/tiles/tile9.png', 'images/tiles/tile10.png', 'images/tiles/tile11.png', 'images/tiles/tile12.png', 'images/tiles/tile13.png', 'images/tiles/tile14.png', 'images/tiles/tile15.png', 'images/tiles/tile16.png', 'images/tiles/tile17.png', 'images/tiles/tile18.png']
	var tileImages =  tileImages.concat(tileImages);
	// var backOfCard = "images/tiles/placeholder.png"
	// var flippedTiles = 0;
	// var playerOne = 0;
	// var playerTwo = 0;
	// var refreshButton = $('#refresh');
	var moves = [];
	
	var present = null;
	$('.square').click(function(){
		var who = $(this).attr("id");

		if(moves.indexOf(who) == -1){
			var randomizer = Math.floor(Math.random() * tileImages.length);  
			var result = tileImages[randomizer];
			tileImages.splice(randomizer, 1);
			$(this).css("background-image", "url('" +  result + "')");
		    moves.unshift(who);
		    //$(this).html(result);
		}
	})


})

//});	


	//When a user enters the window, randomize the cards so they are ready to be played right away. 
	// $( window ).load(function() {
	//   mixItUp();
	// });

//Once a player flips a tile pair, see if matching = 1 point if not matching = 0 points and switch player
// var endGame = function() {

// 	}

//Once 18 total matches have been made, announce a winner
// if (playerOne + playerTwo = 18)
// 	winner();
// };

//Once all matches have been made, announce a winner or if it's a tie announce that the game is a draw and have an option to start a new game.
// var winner = function() {
// //declaring a winner or a draw
// if (playerOne > playerTwo) {
// 	console.log("Player One wins!")
// } else if (playerTwo > playerOne) {
// 	console.log("Player Two wins!")
// } else {
// 	console.log("It's a draw!")
// }
// alert("Click the refresh button to start a new game.")
// };

//A user can refresh the game at anytime. When a user refreshes the game all the cards get randomized. 
// var refreshGame = 
// };

//Randomize the cards 

//END
//})();