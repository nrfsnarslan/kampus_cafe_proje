# Test Notları

Testler `etkinlikler.html` sayfasında yapıldı. Sayfada toplam **6** etkinlik kartı var.

| # | Test | Girdi | Beklenen sonuç | Gerçekleşen sonuç | Karar |
|---|---|---|---|---|---|
| 1 | Bir başlığın ayırt edici bölümünü yazmak | `müzik` | Sadece "Akustik Müzik Gecesi" görünür, sayaç 1 olur | Sadece "Akustik Müzik Gecesi" göründü, sayaç "1 etkinlik gösteriliyor" | Geçti |
| 2 | Harf büyüklüğünü değiştirip kenarlara boşluk eklemek | `  KİTAP  ` ve `SINAV` | Küçük harfle yazınca çıkan başlıklar yine çıkar | "Kitap Kulübü Buluşması" ve "Sınav Haftası Çay ve Simit Molası" bulundu, sayaç 1 | Geçti |
| 3 | Hiçbir başlıkta olmayan bir ifade yazmak | `pizza` | Sayaç 0 olur, boş sonuç mesajı görünür | Sayaç "0 etkinlik gösteriliyor", "Aradığınız başlıkta bir etkinlik bulunamadı." mesajı çıktı | Geçti |
| 4 | Temizle'ye basmak, sonra sadece boşluk yazmak | Temizle butonu, sonra `     ` | İki durumda da 6 kartın hepsi görünür | Temizle'den sonra 6 kart, sadece boşluk yazınca da 6 kart göründü; boş mesajı gizlendi | Geçti |
| 5 | Her sayfadaki menü bağlantılarını açmak | Ana Sayfa, Etkinlikler, Hakkında (3 sayfada da) | Bağlantılar doğru sayfalara gider | 3 sayfanın menüsü de `index.html`, `etkinlikler.html`, `hakkinda.html` adreslerine gidiyor, hepsi açıldı | Geçti |
| 6 | Ekranı 390 px genişliğe getirip Tab ile gezmek | 390 px genişlik, Tab tuşu | Yatay taşma olmaz; input ve butona klavyeyle ulaşılır | Sayfa genişliği 390 px'te kaldı, yatay kaydırma çıkmadı. Tab sırası: Ana Sayfa → Etkinlikler → Hakkında → arama kutusu → Temizle. Odaklanan öğede turuncu çerçeve görünüyor | Geçti |

## Ek testler

| Girdi | Beklenen | Gerçekleşen | Karar |
|---|---|---|---|
| `çalışma   saatleri` (arada fazla boşluk) | "Sessiz Çalışma Saatleri" bulunur | Bulundu, sayaç 1 | Geçti |
| `ATÖLYE` | "Latte Art Atölyesi" bulunur | Bulundu, sayaç 1 | Geçti |
| Arama kutusundayken Esc tuşu | Arama temizlenir | Kutu boşaldı, 6 kart göründü | Geçti |

## Ekran görüntüleri

- Normal arama: `screenshot/normal_gorunum.png`
- Boş sonuç: `screenshot/bos_sonuc.png`
- Mobil görünüm (390 px): `screenshot/mobil_gorunum.png`
