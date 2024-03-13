window.onload = function() {
    createHeader();
    createMain();
    createFooter();
};

function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo");
    logoContainer.style.display = "flex";
    logoContainer.style.alignItems = "center";

    const logoText = document.createElement("span");
    logoText.style.color = "#01939c";
    logoText.style.fontSize = "26px";
    logoText.style.fontWeight = "bold";
    logoText.style.letterSpacing = "1px";
    logoText.style.marginLeft = "20px";
    logoText.textContent = "BrunoGama";

    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");

    for (let i = 0; i < 3; i++) {
        const line = document.createElement("div");
        line.classList.add(`line${i + 1}`);
        hamburger.appendChild(line);
    }

    const navLinks = document.createElement("ul");
    navLinks.classList.add("nav-links");

    const links = ["Home", "About me", "Skills", "Contact me"];
    links.forEach(item => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "https://www.web-leb.com/code";
        link.textContent = item;
        listItem.appendChild(link);
        navLinks.appendChild(listItem);
    });

    logoContainer.appendChild(logoText);
    nav.appendChild(logoContainer);
    nav.appendChild(hamburger);
    nav.appendChild(navLinks);
    header.appendChild(nav);

    document.body.appendChild(header);
}

function createMain() {
    const main = document.createElement("main");

    const headerContent = document.createElement("div");
    headerContent.classList.add("header-content");

    const heading = document.createElement("h1");
    heading.textContent = "Bruno Gama Masseiras";

    const profileImage = document.createElement("img");
    profileImage.src = "https://avatars.githubusercontent.com/u/106169955?v=4";
    profileImage.alt = "Profile Picture";
    profileImage.style.marginLeft = "560px";
    profileImage.style.width = "200px";
    profileImage.style.height = "200px";
    profileImage.style.display = "flex";
    profileImage.style.alignItems = "center";

    const paragraph = document.createElement("p");
    paragraph.style.display = "flex";
    paragraph.style.justifyContent = "space-between";
    paragraph.textContent = "Sou Bruno Gama, sou um progamador Front End, tenho experiência como Monitor de T.I, atuava em labs de informática, trocava senhas e desbloqueavas no sistema.";

    headerContent.appendChild(heading);
    headerContent.appendChild(profileImage);
    headerContent.appendChild(paragraph);
    main.appendChild(headerContent);

    const slider = document.createElement("div");
    slider.classList.add("slider");
    slider.style.paddingTop = "150px";

    const skillsSection = document.createElement("section");
    skillsSection.classList.add("skills");

    const frontEndSkillCard = createSkillCard("Front End", "HTML, CSS, JavaScript");
    const itMonitorSkillCard = createSkillCard("Monitor de T.I.", "Resolução de problemas, Suporte técnico, Gerenciamento de redes");

    skillsSection.appendChild(frontEndSkillCard);
    skillsSection.appendChild(itMonitorSkillCard);

    slider.appendChild(skillsSection);
    main.appendChild(slider);

    const container = document.createElement("div");
    container.classList.add("container");

    const form = document.createElement("form");
    form.action = "#";
    form.method = "POST";

    const formHeading = document.createElement("h2");
    formHeading.textContent = "Entre em Contato";

    const nameInput = createInputGroup("Nome:", "name", "text", true);
    const emailInput = createInputGroup("Email:", "email", "email", true);

    const messageInputGroup = document.createElement("div");
    messageInputGroup.classList.add("input-group");

    const messageLabel = document.createElement("label");
    messageLabel.for = "message";
    messageLabel.textContent = "Mensagem:";

    const messageTextarea = document.createElement("textarea");
    messageTextarea.id = "message";
    messageTextarea.name = "message";
    messageTextarea.rows = "4";
    messageTextarea.required = true;

    messageInputGroup.appendChild(messageLabel);
    messageInputGroup.appendChild(messageTextarea);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Enviar";

    form.appendChild(formHeading);
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInputGroup);
    form.appendChild(submitButton);

    container.appendChild(form);
    main.appendChild(container);

    document.body.appendChild(main);
}

function createSkillCard(title, description) {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");

    const skillTitle = document.createElement("div");
    skillTitle.classList.add("skill-title");
    skillTitle.textContent = title;

    const skillDescription = document.createElement("div");
    skillDescription.classList.add("skill-description");

    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.style.color = "#000";
    descriptionParagraph.textContent = description;

    skillDescription.appendChild(descriptionParagraph);
    skillCard.appendChild(skillTitle);
    skillCard.appendChild(skillDescription);

    return skillCard;
}

function createInputGroup(labelText, inputId, inputType, isRequired) {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const label = document.createElement("label");
    label.for = inputId;
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = inputType;
    input.id = inputId;
    input.name = inputId;
    if (isRequired) {
        input.required = true;
    }

    inputGroup.appendChild(label);
    inputGroup.appendChild(input);

    return inputGroup;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const socialIconsContainer = document.createElement("div");
    socialIconsContainer.classList.add("social-icons");

    const socialPlatforms = [
        { href: "https://www.instagram.com/seu_usuario_instagram", src: "https://cdn.jsdelivr.net/npm/simple-icons/icons/instagram.svg", alt: "Instagram" },
        { href: "https://www.linkedin.com/in/seu_perfil_linkedin", src: "https://cdn.jsdelivr.net/npm/simple-icons/icons/linkedin.svg", alt: "LinkedIn" },
        { href: "https://github.com/seu_usuario_github", src: "https://cdn.jsdelivr.net/npm/simple-icons/icons/github.svg", alt: "GitHub" },
        { href: "https://api.whatsapp.com/send?phone=seu_numero_whatsapp", src: "https://cdn.jsdelivr.net/npm/simple-icons/icons/whatsapp.svg", alt: "WhatsApp" }
    ];

    socialPlatforms.forEach(platform => {
        const iconLink = document.createElement("a");
        iconLink.href = platform.href;

        const iconImage = document.createElement("img");
        iconImage.src = platform.src;
        iconImage.alt = platform.alt;
        iconImage.style.width = "50px";
        iconImage.style.height = "50px";

        iconLink.appendChild(iconImage);
        socialIconsContainer.appendChild(iconLink);
    });

    footer.appendChild(socialIconsContainer);
    document.body.appendChild(footer);
}
