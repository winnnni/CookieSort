/**
 * @author
 */

//run the code, not to display the code.
		/*
		 * the purpose of the program is to create a list of cookies with specific properties, and from that list,
		 * create two new lists, one of my favourites, and one of the rest.
		 */
			var myCookies = [{
				"name" : "Oreo",
				"shape" : "round"
			}, {
				"name" : "Chips Aloy",
				"shape" : "round"
			}, {
				"name" : "Lorna Doone",
				"shape" : "square"
			}, {
				"name" : "Fig Newton",
				"shape" : "square"
			}];
			console.log(myCookies);

			//these are the lists I will sort my cookies into
			var myFaves = [];
			var theRest = [];
			
			//for every item in my list, check its shape. If it's round, add to faves, otherwise, add to the rest.
			
			//introduce i and console.log the character

				for (var i = 0; i < myCookies.length; i++) {
					//console.log(i);
					//4--magic number(?) use the "length", then we don't need to count the total number ourselves.
					
					var currentCookie = myCookies[i];
					//console.log(currentCookie);

					if (currentCookie.shape == "square") {

						console.log(currentCookie);
						myFaves.push(currentCookie);
						//push means add.
						//because shape is square add the currentCookie to myFaves list
						//otherwise, add the currentCookie to theRest list
					}else{
						theRest.push(currentCookie);						
					} //this is the end of the if/else list
				} //this is the end of my for loop
				
				console.log(myFaves);
				console.log(theRest);
				
				