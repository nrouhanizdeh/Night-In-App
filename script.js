


// FUNCTION SECTION//


//negin Function//
//negin Function//



//kate function//
//kate function//



//tom functions//
//tom functions//




//SECTION = DRINK SCRIPT//

            var resultSet = {
                "drinks":
                    [{
                        "strDrink": "Margarita",
                        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
                    }]};

            //The two vars below capture the results from the API Response as strings"

            var drinkName = resultSet.drinks[0].strDrink;
            var drinkPic = resultSet.drinks[0].strDrinkThumb;

            // The below function takes the two API response Vars above, and writes them to their respetive div/img IDs on the html//

            function testOne() {
                document.getElementById("drink-name-display").textContent = drinkName;
                document.getElementById("drink-pic-display").setAttribute("src", drinkPic);
            };

            //Execution of test//

            testOne();

// END DRINK SCRIPT //

// SECTION FOOD SCRIPT //
// END FOOD SCRIPT// 


// SECTION = MOVIE SCRIPT //
// END MOVIE SCRIPT //

                                    //NEXT STEPS//
                                    //Tom to work on Movie//
                                    //Rudy to work on Food//

                                    //Other things to consider:
                                    // resizing picture//
                                    // creating elements for the results within the div //

                                        // drinkDiv.appendChild(createName);





// GLOBAL VARIABLES//

//Tom to insert Global Objects from Kate "Dummy Data"//

// GLOBAL VARIABLE//



// drink ajax//


