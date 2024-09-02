"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//루트화면으로 갔을 때는 ctrl의 hello로 감
//로그인 화면으로 갔을 때는 ctrl의 login 으로 감
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);    //출력
router.get("/register", ctrl.output.register); //회원가입
router.post("/login", ctrl.process.login);  //처리


//이 라우터를 외부에서 사용할 수 있게 해주는 명령어
module.exports = router;