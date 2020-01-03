---
title: Bringing in the 20s with Tips for Using Gatsby
date: "2020-01-02"
description: "GatsbyJS tips for beginners based on my personal experience."
cover: './flappergirl.jpg'
tags:
- Gatsby
- React
- Blog
- beginner
---

Recently, I created a personal website/blog using GatsbyJS and learned a lot of things along the way. If you're new to GatsbyJS, I hope that the lessons I learned will help you with your project. 

*Disclaimer*: This is NOT a Gatsby tutorial, but a set of Gatsby-related tips I learned while using Gatsby.
<br/><br/>
  
And with that, let's get started!<br/>

![Leonardo DiCaprio raising a glass from The Great Gatsby](https://media.giphy.com/media/g9582DNuQppxC/giphy-downsized-large.gif)

## What is Gatsby?
  Gatsby is a static site generator for React. This means that the HTML, CSS, and JavaScript get rendered during **build time** rather than **run time** and thus doesn't need a server. So, if you're considering making a website where the content will generally be static, such as a personal website or a blog, Gatsby is a great option. Another possible reason to learn Gatsby would be either to build on your React skills :).<br/><br/>
  As an aside, if you don't have a personal website, I would encourage it. A personal website can act as a place to showcase who you are in the ways **you** define. It's also a place to experiment with new things and be as creative as you want. A virtual playground, if you will.

## Prerequisite Knowledge:
A basic understanding of React. You don't have to be an expert, so don't let that scare you. However, it would be useful to have an understanding of functional components and JSX.<br/>

An idea of how [GraphQL](https://graphql.org/) works (I'll get to why below).<br/>

A basic understanding of Gatsby, of course. [Here](https://www.gatsbyjs.org/tutorial/) is a beginner-friendly index page for learning all things Gatsby.

## On to the Tips!
### 1. Make Use of Starter Files
As of posting, there 300+ [Gatsby starter files](https://www.gatsbyjs.org/starters/?v=2) available to help you get started making the type of project you want.
![Examples of Gatsby Starter Files](./gatsby-starter-screenshot.png)

### 2. Advice for Issues with Gatsby CLI Being Removed
It seems to be a fairly common issue to run into this error after installing various dependencies for your project:<br/><br/>
`ERROR                              
There was a problem loading the local develop command. Gatsby may not be installed. Perhaps you need to run "npm install"?`

In my case, running  `npm install --save gatsby-plugin-typography react-typography typography` 
removed the Gatsby CLI. Looking at similar issues on Github, it seems that sometimes, installing plugins with npm can end up uninstalling Gatsby. 

![gatsby develop github issue](./gatsby-develop-not-working.png)

To fix this issue, I used yarn for dependency installs. I removed `package.json` and the `/node_modules` folder. Then I ran `yarn install` and added the packages I needed with Yarn instead of npm.

This solved my issue. For this reason, I'm currently using [Yarn](https://yarnpkg.com/) as my package manager of choice when working with Gatsby.

![Yarn package manager home page](./yarn-home-page.png)

### 3. Utilize the Gatsby Pair Programming Option
[Gatsby Pair Programming](https://www.gatsbyjs.org/contributing/pair-programming/) is an truly *awesome* resource and I can abcolutely recommend if you end up needing help. <br/><br/>
My advice is to come with very specific questions. I used this once in order to help me solve an issue routing to my individual blog posts and was able to ask in depth questions about why things are how they are as well as asking for advice on implementation. It felt like a very non-judgmental and helpful space. Time slots do fill up fairly quickly though!

### 4. Learn to Effectively Utilize GraphQL's Capabilities
GraphQL is query language that gives you access to your site's data. This means you can query the specific data you want to add to your pages. Gatsby provides access to GraphiQL, a GraphQL IDE available at  http://localhost:8000/___graphql when you have the development server running. It is an excellent tool that allows you to visualize if the data coming back from your queries is what you expect it to be. 
![screenshot of graphiql IDE](./graphiql-screenshot.png)

**This can come in handy when trying to debug various types of problems.**

When unexpected behavior occurs, you can easily create queries that show what data is being returned or if anything is being returned at all. I actually learned a lot about how to use this for debugging during the pairing session.

### 5. Advice Based on Errors I Faced and How I Solved Them:

#### TypeError: Cannot read property 'page' of undefined <br/>
This is a common error that can occur with React projects. It is usually caused by one of the following:<br/>

It can mean that you're not importing or exporting the component properly,you're not referencing the component name correctly, or 
your component is not returning anything to render to the page.
<br/>

#### ENOENT: no such file or directory

This can occur with changes to the `/public` folder, such as when you delete or rename a file in the `/pages` directory.<br/>

Why?<br/>

Gatsby keeps track of these files in the `.cache` folder for the purpose of loading your site faster. So make sure you clear the cache to make sure that everything's up to date and Gatsby isn't trying to load something from cache that doesn't actually exist.<br/><br/> You can accomplish this by either deleting the `.cache folder`, running `gatsby clean`, or adding `gatsby clean` as a script in the `package.json` file like shown below.<br/>

```
scripts": {
  // other scripts here
  "clean": "gatsby clean",
}
```

#### Unknown field 'X' on type 'Y'
This could mean you are trying to query for something that doesn't exist. My advice is to open the GraphiQL's interactive display to see what data you do have available. 

### 6. Use 'gatsby build' for Deployment
When deploying  to any hosting site (in my case, I used Netlify), make sure you run `gatsby build` instead of `gatsby develop`. Other wise, the hosting site won't build your project properly. <br/>

The two commands seem very similar-- because they are, but main difference is that `gatsby build` runs additional instructions such as creating the static HTML pages needed to be rendered by a browser.

## BONUS: Other Helpful Resources:
[The Many Styling Options for React](https://www.gatsbyjs.org/docs/styling/)

[Fancy Portfolio Inspiration to Drool Over](https://www.awwwards.com/websites/portfolio/)