const gameLevels = [
    {
        id: 1,
        badge: "Seviye 1 (Basit)",
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
        badge: "Seviye 4 (Kolay)",
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
        badge: "Seviye 7 (Kolay)",
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
        id: 4,
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
        id: 5,
        badge: "Seviye 5 (Orta)",
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
        id: 6,
        badge: "Seviye 8 (Orta)",
        title: "Flutter'da Arayüz Oluşturma (Stateless Widget)",
        baseScore: 1000,
        steps: [
            { id: "step1", text: "StatelessWidget sınıfından miras alan yeni bir sınıf (class) tanımla." },
            { id: "step2", text: "Zorunlu olan 'build' metodunu override ederek (ezerek) oluştur." },
            { id: "step3", text: "Ekrana temel iskeleti çizmek için build metodu içinde 'Scaffold' döndür." },
            { id: "step4", text: "Scaffold'un 'body' parametresine uygulamanın içeriğini (Text, Image vb.) ekle." },
            { id: "step5", text: "Hazırladığın bu widget'ı ana dosyada (main.dart) çağırarak projeyi çalıştır." }
        ]
    },
    {
        id: 7,
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
    }
    ,

    {
        id: 8,
        badge: "Seviye 6 (Zor)",
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
        id: 9,
        badge: "Seviye 9 (Zor)",
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
