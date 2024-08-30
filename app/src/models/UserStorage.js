"use strict";

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
}

module.exports = UserStorage;