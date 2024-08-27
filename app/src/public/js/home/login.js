"use strict"

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

//두 번째로 넘어오는 파라미터는 함수이기에 function을 만들어줘야함
loginBtn.addEventListener("click", login);

// 로그인이 눌릴 때마다 위에 있는 id와 psword 값을 잘 가져와줘야함.
function login(){
    const req = {
        id: id.value, //id, psword안에 있는 박스 값은 id.value로 가져옴
        psword: psword.value, 
    };
    //위에 해당하는 값을 서버에 전달 -> fetch();
    console.log(req);
}