# challenge-i - Search for issues on Stackoverflow.

Description: The application requires you to log in with a Google account.

After logging in, a bar is displayed where the user can perform searches on Stackoverflow.
In addition to the searches, the user can save their searches from retrieving them later. He can choose to delete previously saved searches. In the end, it executes Logout and exits the application.

## Technical Explanations.
The front end was made in React (http://localhost:3000).
The backend was made in NodeJS (http://localhost:3333).
The database used is PostgreSQL.

To install the application, you must have Docker with Docker-compose installed on the target machine.
You must clone the files from GitHub: 
    https://github.com/joseizaias/challenge-i.git
    
After cloning, in the created suff, challenge-i, run the command: Docker-compose up
At the end, 3 dockers will be running: backend, frontend and database.

Before running the application, create the database and its tables. To do this, access the backend console and in the /App folder, run the command:
   npm run typeform migration:run
  
After creating the database, the application can be accessed through the browser, using the url:
 http://localhost:3000

The project still needs additions such as:
 Conducting unit tests and
 Documentation done via Swagger.

