function clearLocalStorage() {
    const hours = 3; // duration of localStorage data
    const now = new Date().getTime();
    const setupTime = localStorage.getItem('setupTime');

    if (setupTime == null) {
        localStorage.setItem('setupTime', now)
    } else {
        if(now-setupTime > hours*60*60*1000) {
            localStorage.clear()
            localStorage.setItem('setupTime', now);
        }
    }
}

function toggleDropdown(toggle, open) {
    const dropdown = document.querySelector('.dropdown');
    if (toggle === true) {
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    } else {
        if (open === false) {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'block';
        }
    }
}

function toggleWarning(desktop) {
    if (desktop) {
        if (document.getElementById("warning").classList.contains("show")) {
            document.getElementById("warning").classList.remove("show");
            document.getElementById("warning").style.display = "none";
        } else {
            document.getElementById("warning").classList.add("show");
            document.getElementById("warning").style.display = "block";
        }
    } else {
        if (document.getElementById("mobile-warning").classList.contains("show")) {
            document.getElementById("mobile-warning").classList.remove("show");
            document.getElementById("mobile-warning").style.display = "none";
        } else {
            document.getElementById("mobile-warning").classList.add("show");
            document.getElementById("mobile-warning").style.display = "block";
        }
    }
}

function changeHeightState() {
    const area = document.getElementById("proglangs-area");
    const icon = document.getElementById("prolangs-icon");

    area.classList.toggle("open");
    if (area.classList.contains("open")) {
        area.style.height = area.scrollHeight + "px";
        icon.innerText = "-";
    } else {
        icon.innerText = "+";
        area.style.height = "250px";
    }
}

async function handleCopy() {
    const notifmessage = document.getElementById("toast-message");
    try {

        await navigator.clipboard.writeText("gmemedeiros496@gmail.com");
        
        if(!notifmessage.textContent) {
            toast("success");
        }
    } catch (error) {
        if(!notifmessage.textContent) {
            toast("error");
        }
        console.error(error);
    }
};

function toast(status) {
    const notif = document.getElementById("toast");
    const notificon = document.getElementById("toast-icon");
    const notifmessage = document.getElementById("toast-message");

    if(notif && notificon && notifmessage) {
        const lang = document.documentElement.lang;
        const msgPT = "E-mail copiado com sucesso";
        const msgEN = "E-mail copied successfully";
        const errorPT = "Erro ao copiar e-mail, tente novamente";
        const errorEN = "Error copying e-mail, please try again";

        const icone = status === 'success' ? document.createTextNode("✔") : document.createTextNode("✘");
        let mensagem = "";

        if (lang === "pt") {
            mensagem = status === 'success' ? document.createTextNode(msgPT) : document.createTextNode(errorPT);
        } else if (lang === "en") {
            mensagem = status === 'success' ? document.createTextNode(msgEN) : document.createTextNode(errorEN);
        }
        
        notificon.appendChild(icone);
        notifmessage.appendChild(mensagem);

        notif.style.top = "0";
        notificon.style.color = status === 'success' ? "green" : "red";
        
        setTimeout(() => {
            notif.style.top = "-384px";
            notificon.textContent = "";
            notifmessage.textContent = "";
        }, 2000);
    }
};