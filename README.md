# Big-Wine
### (Some may even say huge)
## Install Instructions
Install mongoDB if not yet installed, download MongoDB Community Edition Database server at https://mongodb.com/  

Create C:\data\db folder if not created yet 

Start MongoDB server in terminal with: mongod 

Import dataset into MongoDB with MongoDB server still running: 

mongoimport --db big-wine --collection reviews --type json --file “your directory path”/mongo_export.json 

Install node.js and npm from https://nodejs.org/en/  

Open another terminal instance and change directory to api folder: 

cd “your path”/Big-Wine/api 

Start node server: npm start 

Open another instance of terminal to server the frontend 

Cd to frontend: cd “your path”/Big_wine/frontend 

Open Angular server: ng serve 

Now you can use the web application at localhost:4200 
