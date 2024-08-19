"use strict";

//모듈
const express = require("express");
const app = express();
//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//use는 미들웨어를 등록하는 메서드
app.use("/", home); 

//bin에서 서버를 띄우는 메서드를 보내는걸 받아야해서 여기서도 보내야함
module.exports = app;

//node ./bin/www.js를 좀 더 간단한 명령어로 바꾸는 것(서버 실행)
//package.json이라는 파일을 이용할거임.

