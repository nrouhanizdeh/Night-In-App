var drinks = {
    Gin : ["15300", "13940", "17222", "17834", "17223", "17225", "17226", "17228", "11013", "11014", "11022", "11034", "11052", "17066", "11054", "11055", "13938", "17180", "11084", "17254", "11120", "17242", "11124", "11149", "17210", "17185", "11224", "17174", "17186", "17250", "17187", "11320", "11005", "11326", "11338", "11339", "11368", "11379", "17197", "17248", "11396", "17255", "11403", "178314", "11407", "11408", "11410", "17230", "11415", "11416", "11417", "11418", "11419", "11420", "11433", "11472", "12706", "11566", "16178", "11634", "11662", "11664", "11666", "11002", "17256", "11720", "11728", "17189", "178315", "13192", "11003", "11870", "17190", "17249", "11936", "11938", "11959", "11991", "17208", "17245", "12055", "12057", "17114", "17233", "12107", "12214", "12760", "17824", "178330", "12402", "12418", "12420", "17218", "12450", "12474", "17194"],
    Vodka : ["14029", "15346", "17105", "178318", "16943", "15675", "14560", "12790", "17224", "16333", "15567", "14272", "15182", "15849", "14622", "16354", "17074", "17066", "13423", "13086", "12756", "15266", "14364", "14071", "16176", "11102", "11113", "178312", "11117", "11119", "17120", "16998", "14730", "12796", "17174", "11243", "14133", "17181", "17212", "13202", "14688", "17213", "17002", "11422", "11424", "17252", "11462", "13539", "16987", "17015", "14956", "16178", "11600", "13190", "14446", "17204", "11002", "13196", "11009", "13192", "15330", "16995", "13499", "178323", "13535", "16992", "13072", "16984", "17214", "15184", "13625", "12162", "13377", "12754", "16273", "17218", "12452", "12460", "16967", "14167", "15403", "12528", "16942", "16963"],
    Scotch : ["17840", "11060", "11121", "178311", "11324", "11369", "11423", "11476", "12820", "11658", "12101", "12138", "12158", "12388", "12518"],
    Tequila : ["15423", "15300", "16333", "16100", "16289", "11112", "11118", "13068", "17174", "16991", "17204", "11007", "16196", "17253", "178327", "16984", "12322", "12362", "178307", "12370", "13621", "14602", "17216", "17217", "16158"],
    Rum : ["16333", "17229", "14364", "17267", "17209", "17268", "178331", "178329", "178309", "178328", "17201", "15825", "13192", "16995", "16984", "12071", "14978", "12097", "178322", "14065", "17241"],
    Bourbon :  ["11021", "11147", "16447", "16987", "11580", "11602", "11604", "11008", "11766", "17206", "11786", "11001"],
    Non_Alcoholic :  ["12560", "12562", "12862", "15106", "12710", "12564", "12708", "12654", "12656", "12658", "12572", "12730", "12732", "12734", "17108", "12890", "12736", "12668", "12768", "12670", "12672", "12674", "12712", "12954", "12738", "12770", "17176", "12688", "12720", "12714", "12690", "12698", "12696", "12692", "12694", "12702", "12704", "12716", "12774", "12776", "12744", "12746", "12748", "12618", "12718", "15092", "12630", "12750", "13032", "12780", "13036", "12722", "12724", "12782", "12784", "12786", "12726", "12728"]
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
                "Science Fiction": 878,
                "TV Movie": 10770,
                "Thriller": 53,
                "War": 10752,
                "Western": 37
              }

var startButtonEl = document.getElementById("start");
var drinkDivEl = document.getElementById("drink-questions");
var foodDivEl = document.getElementById("food-questions");
var movieDivEl = document.getElementById("movie-questions");
var endDivEl = document.getElementById("end-screen");
var drinkNextBtn = document.getElementById("drink-next");
var foodNextBtn = document.getElementById("food-next");
var movieNextBtn = document.getElementById("movie-next");
var drinkIconEl = document.getElementById("drinkIcon");
var foodIconEl = document.getElementById("foodIcon");
var movieIconEl = document.getElementById("movieIcon");

function startNightIn() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  }

//Start button
$("#start").on("click", function(){
  drinkDivEl.setAttribute("class", "box is-fluid fade-in");
  startButtonEl.setAttribute("class","button is-medium is-danger is-inverted")
  //startButtonEl.innerHTML("Night In planning in progress");
});


//need the choice class
$(".drinkButton").on("click", function() {

    var drinkIds = drinks[this.innerHTML];
    var drinklength = drinkIds.length;

    var DrinkUrlID = drinkIds[Math.floor(drinklength*Math.random())];

    var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + DrinkUrlID;

    //localStorage.setItem("drinkType", JSON.stringify(this.id));

        //var drinkType = JSON.parse(localStorage.getItem("drinkType"));
        var drinkType=this.id;

        if (drinkType==="butGin"){
            $("#pairings").text("Seafood & Vegetarian");
        }
        if(drinkType==="butVodka"){
            $("#pairings").text("Pork & Beef");
        }
        if (drinkType==="butTequila"){
            $("#pairings").text("Seafood, Pork, Beef & Vegetarian");
        }
        if (drinkType==="butRum"){
            $("#pairings").text("Beef, Chicken, Vegetarian, Seafood & Pork")
        }
        if (drinkType==="butBourbon"){
            $("#pairings").text("Steak, Pork & Pasta");
        }
        if(drinkType==="butNon-alcoholic"){
            $("#pairings").text("The world is your oyster!");
        }

        $("#sugg").text("Based on your drink selection, we suggest the following meal pairings:");


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

    var mealIds = meals[this.innerHTML];
    var meallength = mealIds.length;

    var mealUrlID = mealIds[Math.floor(meallength*Math.random())];

    var mealURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealUrlID;

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

  //Reveal the movieNext button
  movieNextBtn.setAttribute("class", "nextButton button is-danger is-medium fade-in");

  });

//Movie next button
$("#movie-next").click(function(){
  drinkDivEl.setAttribute("class", "box is-fluid fade-in");
  foodDivEl.setAttribute("class", "box is-fluid fade-in");
  movieIconEl.setAttribute("class","fas fa-check-circle fa-lg");
  endDivEl.setAttribute("class", "box is-fluid fade-in");



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




