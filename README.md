# Night-In-App

Working Title: "Night In App"
​
​
## User Story
​
```
As a person living in the corona age, I want an app that will help me curate a date night while staying in.
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
### Modal 1 
- Endpoint: cocktailDB
- Button: [pick an alcohol, N/A option?]
- Return:[
    * name of the drink
    * picture of the drink
    ]
    
### Modal 2 -- Negin
- Endpoint: mealDB 
- Button: Category [Vegetarian, Seafood, Italian, etc. etc. etc. ]
- Return: [TBD
    * name of recipe
    * picture of recipe
]
​
### Module 3: -- Tom 
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