// Site web : ninasingla.fr
// Portfolio réalisé dans le cadre de mon BTS SIO - SLAM : 1e année
// Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers
// Auteur : Nina Singla

// Fonctionnalité "Voir plus / Voir moins" pour le portfolio
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    // Créer le bouton "Voir plus"
    const toggleButton = document.createElement('button');
    toggleButton.className = 'portfolio-toggle-btn';
    toggleButton.innerHTML = '<span>Voir plus</span>';
    toggleButton.setAttribute('aria-expanded', 'false');
    
    // Insérer le bouton après la grille
    portfolioGrid.parentNode.insertBefore(toggleButton, portfolioGrid.nextSibling);
    
    // Masquer les projets au-delà du 4ème
    portfolioItems.forEach((item, index) => {
        if (index >= 4) {
            item.classList.add('portfolio-hidden');
        }
    });
    
    // Gestion du clic sur le bouton
    toggleButton.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
        portfolioItems.forEach((item, index) => {
            if (index >= 4) {
                if (isExpanded) {
                    item.classList.add('portfolio-hidden');
                } else {
                    item.classList.remove('portfolio-hidden');
                }
            }
        });
        
        // Mettre à jour le bouton
        if (isExpanded) {
            this.setAttribute('aria-expanded', 'false');
            this.innerHTML = '<span>Voir plus</span>';
        } else {
            this.setAttribute('aria-expanded', 'true');
            this.innerHTML = '<span>Voir moins</span>';
            
            // Scroll smooth vers les nouveaux éléments
            setTimeout(() => {
                portfolioItems[4].scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 300);
        }
    });
});

// Gestion des boutons "En savoir plus" pour la formation
document.addEventListener('DOMContentLoaded', function() {
    const formationLinks = document.querySelectorAll('.formation-card .timeline-link');
    const detailsContainer = document.getElementById('formation-details');
    const allDetails = document.querySelectorAll('.formation-detail');
    
    formationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const formationType = this.getAttribute('data-formation');
            const targetDetail = document.getElementById(`detail-${formationType}`);
            
            // Masquer tous les détails
            allDetails.forEach(detail => {
                detail.style.display = 'none';
            });
            
            // Afficher le conteneur et le détail correspondant
            detailsContainer.style.display = 'block';
            targetDetail.style.display = 'block';
            
            // Ajouter l'animation
            setTimeout(() => {
                detailsContainer.classList.add('active');
            }, 10);
            
            // Scroll vers la description
            setTimeout(() => {
                detailsContainer.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest'
                });
            }, 300);
        });
    });
    
    // Gestion des boutons "Fermer"
    const closeButtons = document.querySelectorAll('.close-formation-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            detailsContainer.classList.remove('active');
            setTimeout(() => {
                detailsContainer.style.display = 'none';
                allDetails.forEach(detail => {
                    detail.style.display = 'none';
                });
            }, 300);
        });
    });
});