# Todo List Using Meteor ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

It's a todos application using Meteor framework (Javascript framework working with client and server side with Node.js)

## Installation

### Requirements
* NPM (v6.4.1)
* Meteor (v1.8)

`$ npm install meteor`

## Packges Used

* alexwine:bootstrap-4  (Adds Bootstrap 4)
* fortawesome:fontawesome  (Adds Fontawesome)
* accounts-base  (Meteor packege for creating users)
* accounts-password  (Meteor packege for signing in using passwords)
* meteortoys:allthings (Meteor packege for developement use to modify MongoDB or Sessions)
* natestrauser:animate-css (Animation liberary with css)
* themeteorchef:bert (Notification liverary)

## Features

* The design have a valid/semantic HTML5.
* Responsive design.
* Can toggle a task reactive.
* Less and Bootstrap 4 is used.
* Animate.css is used.
* Adding new tasks use Meteor.Method(), validate data from client side.
* User can see his To-Dos only.
* User can rearrange his todos.

## Directory Build

![alt text](https://image.ibb.co/cTtgwV/Screenshot-2018-10-29-13-01-32.png)

* client: the main folder for client-side execution main.html is the main layout component folder saves all of the main.html components and js folder contains components functionality.
* lib: contains collections for MongoDB and Meteor.methods for data insert and update and router.js is optional which not contains any routes right now.

## Production
Please make sure to remove `insecure` and `meteortoys:allthings` packages before production deployment.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.