# agile_retro_meeting_tool

> A Vue.js project. This is a Vue application for agile developement retrospective meeting, you can write "well", "not well", "suggestion" card online for the meeting, so no need write card by paper.

# functions

> 1. you can input "well","not well","suggestion" comment or drag the comment textarea to relative areas, also you can drag the card everywhere(html5 drag event);
> 2. card can refresh automatically, no need to refresh ui to load data.(Vue-Socket.io)
> 3. you can input the action for next iteration.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# How to use

> 1. create a meeting in index page first;
> 2. then copy the url send to teammates, everyone can write cards under this link(pls note: one link one meeting)

# Web application online address

http://agileretro.top

# backend api interface application

Pls reference to https://github.com/1075551055/agile_retro_meeting_tool_backend (pls note:because use Vue-Socket.io, need to start backend application for listen 3000 port)
