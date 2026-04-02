/**
 * CÉDRIC PEYRAT - PORTFOLIO ARCHITECTURE 3D
 * JavaScript vanilla - Interactions minimales
 */

(function() {
    'use strict';

    // ============================================
    // SÉLECTION DES ÉLÉMENTS DOM
    // ============================================
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollTopBtn = document.getElementById('scrollTop');

    // ============================================
    // MENU MOBILE (HAMBURGER)
    // ============================================
    
    /**
     * Ouvre/ferme le menu mobile
     */
    function toggleMobileMenu() {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('nav-menu--open');
        
        // Empêche le défilement du body quand le menu est ouvert
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    }

    /**
     * Ferme le menu mobile
     */
    function closeMobileMenu() {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-menu--open');
        document.body.style.overflow = '';
    }

    // Écouteur d'événement pour le bouton hamburger
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileMenu);
    }

    // Ferme le menu quand on clique sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Ferme le menu quand on clique en dehors
    document.addEventListener('click', (event) => {
        if (navMenu && navMenu.classList.contains('nav-menu--open')) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = navToggle && navToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnToggle) {
                closeMobileMenu();
            }
        }
    });

    // Ferme le menu avec la touche Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navMenu && navMenu.classList.contains('nav-menu--open')) {
            closeMobileMenu();
            navToggle.focus();
        }
    });

    // ============================================
    // HEADER SCROLLÉ
    // ============================================
    
    /**
     * Gère l'apparence du header au scroll
     */
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    // ============================================
    // BOUTON RETOUR EN HAaut
    // ============================================
    
    /**
     * Affiche/masque le bouton retour en haut
     */
    function handleScrollTopButton() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('scroll-top--visible');
        } else {
            scrollTopBtn.classList.remove('scroll-top--visible');
        }
    }

    /**
     * Retourne en haut de la page avec smooth scroll
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', scrollToTop);
    }

    // ============================================
    // SMOOTH SCROLL POUR LES ANCRES
    // ============================================
    
    /**
     * Gère le smooth scroll pour les liens d'ancrage
     */
    function handleSmoothScroll(event) {
        const link = event.currentTarget;
        const href = link.getAttribute('href');
        
        // Vérifie si c'est un lien d'ancrage
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            
            // Si c'est juste "#", remonte en haut
            if (!targetId) {
                event.preventDefault();
                scrollToTop();
                return;
            }
            
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                // Calcule la position en tenant compte du header fixe
                const headerHeight = header ? header.offsetHeight : 70;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Met à jour l'URL sans recharger la page
                history.pushState(null, null, href);
            }
        }
    }

    // Applique le smooth scroll à tous les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });

    // ============================================
    // OBSERVER POUR ANIMATIONS AU SCROLL
    // ============================================
    
    /**
     * Initialise l'Intersection Observer pour les animations
     */
    function initScrollAnimations() {
        // Vérifie si IntersectionObserver est supporté
        if (!('IntersectionObserver' in window)) {
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Optionnel : arrête d'observer une fois visible
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe les éléments à animer
        const animatedElements = document.querySelectorAll(
            '.service-card, .portfolio-item, .contact-card'
        );
        
        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
            observer.observe(el);
        });

        // Classe CSS pour l'animation
        const style = document.createElement('style');
        style.textContent = `
            .is-visible {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // ============================================
    // GESTION DU FOCUS POUR ACCESSIBILITÉ
    // ============================================
    
    /**
     * Gère la navigation au clavier dans le menu
     */
    function handleKeyboardNavigation(event) {
        if (!navMenu.classList.contains('nav-menu--open')) {
            return;
        }

        const focusableElements = navMenu.querySelectorAll('a[href]');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.key === 'Tab') {
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }

    navMenu.addEventListener('keydown', handleKeyboardNavigation);

    // ============================================
    // THROTTLE POUR LES ÉVÉNEMENTS DE SCROLL
    // ============================================
    
    /**
     * Limite la fréquence d'exécution d'une fonction
     */
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // ============================================
    // INITIALISATION
    // ============================================
    
    /**
     * Initialise toutes les fonctionnalités
     */
    function init() {
        // Gestion du scroll
        const handleScroll = throttle(() => {
            handleHeaderScroll();
            handleScrollTopButton();
        }, 100);

        window.addEventListener('scroll', handleScroll);
        
        // Exécute une fois au chargement
        handleHeaderScroll();
        handleScrollTopButton();
        
        // Animations au scroll
        initScrollAnimations();
        
        // Détection de la préférence de réduction de mouvement
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Désactive les animations pour les utilisateurs qui préfèrent
            document.querySelectorAll('.service-card, .portfolio-item, .contact-card').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'none';
                el.style.transition = 'none';
            });
        }
        
        console.log('🎨 Portfolio Cédric Peyrat - Chargé avec succès');
    }

    // Lance l'initialisation quand le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
