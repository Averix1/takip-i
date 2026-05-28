// 🔥 BURAYA EKLEYECEKSİN
const takipciler = [
   {
    kullanici: "anil_cemal_mike_tyson",
    profil: "Screenshot_2026-05-28-17-48-23-940_com.instagram.android.jpg"
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
