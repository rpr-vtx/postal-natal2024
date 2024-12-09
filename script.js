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
