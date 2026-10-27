
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const propertyFilter = document.getElementById("propertyFilter");
const propertyCards = document.querySelectorAll(".property-card");
const contactForm = document.getElementById("contactForm");

menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

propertyFilter.addEventListener("change", () => {
    const selectedType = propertyFilter.value;

    propertyCards.forEach(card => {
        const matches = selectedType === "all" || card.dataset.type === selectedType;
        card.style.display = matches ? "" : "none";
    });
});

document.querySelectorAll(".property-link").forEach(link => {
    link.addEventListener("click", () => {
        const propertyName = link.dataset.property;
        document.getElementById("message").value =
            `Hello Kapsoya Business Park, I would like more information about ${propertyName}.`;
    });
});

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
        alert("Please complete all fields.");
        return;
    }

    const businessWhatsApp = "2547XXXXXXXX";
    const enquiry = `Hello Kapsoya Business Park,\n\nMy name is ${name}.\nMy phone number is ${phone}.\n\nMy enquiry: ${message}`;

    const whatsappUrl = `https://wa.me/${businessWhatsApp}?text=${encodeURIComponent(enquiry)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();
