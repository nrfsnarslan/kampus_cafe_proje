# AI Kullanım Notları

Bu projede yapay zekâ asistanı olarak **Claude** (Anthropic) kullandım. Ödev metninde Copilot erişimi olmazsa başka bir yolla ilerleyip incelenen kısımların belgelenmesi istendiği için kullandığım prompt'ları ve kodu nasıl incelediğimi aşağıya yazdım.

## Kullandığım prompt'lar

### Prompt 1 - Boş dosya sorunu
> "GitHub'daki 25115221004_nur_efsan_arslan klasörümü indirdiğimde dosyaların içi boş iniyor, bunu çalışır halde indir."

**Amacı:** Dosyalarımın neden boş geldiğini anlamak.
**Sonuç:** Yapay zekâ dosyaların GitHub'a zaten 0 bayt (boş) yüklendiğini, sorunun indirmede değil yüklemede olduğunu gösterdi. Bu yüzden siteyi yeniden hazırlamam gerekti.

### Prompt 2 - Siteyi oluşturma
> "Ödevin içeriği bu PDF'te, istenenleri yap. Kafenin adı Kampüs Cafe olacak ve özellikle arama çubuğunun çok iyi çalışması lazım."

**Amacı:** Ödevdeki üç sayfayı, kartları ve arama özelliğini oluşturmak.
**Sonuç:** Ana sayfa, etkinlikler ve hakkında sayfaları, ortak menü, `style.css` ve arama yapan `script.js` oluşturuldu.

### Prompt 3 - Kodu sadeleştirme
> "Kodu 2. sınıf bilgisayar programcılığı öğrencisinin yazacağı seviyede, sade tut."

**Amacı:** Kodun derste gördüğümüz konularla yazılması ve her satırını açıklayabilmem.
**Sonuç:** Değişken ve fonksiyon adları Türkçe yazıldı (`aramaKutusu`, `aramaYap`, `duzenle`), arama basit bir `for` döngüsü ve `if` ile yapıldı, ileri seviye yapılar kullanılmadı.

## Kabul ettiğim / değiştirdiğim öneriler

- **Kabul ettim:** Küçük harfe çevirirken `toLowerCase()` yerine `toLocaleLowerCase("tr-TR")` kullanılması. Normal `toLowerCase()` "KİTAP" kelimesini doğru çevirmiyor, "SINAV" kelimesindeki I harfini de "i" yapıyor, bu yüzden "sınav" ile eşleşmiyordu. Türkçe ayarı ile ikisi de doğru çalışıyor.
- **Kabul ettim:** Aradaki fazla boşlukların `replace(/\s+/g, " ")` ile teke indirilmesi. Böylece "çalışma   saatleri" yazınca da sonuç bulunuyor.
- **Değiştirdim:** İlk planda daha karmaşık bir yapı (aranan kelimeyi renklendirme vb.) vardı. Bunu istemedim, kodun sade ve anlaşılır olmasını tercih ettim.
- **Ekledim:** Esc tuşuyla aramanın temizlenmesi. Klavyeyle kullanan biri için Temizle butonuna gitmeden de sıfırlama yapılabiliyor.

## Kod açıklamaları (kendi sözlerimle)

### Event listener
```js
aramaKutusu.addEventListener("input", aramaYap);
```
Bu satır arama kutusunu dinler. Kutuya her harf yazıldığında veya silindiğinde `input` olayı oluşur ve `aramaYap` fonksiyonu çalışır. Bu sayede arama için Enter'a basmaya gerek kalmıyor, yazdıkça sonuçlar değişiyor.

Temizle butonundaki `click` dinleyicisi de butona basılınca kutuyu boşaltıyor, `aramaYap()` ile bütün kartları geri getiriyor ve imleci tekrar arama kutusuna koyuyor.

### Filtreleme koşulu
```js
if (aranan === "" || duzenle(baslik).includes(aranan)) {
```
Her kart için bu koşula bakılıyor. Arama kutusu boşsa (veya sadece boşluk varsa, çünkü `duzenle` boşlukları siliyor) `aranan === ""` doğru olur ve kart gösterilir. Boş değilse kartın başlığı da aynı şekilde düzenlenip aranan yazıyı içerip içermediğine `includes` ile bakılıyor. İçeriyorsa kart görünür ve sayaç bir artar, içermiyorsa kart `display = "none"` ile gizlenir. Sadece `.kart-baslik` okunduğu için arama açıklamalarda değil yalnızca başlıklarda yapılıyor.

## İnceleme (code review)

- Değişen dosyaları GitHub'daki commit diff ekranından kontrol ettim.
- Siteyi tarayıcıda açıp `TEST_NOTLARI.md` dosyasındaki 6 testi yaptım.
