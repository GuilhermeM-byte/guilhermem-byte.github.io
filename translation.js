function translatePage(lang) {
    const pageLang = document.documentElement.lang;

    // FLAGS
    const brFlag = "🇧🇷";
    const usFlag = "🇺🇸";
    const esFlag = "🇪🇸";
    // PORTUGUESE
    const warningsPT = "Aviso: Espanhol não é um idioma que eu domino por completo, então a tradução pode não ser perfeita. Se você encontrar algum erro, por favor, me avise para que eu possa corrigi-lo.";
    const greetingsPT = "Olá, meu nome é Guilherme de Jesus Araujo Medeiros, sou um Desenvolvedor Full Stack com paixão por construir aplicações web modernas, intuitivas e de alto desempenho. Gosto de transformar ideias em experiências amigáveis para o usuário, enquanto desenvolvo soluções confiáveis para o back-end com tecnologias modernas.";
    const titleAboutmePT = "Sobre mim";
    const aboutmePT = "Eu sou um desenvolvedor Full Stack que gosta de construir aplicações desde o conceito até a implantação. Minha experiência inclui o desenvolvimento de APIs REST com Node.js e Express, criação de interfaces de usuário dinâmicas com React, implementação de bancos de dados PostgreSQL e MySQL e integração de serviços de terceiros.\nEmbora eu goste de trabalhar como full-stack, meu maior interesse é o desenvolvimento frontend, onde posso combinar a resolução técnica de problemas com a criação de experiências de usuário intuitivas e envolventes. Eu valorizo código limpo, aprendizado contínuo, colaboração e construção de software que entrega valor real aos usuários. Eu me esforço para criar aplicações que não sejam apenas funcionais e escaláveis, mas também agradáveis de usar.\n";
    const proglangsPT = "Habilidades";
    const titlecontactPT = "Contate-me";
    const footermsgPT = "Este site foi feito usando apenas HTML, CSS e JavaScript";
    // ENGLISH
    const warningsEN = "Warning: Spanish is not a language that I fully master, so the translation may not be perfect. If you find any errors, please let me know so I can correct them.";
    const greetingsEN = "Hello, my name is Guilherme de Jesus Araujo Medeiros, I'm a Full Stack Developer with a passion for building modern, intuitive, and high-performance web applications. I enjoy turning ideas into user-friendly experiences while developing reliable backend solutions with modern technologies.";
    const titleAboutmeEN = "About me";
    const aboutmeEN = "I'm a Full Stack Developer who enjoys building applications from concept to deployment. My experience includes developing REST APIs with Node.js and Express, creating dynamic user interfaces with React, working with PostgreSQL and MySQL databases, and integrating third-party services.\nWhile I enjoy working across the full-stack, my greatest interest is frontend development, where I can combine technical problem-solving with creating intuitive and engaging user experiences. I value clean code, continuous learning, collaboration, and building software that delivers real value to users. I strive to create applications that are not only functional and scalable but also enjoyable to use.\n";
    const proglangsEN = "Skills";
    const titlecontactEN = "Contact me";
    const footermsgEN = "This site was made using only HTML, CSS and JavaScript";
    // SPANISH
    const warningsES = "Aviso: El español no es un idioma que domine por completo, por lo que la traducción puede no ser perfecta. Si encuentra algún error, por favor avíseme para que pueda corregirlo.";
    const greetingsES = "Hola, mi nombre es Guilherme de Jesus Araujo Medeiros, soy un Desarrollador Full Stack con pasión por construir aplicaciones web modernas, intuitivas y de alto rendimiento. Me gusta convertir ideas en experiencias amigables para el usuario, mientras desarrollo soluciones confiables para el back-end con tecnologías modernas.";
    const titleAboutmeES = "Sobre mí";
    const aboutmeES = "Soy un desarrollador Full Stack que disfruta construir aplicaciones desde el concepto hasta la implementación. Mi experiencia incluye el desarrollo de APIs REST con Node.js y Express, la creación de interfaces de usuario dinámicas con React, la implementación de bases de datos PostgreSQL y MySQL y la integración de servicios de terceros.\nAunque disfruto trabajar como full-stack, mi mayor interés es el desarrollo frontend, donde puedo combinar la resolución técnica de problemas con la creación de experiencias de usuario intuitivas y atractivas. Valoro el código limpio, el aprendizaje continuo, la colaboración y la construcción de software que brinde un valor real a los usuarios. Me esfuerzo por crear aplicaciones que no solo sean funcionales y escalables, sino también agradables de usar.\n";
    const proglangsES = "Habilidades";
    const titlecontactES = "Contáctame";
    const footermsgES = "Este sitio fue hecho usando solo HTML, CSS y JavaScript";

    if (lang === 'pt') {
        document.getElementById('flag').innerText = brFlag;
        document.getElementById('warning').innerText = warningsPT;
        document.getElementById('mobile-warning').innerText = warningsPT;
        document.getElementById('greetings').innerText = greetingsPT;
        document.getElementById('titleAboutme').innerText = titleAboutmePT;
        document.getElementById('aboutme').innerText = aboutmePT;
        document.getElementById('proglangs').innerText = proglangsPT;
        document.getElementById('contact').innerText = titlecontactPT;
        document.getElementById('footermsg').innerText = footermsgPT;
        document.getElementById('warning-icon').style.display = 'none';
        
        document.documentElement.lang = 'pt';
    }
    if (lang === 'en') {
        document.getElementById('flag').innerText = usFlag;
        document.getElementById('warning').innerText = warningsEN;
        document.getElementById('mobile-warning').innerText = warningsEN;
        document.getElementById('greetings').innerText = greetingsEN;
        document.getElementById('titleAboutme').innerText = titleAboutmeEN;
        document.getElementById('aboutme').innerText = aboutmeEN;
        document.getElementById('proglangs').innerText = proglangsEN;
        document.getElementById('contact').innerText = titlecontactEN;
        document.getElementById('footermsg').innerText = footermsgEN;
        document.getElementById('warning-icon').style.display = 'none';

        document.documentElement.lang = 'en';
    }
    if (lang === 'es') {
        document.getElementById('flag').innerText = esFlag;
        document.getElementById('warning').innerText = warningsES;
        document.getElementById('mobile-warning').innerText = warningsES;
        document.getElementById('greetings').innerText = greetingsES;
        document.getElementById('titleAboutme').innerText = titleAboutmeES;
        document.getElementById('aboutme').innerText = aboutmeES;
        document.getElementById('proglangs').innerText = proglangsES;
        document.getElementById('contact').innerText = titlecontactES;
        document.getElementById('footermsg').innerText = footermsgES;

        if (window.innerWidth < 769) {
            document.getElementById('warning-icon').style.display = 'block';
        }

        document.documentElement.lang = 'es';
    }
    
    toggleDropdown(false,false);
}