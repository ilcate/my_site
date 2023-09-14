let _app = {}

changeAll = () => {
    if(document.querySelector("#theme").innerHTML == "Scuro"){
        document.querySelector("#theme").innerHTML = "Chiaro"
        document.body.style.backgroundColor = "#EFEFEF"
        document.body.style.color = "#060606"
        if(document.querySelector("#menu-container")){
            document.querySelector("#menu-container").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }else{
            document.querySelector("#menu-container-mobile").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        }
        document.querySelector(".c1").style.color = "#060606"
        document.querySelector(".c2").style.color = "#060606"
        document.querySelector(".space1").style.color = "#060606"
        document.querySelector(".space3").style.color = "#060606"
        document.querySelector("#clsus").src = "assets/images/Chri.png"
        document.querySelector("#inst").src = "assets/images/links/mdi_instagram.png"
        document.querySelector("#mail").src = "assets/images/links/mail.png"
        document.querySelector("#git").src = "assets/images/links/github.png"
        document.querySelector("#tik").src = "assets/images/links/tiktok.png"
        if(document.querySelector(".logo-grande")){
            document.querySelector(".logo-grande").src = "assets/images/ChristianCatenacci.png"
        }
        sessionStorage.setItem("theme", "Chiaro")
    }else{
        document.querySelector("#theme").innerHTML = "Scuro"
        document.body.style.backgroundColor = "#060606"
        document.body.style.color = "#EFEFEF"
        if(document.querySelector("#menu-container")){
            document.querySelector("#menu-container").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }else{
            document.querySelector("#menu-container-mobile").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }
        document.querySelector(".c1").style.color = "#EFEFEF"
        document.querySelector(".c2").style.color = "#EFEFEF"
        document.querySelector(".space1").style.color = "#EFEFEF"
        document.querySelector(".space3").style.color = "#EFEFEF"
        document.querySelector("#clsus").src = "assets/images/ChriBianco.png"
        document.querySelector("#inst").src = "assets/images/linksbinachi/mdi_instagram.png"
        document.querySelector("#mail").src = "assets/images/linksbinachi/Vector-1.png"
        document.querySelector("#git").src = "assets/images/linksbinachi/Vector.png"
        document.querySelector("#tik").src = "assets/images/linksbinachi/Vector-2.png"
        if(document.querySelector(".logo-grande")){
            document.querySelector(".logo-grande").src = "assets/images/ChristianCatenacciBianco.png"
        }
        sessionStorage.setItem("theme", "Scuro")
    }
}

_app.getClick = () => {
    document.querySelector("#theme").addEventListener("click", () =>{
        changeAll()
	});
}


_app.checkStorage = () => {
    let currentTheme = sessionStorage.getItem("theme")
    if(currentTheme == "Scuro"){
        changeAll()
    }
}

_app.checkDevice = () => {
    let w = window.innerWidth
    let h = window.innerHeight
    console.log(document.location)
    if (h > w && document.location != "cover-mobile.html"){
        return document.location = "cover-mobile.html";
    }else{
        return document.location = "index.html";
    }
    
}



_app.startUp = () => {
    _app.getClick()
    _app.checkStorage()
    // _app.checkDevice()
}

_app.startUp()