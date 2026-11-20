// Etkinlikler sayfasındaki arama işlemleri

const aramaKutusu = document.getElementById("arama");
const temizleButonu = document.getElementById("temizle");
const sayac = document.getElementById("sayac");
const bosMesaj = document.getElementById("bos-mesaj");
const kartlar = document.querySelectorAll(".kart");

// Yazıyı karşılaştırmaya hazır hale getirir:
// baştaki ve sondaki boşlukları siler, aradaki fazla boşlukları teke indirir,
// Türkçe kurallarına göre küçük harfe çevirir (I -> ı, İ -> i)
function duzenle(yazi) {
    return yazi.trim().replace(/\s+/g, " ").toLocaleLowerCase("tr-TR");
}

function aramaYap() {
    const aranan = duzenle(aramaKutusu.value);
    let gorunenSayisi = 0;

    for (let i = 0; i < kartlar.length; i++) {
        const baslik = kartlar[i].querySelector(".kart-baslik").textContent;

        // Arama boşsa ya da başlık aranan kelimeyi içeriyorsa kart görünür
        if (aranan === "" || duzenle(baslik).includes(aranan)) {
            kartlar[i].style.display = "";
            gorunenSayisi++;
        } else {
            kartlar[i].style.display = "none";
        }
    }

    sayac.textContent = gorunenSayisi + " etkinlik gösteriliyor";

    if (gorunenSayisi === 0) {
        bosMesaj.classList.remove("gizli");
    } else {
        bosMesaj.classList.add("gizli");
    }
}

// Her harf yazıldığında arama tekrar yapılır
aramaKutusu.addEventListener("input", aramaYap);

// Temizle butonu kutuyu boşaltır ve tüm kartları geri getirir
temizleButonu.addEventListener("click", function () {
    aramaKutusu.value = "";
    aramaYap();
    aramaKutusu.focus();
});

// Esc tuşuna basınca da arama temizlensin
aramaKutusu.addEventListener("keydown", function (olay) {
    if (olay.key === "Escape") {
        aramaKutusu.value = "";
        aramaYap();
    }
});

// Sayfa ilk açıldığında sayaç doğru sayıyı göstersin
aramaYap();
