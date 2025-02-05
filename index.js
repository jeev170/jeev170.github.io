
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    alert('Received your message! Will get to you soon');

    this.reset();
});
