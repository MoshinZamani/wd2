# Web Design 2 Project

Climbing Gear Web Application<br />
This application has been created to fullfill the requirements of Web Design 2 module

## Deployment Link

I used Vercel in order to deploy this application. You can access a live deployment of the app at [climbing-gear.com](wd2-l3qh.vercel.app "climbing-gear.com") or [wd2-l3qh.vercel.app](wd2-l3qh.vercel.app)

## Prototype Link

You can see the prototype of the app at [prototype](https://www.figma.com/file/PlJI9BBm7ZniBhL7d5Jbhf/prototype?node-id=0-1&t=0Asji8TXYb0LTCQm-0 "prototype")

## Table of Content

- [Problem and solution](##Problem-and-Solution)

* [Challenges](##Challenges)
* [Technologies](##Technologies)
  - Frontend
  - Backend
  - Accessibility
* [Setup](##Setup)
* [Future Development](##Future-Development)

## Problem and Solution

People with a passion of climbing are strugglung with the difficulty of choosing among various types of climbing gear manufactured by different manufacturers. After being a rock climber for some years and talking to and teaching many other climbers, I decided to create a web application to collect all the data a climber needs to choose among climbing gear. After interviewing some climbers and creating user personas, I created wireframes and finally the prototype. A link to the prototype is provided at the top of this README.md.

## Challenges

One of the toughest challenges I encountered while thinking about creating content, was that there are lots of manufacturers around the world with hundered of products which made it almost impossible to collect information manually so I created a small app to web scrap and insert data to my database.

## Technologies

### Frontend

#### React Library

To create this app and other reusable components

#### Redux

To create global state that is accessible in all components. By using this global state log in and log out is managed

### Backend

#### Firebase sercives

To create the backend of the app inclding : databse, sign up and log in

#### Nodejs

To create webscraping app by using Cheerio and Axios library

### Accessibility

#### Everyone should be able to use the web equally

In order to help people with accessibility this web application is using color contrast, link states. In addition I have used **_semantic HTML tags_**, **_role_** and **_aria_label_**.

## Setup

- Download or Clone the Git repository
- Run **_npm install_**
- Run **_npm start_**

## Future Development

Since climbers are usually travelling to places outside of cities with no internet connection, so it is very likely to turn it into a mobile app. Then climbers could be able to go online when possible and download the latest database available and use it offline in their adventures. Also there will be a comment section or maybe a forum for each product in the DB so climbers would be able to share their experience of using that particular gear. This section will be available for user through their user account.
