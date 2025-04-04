const images = [
    { src: "https://i.pinimg.com/236x/36/6f/8f/366f8f20b0af87e06c19ae61fe52df90.jpg", text: "Ich liebe dich mehr als alles andere! ❤️" },
    { src: "https://www.yourtango.com/sites/default/files/2020/love-meme-puppy.jpg", text: "Du bist meine Sonne in meinem Leben! ☀️" },
    { src: "https://image.marriage.com/advice/wp-content/uploads/2019/08/Maybe-something-more-personal-like-this...-1607004904.jpg", text: "Mit dir fühlt sich jeder Moment magisch an! ✨" },
    { src: "https://i.pinimg.com/originals/9d/fc/fa/9dfcfa1dcd1dcc036e723de9c7fa4d56.jpg", text: "Mein Herz gehört nur dir! 💕" },
    { src: "https://i.pinimg.com/236x/8f/a4/69/8fa469d6dd60c87228fc1c969dd56577.jpg", text: "Dein Lächeln ist das Schönste auf der Welt! 😍" },
    { src: "https://i.pinimg.com/564x/ce/7b/2e/ce7b2ef3a5c9ceca8ef1373ecd790905.jpg", text: "Du bist mein größtes Glück meine kleine Prinzessin! 🍀" },
    { src: "https://i.pinimg.com/236x/64/4e/05/644e0589b7fb1fb32b7eccaebe6f61d4.jpg", text: "Jeder Tag mit dir ist ein Geschenk! 🎁" },
    { src: "https://i.pinimg.com/236x/9d/08/42/9d084219a8b45fc3f446501488d65913.jpg", text: "Du machst mein Leben so viel schöner! 🌸" },
    { src: "https://i.pinimg.com/236x/15/b7/04/15b704760e91232a134cbc14815d8b54.jpg", text: "Ich will für immer mit dir sein! 💖" },
    { src: "https://i.pinimg.com/originals/07/fa/90/07fa90b9b0f83f6182cde386b53d15c7.jpg", text: "Mein Herz schlägt nur für dich! 💘" }
];

function showLove(index) {
    const loveImage = document.getElementById('loveImage');
    const loveText = document.getElementById('loveText');

    loveImage.src = images[index].src;
    loveText.textContent = images[index].text;

    loveImage.classList.remove('hidden');
    loveText.classList.remove('hidden');
}
