
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Animate elements when scrolling into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .form-group');

      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Initialize animation styles
    document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .form-group').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(50px)';
      element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Form submission to WhatsApp
    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      const whatsappMessage = `Nama: ${name}\nEmail: ${email}\nTelepon: ${phone}\nPesan: ${message}`;
      const whatsappUrl = `https://wa.me/6285864459552?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, '_blank');
      alert('Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.');
      contactForm.reset();
    });

    
// Infinite auto-scroll carousel
const portfolioContainer = document.querySelector('.portfolio-container');

if (portfolioContainer) {
  // Duplikat isi untuk infinite scroll
  portfolioContainer.innerHTML += portfolioContainer.innerHTML;

  let scrollPos = 0;
  const scrollSpeed = 1; // pixel per frame

  const infiniteScroll = () => {
    scrollPos += scrollSpeed;
    if (scrollPos >= portfolioContainer.scrollWidth / 2) {
      scrollPos = 0;
    }
    portfolioContainer.scrollTo({
      left: scrollPos,
      behavior: 'auto'
    });
    requestAnimationFrame(infiniteScroll);
  };

  requestAnimationFrame(infiniteScroll);
}
