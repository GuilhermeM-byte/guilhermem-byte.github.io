function translatePage(lang) {
    const pageLang = document.documentElement.lang;
    
    if (lang === 'pt') {
        const ptElements = document.getElementsByClassName('translatable-pt');
        const enElements = document.getElementsByClassName('translatable-en');

        for (let i = 0; i < ptElements.length; i++) {
            ptElements[i].style.display = 'block';
        }
        for (let i = 0; i < enElements.length; i++) {
            enElements[i].style.display = 'none';
        }

        document.documentElement.lang = 'pt';
    }
    if (lang === 'en') {
        const ptElements = document.getElementsByClassName('translatable-pt');
        const enElements = document.getElementsByClassName('translatable-en');
        
        for (let i = 0; i < ptElements.length; i++) {
            ptElements[i].style.display = 'none';
        }
        for (let i = 0; i < enElements.length; i++) {
            enElements[i].style.display = 'block';
        }

        document.documentElement.lang = 'en';
    }
    
    toggleDropdown(false);
}

function toggleDropdown(open) {
    const dropdown = document.querySelector('.dropdown');
    if (open === false) {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

function changeAccordionState(accordion) {
    if (document.getElementById(accordion).classList.contains('open')) {
        document.getElementById(accordion).classList.remove('open');
        document.getElementById(accordion).style.height = '209px';
    } else {
        document.getElementById(accordion).classList.add('open');
        document.getElementById(accordion).style.height = '100%';
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

const toast = (status) => {
    const notif = document.getElementById("toast");
    const notificon = document.getElementById("toast-icon");
    const notifmessage = document.getElementById("toast-message");

    if(notif && notificon && notifmessage) {
        const icone = status === 'success' ? document.createTextNode("✔") : document.createTextNode("✘");
        const mensagem = status === 'success' ? document.createTextNode("E-mail copiado com sucesso") : document.createTextNode("Erro ao copiar e-mail, tente novamente");
        
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