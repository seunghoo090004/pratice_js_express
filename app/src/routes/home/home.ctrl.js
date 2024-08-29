"use strict";

const output = {
    home: (req,res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
}

const users = {
    id: ["kimseunghoo", "김개발", "나팀장"],
    psword: ["1234", "1234", "!23456"],
};

const process = {
    login: (req,res) => {
        const id = req.body.id,
            psword = req.body.psword;
        
//프론트에서 전달한 id가 users에 있으면 
        if(users.id.includes(id)){
//아이디의 인덱스를 가져온다.
            const idx = users.id.indexOf(id);
//if문을 하나 더 써서 psword가 같다면 json으로 리턴을 해준다
            if(users.psword[idx] === psword){
                return res.json({
//sucess라는 오브젝트를 true로 만들어서 json형식으로 res(응답)을 해준다
                    success: true,
                });
            }
        }
        
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
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

