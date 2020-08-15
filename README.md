# Night-In-App

Now more than ever, people are spending more time at home.  As developers we want to provide users with a singular tool to make the most of their evenings spend in doors.
​
​

## Live Link to Deployed App
​
https://nrouhanizdeh.github.io/Night-In-App/
​​

## Technologies Utilized 
​
```
Generating drink suggestions API:
https://www.thecocktaildb.com
-Math random is used on lists of cocktail recipes based on the users ingredients selection to generate a random ID.  
-This ID is used in an API call to return the corresponding name and photo from the database.

Generating meal suggestions API:
https://www.themealdb.com
-Math random is used on lists of meal recipes based on the users ingredients selection to generate a random ID.  
-This ID is used in an API call to return the corresponding name and photo from the database.


Generating movie suggestions API:
https://api.themoviedb.org
-Math random is used on lists of movie titles based on the users genre selection to generate a movie from the top 300 results.  
-This ID is used in an API call to return the corresponding name and photo from the database.

```
​
## User Story
​​

AS A person who can't or won't be going out for the night
I WANT to see options for drink recipes, meal recipes and movies
SO THAT I can curate aspects of a nice evening spent indoors
```
​
## User Flow Diagram
​
```
GIVEN I am using the Night-In app to curate food, drink and entertainment for the evening
WHEN I open the Night-In app
THEN the start page is displayed
WHEN I click the start button
THEN I am presented with a list of ingredients options for what I want my DRINK to include
WHEN I select my ingredient preference
THEN a drink option will appear
WHEN I click the next button
THEN I am presented with suggested meal pairings based on my previous selection and a list of ingredients options for what I want my MEAL to include 
WHEN I select my ingredient preference
THEN a meal option will appear
WHEN I click the next button
THEN I am presented with suggested Netflix genre pairings based on and my previous selection and a list of genre options for what I want my movie to be
WHEN I select my genre preference
THEN a movie option will appear
WHEN I move on to the next step
THEN I am presented with curated advice from the experts based on my selections along with the three components of my Night-In selections
```
