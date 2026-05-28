// 🔥 BURAYA EKLEYECEKSİN
const takipciler = [
   {
    kullanici: "anil_cemal_mike_tyson",
    profil: "images/anil_cemal.jpg"
},
];

// GÖSTER
const liste = document.getElementById("liste");

takipciler.forEach(kisi => {
    liste.innerHTML += `
        <div class="kisi">
            <img src="${kisi.profil}" class="pp">
            <div>@${kisi.kullanici}</div>
        </div>
    `;
});
