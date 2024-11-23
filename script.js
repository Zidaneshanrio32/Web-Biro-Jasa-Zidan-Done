// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form validation for testimonials
document.getElementById('testimonial-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const testimonial = e.target.testimonial.value.trim();
    const name = e.target.name.value.trim();

    if (testimonial && name) {
        alert('Terima kasih atas testimonial Anda, ' + name + '!');
        e.target.reset();
    } else {
        alert('Harap isi semua kolom.');
    }
});
