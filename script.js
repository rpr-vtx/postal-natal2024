const messages = [
    "✅ Presentes testados... tudo entregue no prazo!",
    "✅ Árvore decorada... 100% aprovada!",
    "✅ Espírito natalino... testado e funcional!",
    "✅ Equipa unida... resultados incríveis!",
    "🐞 Um pequeno bug apareceu... só para desejar Feliz Natal!"
];

document.getElementById("testButton").addEventListener("click", () => {
    const resultsDiv = document.getElementById("results");
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    resultsDiv.textContent = randomMessage;
});


const arrayOfBalls = [
    { ballId: "dec01", targetImage: "https://uploads.dailydot.com/2023/11/Elmo-Fire.jpg?auto=compress&fm=pjpg" },
    { ballId: "dec02", targetImage: "https://uploads.dailydot.com/2023/11/Elmo-Fire.jpg?auto=compress&fm=pjpg" },
    { ballId: "dec03", targetImage: "https://uploads.dailydot.com/2023/11/Elmo-Fire.jpg?auto=compress&fm=pjpg" },
    { ballId: "dec04", targetImage: "https://uploads.dailydot.com/2023/11/Elmo-Fire.jpg?auto=compress&fm=pjpg" }
];

// Get elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const close = document.getElementById('close');


var decorations = document.getElementsByClassName('clickable-decoration');
for (let j = 0; j < decorations.length; j++) {
    const image = decorations[j];
    // Show modal on image click
    image.addEventListener('click', () => {
        modal.style.display = 'flex';

        for (let i = 0; i < arrayOfBalls.length; i++) {
            if (arrayOfBalls[i].ballId === image.id)
                modalImage.src = arrayOfBalls[i].targetImage;
        }
        if (modalImage.src === "")
            modalImage.src = image.src;
    });
}


// Close modal when clicking the close button
close.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
