function login(){

    user = document.getElementById("u_name").value;
    pwd = document.getElementById("u_password").value;

    if(user=="admin@cwpc.in" && pwd == "admin"){
        window.open("welcome.html")
    }else{
        alert("wrong password try again")
    }


}