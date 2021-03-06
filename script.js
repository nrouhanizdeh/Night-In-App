var drinks = {
    Gin : ["15300", "13940", "17222", "17834", "17223", "17225", "17226", "17228", "11013", "11014", "11022", "11034", "11052", "17066", "11054", "11055", "13938", "17180", "11084", "17254", "11120", "17242", "11124", "11149", "17210", "17185", "11224", "17174", "17186", "17250", "17187", "11320", "11005", "11326", "11338", "11339", "11368", "11379", "17197", "17248", "11396", "17255", "11403", "178314", "11407", "11408", "11410", "17230", "11415", "11416", "11417", "11418", "11419", "11420", "11433", "11472", "12706", "11566", "16178", "11634", "11662", "11664", "11666", "11002", "17256", "11720", "11728", "17189", "178315", "13192", "11003", "11870", "17190", "17249", "11936", "11938", "11959", "11991", "17208", "17245", "12055", "12057", "17114", "17233", "12107", "12214", "12760", "17824", "178330", "12402", "12418", "12420", "17218", "12450", "12474", "17194"],
    Vodka : ["14029", "15346", "17105", "178318", "16943", "15675", "14560", "12790", "17224", "16333", "15567", "14272", "15182", "15849", "14622", "16354", "17074", "17066", "13423", "13086", "12756", "15266", "14364", "14071", "16176", "11102", "11113", "178312", "11117", "11119", "17120", "16998", "14730", "12796", "17174", "11243", "14133", "17181", "17212", "13202", "14688", "17213", "17002", "11422", "11424", "17252", "11462", "13539", "16987", "17015", "14956", "16178", "11600", "13190", "14446", "17204", "11002", "13196", "11009", "13192", "15330", "16995", "13499", "178323", "13535", "16992", "13072", "16984", "17214", "15184", "13625", "12162", "13377", "12754", "16273", "17218", "12452", "12460", "16967", "14167", "15403", "12528", "16942", "16963"],
    Scotch : ["17840", "11060", "11121", "178311", "11324", "11369", "11423", "11476", "12820", "11658", "12101", "12138", "12158", "12388", "12518"],
    Tequila : ["15423", "15300", "16333", "16100", "16289", "11112", "11118", "13068", "17174", "16991", "17204", "11007", "16196", "17253", "178327", "16984", "12322", "12362", "178307", "12370", "13621", "14602", "17216", "17217", "16158"],
    Rum : ["16333", "17229", "14364", "17267", "17209", "17268", "178331", "178329", "178309", "178328", "17201", "15825", "13192", "16995", "16984", "12071", "14978", "12097", "178322", "14065", "17241"],
    Bourbon :  ["11021", "11147", "16447", "16987", "11580", "11602", "11604", "11008", "11766", "17206", "11786", "11001"],
    "Non-Alcoholic" :  ["12560", "12562", "12862", "15106", "12710", "12564", "12708", "12654", "12656", "12658", "12572", "12730", "12732", "12734", "17108", "12890", "12736", "12668", "12768", "12670", "12672", "12674", "12712", "12954", "12738", "12770", "17176", "12688", "12720", "12714", "12690", "12698", "12696", "12692", "12694", "12702", "12704", "12716", "12774", "12776", "12744", "12746", "12748", "12618", "12718", "15092", "12630", "12750", "13032", "12780", "13036", "12722", "12724", "12782", "12784", "12786", "12726", "12728"]
}

var meals = {
    Beef : ["52874", "52878", "52997", "52904", "52812", "52873", "52952", "52834", "52824", "52803", "53013", "52979", "52826", "52998", "53021", "52781", "52938", "52947", "52827", "52876", "52927", "53006", "52943", "53017", "52930", "52941", "52992", "52770", "52881", "52935", "52950", "53000"],
    Chicken : ["52940", "53016", "52846", "52796", "52934", "52956", "52850", "52765", "52818", "52875", "52795", "52831", "52920", "52879", "53011", "52832", "52830", "52996", "52951", "52993", "52937", "52820", "52813", "52945", "52851", "52774", "52780", "52933", "53020", "52806", "52772", "52814"],
    Pork : ["52885", "52995", "53018", "52999", "52954", "52847", "52994", "52980", "52949", "52822", "52926", "52828", "52948"],
    Seafood : ["52959", "52819", "52944", "52802", "52918", "52764", "52773", "52887", "52946", "52821", "52777", "52809", "52960", "52823", "52936", "52836", "52953", "53023", "52882", "52975", "52852"],
    Pasta :  ["52839", "52835", "52829", "52987", "52844", "52837", "52982", "52838"],
    Vegetarian : ["52807", "52870", "52785", "52955", "52906", "53012", "52971", "52868", "52973", "52865", "52864", "52921", "52908", "52811", "52816", "52963", "52784", "52872", "52771", "52797", "52849", "52866", "52817", "52911", "52869", "52863", "52867", "52871"],
    Vegan : ["52942", "52794", "52775"]
}

var genres = { 	"Action": 28,
                "Adventure": 12,
                "Animation": 16,
                "Comedy": 35,                
                "Crime": 80,
                "Documentary": 99,
                "Drama": 18,
                "Family": 10751,
                "Fantasy": 14,
                "History": 36,
                "Horror": 27,
                "Music": 10402,
                "Mystery": 9648,
                "Romance": 10749,
                "Sci-Fi": 878,
                "TV Movie": 10770,
                "Thriller": 53,
                "War": 10752,
                "Western": 37
              }
              
var drinkstwo = {
  Gin : ["we feel only snobs drink gin on Dinner and a Movie night", "one of our uncles drank gin once and now he's on a reality TV show (It's actually really sad)", "the transcendent jam ''Bathtub Gin'' by the band Phish changed my life. Twice", "gin goes down smooth on nights like these. Ow. Ow"],
  Vodka : ["when you reach a certain point, you can't even really taste the vodka", "vodka is the national drink of Russia and our office Christmas Party", "some say the Polish secretly make the best vodka, but we're only saying that because we like pieroghis", " you know what they say: a vodka a day is.... actually kind of gross", "it's not the vodka that gets you. It's going too far with the mixers"],
  Scotch : ["after about four fingers of Scotch, the thick Scottish accent just melts away", "a nice Scotch pairs nicely with the exceedingly frustrating game of golf", "don't confuse this kind of scotch with the tape. Two totally different things", "our granfathers used to say ''Scotch will put hair on your chest''. Funny, they only said that to their grandsons, and not their granddaughters"],
  Tequila : ["you are the one who decided tequila was a good idea. Don't look at me", "tequila is known to make people very ''tired''. Ya, let's go with ''tired''", "tequila can not- WE REPEAT: CANNOT- be trusted", " my friend. Try not to drink as many tequilas as last time. People still talk about that night. It was crazy"],
  Rum : ["Captain Jack Sparrow drinks rum and we all know what that guy is about", "we don't want your mother to know you drink rum", "this isn't Cancun, so easy on the rum. And tacos", "rum can make you want to go to the beach and feel like a freakin' pirate"],
  Bourbon : ["bourbon is Ronye's drink of choice, and that guy is a stickler", "bourbon was the only thing that helped get us college (just the first semester of Junior year)", "bourbon makes the night a wild one and the next morning abrupt", "we never met a bourbon-drinker we didn't like. Except, like, all of our friends"],
  "Non-Alcoholic" : ["sometimes a little booze makes bad movies better", "drinking too much water is.. actually a good thing", "actually don't be careful, you made a health drink choice", "not drinking can make things boring"],
                }
                                                        
var mealstwo = {
  Beef : ["we've been looking and we can't seem to find it, so we'll ask you: Where's the beef", "cow meat is recommended by 9 of out 10 dentists", "we took a poll and we could eat beef all day", "an aggresive night of beef puts me in the deepest of food comas"],
  Chicken : ["chicken is a totally main food group", "the chicken you're eating and was a close friend of ours", "we haven't had chicken this good since the Lincoln Administration. It's hard to come by around our office", "it's certainly no BW3's, but it will do"],
  Pork : ["we are not sure what part of the pig this is from", "we caught this pig down the street a couple years ago", "pork was the first meal on the moon", "my family eats a whole pig a week"],
  Seafood : ["seafood is always a little dicey at this place", "we're not sure which ocean this came from", "the last time we had seafood, we all had to be rushed to the hospial", "this seafood smells super funky"],
  Pasta : ["we've always wanted ''real'' pasta, but we are not sure this qualifies", "We gave it some thought, and we don't think this pasta is fresh", "We came here for kick names and take pasta.. or.. ya know.. something like that", "we saw the chef pick this pasta up off the floor and put it right back on the plate"],
  Vegetarian : ["we can't say for sure these vegetables have been identified yet", "eating only vegetables will give you the craziest runs. Hydrate", "these vegetables were like, totally, hydronically grown, man. So crunchy", "we didn't want to say anything til now, but we spotted some mold on the veggies just before your started eating them. Too late now"],
  Vegan : ["this food smells like tree bark", "we don't know how our body will react to vegan, but we've heard the war stories", "scientists aren't sure what ''vegan'' even mean really", "going vegan is no longer hip, you are just feeding a tied trend"],
  }
                                                        
var movietwo = {
  Action : ["some totally awesome action. YES!", "an action packed movie with limited acting skills", "some awesome set pieces and some God-awful acting", "another in-your-face flick where the rugged hero saves the day in the end (and gets the girl)"],
  Adventure : ["'..an adventure!!!' - Frodo Baggins, c. Middle Earth 1219", "us getting a little upset we were invited cause this is a great adventure flick", "an mildly-epic adventure", "a timeless classic the whole family can enjoy. Or just play with their phones the whole time"],
  Comedy : ["a laugh-out-loud romp though a low budget disaterpiece", "some mediocre jokes, lazy script and dimwit leads", "the same comedy all over again. And again", "a comedy that should have never been made"],
  Drama : ["us crying like a baby, cause this hits us right in the feels", "a dramatic experience that you will forget 20 minutes after the credits roll", "a cheesy drama where nobody wins and everyone loses", "''Drama'', ''Drama'', ''Drama''"],
  Horror : ["that jumpscare moment where you sh*t your pants", "a terrifying experience", "a masterclass in horror", "a movie that should have been made as a sequal to Scream"],
  Romance : ["some soppy schlock starring a bunch of C-listers who are on their second stint of rehab", "a completely shocking conclusion: they end up together. 'Wow'", "another souless, depthless cringe-fest that you'll regret watching", "us crying like a baby because WE FREAKING LOVE THIS MOVIE"],
  "Sci-Fi" : ["a trip to space", "that far-out feeling", "a movie that will one day go down as the greatest science fiction film (of the month it was released)", "an awesome cameo by Obi-Wan-Kenobi"],
  }
              
              var leadcomment = ["Be careful, ", "We hate to break it to you but, ", "At first we were not sure where you were going with this but, ", "Wow, ", "We hope you are sitting down because, "];
              var secondcomment =[". Hopefully you like your drink choice, since ", ". You might want to pour yourself another because ", ". You are off to a pretty good start, but don't forget "];
              var thirdcomment = [". What a great drink and dinner pairing", ". The food should be good, but I hear the service is pretty awful", ". We don't expect you to be able to finish the whole plate", ". At this point, you are probably wishing you ordered take out"];

var startButtonEl = document.getElementById("start");

var drinkDivEl = document.getElementById("drink-questions");
var foodDivEl = document.getElementById("food-questions");
var movieDivEl = document.getElementById("movie-questions");
var endDivEl = document.getElementById("end-screen");

var drinkQuestionDivEl = document.getElementById("drink-question-title");
var foodQuestionDivEl = document.getElementById("food-question-title");
var movieQuestionDivEl = document.getElementById("movie-question-title");

var drinkChoicesDivEl = document.getElementById("drink-choices");
var foodChoicesDivEl = document.getElementById("food-choices");
var movieChoicesDivEl = document.getElementById("movie-choices");

var drinkResultsDivEl = document.getElementById("drink-results");
var foodResultsDivEl = document.getElementById("food-results");
var movieResultsDivEl = document.getElementById("movie-results");

var drinkNextBtn = document.getElementById("drink-next");
var foodNextBtn = document.getElementById("food-next");
var movieNextBtn = document.getElementById("movie-next");

var drinkIconEl = document.getElementById("drinkIcon");
var foodIconEl = document.getElementById("foodIcon");
var movieIconEl = document.getElementById("movieIcon");

var beefBtn = document.getElementById("butBeef");
var chickenBtn = document.getElementById("butChicken");
var porkBtn = document.getElementById("butPork");
var seafoodBtn = document.getElementById("butSeadfood");
var pastaBtn = document.getElementById("butPasta");
var vegetarianBtn = document.getElementById("butVegetarian");
var veganBtn = document.getElementById("butVegan");

var foodSuggestion = document.getElementById("sugg");
var movieSuggestion = document.getElementById("suggestions");


function startNightIn() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  }

//Start button
$("#start").on("click", function(){
  $("#start-screen").hide();
  drinkDivEl.setAttribute("class", "box is-fluid fade-in");
  startButtonEl.setAttribute("class","button is-medium is-danger is-inverted fade-out")
});


//need the choice class
$(".drinkButton").on("click", function() {

    var drinkTags = drinkstwo[this.innerHTML];
    var drinkTagsLength = drinkTags.length;
    var leadcommentLength = leadcomment.length;
    var secondcommentLength = secondcomment.length;
    var thirdcommentLength = thirdcomment.length;
    var tagWinner = drinkTags[Math.floor(drinkTagsLength*Math.random())];
    var commentWinner = leadcomment[Math.floor(leadcommentLength*Math.random())];
    var comment2Winner = secondcomment[Math.floor(secondcommentLength*Math.random())];
    var comment3Winner = thirdcomment[Math.floor(thirdcommentLength*Math.random())];
    var tagWinnerText = document.createTextNode(tagWinner);
    document.getElementById("drink-comment").innerHTML = tagWinner
    document.getElementById("lead-comment").innerHTML = commentWinner;
    document.getElementById("second-comment").innerHTML = comment2Winner;
    document.getElementById("third-comment").innerHTML = comment3Winner;


    var drinkIds = drinks[this.innerHTML];
    var drinklength = drinkIds.length;

    var DrinkUrlID = drinkIds[Math.floor(drinklength*Math.random())];

    var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + DrinkUrlID;

        // meal pairing
        var drinkType=this.id;

        if (drinkType==="butGin"){
          $("#butBeef").attr("class","foodButton button is-success is-outlined");
          $("#butVegetarian").attr("class","foodButton button is-success is-outlined");
        }
        if(drinkType==="butVodka"){
            $("#butPork").attr("class","foodButton button is-success is-outlined");
            $("#butBeef").attr("class","foodButton button is-success is-outlined");
        }
        if(drinkType==="butScotch"){
          $("#butVegetarian").attr("class","foodButton button is-success is-outlined");
          $("#butBeef").attr("class","foodButton button is-success is-outlined");
      }
        if (drinkType==="butTequila"){
            $("#butSeadfood").attr("class","foodButton button is-success is-outlined");
            $("#butBeef").attr("class","foodButton button is-success is-outlined");
            $("#butPork").attr("class","foodButton button is-success is-outlined");
            $("#butVegetarian").attr("class","foodButton button is-success is-outlined");
            $("#butVegan").attr("class","foodButton button is-success is-outlined");
        }
        if (drinkType==="butRum"){
            $("#butSeadfood").attr("class","foodButton button is-success is-outlined");
            $("#butBeef").attr("class","foodButton button is-success is-outlined");
            $("#butPork").attr("class","foodButton button is-success is-outlined");
            $("#butVegetarian").attr("class","foodButton button is-success is-outlined");
            $("#butChicken").attr("class","foodButton button is-success is-outlined");
        }
        if (drinkType==="butBourbon"){
            $("#butSteak").attr("class","foodButton button is-success is-outlined");
            $("#butPork").attr("class","foodButton button is-success is-outlined");
            $("#butPasta").attr("class","foodButton button is-success is-outlined");
        }
        if(drinkType==="butNon-alcoholic"){
            $("#butSeadfood").attr("class","foodButton button is-success is-outlined");
            $("#butSteak").attr("class","foodButton button is-success is-outlined");
            $("#butVegetarian").attr("class","foodButton button is-success is-outlined");
            $("#butVegan").attr("class","foodButton button is-success is-outlined");
        }

        $("#sugg").text("Based on your drink selection, our meal recommendation is in green.");

    $.ajax({
        url: drinkURL,
        method: "GET"
      }).then(function(response) {
        var drinkName = response.drinks[0].strDrink;
        var drinkPic = response.drinks[0].strDrinkThumb;

        // take the two API response Vars above, and writes them to their respetive div/img IDs on the html
        $("#drink-name-display").text(drinkName);
        $("#drink-pic-display").attr("src", drinkPic);
        $("#final-drink-name-display").text(drinkName);
        $("#final-drink-pic-display").attr("src", drinkPic);
      });

  //Hide the drinkQuestion and drinkChoices
  drinkQuestionDivEl.setAttribute("class", "is-hidden fade-out");
  drinkChoicesDivEl.setAttribute("class", "choices btn-group is-hidden");
  
  //Reveal the drinkNext button
  drinkResultsDivEl.setAttribute("class", "is-clearfix")
  //Reveal the drinkNext button
  drinkNextBtn.setAttribute("class", "nextButton button is-danger is-medium fade-in");
  });

//Drink next button
$("#drink-next").click(function(){
  foodDivEl.setAttribute("class", "box is-fluid fade-in");
  drinkDivEl.setAttribute("class", "box is-fluid fade-out");
  drinkIconEl.setAttribute("class", "fas fa-check-circle fa-lg");
});

$(".foodButton").on("click", function() {

  var mealTags = mealstwo[this.innerHTML];
  var mealTagsLength = mealTags.length;
  var tagWinner = mealTags[Math.floor(mealTagsLength*Math.random())];
  var tagWinnerText = document.createTextNode(tagWinner);
  document.getElementById("meal-comment").innerHTML = tagWinner

    var mealIds = meals[this.innerHTML];
    var meallength = mealIds.length;

    var mealUrlID = mealIds[Math.floor(meallength*Math.random())];

    var mealURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealUrlID;

    var mealType=this.id;

    if (mealType==="butBeef"){
      $("#butAction").attr("class","foodButton button is-success is-outlined");
    }
    if (mealType==="butChicken"){
        $("#butComedy").attr("class","foodButton button is-success is-outlined");
    }
    if (mealType==="butPork"){
        $("#butHorror").attr("class","foodButton button is-success is-outlined");
    }
    if (mealType==="butSeadfood"){
        $("#butScifi").attr("class","foodButton button is-success is-outlined");
    }
    if (mealType==="butPasta"){
        $("#butDrama").attr("class","foodButton button is-success is-outlined");
    }
    if(mealType==="butVegetarian"){
        $("#butRomance").attr("class","foodButton button is-success is-outlined");
    }

    if(mealType==="butVegan"){
      $("#butAdventure").attr("class","foodButton button is-success is-outlined");
  }

    $("#suggestions").text("Based on your drink & meal selections, our movie recommendation is in green.");

    $.ajax({
        url: mealURL,
        method: "GET"
      }).then(function(response) {
        var mealName = response.meals[0].strMeal;
        var mealPic = response.meals[0].strMealThumb;

        // take the two API response Vars above, and writes them to their respetive div/img IDs on the html
        $("#meal-name-display").text(mealName);
        $("#meal-pic-display").attr("src", mealPic);
        $("#final-meal-name-display").text(mealName);
        $("#final-meal-pic-display").attr("src", mealPic);        
      });

  //Hide the foodQuestion, foodChoices & foodSuggestionPrompt
  foodQuestionDivEl.setAttribute("class", "is-hidden");
  foodChoicesDivEl.setAttribute("class", "choices btn-group is-hidden");
  foodSuggestion.setAttribute("class", "is-hidden");

  foodResultsDivEl.setAttribute("class", "is-clearfix")
  //Reveal the foodNext button
  foodNextBtn.setAttribute("class", "nextButton button is-danger is-medium fade-in");
  });

//Food next
$("#food-next").click(function(){
  foodDivEl.setAttribute("class", "box is-fluid fade-out");
  movieDivEl.setAttribute("class", "box is-fluid fade-in");
  foodIconEl.setAttribute("class","fas fa-check-circle fa-lg");
});


  $(".movieButton").on("click", function() {

    var movieTags = movietwo[this.innerHTML];
    var movieTagsLength = movieTags.length;
    var tagWinner = movieTags[Math.floor(movieTagsLength*Math.random())];
    var tagWinnerText = document.createTextNode(tagWinner);
    document.getElementById("movie-comment").innerHTML = tagWinner

    var genresId = genres[this.innerHTML];
    // tmdb api returns 500 pages. we pick a random number from 0-300 (to be safe) and use as page number in the URL
    var page = Math.floor(300*Math.random());
    

    var movieURL = "https://api.themoviedb.org/3/discover/movie?api_key=d8e6c98ad73b8b0e9199ddfe05994eb9&language=en-US&sort_by=popularity.desc&with_genres=" + genresId + "&page=" + page;
    var posterBaseUrl = "https://image.tmdb.org/t/p/w500"
    $.ajax({
        url: movieURL,
        method: "GET"
      }).then(function(response) {
        var movieName = response.results[0].original_title;
        var moviePic = posterBaseUrl + response.results[0].poster_path;

        // take the two API response Vars above, and writes them to their respetive div/img IDs on the html
        $("#movie-name-display").text(movieName);
        $("#movie-pic-display").attr("src", moviePic);
        $("#final-movie-name-display").text(movieName);
        $("#final-movie-pic-display").attr("src", moviePic);
      });

  //Hide the movieQuestion and movieChoices
  movieQuestionDivEl.setAttribute("class", "is-hidden");
  movieChoicesDivEl.setAttribute("class", "choices btn-group is-hidden");

  movieSuggestion.setAttribute("class", "is-hidden");
  movieResultsDivEl.setAttribute("class", "is-clearfix")
  //Reveal the movieNext button
  movieNextBtn.setAttribute("class", "nextButton button is-danger is-medium fade-in");

  });

//Movie next button
$("#movie-next").click(function(){
  movieDivEl.setAttribute("class", "box is-fluid fade-out");
  movieIconEl.setAttribute("class","fas fa-check-circle fa-lg");
  endDivEl.setAttribute("class", "box is-fluid fade-in");
  $("#drink-div-container").hide();
  $("#food-div-container").hide();
  $("#movie-div-container").hide();
});

$("#end-next").click(function(){
  location.reload();
});
// be careful

var ginComments = ["only snobs drink gin", "my uncle drank gin once and now he's a better person", "the song Bathtub Gin by Phish changed my life", "gin goes down smooth"];
var vodkaComments = ["you can't even really taste vodka", "vodka is the national drink of Russia", "some say the Polish secretly make good vodka", " you know what they say: a vodka a day is gross", "vodka takes no prisoners"];
var scotchComments = ["you can barely understand the Scottish", "scotch pairs nicely with golf", "don't confuse this kind of scotch with the tape", "scotch will put hair on your chest, (if you are a man)"];
var tequilaComments = ["you are the one who decided tequila was a good idea", "tequila is known to make people very tired. Ya, let's go with tired", "tequila can not be trusted", "try not to drink as many tequilas as last time"];
var rumComments = ["Captain Jack Sparrow drinks rum and he's in bad shape", "does your mother know you drink rum", "this isn't Cancun, so easy on the rum", "rum can make you want to go to the beach"];
var bourbonComments = ["bouron will straight-up CHANGE you", "bourbon was the only thing that helped me finish college", "bourbon makes the night a wild one", "I never met a bourbon-drinker I didn't like"];
var ginComments = [""] ["sometimes a little booze makes bad movies better", "drinking too much water is.. actually a good thing", "actually don't be careful, you made a health drink choice", "not drinking can make things boring"];

// Hopefully you like what you're drinking because,

var beefComments = ["where's the beef", "cow meat is always gets me going", "I could eat beef all day", "beef puts me in a food coma"];
var chickenComments = ["chicken is a main food group", "the chicken you're eating and I were close friends", "I haven't had chicken for dinner since the Lincoln Administration", "it's certainly no BW3's"];
var porkComments = ["we are not sure what part of the pig this is from", "we caught this pig down the street a couple years ago", "pork was the first meal on the moon", "my family eats a whole pig a week"];
var seafoodComments = ["seafood is always a little dicey at this place", "we're not sure which ocean this came from", "the last time I had seafood, I had to be rushed to the hospial", "this seafood smells super funky"];
var pastaComments = ["I've always wanted real pasta", "I don't think this pasta is fresh", "I came here for kick name and take pasta.. er.. something like that", "I saw the chef pick this pasta up off the floor"];
var vegetarianComments = ["these vegetables haven't been identified yet", "eating only vegetables will give you the runs", "these vegetables were hydronically grown, bro", "I thought I spotted some mold on the veggies"];
var veganComments = ["this food smells like bark", "I don't know how my body will react to vegan", "scientists aren't sure what vegan even mean really", "going vegan is no longer hip"];

// Get ready for

var actionComments = ["some totally awesome action. YES!", "an action packed movie", "some awesome set pieces and bad acting", "another in your face flick"];
var adventureComments = ["an adventure (like Frodo)", "me getting really excited over here", "an epic adventure", "a timeless classic the whole family can enjoy"];
var comedyComments = ["a laugh-out-loud romp", "some mediocre jokes and lazy script", "the same comedy all over again", "a comedy that should have never been made"];
var dramaComments = ["me crying like a baby", "a dramatic experience", "a cheesy drama where nobody wins", "drama, drama, drama"];
var horrorComments = ["that jumpscare moment where you sh*t your pants", "a terrifying experience", "a masterclass in horror", "a movie that should have been made as a sequal to Scream"];
var romanceComments = ["some soppy schlock starring a bunch of C-listers", "a completely shocking conclusion: they end up together", "another souless, depthless cringe-fest", "me crying like a baby because I love this movie"];
var scifiComments = ["a trip to space", "that far-out feeling", "a movie that will one day go down as the greatest science fiction film of the month it was released", "an awesome cameo by Obi-Wan-Kenobi"];




