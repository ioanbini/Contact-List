# React Project

## App details

The application was bootstraped using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html). The application deveoped with the following  
aditional libraries :

- [React Router](https://github.com/ReactTraining/react-router) - for client-side (browser) routing
- [axios](https://github.com/axios/axios) - for HTTP requests
-  A library such as [Semantic Ui](https://react.semantic-ui.com/)
 

## Fake REST API

The only already installed dependency is the [JSON server](https://github.com/typicode/json-server) (development dependency), a "fake" REST API. This API exposes 1  resource (contacts) and you can view it on `db.json` file. 

## Run locally

You need to have node.js installed. I am using node version `12.17` and npm version `6.14.4`, but you can use any modern node/npm version you want. When you are ready, you can install all dependencies and run the development servers by typing the below commands:

```
1. in Contact-List folder run npm install 
2. in server-api folder run npm start // Runs API server in port 3006
3. npm start // Runs the create react app server in port 3000
4. open http://localhost:3000
```

Just use the components that make more sence and display the screens / data nicely.

## User stories
1. The user can add contacts and view the contacts in the contact list 
2. The user can also delete and edit a contact 
3. Finaly the user can view the  details of a specific contac is also available by clicking the desired contact in the contact list 


### Home/Add Contact page

The Home/Add Contact page contains:

1. a form that , user can add a new contact with input fields such as (name-last name, email address, telephone number and address)
2. a button to direct the user to the contacts list page



### Contacts List page

The Contacts List page contains :

1. a list with all the contacts 
2. a button to direct the user to the add contact page
3. every contact item is clickable an directs to each contact's details page 
4. two buttons one to remove the contact and one to edit the contact

### Contact Details page

The Contact Details page contains :

1. a contact card with informations
2. a button to return to contact list 


