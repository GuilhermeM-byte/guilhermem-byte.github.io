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