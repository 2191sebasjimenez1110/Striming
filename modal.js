const openModal = document.querySelectorAll('.tarjeta');
const closeModal = document.querySelectorAll('.close-modal');

openModal.forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.classList.add('show-modal');
    });
});

closeModal.forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.classList.remove('show-modal');
    });
});

window.addEventListener("click", event => {
    modal.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
