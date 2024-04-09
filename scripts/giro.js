const instructorCards = document.querySelectorAll('.instructor-card');
        instructorCards.forEach(card => {
            card.addEventListener('click', () => {
                card.classList.toggle('flipped');
            });
        });