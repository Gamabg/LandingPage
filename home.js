window.onload = () => {
    createHeader();
    createMain();
    createFooter();
};

function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    logoDiv.style.display = "flex";
    logoDiv.style.alignItems = "center";
    logoDiv.innerHTML = `
        <span style="color:#01939c; font-size:26px; font-weight:bold; letter-spacing: 1px;margin-left: 20px;">BrunoGama</span>
    `;
    
    const hamburgerDiv = document.createElement("div");
    hamburgerDiv.classList.add("hamburger");
    for (let i = 0; i < 3; i++) {
        const lineDiv = document.createElement("div");
        lineDiv.classList.add(`line${i + 1}`);
        hamburgerDiv.appendChild(lineDiv);
    }
    
    const ul = document.createElement("ul");
    ul.classList.add("nav-links");
    const navItems = ["Home", "About me", "Skills", "Contact me"];
    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "https://www.web-leb.com/code";
        a.textContent = item;
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(logoDiv);
    nav.appendChild(hamburgerDiv);
    nav.appendChild(ul);
    header.appendChild(nav);
    
    document.body.appendChild(header);
}


function createMain() {
    const main = document.createElement("main");
    main.innerHTML = `
        <div class="header-content">
            <h1>Bruno Gama Masseiras</h1>
            <img src="https://avatars.githubusercontent.com/u/106169955?v=4" alt="Foto de perfil" style="margin-left: 560px; width: 200px; height: 200px; display: flex; align-items: center;">
            <p style="display: flex; justify-content:space-between;">Sou Bruno Gama, sou um progamador Front End, tenho experiência como Monitor de T.I, atuava em labs 
                de informática, trocava senhas e desbloqueavas no sistema.</p>
        </div>

        <div class="slider" style="padding-top: 150px;">
            <section class="skills">
                <div class="skill-card">
                    <div class="skill-title">Front End</div>
                    <div class="skill-description">
                        <p style="color: #000;">HTML, CSS, JavaScript</p>
                    </div>
                </div>
                <div class="skill-card">
                    <div class="skill-title">Monitor de T.I.</div>
                    <div class="skill-description">
                        <p style="color: #000;">Resolução de problemas, Suporte técnico, Gerenciamento de redes</p>
                    </div>
                </div>
            </section>  
        </div>

        <div class="container">
            <form action="#" method="POST">
                <h2>Entre em Contato</h2>
                <div class="input-group">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="input-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="input-group">
                    <label for="message">Mensagem:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    `;
    document.body.appendChild(main);
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = `
        <div class="social-icons">
            <a href="https://www.instagram.com/seu_usuario_instagram"><img
                src="https://cdn.jsdelivr.net/npm/simple-icons/icons/instagram.svg" alt="Instagram"
                style="width: 50px; height: 50px;"></a>
            <a href="https://www.linkedin.com/in/seu_perfil_linkedin"><img
                src="https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg" alt="LinkedIn"
                style="width: 50px; height: 50px;"></a>
            <a href="https://github.com/seu_usuario_github"><img
                src="https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg" alt="GitHub"
                style="width: 50px; height: 50px;"></a>
            <a href="https://api.whatsapp.com/send?phone=seu_numero_whatsapp"><img
                src="https://cdn.jsdelivr.net/npm/simple-icons/icons/whatsapp.svg" alt="WhatsApp"
                style="width: 50px; height: 50px;"></a>
        </div>
    `;
    document.body.appendChild(footer);
}
