const images = [
    { src: "https://placekitten.com/400/300", text: "Ich liebe dich mehr als alles andere! ❤️" },
    { src: "https://placekitten.com/401/300", text: "Du bist meine Sonne in meinem Leben! ☀️" },
    { src: "https://placekitten.com/402/300", text: "Mit dir fühlt sich jeder Moment magisch an! ✨" },
    { src: "https://placekitten.com/403/300", text: "Mein Herz gehört nur dir! 💕" },
    { src: "https://placekitten.com/404/300", text: "Dein Lächeln ist das Schönste auf der Welt! 😍" },
    { src: "https://placekitten.com/405/300", text: "Du bist mein größtes Glück meine kleine Prinzessin! 🍀" },
    { src: "https://placekitten.com/406/300", text: "Jeder Tag mit dir ist ein Geschenk! 🎁" },
    { src: "https://placekitten.com/407/300", text: "Du machst mein Leben so viel schöner! 🌸" },
    { src: "https://placekitten.com/408/300", text: "Ich will für immer mit dir sein! 💖" },
    { src: "https://placekitten.com/409/300", text: "Mein Herz schlägt nur für dich! 💘" }
];

function showLove(index) {
    const loveImage = document.getElementById('loveImage');
    const loveText = document.getElementById('loveText');

    loveImage.src = images[index].src;
    loveText.textContent = images[index].text;

    loveImage.classList.remove('hidden');
    loveText.classList.remove('hidden');
}
