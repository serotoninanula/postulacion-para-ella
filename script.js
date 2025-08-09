document.addEventListener('DOMContentLoaded', () => {

    const cards = document.querySelectorAll('.card');
    if (cards.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        cards.forEach(card => observer.observe(card));
    }

    const setupModal = (triggerSelector, modalSelector) => {
        const trigger = document.querySelector(triggerSelector);
        const modal = document.querySelector(modalSelector);

        if (!trigger || !modal) return;

        const closeButton = modal.querySelector('.modal-close-button');

        const openModal = () => modal.classList.add('visible');
        const closeModal = () => modal.classList.remove('visible');

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });

        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    };

    const opciones = document.querySelectorAll('.opcion');
    const modalPlanes = document.querySelector('#custom-modal');
    if (opciones.length && modalPlanes) {
        opciones.forEach(opcion => {
            opcion.addEventListener('click', (e) => {
                e.preventDefault();
                modalPlanes.classList.add('visible');
            });
        });

        const closeBtnPlanes = modalPlanes.querySelector('.modal-close-button');
        if(closeBtnPlanes) closeBtnPlanes.addEventListener('click', () => modalPlanes.classList.remove('visible'));

        modalPlanes.addEventListener('click', (e) => {
            if (e.target === modalPlanes) {
                modalPlanes.classList.remove('visible');
            }
        });
    }

    setupModal('#gatillo-secreto', '#modal-secreto');

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.visible').forEach(modal => modal.classList.remove('visible'));
        }
    });
});