const gameLevels = [
    {
        id: 1,
        badge: "Seviye 1 (Kolay)",
        title: "Çay Demleme Algoritması",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Çaydanlığın altına su koyup ocağı yak." },
            { id: "step2", text: "Su kaynadığında üst demliğe çay ekle." },
            { id: "step3", text: "Kaynayan suyu üst demlikteki çayın üzerine dök." },
            { id: "step4", text: "Alt çaydanlığa tekrar su ekle ve ocağı kıs." },
            { id: "step5", text: "Çayın demlenmesi için 15 dakika bekle." }
        ]
    },
    {
        id: 2,
        badge: "Seviye 1 (Kolay)",
        title: "Günlük Kalori Açığı Hesaplama Algoritması",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Gün içinde yiyeceklerden alınan toplam kaloriyi hesapla." },
            { id: "step2", text: "Bazal metabolizma ve antrenmanla yakılan toplam kaloriyi hesapla." },
            { id: "step3", text: "Yakılan toplam kaloriden, alınan toplam kaloriyi çıkar." },
            { id: "step4", text: "Sonuç pozitifse ekrana 'Kalori Açığındasın', negatifse 'Fazla Kalori Aldın' yazdır." }
        ]
    },
    {
        id: 3,
        badge: "Seviye 1 (kolay)",
        title: "C# Sınıf (Class) ve Nesne (Object) Oluşturma",
        baseScore: 500,
        steps: [
            { id: "step1", text: "public class Araba { } şeklinde bir sınıf şablonu tanımla." },
            { id: "step2", text: "İçine public string Marka; public int Hiz; gibi property'ler ekle." },
            { id: "step3", text: "Main metodu içinde Araba benimArabam = new Araba(); diyerek nesneyi türet." },
            { id: "step4", text: "benimArabam.Marka = \"Cadillac\"; şeklinde özelliklere değer ata." }
        ]
    },
    {
        id: 4,
        badge: "Seviye 1 (kolay)",
        title: "Bozulan Elektronik Cihazı 'Türk Usulü' Tamir Etme",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Çalışmayan cihazın (kumanda, TV vb.) önce fişini çek/tak veya pillerini kendi etrafında çevir." },
            { id: "step2", text: "Hala çalışmıyorsa cihazın yan veya üst kısmına avuç içiyle orta şiddette rasyonel bir darbe indir." },
            { id: "step3", text: "Cihaz mucizevi şekilde çalışırsa 'Klasik temassızlık abi' diyerek durumu kabullen." },
            { id: "step4", text: "Çalışmazsa şiddeti hafif artırarak cihazı sarsıp içerideki tozu dumanı dağıtmayı dene." },
            { id: "step5", text: "Yine olmadıysa çaresizliği kabul edip yetkili servisi ara veya yenisini sipariş et." }
        ]
    },
    {
        id: 5,
        badge: "Seviye 1 (Kolay)",
        title: "Antrenman Öncesi Çanta Hazırlığı",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Temiz spor kıyafetlerini ve yedek tişörtünü çantaya yerleştir." },
            { id: "step2", text: "Ağırlık kemerini ve havluyu unutmadığından emin ol." },
            { id: "step3", text: "Shaker'a protein tozunu koy ve kapağını sıkıca kapat." },
            { id: "step4", text: "Su mataranı doldur ve kulaklığını al." },
            { id: "step5", text: "Çantanın fermuarını çekip spor salonuna doğru yola çık." }
        ]
    }, {
        id: 6,
        badge: "Seviye 1 (kolay)",
        title: "Kayıpsız Çamaşır Yıkama ve Asma Algoritması",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Kirli sepetini yere döküp beyazlar, siyahlar ve renkliler olarak üç kesin gruba ayır." },
            { id: "step2", text: "Makineye atacağın her kıyafetin cebini (peçete, kulaklık, bozuk para) son bir kez kontrol et." },
            { id: "step3", text: "Kıyafetleri makineye bas, deterjanı ve yumuşatıcıyı sadece ilgili gözlere taşırmadan koy." },
            { id: "step4", text: "Renkliler için sıcaklığı maksimum 30-40 dereceye ayarla ki kıyafetler çekmesin, 'Başla'ya bas." },
            { id: "step5", text: "Program bitince çamaşırları makinede bekletip kokuşturmadan çıkar ve çırparak kırışıklıklarını açıp as." }
        ]
    },
    {
        id: 7,
        badge: "Seviye 1 (Kolay)",
        title: "C Dilinde Değişken Tanımlama ve Yazdırma",
        baseScore: 500,
        steps: [
            { id: "step1", text: "int main() fonksiyonunu aç." },
            { id: "step2", text: "int yas = 21; şeklinde bir tamsayı değişkeni tanımla." },
            { id: "step3", text: "float boy = 1.87; şeklinde bir ondalıklı değişken tanımla." },
            { id: "step4", text: "Kodu derle ve ekrandaki çıktıyı kontrol et." }
        ]
    },
    {
        id: 8,
        badge: "Seviye 1 (Kolay)",
        title: "Arabaya Bindiğinde Yapılacaklar (İlk Marş)",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Kapıyı açıp koltuğa otur ve ilk iş emniyet kemerini tak." },
            { id: "step2", text: "Koltuk mesafesini ve dikiz aynalarını sürüş pozisyonuna göre ayarla." },
            { id: "step3", text: "Vitesin boşta (veya otomatikse P'de) olduğundan emin ol, frene bas." },
            { id: "step4", text: "Kontağı yarım çevir, gösterge ışıklarının sönmesini bekle ve marşa bas." },
            { id: "step5", text: "Motor devrinin normale dönmesini kısa bir süre bekle, vitese at ve el frenini indirerek kalk." }
        ]
    },
    {
        id: 9,
        badge: "Seviye 1 (Kolay)",
        title: "Evi Elektrikli Süpürgeyle Temizleme Algoritması",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Yerdeki kabloları, çorapları ve büyük nesneleri topla." },
            { id: "step2", text: "Süpürgenin fişini prize tak ve yüzeye (halı/parke) uygun başlığı seç." },
            { id: "step3", text: "Odanın en dip köşesinden başlayarak kapıya doğru geri geri gelerek süpür." },
            { id: "step4", text: "Halıların üzerinde süpürgeyi tüylerin yatış yönüne doğru çekerek derinlemesine temizle." },
            { id: "step5", text: "İşin bitince fişi topla, hazneyi çöpe boşalt ve makineyi yerine kaldır." }
        ]
    },
    {
        id: 10,
        badge: "Seviye 1 (Kolay)",
        title: "Mangal Ateşini Hazırlama Algoritması",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Mangalın içini temizle ve kömürleri piramit şeklinde üst üste diz." },
            { id: "step2", text: "Piramidin alt kısımlarına çıra veya tutuşturucu yerleştir." },
            { id: "step3", text: "Çıraları yak ve ateşin kömürlere iyice sıçramasını bekle." },
            { id: "step4", text: "Alevler sönüp kömürlerin üzeri beyaz külle kaplanana kadar bekle (köz olmasını sağla)." },
            { id: "step5", text: "Közü maşa ile mangalın zeminine eşit şekilde yay ve ızgarayı yerleştir." }
        ]
    },
    {
        id: 11,
        badge: "Seviye 1 (Kolay)",
        title: "Araba Kaba Temizliği nasıl yapılır",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Aracın içindeki boş şişe, fiş gibi kaba çöpleri poşete topla." },
            { id: "step2", text: "Paspasları dışarı çıkar ve iyice silkele." },
            { id: "step3", text: "Basınçlı su ile dış kaportadaki çamuru ve tozu yukarıdan aşağı doğru akıt." },
            { id: "step4", text: "Paspasları yerine yerleştir." }
        ]
    },
    {
        id: 12,
        badge: "Seviye 1 (Kolay)",
        title: "Veritabanına Kayıt Ekleme (INSERT)",
        baseScore: 500,
        steps: [
            { id: "step1", text: "INSERT INTO Kullanicilar (Ad, Soyad) komutunu yaz." },
            { id: "step2", text: "VALUES ('Ali', 'Yılmaz') diyerek eklenecek verileri belirt." },
            { id: "step3", text: "Sorguyu çalıştır." },
            { id: "step4", text: "SELECT sorgusu atarak yeni kaydın eklendiğini doğrula." }
        ]
    },
    {
        id: 13,
        badge: "Seviye 1 (Kolay)",
        title: "Instagram 'Photo Dump' Gönderisi Hazırlama Algoritması",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Galeriden birbiriyle uyumlu, arka arkaya akacak fotoğrafları seç." },
            { id: "step2", text: "Görsellerin sıralamasını ayarla ve genel renklere uygun bir filtre seç." },
            { id: "step3", text: "Gönderinin arka planına trend ve atmosfere uygun bir müzik ekle." },
            { id: "step4", text: "Dikkat çekici, kısa ve net bir açıklama (caption) yaz." },
            { id: "step5", text: "Paylaş butonuna bas ve etkileşimleri takip et." }
        ]
    },
    {
        id: 14,
        badge: "Seviye 1 (kolay)",
        title: "SQL INNER JOIN ile Tablo Birleştirme",
        baseScore: 500,
        steps: [
            { id: "step1", text: "SELECT Musteriler.Ad, Siparisler.Tarih yazarak çekilecek kolonları belirt." },
            { id: "step2", text: "FROM Musteriler diyerek ana tabloyu seç." },
            { id: "step3", text: "INNER JOIN Siparisler yazarak ikinci tabloyu dahil et." },
            { id: "step4", text: "ON Musteriler.ID = Siparisler.MusteriID ile bağlantı noktasını (Foreign Key) belirle." },
            { id: "step5", text: "Sorguyu çalıştırıp eşleşen verileri kontrol et." }
        ]
    },
    {
        id: 15,
        badge: "Seviye 1 (orta)",
        title: "Yeni Tanışılan Birinin İsmini Unutma Krizi",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Karşıdaki kişi hararetle bir şeyler anlatırken onun adını tamamen unuttuğunu fark et ve çaktırma." },
            { id: "step2", text: "Sohbet esnasında ona direkt 'Sen, Kardeşim, Hocam' gibi joker hitap kelimeleri kullanarak idare et." },
            { id: "step3", text: "Telefonunu çıkarıp 'Seni Instagram'dan ekleyeyim, kullanıcı adın neydi?' diyerek zekice bir manevra yap." },
            { id: "step4", text: "Eğer sosyal medya kullanmıyorsa, 'Numaranı kaydedeyim, ismini rehbere tam olarak nasıl yazayım?' diye sor." },
            { id: "step5", text: "İsmi duyduğun an zihnine kazı ve sohbetin geri kalanında ismini kullanarak pekiştir." }
        ]
    },
    {
        id: 16,
        badge: "Seviye 1 (kolay)",
        title: "C# Try-Catch Hata Yönetimi",
        baseScore: 500,
        steps: [
            { id: "step1", text: "Programın çökmesine sebep olabilecek riskli kodu try { } bloğuna al." },
            { id: "step2", text: "Hata yakalandığında çalışacak kodlar için catch (Exception ex) { } bloğu aç." },
            { id: "step3", text: "Catch içinde Console.WriteLine(ex.Message); ile hatayı kullanıcıya yansıt." },
            { id: "step4", text: "Bağlantıları kapatmak veya temizlik yapmak için en sona finally { } bloğu ekle." }
        ]
    },
    {
        id: 17,
        badge: "Seviye 2 (Orta)",
        title: "1'den 10'a Kadar Olan Çift Sayıları Ekrana Yazdırma Döngüsü",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "Bir sayı değişkeni (sayi) oluştur ve değerini 1 yap." },
            { id: "step2", text: "Döngüyü başlat: Eğer sayi 10'dan büyükse döngüyü bitir." },
            { id: "step3", text: "Eğer sayi'nin 2'ye bölümünden kalan 0 ise (çift sayıysa), ekrana yazdır." },
            { id: "step4", text: "sayi değişkenini 1 artır." },
            { id: "step5", text: "Döngünün başına (ikinci adıma) geri dön." }
        ]
    },
    {
        id: 18,
        badge: "Seviye 2 (orta)",
        title: "Dolmuşta Kalabalığı Yarıp 'Müsait Yerde' İnme Olayı",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "İneceğin durağa 300 metre kala kulaklığın tekini çıkarıp dış dünyayla bağlantı kur." },
            { id: "step2", text: "Kapıya doğru hamle yaparken önündeki insanlara hafifçe temas edip 'Pardon, müsade eder misiniz?' diyerek koridor aç." },
            { id: "step3", text: "Şoförün duyabileceği mesafeye geldiğinde ses tellerini hazırlayıp tok ve net bir sesle 'Müsait bir yerde inecek var' de." },
            { id: "step4", text: "Şoför aniden sağa kırıp fren yapacağından düşmemek için sıkıca demirlere tutun." },
            { id: "step5", text: "Kapı açıldığı an seri bir şekilde inip arkana bakmadan yoluna devam et." }
        ]
    },
    {
        id: 19,
        badge: "Seviye 2 (orta)",
        title: "GitHub'da Sıfırdan Repo Açıp İlk Commit'i Fırlatma",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "GitHub profiline gir, 'New' butonuna bas, projeye isim ver (README eklemeden boş repo oluştur)." },
            { id: "step2", text: "Bilgisayarında projenin klasörüne sağ tıkla, terminali aç ve 'git init' ile yerel Git izlemesini başlat." },
            { id: "step3", text: "Klasördeki her şeyi sahneye almak için terminale 'git add .' komutunu yaz." },
            { id: "step4", text: "Değişiklikleri mühürlemek için 'git commit -m \"İlk proje iskeleti kuruldu\"' komutunu gir." },
            { id: "step5", text: "GitHub'ın ekranda verdiği 'git remote add origin <link>' ve 'git push -u origin main' komutlarını yapıştırıp kodu buluta yolla." }
        ]
    },
    {
        id: 20,
        badge: "Seviye 2 (Orta)",
        title: "C# Dizilerde En Büyük Elemanı Bulma",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "Rastgele sayılardan oluşan bir int[] dizisi oluştur." },
            { id: "step2", text: "int enBuyuk = dizi[0]; diyerek ilk elemanı referans al." },
            { id: "step3", text: "foreach döngüsü ile dizinin tüm elemanlarını tek tek gez." },
            { id: "step4", text: "Eğer gezilen eleman enBuyuk'ten büyükse, enBuyuk değişkenini o elemanla güncelle." },
            { id: "step5", text: "Döngü bittiğinde sonucu ekrana yazdır." }
        ]
    },
    {
        id: 21,
        badge: "Seviye 2 (Orta)",
        title: "Havaalanı Stok Takip Sistemine Yeni Parça Girişi",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "Sisteme giriş yapan personelin yetkisini kontrol et." },
            { id: "step2", text: "Yeni eklenecek uçak parçasının barkodunu okut." },
            { id: "step3", text: "Barkod sistemde zaten varsa uyarı ver, yoksa yeni kayıt formunu aç." },
            { id: "step4", text: "Parça adı, adet ve depo lokasyonu bilgilerini forma gir." },
            { id: "step5", text: "Verileri Excel veya Veritabanına kaydet ve güncel stok listesini ekrana getir." }
        ]
    },
    {
        id: 22,
        badge: "Seviye 2 (orta)",
        title: "Profesyonel Mangal (Köz Ayarlama ve Mühürleme)",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "Mangalın bir tarafına közü yığ (sıcak bölge), diğer tarafı boş bırak (soğuk bölge)." },
            { id: "step2", text: "Kalın kırmızı eti önce sıcak bölgede yüksek ızgaraya temas ettirerek iki yüzünü mühürle." },
            { id: "step3", text: "Etin içi pişsin ama dışı yanmasın diye mühürlenen eti soğuk bölgeye al." },
            { id: "step4", text: "Etin suyunu kaçırmamak için çatalla delmek yerine sadece maşa kullanarak çevir." },
            { id: "step5", text: "Pişen eti tahtaya alıp 2-3 dakika dinlendirerek sularının içine hapsolmasını sağla." }
        ]
    },
    {
        id: 23,
        badge: "Seviye 2 (Orta)",
        title: "Evde Detaylı Temizlik (Vileda ve Toz Alma)",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "Elektrikli süpürge işlemi bittikten sonra kova ve paspası hazırla." },
            { id: "step2", text: "Kovaya ılık su ve yüzey temizleyici ekle." },
            { id: "step3", text: "Paspası iyice sıkıp ıslak bırakmadan parkeleri silmeye başla." },
            { id: "step4", text: "Nemli bir mikrofiber bezle televizyon ünitesi, masa ve rafların tozunu al." },
            { id: "step5", text: "Zeminin kuruması için camları açıp evi havalandır." }
        ]
    },


    ,

    {
        id: 24,
        badge: "Seviye 2 (Orta)",
        title: "Evde Detaylı Temizlik (Vileda ve Toz Alma)",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "Elektrikli süpürge işlemi bittikten sonra kova ve paspası hazırla." },
            { id: "step2", text: "Kovaya ılık su ve yüzey temizleyici ekle." },
            { id: "step3", text: "Paspası iyice sıkıp ıslak bırakmadan parkeleri silmeye başla." },
            { id: "step4", text: "Nemli bir mikrofiber bezle televizyon ünitesi, masa ve rafların tozunu al." },
            { id: "step5", text: "Zeminin kuruması için camları açıp evi havalandır." }
        ]
    },
    {
        id: 25,
        badge: "Seviye 2 (Orta)",
        title: "C Dilinde Diziyi Ters Çevirme",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "10 elemanlı bir int dizisi tanımla ve doldur." },
            { id: "step2", text: "Dizinin başını (start) ve sonunu (end) tutan iki indis değişkeni belirle." },
            { id: "step3", text: "while (start < end) döngüsü aç." },
            { id: "step4", text: "Geçici (temp) değişken kullanarak baştaki ve sondaki elemanları yer değiştir." },
            { id: "step5", text: "start'ı 1 artır, end'i 1 azalt, döngü bitince diziyi yazdır." }
        ]
    },

    {
        id: 26,
        badge: "Seviye 3 (Zor)",
        title: "ASP.NET Core MVC ile API'den Veri Çekip Listeleme",
        baseScore: 1500,
        steps: [
            { id: "step1", text: "Controller sınıfı içinde asenkron (async) bir HTTP GET metodu oluştur." },
            { id: "step2", text: "HttpClient kullanarak Web API uç noktasına (endpoint) istek at." },
            { id: "step3", text: "Gelen JSON yanıtını C# tarafındaki uygun Model listesine dönüştür (Deserialize)." },
            { id: "step4", text: "Dönüştürme işlemi başarısız olursa veya liste boşsa hata fırlat." },
            { id: "step5", text: "Veriler sorunsuz alındıysa Model listesini View'a gönder." },
            { id: "step6", text: "View (Razor) içerisinde foreach döngüsü kullanarak verileri bir HTML tablosuna yazdır." }
        ]
    },
    {
        id: 27,
        badge: "Seviye 3 (Zor)",
        title: "Veritabanına Yeni Bir Kullanıcı Kayıt Etme ve Şifre Doğrulama",
        baseScore: 1500,
        steps: [
            { id: "step1", text: "Kullanıcıdan kayıt formundaki verileri (e-posta, şifre) al." },
            { id: "step2", text: "Şifrenin en az 8 karakter, harf ve rakam içerdiğini doğrula." },
            { id: "step3", text: "E-posta adresinin veritabanında önceden kayıtlı olup olmadığını kontrol et." },
            { id: "step4", text: "Güvenlik için şifreyi geri döndürülemez bir algoritmaya (hash) sok." },
            { id: "step5", text: "Kullanıcının verilerini (e-posta ve hashlenmiş şifre) veritabanına kaydet." },
            { id: "step6", text: "Kullanıcıya 'Kayıt Başarılı' mesajı göster ve giriş sayfasına yönlendir." }
        ]
    },
    {
        id: 28,
        badge: "Seviye 3 (zor)",
        title: "Karşı Tarafı Sıkmayan Bir Sohbet Başlatma",
        baseScore: 1500,
        steps: [
            { id: "step1", text: "Durduk yere yazmak yerine, paylaştığı bir story'den mantıklı bir konu yakala." },
            { id: "step2", text: "Sade, net ve gereksiz iltifat barındırmayan bir tepki veya soru ilet." },
            { id: "step3", text: "Mesajlara anında atlamak yerine doğal bir akışta, kendi meşguliyetinden vakit buldukça cevap ver." },
            { id: "step4", text: "Konu bitmeye yakınsa uzatmak için zorlama, muhabbeti zirvede kes." },
            { id: "step5", text: "Bu sayede gizemini koru ve bir sonraki sohbete açık kapı bırak." }
        ]
    },
    {
        id: 29,
        badge: "Seviye 3 (Zor)",
        title: "Definasyon (Cut) Dönemi Kalori Döngüsü",
        baseScore: 1500,
        steps: [
            { id: "step1", text: "Günlük bazal metabolizmanı (BMR) ve hareket katsayını hesapla." },
            { id: "step2", text: "Günlük koruma kalorinden 300-500 kalori çıkararak hedef kalori açığını bul." },
            { id: "step3", text: "Protein miktarını kas kaybını önlemek için yüksek (kilo x 2g) tut." },
            { id: "step4", text: "Karbonhidratı antrenman öncesi ve sonrası öğünlere odaklayıp diğer öğünlerde kıs." },
            { id: "step5", text: "Düzenli kardiyo ve ağırlık antrenmanı ile günlük açığı kapatıp değişimi aynada takip et." }
        ]
    }, {
        id: 30,
        badge: "Seviye 3 (Zor)",
        title: "Veritabanını 3NF Seviyesine Normalize Etme",
        baseScore: 1500,
        steps: [
            { id: "step1", text: "Tablodaki çoklu değer içeren kolonları ayır, her hücreye tek veri gir (Atomik)." },
            { id: "step2", text: "Sadece Primary Key'in bir kısmına bağlı olan (kısmi bağımlı) kolonları ayrı bir tabloya çıkar." },
            { id: "step3", text: "Anahtar olmayan kolonların birbirine bağımlı (geçişli bağımlılık) olduğu durumları bul." },
            { id: "step4", text: "Bu kolonları çıkarıp yeni bir tablo yap ve Foreign Key ile eski tabloya bağla." },
            { id: "step5", text: "Veri tekrarının (Redundancy) ortadan kalktığını doğrula." }
        ]
    },
    {
        id: 31,
        badge: "Seviye 3 (Zor)",
        title: "C Dilinde Dosya Okuma/Yazma (File I/O)",
        baseScore: 1500,
        steps: [
            { id: "step1", text: "FILE *dosya; diyerek dosya işaretçisi oluştur." },
            { id: "step2", text: "dosya = fopen(\"veriler.txt\", \"w\"); ile dosyayı yazma (write) modunda aç." },
            { id: "step3", text: "fprintf(dosya, \"C dilinde dosyaya yazıyorum\"); komutuyla metni bas." },
            { id: "step4", text: "fclose(dosya); ile dosyayı güvenle kapat." },
            { id: "step5", text: "Daha sonra \"r\" (read) moduyla açıp fgets ile veriyi geri oku." }
        ]
    },
    {
        id: 32,
        badge: "Seviye 3 (Zor)",
        title: "Unreal Engine 5 Karakter Zıplama Mekaniği (Blueprint)",
        baseScore: 1500,
        steps: [
            { id: "step1", text: "Proje ayarlarından (Input) zıplama eylemi için 'Space' tuşunu tanımla (Action Mapping)." },
            { id: "step2", text: "Karakterin Blueprint dosyasına gir ve tanımlanan Input düğümünü (node) ekle." },
            { id: "step3", text: "Karakterin havada ardışık zıplamasını engellemek için 'Karakter Yerde Mi?' durumunu kontrol eden bir Branch (If) bağla." },
            { id: "step4", text: "Eğer karakter yerdeyse (True), tuşa basıldığında (Pressed) 'Jump' fonksiyonunu tetikle." },
            { id: "step5", text: "Tuştan el çekildiğinde (Released) 'Stop Jumping' fonksiyonunu çağır." },
            { id: "step6", text: "Kodu derle (Compile), kaydet ve oyun motorunda Play diyerek test et." }
        ]
    }
];
