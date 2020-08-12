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


function startNightIn() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  }


//need the choice class
$(".drinkButton").on("click", function() {

    var drinkIds = drinks[this.innerHTML];
    var drinklength = drinkIds.length;

    var DrinkUrlID = drinkIds[Math.floor(drinklength*Math.random())];

    var drinkURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + DrinkUrlID;

    $.ajax({
        url: drinkURL,
        method: "GET"
      }).then(function(response) {
        var drinkName = response.drinks[0].strDrink;
        var drinkPic = response.drinks[0].strDrinkThumb;

        // take the two API response Vars above, and writes them to their respetive div/img IDs on the html
        $("#drink-name-display").text(drinkName);
        $("#drink-pic-display").attr("src", drinkPic);
      });
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
      });
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
      });
  });

// Tom Notes, 8/12/20, 2PM
// - Updated all "containers" to bulma-specific "box" - Autoticlly creates a rounded box with padding.
// - Updated the div boxes class FROM "hide" TO "is-hidden". ("is-hidden" is the bulma equivalent of "hide" for BootStap, so that for the Javascript, 
//       simply re-write the class to maintain the current class, besides "is-hidden")
// - Corrected incorrect questions in HTML hard code, change the verbiage be more clear
// -  Deployed bulma-specific classes of "subtitle" and "title", which change size and impact of font.
// - added "is-fluid" to div container classes to give the divs top and bottom margins
// - Deployed bulma-specific "Hero/Hero.body" classes to  - added wrapper div with a class of "hero" and changed the previous outermost dive to "hero-body", which is a design
//   element, which will keep all the content front an center, like a hero image" Essentially wraps all the body contents
// - deployed Bulmas class "has-text-centered" to center all applicable elments (texts/ and buttons) within a box
// - Wrapped up response area of each question (picture, name of drink/meal/movie, next button in divs with same class of "results")
// - created 12 landing divs for API called content 2 under each questions, and 6 under the final results. The "id" of the divs in the questions and the final results
//       match, so when you target a div in the question section, it also targets the results div.

