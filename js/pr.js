_app = {}

_app.getClick_project = () => {
    document.querySelector("#arcademon-container").addEventListener("click", () =>{
        sessionStorage.getItem("project")
        sessionStorage.setItem("project", 3)
        _app.changeLocation()
	});
    document.querySelector("#esp-container").addEventListener("click", () =>{
        sessionStorage.getItem("project")
        sessionStorage.setItem("project", 2)
        _app.changeLocation()
	});
    document.querySelector("#cloudy-container").addEventListener("click", () =>{
        sessionStorage.getItem("project")
        sessionStorage.setItem("project", 1)
        _app.changeLocation()
	});
    document.querySelector("#bubbles-container").addEventListener("click", () =>{
        sessionStorage.getItem("project")
        sessionStorage.setItem("project", 0)
        _app.changeLocation()
	});
    
}

_app.changeLocation = () => {
    if (window.location.pathname == "/works-mobile.html") {
        document.location = "/prspecs-mobile.html";
    }else{
        document.location = "/projectSpecs.html";
    }
}

_app.getClick_project()