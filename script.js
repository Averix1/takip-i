// 🔥 TAKİPÇİLERİ BURAYA YAZ
const takipciler = [
    "anil_cemal_mike_tyson",
  
];

// GÖSTER
const liste = document.getElementById("liste");

takipciler.forEach(kullanici => {
    liste.innerHTML += `
        <div class="kisi">@${kullanici}</div>
    `;
});
