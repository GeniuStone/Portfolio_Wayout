var marketingAgree = document.querySelector(".marketingAgree");
var pw1 = document.querySelector("#pw1");
var pw2 = document.querySelector("#pw2");
var pwOk = document.querySelector(".pwOk");

// 마케팅 정보 제공 수신 동의 알림
marketingAgree.addEventListener("click",function(){
    alert("마케팅 정보 제공 수신 동의하셨습니다.")
});

// 비밀번호 일치 불일치 확인
function pwCheck(){
    if(pw1.value == pw2.value){
        pwOk.innerText = "비밀번호가 일치합니다.";
    }else{
        pwOk.innerText = "비밀번호가 일치하지 않습니다.";
    }
}


