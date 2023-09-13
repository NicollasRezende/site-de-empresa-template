function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    }

// Adicione um evento de rolagem para mostrar ou ocultar o botão "Voltar ao Topo"
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scrollTop');
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// Código para rolagem suave ao clicar nos links de navegação
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        scroll({
            top: offsetTop,
            behavior: "smooth",
        });
    });
});