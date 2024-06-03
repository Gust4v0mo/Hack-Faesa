
document.addEventListener("DOMContentLoaded", function() {
 
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    const socialIcons = document.querySelectorAll('.social-icons a');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.color = '#006699'; 
        });
        icon.addEventListener('mouseout', function() {
            this.style.color = '#003366'; 
        });
    });
});
