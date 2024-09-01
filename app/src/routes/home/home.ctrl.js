"use strict";

const  User = require("../../models/User");

const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
};

//회원 login 로직 순회 후 답변 프로세스
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};

