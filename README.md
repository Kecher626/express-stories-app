# react-chat-app

# Install Dependencies

+ npm i express mongoose connect-mongo express-session express-handlebars dotenv method-override moment morgan passport passport-google-oauth20
+ npm i -D nodemon cross-env

# Run this project

+ npm run dev -> devlopment mode
+ npm run start -> production mode




# Steps of Using Google Oauth 

1. open your Browser and search -> google cloud console
2. create a project if you dont have one , and select the project (click "select project", the button near the word "Google Cloud Platform")
3. click the three-lines button on the left-top corner, and click "API & Services"
4. click the button on the top ("ENABLE APIS AND SERVICES"), and search "Google+ API" -> click on it
5. click "Activate" if it isn't, and then click "Manage"-> click "Credentials"
6. ★ click the Hyperlink ("Credentials in APIs & Services") (not the "CREATE CREDENTIALS" button)
7. ★ click the "CREATE CREDENTIALS" button in this step and click "Oauth client ID", it'll ask you to set the agreement options
8. click the button and choose the type you need (this project use "external" one) , fill the fields
9. go back to "Credentials" and click "CREATE CREDENTIALS" again
8. choose "Web application" type, and name it what you want
9. ADD URI with your apps, for this project is (http://localhost:3000/auth/google/callback) -> & click "create"
10. after that, it'll show a client ID and a secret -> add them to your env config

# linux test
