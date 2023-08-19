# Connections-MERN-App

[Demo Link](https://connections-mern-app-frontend-git-main-tarunsachan1996-gmailcom.vercel.app/login) <br/>

General instructions- User can use email as "test@gmail.com" and password as "12345678" to login or create new account.

 ## Server<br/>
 Features-<br/>
  1.User registration and login.
  
  2.Auth token generation on successful login and registration.
  
  3.User login Data is stored in mongoDB.
  
  4.User password are encrypted using bycryptjs to safeguard user privacy in case of unauthorized access of database.
  
  5.express-async-errors are used for status code generation for increasing code readibility.

  6.Used “CORS” make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).
  
  7.Server is hosted on render.

 ## Client-<br/>
 1.Used react router for route definition.
 
 2.User redux for app wide state management.
 
 3.Used axios for fetching and posting data.
 
 4.Used Tailwind CSS for designing website.
 
 5.Front-end hosted on Vercel.

 ## Features pending-<br/>
 1.Ability to add/edit create user profile.
 
 2.Ability to fetch and delete connections from mongoDB. current demo subscriptions stored locally are displayed.

 ## Bugs-<br/>
 1.When logging-out correct web page is not displayed. User has to add slash["/"] at the end of url and press enter.

