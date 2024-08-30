"use strict";

const UserStorage = require("../../models/UserStorage");

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
        const id = req.body.id,
            psword = req.body.psword;

        const users = UserStorage.getUsers("id", "psword");

        const response ={};
//프론트에서 전달한 id가 users에 있으면 
        if(users.id.includes(id)){
//아이디의 인덱스를 가져온다.
            const idx = users.id.indexOf(id);
//if문을 하나 더 써서 psword가 같다면 json으로 리턴을 해준다
            if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);//sucess라는 오브젝트를 true로 만들어서 json형식으로 res(응답)을 해준다
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};
//5분!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

