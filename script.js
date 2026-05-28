// 🔥 BURAYA EKLEYECEKSİN
const takipciler = [
   
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
