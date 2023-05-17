<p align="center">
  <a href=" rel=" no opener">
 <img width=200px height=200px src="https://res.cloudinary.com/dsemmhzl3/image/upload/v1677534392/upload/rh9y4fsba8kojczfunay.jpg" alt=" Project logo"></a>
</p>

<h3 align="center">Test Competion</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
    This is the task given to me on the 16th of May 2023 to be completed on the 19th of May 2023 in this Read me you will find the documentation of the project
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](# acknowledgment)

## 🧐 About <a name = "about"></a>

Write about 1-2 paragraphs describing the purpose of your project.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things do you need to install the software and how to install them?

```
clone this repository on your local machine to get started
```

### Installing

A step-by-step series of examples that tell you how to get a development env running.

if you want to work with the front and backend you should follow these steps

```
cd client
```
``` 
npm install 
```

```
npm run dev
```

then change the directory to the server

```
cd server 
```
``` 
npm install 
```
``` 
npm start
```

once the servers are both started you should go to this URL

```
http://localhost:5173/
```

I tried to make the UI friendly to make it easier to work with

for the post input, any digit to get a limited post

The same goes for the comment input

but for the userId input, any userId from one to 20 to get the post of that user
 <video width=800px height=600px src="https://res.cloudinary.com/dsemmhzl3/video/upload/v1684294112/test_i6culn.mp4" alt="Project logo"></a>

## 🔧 Backend Only <a name = "tests"></a>

For those that want to use only the backend here is the documentation

after cloning the repo on your local machine

go to the server directory

```
cd server
```
``` 
npm install 
```

then

```
npm start
```

### Break down into end-to-end tests

Explain what these tests test and why

### Get all post

```
http://localhost:3000/api/posts

```

### Get a limited amount of posts

```
http://localhost:3000/api/posts?limit=10
```

### Get a post of a user with his/her id

```
http://localhost:3000/api/posts?limit=10&userId=2
```

### Get comments on a specific post

```
http://localhost:3000/api/comments?limit=10&postId=2
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [React](https://react.dev/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [Victor mgbeahurike](https://github.com/vhiz) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgment"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References
