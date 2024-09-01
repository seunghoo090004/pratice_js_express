"use strict";

// 유저 정보
class UserStorage{
// static을 사용하여 정적 변수로 만들어서 클래스 자체에서 users 변수에 접근 가능
    static #users = {
        id: ["kimseunghoo", "김개발", "나팀장"],
        psword: ["1234", "1234", "!23456"],
        names: ["김승후", "김개발", "나팀장"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    //회원 정보 순회하며 인증 로직
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, psword, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;