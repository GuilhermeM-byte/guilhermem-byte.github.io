function translatePage(lang) {
    const pageLang = document.documentElement.lang;

    // FLAGS
    const brFlag = "🇧🇷";
    const usFlag = "🇺🇸";
    // PORTUGUESE
    const greetingsPT = "Olá, meu nome é Guilherme de Jesus Araujo Medeiros, o seu desenvolvedor full-stack.";
    const titleAboutmePT = "Sobre mim";
    const aboutmePT = "Eu sou formado em análise e desenvolvimento de sistemas pela Estácio e trabalho na área fazem 2 anos, mas eu ja obtive bastante experiência na área através de estágio por 3 anos.\nMeu maior foco de estudo é em full-stack, aprendendo tudo sobre o front-end e também pegando conhecimentos sobre APIs e SQL para o back-end.\n";
    const proglangsPT = "Linguagens e afins";
    const titlecontactPT = "Contato";
    const footermsgPT = "Este site foi feito usando apenas HTML, CSS e JavaScript";
    // ENGLISH
    const greetingsEN = "Hello, my name is Guilherme de Jesus Araujo Medeiros, your full-stack developer.";
    const titleAboutmeEN = "About me";
    const aboutmeEN = "I have a degree in systems analysis and development from Estácio and have been working in the field for 2 years, but I have already gained a lot of experience in the area through an internship for 3 years.\nMy main focus of study is in full-stack, learning everything about front-end and also gaining knowledge about APIs and SQL for back-end.\n";
    const proglangsEN = "Languages and related subjects";
    const titlecontactEN = "Contact";
    const footermsgEN = "This site was made using only HTML, CSS and JavaScript";

    
    if (lang === 'pt') {
        document.getElementById('flag').innerText = brFlag;
        document.getElementById('greetings').innerText = greetingsPT;
        document.getElementById('titleAboutme').innerText = titleAboutmePT;
        document.getElementById('aboutme').innerText = aboutmePT;
        document.getElementById('proglangs').innerText = proglangsPT;
        document.getElementById('contact').innerText = titlecontactPT;
        document.getElementById('footermsg').innerText = footermsgPT;
        
        document.documentElement.lang = 'pt';
    }
    if (lang === 'en') {
        document.getElementById('flag').innerText = usFlag;
        document.getElementById('greetings').innerText = greetingsEN;
        document.getElementById('titleAboutme').innerText = titleAboutmeEN;
        document.getElementById('aboutme').innerText = aboutmeEN;
        document.getElementById('proglangs').innerText = proglangsEN;
        document.getElementById('contact').innerText = titlecontactEN;
        document.getElementById('footermsg').innerText = footermsgEN;

        document.documentElement.lang = 'en';
    }
    
    toggleDropdown(false,false);
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