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

const defaultWidth = "100px";
const arrayOfBalls = [
    { ballId: "luis", originalImage: "bola1.png", targetImage: "people/luis.jpg", topPx:"118", leftPx:"-56", width:defaultWidth },
    { ballId: "beatrizpeixoto", originalImage: "bola1.png", targetImage: "people/beatrixpeixoto.jpg", topPx:"271", leftPx:"-90", width:defaultWidth },
    { ballId: "antonio", originalImage: "bola1.png", targetImage: "people/antonio.jpg", topPx:"324", leftPx:"24", width:defaultWidth },
    { ballId: "brunoduarte", originalImage: "bola1.png", targetImage: "people/brunoduarte.jpg", topPx:"430", leftPx:"-9", width:defaultWidth },
    { ballId: "daniela", originalImage: "bola1.png", targetImage: "people/daniela.jpg", topPx:"538", leftPx:"-45", width:defaultWidth },
    { ballId: "leonardo", originalImage: "bola1.png", targetImage: "people/leonardo.jpg", topPx:"610", leftPx:"-328", width:defaultWidth },
    { ballId: "anataveira", originalImage: "bola1.png", targetImage: "people/ana.jpg", topPx:"672", leftPx:"-32", width:defaultWidth },
    { ballId: "gualdino", originalImage: "bola1.png", targetImage: "people/ricardogualdino.jpg", topPx:"614", leftPx:"80", width:defaultWidth },
    { ballId: "claudia", originalImage: "bola1.png", targetImage: "people/claudia.jpg", topPx:"754", leftPx:"53", width:defaultWidth },
    { ballId: "nicholas", originalImage: "bola1.png", targetImage: "people/nicholas.jpg", topPx:"1486", leftPx:"425", width:defaultWidth },
    { ballId: "robson", originalImage: "bola1.png", targetImage: "people/robson.jpg", topPx:"780", leftPx:"-488", width:defaultWidth },
    { ballId: "ricardo", originalImage: "bola1.png", targetImage: "people/ricardocordeiro.jpg", topPx:"786", leftPx:"216", width:defaultWidth },
    { ballId: "fabio", originalImage: "bola1.png", targetImage: "people/fabio.jpg", topPx:"875", leftPx:"140", width:defaultWidth },
    { ballId: "brunocarvalho", originalImage: "bola1.png", targetImage: "people/brunocarvalho.jpg", topPx:"982", leftPx:"-136", width:defaultWidth },
    { ballId: "beatrizsilva", originalImage: "bola1.png", targetImage: "people/beatrizsilva.jpg", topPx:"1496", leftPx:"-988", width:defaultWidth },
    { ballId: "andreia", originalImage: "bola1.png", targetImage: "people/andreia.jpg", topPx:"1020", leftPx:"126", width:defaultWidth },
    { ballId: "diogoperform", originalImage: "bola1.png", targetImage: "people/diogofernandes.jpg", topPx:"827", leftPx:"-49", width:defaultWidth },
    { ballId: "erik", originalImage: "bola1.png", targetImage: "people/erick.jpg", topPx:"1036", leftPx:"11", width:defaultWidth },
    { ballId: "tiagoaraujo", originalImage: "bola1.png", targetImage: "people/tiagoaraujo.jpg", topPx:"1051", leftPx:"-362", width:defaultWidth },
    { ballId: "nuno", originalImage: "bola1.png", targetImage: "people/nuno.jpg", topPx:"1425", leftPx:"-73", width:defaultWidth },
    { ballId: "armanda", originalImage: "bola1.png", targetImage: "people/armanda.jpg", topPx:"1357", leftPx:"-1020", width:defaultWidth },
    { ballId: "joaohenriques", originalImage: "bola1.png", targetImage: "people/joaohenriques.jpg", topPx:"1467", leftPx:"-694", width:defaultWidth },
    { ballId: "julio", originalImage: "bola1.png", targetImage: "people/julio.jpg", topPx:"1380", leftPx:"179", width:defaultWidth },
    { ballId: "tiagojorge", originalImage: "bola1.png", targetImage: "people/tiagojorge.jpg", topPx:"1486", leftPx:"286", width:defaultWidth },
    { ballId: "tiagocoelho", originalImage: "bola1.png", targetImage: "people/tiagocoelho.jpg", topPx:"897", leftPx:"-513", width:defaultWidth },
    { ballId: "gabriel", originalImage: "bola1.png", targetImage: "people/gabriel.jpg", topPx:"1246", leftPx:"-5", width:defaultWidth },
    { ballId: "adelaide", originalImage: "bola1.png", targetImage: "people/adelaide.jpg", topPx:"1156", leftPx:"166", width:defaultWidth },
    { ballId: "catarina", originalImage: "bola1.png", targetImage: "people/catarina.jpg", topPx:"1264", leftPx:"316", width:defaultWidth },
    { ballId: "mafalda", originalImage: "bola1.png", targetImage: "people/mafalda.jpg", topPx:"1259", leftPx:"-615", width:defaultWidth },
    { ballId: "rita", originalImage: "bola1.png", targetImage: "people/rita.jpg", topPx:"378", leftPx:"-144", width:defaultWidth },
    { ballId: "regina", originalImage: "bola1.png", targetImage: "people/regina.jpg", topPx:"847", leftPx:"-194", width:defaultWidth },
    { ballId: "pedro", originalImage: "bola1.png", targetImage: "people/pedro.jpg", topPx:"1158", leftPx:"-120", width:defaultWidth },
    { ballId: "ricardopaiva", originalImage: "bola1.png", targetImage: "people/ricardopaiva.jpg", topPx:"1380", leftPx:"441", width:defaultWidth },
    { ballId: "andre", originalImage: "bola1.png", targetImage: "people/andre.jpg", topPx:"1134", leftPx:"-547", width:defaultWidth },
    { ballId: "josue", originalImage: "bola1.png", targetImage: "people/josue.jpg", topPx:"1266", leftPx:"-347", width:defaultWidth },
    { ballId: "diogoromao", originalImage: "bola1.png", targetImage: "people/diogoromao.jpg", topPx:"485", leftPx:"-195", width:defaultWidth },
    { ballId: "delmar", originalImage: "bola1.png", targetImage: "people/delmar.jpg", topPx:"1020", leftPx:"236", width:defaultWidth },
    { ballId: "goncalo", originalImage: "bola1.png", targetImage: "people/goncalo.jpg", topPx:"672", leftPx:"-168", width:defaultWidth },
    { ballId: "manuela", originalImage: "bola1.png", targetImage: "people/manuela.jpg", topPx:"1272", leftPx:"101", width:defaultWidth },
];

// Get elements
const ballContainer = document.getElementById('ball-container');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const close = document.getElementById('close');


for (let i = 0; i < arrayOfBalls.length; i++) {
    let ball = arrayOfBalls[i];
    const outer = document.createElement("div");
    ballContainer.appendChild(outer);
    outer.className = "outer-clickable-decoration";
    outer.style.top = ball.topPx+ 'px';
    const image = document.createElement("img");
    outer.appendChild(image);
    image.id = ball.ballId;
    image.className = "clickable-decoration";
    image.src = ball.originalImage;
    image.style.marginLeft = ball.leftPx + 'px';
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
    else {
        modal.style.display = 'none'; // Just do it. ignore above
    }
});

const audio = document.getElementById('myAudio');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause';
    } else {
        audio.pause();
        button.textContent = 'Play';
    }
});
