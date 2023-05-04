function pageIndisponible(){
    /* Lorsque l'utilisateur clickera sur une page indisponibles ce message
       s'affichera */

    alert(`Le créateur de ce site a supprimé cette page.`) ;
}

// On récupère les pages indisponibles (que j'ai rendu volontairement indisponible)
const pageCollection = document.getElementById('collection-page') ;
const pageAbout      = document.getElementById('about-page') ;

/* Lorsque l'utilisateur clickera sur le lien qui mène vers l'une de ces pages la fonction 
   pageIndisponible sera appellée */
pageCollection.addEventListener('click', pageIndisponible) ;
pageAbout.addEventListener('click', pageIndisponible) ;
