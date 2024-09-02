"use strict"
//프론트엔드
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

//두 번째로 넘어오는 파라미터는 함수이기에 function을 만들어줘야함
loginBtn.addEventListener("click", login);

// 로그인이 눌릴 때마다 위에 있는 id와 psword 값을 잘 가져와줘야함.
function login(){
    const req = {
        id: id.value, //id, psword안에 있는 박스 값은 id.value로 가져옴
        psword: psword.value, 
    };
    //위에 해당하는 값을 서버에 전달 -> fetch();
    //서버 프론트 해당데이터를 어떤 경로를 통해서 데이터를 주고 받을지 설정해줘야함
    // API(주소)가 있어야함


//fetch로 전달을 했음.
//서버에서 응답한 데이터를 다시 받으려면
//fetch 끝에 then이라는 메서드를 사용해서 데이터를 가져올 수 있음
//response 라는 데이터가 파라미터로 전달이 됨.
    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json", //내가 보내는 데이터의 타입
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
        } else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중 에러 발생");
    });
}


