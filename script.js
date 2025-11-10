// Traductions
const translations = {
    fr: {
        'menu-home': 'Accueil',
        'menu-projects': 'Projets',
        'menu-journey': 'Parcours',
        'menu-contact': 'Contact',
        'subtitle': 'Développeur',
        'projects-title': 'Mes Projets',
        'journey-title': 'Mon Parcours',
        'contact-title': 'Contact',
        'contact-subject': 'Objet',
        'contact-message': 'Message',
        'contact-send': 'Envoyer',
        'project-github': 'Voir sur GitHub',
        'project-download': 'Télécharger',

        // Parcours - Ereel
        'journey-step1-title-Ereel': 'Travail chez Ereel',
        'journey-step1-desc-Ereel-1': 'Développement d\'escape game VR sur Unity.',
        'journey-step1-desc-Ereel-2': 'Accueil client.',

        // Parcours - Breakfirst
        'journey-step2-title-BF': 'Travail chez Breakfirst',
        'journey-step2-desc-BF': 'Développement de jeu multijoueur sur Unity.',

        // Parcours - Aware corp
        'journey-step2-title-AC': 'Travail chez Aware corp',
        'journey-step2-desc-AC': 'Développement de jeu casual sur Unity pour mobile.',

        // Parcours - Ynov Master
        'journey-step2-title-MYnov': 'Master développeur à Ynov',
        'journey-step2-desc-MYnov-1': 'Option jeux vidéo.',
        'journey-step2-desc-MYnov-2': 'Perfectionnement dans les langages et moteurs utilisés pour les jeux vidéo.',
        'journey-step2-desc_MYnov-3': 'Programmation d\'IA.',

        // Parcours - Seedlers Interactive
        'journey-step2-title-SI': 'Travail chez Seedlers Interactive',
        'journey-step2-desc-SI-1': 'Développement de jeux sur Unreal Engine 4 et 5.',
        'journey-step2-desc-SI-2': 'Mise en ligne sur Steam.',

        // Parcours - Ynov Bachelor
        'journey-step2-title-BYnov': 'Bachelor développeur à Ynov',
        'journey-step2-desc-BYnov-1': 'Option jeux vidéo.',
        'journey-step2-desc-BYnov-2': 'Apprentissage des langages et moteurs utilisés pour les jeux vidéo.',
        'journey-step2-desc-BYnov-3': 'Programmation orientée objet.',

        // Parcours - Valbruna
        'journey-step3-title-Val': 'Travail chez Valbruna',
        'journey-step3-desc-Val-1': 'Support technique et développeur python.',
        'journey-step3-desc-Val-2': 'Communications en anglais.',

        // Parcours - Telnowedge
        'journey-step4-title-TNE': 'Travail chez Telnowedge',
        'journey-step4-desc-TNE': 'Support technique, conseil client et gestion du réseau.',

        // Parcours - BTS
        'journey-step4-title-BTS': 'BTS SNIR au Grésivaudan',
        'journey-step4-desc-BTS': 'Apprentissage des langages basique et des bases en réseau.',

        // Parcours - Bac
        'journey-step4-title-bac': 'Obtention du bac STI2D',
        'journey-step4-desc': 'Obtention du baccalauréat STI2D.'
    },
    en: {
        'menu-home': 'Home',
        'menu-projects': 'Projects',
        'menu-journey': 'Journey',
        'menu-contact': 'Contact',
        'subtitle': 'Developer',
        'projects-title': 'My Projects',
        'journey-title': 'My Journey',
        'contact-title': 'Contact',
        'contact-subject': 'Subject',
        'contact-message': 'Message',
        'contact-send': 'Send',
        'project-github': 'View on GitHub',
        'project-download': 'Download',

        // Parcours - Ereel
        'journey-step1-title-Ereel': 'Work at Ereel',
        'journey-step1-desc-Ereel-1': 'Development of VR escape games with Unity.',
        'journey-step1-desc-Ereel-2': 'Client reception and support.',

        // Parcours - Breakfirst
        'journey-step2-title-BF': 'Work at Breakfirst',
        'journey-step2-desc-BF': 'Development of multiplayer games with Unity.',

        // Parcours - Aware corp
        'journey-step2-title-AC': 'Work at Aware corp',
        'journey-step2-desc-AC': 'Development of casual mobile games with Unity.',

        // Parcours - Ynov Master
        'journey-step2-title-MYnov': 'Master in Development at Ynov',
        'journey-step2-desc-MYnov-1': 'Video game specialization.',
        'journey-step2-desc-MYnov-2': 'Advanced training in languages and engines used for game development.',
        'journey-step2-desc_MYnov-3': 'AI programming.',

        // Parcours - Seedlers Interactive
        'journey-step2-title-SI': 'Work at Seedlers Interactive',
        'journey-step2-desc-SI-1': 'Game development on Unreal Engine 4 and 5.',
        'journey-step2-desc-SI-2': 'Publishing on Steam.',

        // Parcours - Ynov Bachelor
        'journey-step2-title-BYnov': 'Bachelor in Development at Ynov',
        'journey-step2-desc-BYnov-1': 'Video game specialization.',
        'journey-step2-desc-BYnov-2': 'Learning languages and engines used for game development.',
        'journey-step2-desc-BYnov-3': 'Object-oriented programming.',

        // Parcours - Valbruna
        'journey-step3-title-Val': 'Work at Valbruna',
        'journey-step3-desc-Val-1': 'Technical support and Python developer.',
        'journey-step3-desc-Val-2': 'Communication in English.',

        // Parcours - Telnowedge
        'journey-step4-title-TNE': 'Work at Telnowedge',
        'journey-step4-desc-TNE': 'Technical support, customer advice and network management.',

        // Parcours - BTS
        'journey-step4-title-BTS': 'BTS SNIR at Le Grésivaudan',
        'journey-step4-desc-BTS': 'Learning basic programming languages and networking fundamentals.',

        // Parcours - Bac
        'journey-step4-title-bac': 'High School Diploma (STI2D)',
        'journey-step4-desc': 'Obtained the STI2D baccalaureate.'
    }
};

// Variables globales
let currentLang = 'fr';

let projects = [];

// Gestion du menu burger
const burgerMenu = document.getElementById('burgerMenu');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.side-menu a');


function toggleMenu() {
    burgerMenu.classList.toggle('active');
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
    burgerMenu.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

burgerMenu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Gestion de la langue
const langButtons = document.querySelectorAll('.lang-btn');

function changeLanguage(lang) {
    currentLang = lang;
    
    // Mise à jour des boutons
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Mise à jour du texte
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Recharger les projets avec la nouvelle langue
    loadProjects();
}

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        changeLanguage(btn.dataset.lang);
    });
});

// Chargement des projets

async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        projects = await response.json();
        displayProjects();
    } catch (error) {
        console.error('Erreur lors du chargement des projets:', error);
    }
}

function displayProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const githubText = currentLang === 'fr' ? 'Voir sur GitHub' : 'View on GitHub';
    const downloadText = currentLang === 'fr' ? 'Télécharger' : 'Download';
    
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const description = currentLang === 'en' && project.description_en 
            ? project.description_en 
            : project.description;
        
        // Génère les screenshots si disponibles
        const screenshotsHTML = project.screenshots ? `
            <div class="project-screenshots">
                <img src="${project.screenshots[0]}" alt="${project.title} screenshot 1" class="screenshot screenshot-1">
                <img src="${project.screenshots[1]}" alt="${project.title} screenshot 2" class="screenshot screenshot-2">
            </div>
        ` : '';
        
        // Génère les liens conditionnellement
        const githubLink = project.github && project.github.trim() !== '' ? 
            `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">${githubText}</a>` 
            : '';
        
        const downloadLink = project.download && project.download.trim() !== '' ? 
            `<a href="${project.download}" target="_blank" rel="noopener noreferrer" class="project-link">${downloadText}</a>` 
            : '';
        
        projectCard.innerHTML = `
            ${screenshotsHTML}
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-links">
                    ${githubLink}
                    ${downloadLink}
                </div>
                <p class="project-description">${description}</p>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
        
        // Animation décalée
        setTimeout(() => {
            projectCard.classList.add('visible');
        }, index * 100);
    });
}

let lastScrollY = window.scrollY;

const observerOptions = {
    threshold: Array.from({length: 101}, (_, i) => i / 100), // seuils de 0 à 1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const rect = entry.target.getBoundingClientRect();
        const elementHeight = entry.target.offsetHeight;
        const viewportHeight = window.innerHeight;
        
        const visiblePart = Math.min(viewportHeight, rect.bottom) - Math.max(0, rect.top);
        const visibleRatio = Math.max(0, Math.min(1, visiblePart / elementHeight));

        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;

        // Scroll vers le bas : apparaître progressivement
        if (scrollingDown) {
            entry.target.style.opacity = visibleRatio;
            entry.target.style.transform = `translateY(${20 * (visibleRatio)}px)`;
        } else {
            // Scroll vers le haut : disparaître progressivement
            entry.target.style.opacity = visibleRatio;
            entry.target.style.transform = `translateY(${20 * (visibleRatio)}px)`;
        }

        lastScrollY = currentScrollY;
    });
}, observerOptions);

// Observer tous les éléments animés
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Observer les éléments de la timeline
document.addEventListener('DOMContentLoaded', () => {
    // Charger les projets
    loadProjects();
    
    // Observer les éléments de timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observer le formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        observer.observe(contactForm);
    }
    
    // Animation de la ligne de timeline
    animateTimelineLine();
});

// Animation de la ligne de timeline
function animateTimelineLine() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const line = document.createElement('div');
                line.className = 'timeline-line-animated';
                line.style.cssText = `
                    position: absolute;
                    left: 0%;
                    top: 0;
                    width: 3px;
                    height: 0;
                    background: linear-gradient(180deg, rgba(239, 211, 69, 0), rgba(61, 42, 80, 0));
                    transform: translateX(-50%);
                    animation: growLine 2s ease forwards;
                    z-index: 1;
                `;
                
                // Ajouter l'animation CSS
                if (!document.getElementById('timeline-animation')) {
                    const style = document.createElement('style');
                    style.id = 'timeline-animation';
                    style.textContent = `
                        @keyframes growLine {
                            to { height: 100%; }
                        }
                    `;
                    document.head.appendChild(style);
                }
                
                timeline.appendChild(line);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    timelineObserver.observe(timeline);
}

// Gestion du formulaire de contact
emailjs.init("X3qabzR_k_8LhET9a");
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const user_email = document.getElementById('user_email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Désactive le bouton pendant l'envoi
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'fr' ? 'Envoi...' : 'Sending...';

    emailjs.send("service_380de3w", "template_1szisrr", {
        subject: subject,
        message: message,
        user_email: user_email,
    })
    .then(() => {
        alert(currentLang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
        contactForm.reset();
    })
    .catch((error) => {
        console.error("Erreur :", error);
        alert(currentLang === 'fr' ? "Échec de l'envoi du message." : "Failed to send message.");
    })
    .finally(() => {
        // Réactive le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    });
});

// Smooth scroll pour les liens du menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des cartes de projet au scroll
const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

// Observer les cartes une fois chargées
const observeProjectCards = () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        projectsObserver.observe(card);
    });
};

// Appeler après un court délai pour s'assurer que les cartes sont chargées
setTimeout(observeProjectCards, 500);


