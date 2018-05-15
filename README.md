To quickly see what the application is just run the .jar in a command line "java -jar HELLOSPORT-APPLICATION.jar"
Wait for the app to start (once no more lines are being spit out) and navigate to localhost:8080 in browser.
User/Password for a test user is jeppe/taikaviitta.
User/Password for an admin user is admin/test.


To get the backend available you need to import the project as a MAVEN project (import the pom.xml) into your IDE of choice. (intellij was used to make this)

Then configure the IDE to run "spring-boot:run" on run and the server as it is should start. 
After the server has finished starting you can view the site in localhost:8080.


To modify the frontend, navigate to the frontend/liikunta folder, you will see that its created with React.
Enter npm install to install node_modules
Enter npm start to start the react frontend in localhost:4000 (this can be used to quickly modify/test the frontend)
Enter npm run build to build the project for serving
To have the built frontend start when starting the backend you will need to copy/paste the contents of the build folder in frontend/liikunta 
into src/main/resources/public and make sure to remove any old ones before. The login.html is not a part of the react frontend.


The project can also be found at https://github.com/JSinisalo/hellosport-liikuntasovellus if for some reason the contents of this .zip wont work. (try devel or master branch)



Things that you should attempt to do:

HAKA/TAMK login and user profiles instead of the placeholder ones right now
If the site gets many posts they will just be a gigantic list so maybe have pages instead of a page
Some way to mark posts that have been "fulfilled" maybe gray them out or just delete them
Users can delete and modify their own posts/comments
User gets notifications of new posts or something
Users can view other users profiles
Contact the client every week and dont lose your scrummaster half way and do nothing for the rest of the time

-Find a way to make people excercise 


Have fun t. previous HelloSport team
