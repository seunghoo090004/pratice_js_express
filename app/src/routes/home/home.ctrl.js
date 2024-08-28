"use strict";

const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req,res) => {
        console.log(req.body); //프론트엔드에서 요청한 데이터를 담아두는 곳.
    },
};
// const hello = (req, res) => {
//     res.render("home/index");
// };

// const login = (req,res) =>{
//     res.render("home/login");
// };

module.exports = {
    output,
    process,
};

