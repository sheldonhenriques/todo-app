# todo-app
 > A to-do app that allows users to register, and add lists of to-do items to those items. The user can also mark them as done or remove them from the database. Users can also use names or tags to search the lists.

The end goal of the project is to build the application using using good practices and understand the principles of CRUD.

## Built With:
 - EJS
 - CSS
 - JavaScript
 - TypeScript
 
## Cloning the project
```
git clone  https://github.com/sheldonhenriques/todo-app.git <Your-Build-Directory>
```

## Building Dependencies local
```
npm i
```

## Setting .env file
```
MONGO_URI='mongodb://0.0.0.0:27017/test' // used to connect to local mongoDB server
TOKEN_KEY=token secret // used to sign token to authenticate user
COOKIE_SCERET=some secret // used to sign cookies
```

## Deploy local
```
npm run start:dev
```

## Local server
```
http://localhost:3000/
```
