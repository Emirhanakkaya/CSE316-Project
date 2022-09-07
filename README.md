Read the Project Specfications [here](https://docs.google.com/document/d/1zZjNk9cbNLz0mp_-YtyZxhMzUph97fVgCkSE4u2k5EA/edit?usp=sharing).

Add design docs in *images/*

## Instructions to setup and run project
I used mongodb for the final project so it is relatively easy to start the project on both the front and back ends. To start mongodb on my local machine (MAC-OS) I have to run this command: “mongod --dbpath=/Users/emirhanakkaya/data/db”. Please know that this is for my computer so your command may be different in order to get mongodb started. Also note that you may not have to run this command, this may be an issue with just my local machine. 

If you wish, you may do the following to have a default first user with a reputation of 100, BUT THIS IS NOT NEEDED:
=== START (not needed) === After running the above command (if needed), run this command to populate your mongo database after you are located inside of the server directory: “node populate_db.js mongodb://127.0.0.1:27017/fake_so” -> Running this command creates a custom base user named “Satoshi” with email “satoshi@bitcoin.edu” and password “btc”. My final project does this so that after running the above command the webpage will automatically have one user who has asked two questions and answered five of his own questions. This user also has a base reputation of “100” so he is allowed to vote in the beginning, unless of course his reputation falls below 100. === END (not needed) ===


After this, start the server by first moving into the server directory and then running “nodemon server.js” and finally after this start a new terminal and enter the client directory, and start the client using this command “npm start”

If you have any questions about the project please email me at: emirhan.akkaya@stonybrook.edu 

Thank you 😃 

## Design Patterns
One design pattern that I heavily implemented in my final project is the singleton pattern. The singleton pattern states that a single object is required to co-ordinate across the entire system. In my codebase the system restricts the instantiation of the “FakeStackOverflow.js” file to only place, which is the index.js file. There is no other way to call the FakeStackOverFlow component. Within the FakeStackOverFlow.js component there is a constructor where the state is defined and in this state I store where the pattern and important information is stored. Also the object that I used for my code was in the constructor of FakeStackOverFlow.js. In the constructor I created a state variable that stored all of the important information for my dynamic web page to correctly work.

Another pattern that I also implemented is the Observer Pattern. In my code there is an element within the state called “pageNumber.” This pageNumber defines, for my entire component, what will and will not be able to be displayed to the user. For example, my observer in my code will display the answers for a particular question if the question link was clicked, or it will display the profile page of my current logged in user if I click on the name of the user that is currently logged in. To implement this design pattern I had to carefully engineer my code in such a way where I had “<Button>’s” defined in multiple components and the onclick’s for these buttons were set up so that it would call a helper function that would change the current page number and in return would change the current display to the user. These functions are visible all throughout my “fakestackoverflow.js” file. 


## Miscellaneous
In the beginning, when first starting the server and client, you have to register a new user and then login with the same user credentials. If you do not sign up with the same credentials a proper error message will appear.

Also, if you are going to restart the server and re-run everything, ensure that you are logging out before terminating the server and restarting it.
