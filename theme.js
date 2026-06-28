function changeTheme() {
    clearLocalStorage();
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const selectedTheme = localStorage.getItem('theme');
    
    if (!!selectedTheme) {
        if(selectedTheme === 'dark') {
            localStorage.setItem('theme', 'light');
            document.getElementById("sun-button").style.display = "none";
            document.getElementById("moon-button").style.display = "block";
            document.body.style.color = "#000";
            document.body.style.backgroundColor = "#FFF";
            document.querySelector("footer").style.backgroundColor = "#FFF";
            document.querySelector(".link").style.color = "#000";
        } else {
            localStorage.setItem('theme', 'dark');
            document.getElementById("sun-button").style.display = "block";
            document.getElementById("moon-button").style.display = "none";
            document.body.style.color = "#FCF5E5";
            document.body.style.backgroundColor = "#12002B";
            document.querySelector("footer").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            document.querySelector(".link").style.color = "#FCF5E5";
        }
    } else {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark');
            document.getElementById("sun-button").style.display = "block";
            document.getElementById("moon-button").style.display = "none";
            document.body.style.color = "#FCF5E5";
            document.body.style.backgroundColor = "#12002B";
            document.querySelector("footer").style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            document.querySelector(".link").style.color = "#FCF5E5";
        } else {
            localStorage.setItem('theme', 'light');
            document.getElementById("sun-button").style.display = "none";
            document.getElementById("moon-button").style.display = "block";
            document.body.style.color = "#000";
            document.body.style.backgroundColor = "#FFF";
            document.querySelector("footer").style.backgroundColor = "#FFF";
            document.querySelector(".link").style.color = "#000";
        }
    }
}