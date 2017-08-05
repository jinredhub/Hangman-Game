
		var user = {
			guessRemaining: 12,
			wins: 0,
			guessedWords: [],

			resetGame: function(){
				this.guessRemaining = 12;
				this.guessedWords = [];
				chooseRandomWordAssignToHiddenWord();
			},
		}

		var computerwords = ["mackerel", "flounder", "eel", "amberjack", "snapper"];
		var computerChoice = "mackerel";
		var hiddenWord = "________";

		function chooseRandomWordAssignToHiddenWord (){
			var x = Math.floor((Math.random() * computerwords.length) + 1) -1;
			computerChoice = computerwords[x];
			hiddenWord = computerChoice;
			for (i = 0; i < hiddenWord.length; i++){
				hiddenWord = hiddenWord.substr(0, i) + "_" + hiddenWord.substr(i + 1);
			}
		}

		function refreshScreen (){
			html = 
				"<p class='fontTitle'>Press any key to get started!</p>" + 
				"<p>Wins: " + user.wins + "</p>" + 
				"<p>Current Word</p>" + 
				"<p> <span>" + hiddenWord + "</span></p>" +
				"<p>Number of Guesses remainings</p>" +
				"<p>" + user.guessRemaining + "</p>" +
				"<p>Letters Already Guessed</p>" +
				"<p>" + user.guessedWords + "</p>";
					
				document.querySelector("#html").innerHTML = html;	
		}

		function imgHidden(){
			document.getElementById("snapper").style.visibility = "hidden";
			document.getElementById("saba").style.visibility = "hidden";
			document.getElementById("eel").style.visibility = "hidden";
			document.getElementById("flounder").style.visibility = "hidden";
			document.getElementById("amberjack").style.visibility = "hidden";

		}

		
		user.resetGame();
		refreshScreen();

		document.onkeyup = function(event){
			var userChoice = event.key;

			if (user.guessRemaining > 1){
				//find out if a letter exits in the computerChoice
				if (computerChoice.indexOf(userChoice) !== -1){
					for (i = 0; i < computerChoice.length; i++){
						if(userChoice === computerChoice.charAt(i)){
							hiddenWord = hiddenWord.substr(0, i) + userChoice + hiddenWord.substr(i + 1);
						}
					}
				}
				else {
					if (user.guessedWords.indexOf(userChoice) === -1){
						console.log("working");
						user.guessedWords.push(userChoice);
						user.guessRemaining --;
					}
				}

				if (hiddenWord === computerChoice){
					if(hiddenWord === "mackerel"){
						// document.getElementById("saba").style.visibility = "visible";
						// document.getElementByClassName("imgWin").style.visibility = "visible";
						imgHidden();
						document.getElementById("saba").style.visibility = "visible";
					}
					if(hiddenWord === "snapper"){
						imgHidden();
						document.getElementById("snapper").style.visibility = "visible";
					}
					if(hiddenWord === "flounder"){
						imgHidden();
						document.getElementById("flounder").style.visibility = "visible";
					}
					if(hiddenWord === "eel"){
						imgHidden();
						document.getElementById("eel").style.visibility = "visible";
					}
					if(hiddenWord === "amberjack"){
						imgHidden();
						document.getElementById("amberjack").style.visibility = "visible";
					}
					user.wins ++;
					user.resetGame();
				}
			}
			else{
				user.resetGame();
			}
			refreshScreen();
		};

