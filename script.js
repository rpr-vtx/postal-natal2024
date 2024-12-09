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
    { ballId: "dec01", originalImage: "https://static.vecteezy.com/system/resources/previews/011/421/325/original/yellow-glossy-ball-png.png", targetImage: "https://usagif.com/wp-content/uploads/2022/hqgif/elmo-8-elmo-and-fire-background-acegif.gif", topPx:"200", leftVw:"51", width:"100px" },
    { ballId: "dec02", originalImage: "https://static.vecteezy.com/system/resources/previews/011/421/325/original/yellow-glossy-ball-png.png", targetImage: "https://www.icegif.com/wp-content/uploads/2023/02/icegif-24.gif", topPx:"320", leftVw:"43" },
    { ballId: "dec03", originalImage: "https://static.vecteezy.com/system/resources/previews/011/421/325/original/yellow-glossy-ball-png.png", targetImage: "https://usagif.com/wp-content/uploads/2022/hqgif/elmo-8-elmo-and-fire-background-acegif.gif", topPx:"430", leftVw:"57" },
    { ballId: "dec04", originalImage: "https://static.vecteezy.com/system/resources/previews/011/421/325/original/yellow-glossy-ball-png.png", targetImage: "https://usagif.com/wp-content/uploads/2022/hqgif/elmo-8-elmo-and-fire-background-acegif.gif", topPx:"460", leftVw:"52" },
    { ballId: "dec05", originalImage: "https://static.vecteezy.com/system/resources/previews/011/421/325/original/yellow-glossy-ball-png.png", targetImage: "https://www.icegif.com/wp-content/uploads/2023/02/icegif-24.gif", topPx:"550", leftVw:"36" },
    { ballId: "dec06", originalImage: "https://static.vecteezy.com/system/resources/previews/011/421/325/original/yellow-glossy-ball-png.png", targetImage: "https://uploads.dailydot.com/2023/11/Elmo-Fire.jpg?auto=compress&fm=pjpg", topPx:"550", leftVw:"66" },
    { ballId: "dec07", originalImage: "https://static.vecteezy.com/system/resources/previews/011/421/325/original/yellow-glossy-ball-png.png", targetImage: "https://www.icegif.com/wp-content/uploads/2023/02/icegif-24.gif", topPx:"650", leftVw:"36" },
];

// Get elements
const ballContainer = document.getElementById('ball-container');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const close = document.getElementById('close');


for (let i = 0; i < arrayOfBalls.length; i++) {
    let ball = arrayOfBalls[i];
    const image = document.createElement("img");
    ballContainer.appendChild(image);
    image.id = ball.ballId;
    image.className = "clickable-decoration";
    image.src = ball.originalImage;
    image.style.top = ball.topPx+ 'px';
    image.style.left = ball.leftVw + 'vw';
    if (ball.width)
        image.style.width = ball.width;

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
