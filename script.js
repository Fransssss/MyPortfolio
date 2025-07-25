    // Smooth scroll when clicking nav links
    document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1); // remove the '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 60, // adjust for spacing
            behavior: 'smooth'
        });
        }
    });
    });

    // Highlight nav link based on scroll position
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
        }
    });
    });

    // Fade-in animation on scroll for sections
    const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // only trigger once
        }
        });
    },
    {
        threshold: 0.1,
    }
    );

    // Apply observer to all .project-card and sections
    document.querySelectorAll('.project-card, section').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
    });
