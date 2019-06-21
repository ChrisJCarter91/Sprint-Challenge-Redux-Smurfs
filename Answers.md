1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

map, filter, and concat

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions respond to data moving around in the application
reducers specify how an application's state changes in response to actions
store holds the state tree of an application and can be changed by dispatching an action to it. The store is known as the single source of truth because it holds the entire state tree and can be referred back to after changes.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is more broadly used across the entire app where as component state is used in a certain component such as inputs on a form. 

1.  What is middleware?

Middleware adds a point between dispatching an action and when it reaches a reducer. Used for logging in/authentication.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Allows asyncronus to show a loading state while the api call is processing and before information is returned. Adds a "thinking" state (maybe not the best word)

1.  Which `react-redux` method links up our `components` with our `redux store`?

connect