[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=Jacky16_tool-ai)](https://sonarcloud.io/summary/new_code?id=Jacky16_tool-ai)

<div style="display: flex; gap:4px; justify-content: start;">

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Jacky16_tool-ai&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Jacky16_tool-ai)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Jacky16_tool-ai&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Jacky16_tool-ai)

[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Jacky16_tool-ai&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Jacky16_tool-ai)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Jacky16_tool-ai&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Jacky16_tool-ai)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Jacky16_tool-ai&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Jacky16_tool-ai)

[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Jacky16_tool-ai&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Jacky16_tool-ai)

</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/d21cfa09-9241-4ce1-bd0d-3140c7f65435/deploy-status)](https://app.netlify.com/sites/tool-ai/deploys)

# Tool AI

This is a submission for [midu-hackaton](https://github.com/midudev/midu-cohere-hackathon)

<img 
height="500px" width="500px"
src="./public/assets/images/robot.webp" alt="Main image of a robot saying hello" style="display: flex; justify-content: center;"/>

## Table of contents

- [Demo](#demo)
- [Description](#description)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

## Demo

You can visit Tool AI Website [here](https://tool-ai.netlify.app/)

## Description

This project has been created using CD/CI with GitHub Actions and deployed with Netlify and testing every feature.

Tool AI is a web site where you can find 2 tools:

- ### Spam checker:

  Will check if a text is SPAM or HAM.
  <br/>

  <div style="display: flex; gap:18px; justify-content: center;">
    <img
    height="800px" width="800px"
    src="./public/assets/images/spam-desktop.png" alt="Spam checker desktop" style="display: flex; justify-content: center;"/>
    <img
    height="500px" 
    src="./public/assets/images/spam-mobile.png" alt="Spam checker desktop" style="display: flex; justify-content: center;"/>
  </div>

- ### Questions generator:

  Will generate questions about a programming language and if you want, you'll be able to see the answer.
  <br/>

   <div style="display: flex; gap:18px; justify-content: center;">
  <img
  height="800px" width="800px"
  src="./public/assets/images/questions-desktop.png" alt="Spam checker desktop" style="display: flex; justify-content: center;"/>
  <img
  height="500px" 
  src="./public/assets/images/questions-mobile.png" alt="Spam checker desktop" style="display: flex; justify-content: center;"/>
  </div>

## Tech Stack

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)
![redux](https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/-React%20Testing%20Library-990000?style=flat-square&logo=react&logoColor=white)
![Eslint](https://img.shields.io/badge/-Eslint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

## Installation

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
