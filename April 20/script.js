// Create an array of user objects called users
//Each user object should have an id, name, and email property.
const users = [
    {id: 1,name: "Alexa Dickinson", email: "Alexa@gmail.com"},
    {id: 2, name:"Sher Yang", email: "Sher@gmail.com"},
    {id: 3, name: "Ong Vang", email: "Ong@gmail.com"}
   ];
   
/////////////////////////////////////////////////////////////////////////////////////////////////
   
   //Implement a function called fetchUserById //accepts a user ID as an argument
   function fetchUserById(userId) {
    //return a (new) promise
    return new Promise( (resolve, reject) => {  //promise should resolve with the user object, otherwise, it should reject with an error message
     
      //simulate an asynchronous request with setTimeout
      setTimeout(()=>{
        // Find the user with the given ID in the users array
        const user = users.find(user => user.id === userId);
   
   
        // If the user is found, resolve the promise with the user object
        // Otherwise, reject the promise with an error message
        if (user) {
          resolve(user);
        } else {
          reject("User with ID "+ userId + " not found");
        }
      }, 1000); //to delay the resolution or rejection of the promise by 1 second (1000 milliseconds)
    });
   }
   
   
   //////////////////////////////////////////////////////////////////////////////////////////////
   
   
   //Use the fetchUserById function to fetch the user with ID 1.
   fetchUserById(1)
    .then(user => {
      console.log(user);//Log the user object if the promise is fulfilled
    })
    .catch(error => {
      console.log(error); //the error message if the promise is rejected.
    });
   
   

    //////////////////////////////////////////
   //chain another fetchUserById call to fetch the user with ID 2
   fetchUserById(2)
    .then(user=> {
      console.log(user);//Log the user object if the promise is fulfilled
    })
    .catch(error=> {
      console.log(error);  //the error message if the promise is rejected.
    });
   
