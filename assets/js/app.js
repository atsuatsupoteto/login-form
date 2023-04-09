// 初期表示
window.onload = function(){

    // ローカルストレージに保管されたデータの取得
    const storageEmail = localStorage.getItem("userEmail");
    const storagePassword = localStorage.getItem("userPassword");

    // DOM
    const userEmail = document.getElementById("input-email");
    const userPassword = document.getElementById("input-password");

    //ローカルストレージのemailとpasswordをセットする
    if(storageEmail != null){
        userEmail.value = storageEmail;
        console.log(storageEmail);
    }
    if(storagePassword != null){
        userPassword.value = storagePassword;
        console.log(storagePassword);
    }
};

// ボタンクリックアクション
const btn =document.getElementById("sign-in-button");
btn.addEventListener("click",function(){

//　フォームに入力された値の取得
const formEmail = document.getElementById("input-email").value;
const formPassword = document.getElementById("input-password").value;

// ブラウザ上にデータの保存
localStorage.setItem("userEmail", formEmail);
localStorage.setItem("userPassword", formPassword);
},false);