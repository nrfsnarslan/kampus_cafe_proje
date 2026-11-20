# Kampüs Cafe

**Öğrenci:** Nur Efsan Arslan - 25115221004
**Ders:** BPR201 İnternet Tabanlı Programlama - Haftalık Proje Ödevi 2

**Repository bağlantısı:** https://github.com/nrfsnarslan/kampus_cafe_proje

## Projenin amacı

Kampüs Cafe, okuldaki öğrenci kafesinin etkinliklerini tek bir yerde toplayan üç sayfalık bir web sitesidir.

**Hedef kitle:** Ders aralarında çalışacak, arkadaşlarıyla buluşacak ve kampüsteki etkinliklere katılmak isteyen üniversite öğrencileri.

## Sayfalar

| Dosya | İçerik |
|---|---|
| `index.html` | Ana sayfa: site adı, hedef kitle, kısa tanıtım ve etkinliklere giden buton |
| `etkinlikler.html` | 6 etkinlik kartı (başlık, açıklama, kategori ve zaman) ve başlığa göre arama |
| `hakkinda.html` | Konuyu seçme nedenim ve sitenin ziyaretçiye nasıl yardımcı olduğu |
| `style.css` | Tüm sayfaların ortak stili ve telefon görünümü |
| `script.js` | Arama, sayaç, boş sonuç mesajı ve Temizle butonu |

## Arama özellikleri

- Yazdıkça sadece etkinlik **başlıklarına** göre filtreler.
- Büyük/küçük harf fark etmez (Türkçe harfler dahil: `KİTAP`, `SINAV` gibi).
- Baştaki/sondaki boşluklar ve kelimeler arasındaki fazla boşluklar dikkate alınmaz.
- Kaç etkinliğin gösterildiğini sayaç yazar.
- Sonuç yoksa "Aradığınız başlıkta bir etkinlik bulunamadı." mesajı çıkar.
- **Temizle** butonu veya **Esc** tuşu aramayı sıfırlar.

## Nasıl çalıştırılır?

1. Klasörü indirin (veya repository'yi Code → Download ZIP ile indirip çıkartın).
2. `index.html` dosyasına çift tıklayarak tarayıcıda açın.
3. Codespaces'te çalıştırmak için: terminalde `python3 -m http.server 8000` yazın ve açılan 8000 portunu tarayıcıda açın.

Backend, veritabanı veya giriş sistemi yoktur; her şey tarayıcıda çalışır.

## Ekran görüntüleri

- `screenshot/normal_gorunum.png` - "müzik" araması
- `screenshot/bos_sonuc.png` - sonuç bulunamayan arama
- `screenshot/mobil_gorunum.png` - 390 px telefon görünümü

## Diğer belgeler

- `AI_NOTLARI.md` - yapay zekâ kullanım kaydı
- `TEST_NOTLARI.md` - test sonuçları
