# Udacity, Would You Rather...? 

Would you rather, is a game build using React, Redux, and a fake database API.

This app is build using create-react-app

# Installation 

To install the application, clone this repo to your local machine using 

`git clone https://github.com/MohamedAlaa001/Udacity-Would-You-Rather`

Once done open your preferred terminal and run the following command

### `npm install`

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build` or `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Description
The application provides you a dashboard to use once logged in and authenticated, through this dashboard we can access multiple views/pages

1) Homepage.
2) Leaderboard.
3) Create Question.

## Homepage
Main dashboard page, consist of two questions categories (Answered, Unanswered) and a filter to either toggle a single category or show both of them.

### Question View
Each question navigates to another view that shows the question details either answered or unanswered with the appropriate controls.

If the question is not answered you will be able to choose one answer from the two given.

else you will see your voted answer and statistics for votes made by other users.

## Leaderboard
A leaderboard provides ranking for all users on the website, the ranking criteria works on the total number of questions and answers a user make.

## Create Question
A view that provides a form to enter the two options for `Would you rather`.

