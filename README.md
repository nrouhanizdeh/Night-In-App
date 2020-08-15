# Night-In-App

Working Title: "Night In App"
​
​
## User Story
​
```
AS A person who can't or won't be going out for the night
I WANT to see options for drink recipes, meal recipes and movies
SO THAT I can curate aspects of a nice evening spent indoors
```

## Acceptance Criteria
```
GIVEN I am using the Night-In app to curate food, drink and entertainment for the evening
WHEN I open the Night-In app
THEN the start page is displayed
WHEN I click the start button
THEN I am presented with a list of ingredients options for what I want my DRINK to include
WHEN I save my preference and click the generate button
THEN One potential drink option will appear at a time
WHEN I find the drink I want
THEN I save my selection
WHEN I move on to the next step
THEN I am presented with a list of ingredients options for what I want my MEAL to include
WHEN I save my preference and click the generate button
THEN One potential meal option will appear at a time
WHEN I find the meal I want
THEN I save my selection
WHEN I move on to the next step
THEN I am presented with a list of Netflix genres for what I want my movie to be
WHEN I save my genre preference and click the generate button
THEN One potential movie option will appear at a time
WHEN I find the movie I want
THEN I save my selection
WHEN I move on to the next step
THEN three components of my Night-In selections are compiled and shown to me as a title, photo and link to find
```

## WIREFRAME
​
Three search boxes are on the page, will appear sequentially. 
These search boxes are each tied to an API (Food DB, Drink DB, Netfliox/VideoDB)
When the user enters a search, FIVE results are retried to a local list 
When a select is made, the user continues to the next step, until all the events are made. 
On the last page, the results will be displayed on the DOM. 
​
​
- Notes - Make Sure:
- Responsive Design
- Bulma CSS
​
​
### DIV 1 
- Endpoint: cocktailDB
- Button: [pick an alcohol, N/A option?]
- Return:[
    * name of the drink
    * picture of the drink
    ]
    
### DIV 2
- Endpoint: mealDB 
- Button: Category [Vegetarian, Seafood, Italian, etc. etc. etc. ]
- Return: [TBD
    * name of recipe
    * picture of recipe
]
​
### DIV 3
- Endpoint: Uncogs
- Button: [pick a genre]
- Return: [
    * TBD title?
    * TBD poster?
    ]
​
## User Flow Diagram:
​
User is taken through 3 steps before the night-in trifecta is complete
​
### Cocktail-
​
User chooses 1 alcohol to include in their recipe search and saved the parameter
User clicks button to show 1 recipe at a time
When the user finds a recipe they want they can save it and move on to the next section
​
### Meal-
​
User chooses 1 ngredient to include in their recipe search and saved the parameter
User clicks button to show 1 recipe at a time
When the user finds a recipe they want they can save it and move on to the next section
​
​
### Movie-
​
User chooses 1 genre to include in their movie search and saved the parameter
User clicks button to show 1 movie at a time
When the user finds a movie they want they can save it***
​
System combines the users selections to create a complete night-in itinerary.
User can choose a name for their itinerary and save it locally.
If desired user can return to home page to start the process again.
Returning to the saved section will show any/all dates previously saved.


