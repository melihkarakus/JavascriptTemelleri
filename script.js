//TODO Scriptte genel bir bakış yapıldı.
//console.log("Merhaba Dünya");

/*Değişken Tanımlama:
var maasAli = 5000; // Değişken Atama
var maasCan = 6000;
var zam = 0.3;

console.log(maasAli + (maasAli * zam)); //ali maaş
console.log(maasCan + (maasCan * zam)); //mehmet maaş*/

//let, var ikiside aynı işlemi görebilir. typeof ise değişkenin türünün ne olduğunu belirler.

// let sayi1 = "10";
// let sayi2 = "20";
// console.log(Number(sayi1) + Number(sayi2));  Eğerki sayıyı bir string formatında gönderip ekrana yazılması isteniyorsa Number kullanılır.

// let isim = "melih"
// let soyad = "karakuş"
// console.log(isim + " " + soyad); İsimlerin birleşmesi ve ayrılması için bu işlem uygulanur.

// let sinavNotu = 30;
// let basariliMi = (sinavNotu > 50)
// console.log(basariliMi) Burada bir kişinin 50 den düşük veya yüksek aldığında başarılı olup olmadığını gösterir.

// let yas;
// console.log(typeof yas); yas değişkenine bir değer atamış mı atamamış mı diye anlaşılması için

//TODO Yukarıda yapılan değişkenler için yapılan proje

// let isim2 = "Ada bilgi"
// let dogrumTarihi2 = 2012;
// let matNot2 = 70;
// let matNot3 = 80;
// let matNot4 = 80;
// let ogrOrtalama = (matNot2 + matNot3 + matNot4) / 3; öğrencinin not ortalaması almak için 3 adet notunu toplayıp 3 böldük
//eğer int olarak düz şekilde yazılır fakat parsefloat ise ondaklıklı yapıyor
//console.log(ogrOrtlama => 50);//ortalama bilgisi yazdırıldı.

// let isim = "yiğit bilgi";
// let dogumTarihi = 2010;
// let matNot5 = 70;
// let matNot6 = 40;
// let matNot7 = 30;

// let suankiYilBilgisi = new Date().getFullYear(); //bilgisayarın şuanki yılını almış oluyoruz.

// let ogr_yas = suankiYilBilgisi - dogumTarihi; // öğrencinin yaşını bilgisayardan alınan tarih bilgisi ile öğrencinin doğum tarihi bilgisi çıkararak bulundu.
// console.log(ogr_yas);
// console.log(ogrOrtalama);
// let sonuc;
// let sayi1 = 10, sayi2 = 20; sayi3 = 30
//TODO Aritmatik Operatörler
// sonuc = sayi1 + sayi2;
// sonuc = sayi3 - sayi2;
// sonuc = sayi2 * sayi2;
// sonuc = sayi3 / sayi2;
// sonuc = sayi1++; // sayi1 arttırma yaptırır.
//TODO Atama Operatörler
// sonuc = sayi1;
// sonuc += sayi1 // sayiyı sonuc ile topla çıkan sonucu sonuca yazdır
// sonuc -= sayi1 // sayiyı sonuc ile topla çıkan sonucu sonuca yazdır
//TODO Karşılaştırma Operatörler
// sonuc = (sayi1 == sayi2)
// sonuc = (sayi1 != sayi2)
// sonuc = (3 === "3") // 1. sayi değer kontrolü ve 2. sayi tip kontrolü yapar
// sonuc = (sayi3 > sayi2)
// sonuc = (sayi3 <= sayi2)
//TODO Mantıksal Operatörler
// console.log(sonuc);


//TODO İF-ELSE Koşulları
// let username = "melihkarakus";
// let password = 123
// let isLoogedin = (username == "melihkarakuss", password == 123) = atananarak bu şekilde yapılabilir.

// if(username == "melihkarakus"){ //if içinde kullanıcı adı kontrol edildi.
//     if(password == 1234){ // if içe if kullanıldı password kontrol edildi.
//         console.log("Uygulamaya giriş yapildi")  //doğru ise giriş yap
//     }else{
//         console.log("Parola Yanlis");//parola yanlış ise parola yanlış de
//     }
// }
// if (!isLoogedin) {
//     console.log("Not eğer değilse burası çalışacaktır.") burada aslında eğer ki bir kullanıcı giriş yapıp girdiği şifre yanlış ise buraya çalıştır gibisinden olacak.
// }
// else{
//     console.log("Kullanici adi yanlis") //kullanıcı adı yanlış ise kullanıcı adı yanlış de
// }
//TODO İF-ELSE 2
//yas >= 18
//mezuniyet en az lise veya üniversite olmalıdır. 
// let yas = 20;
// let mezuniyet = "üniversite"
// if ((yas >= 18) && (mezuniyet == "üniversite" || mezuniyet == "lise")) {
//     console.log("Ehliyet Alabilir")
// }
// else{
//     console.log("Ehliyet Alamaz")
// }
//and operatörü için true ve true ise bizim için sonuc truedur. false ise falsedur.
//or operatörü ise bizim bir tanesinin true olması gerekebilir. İkiside false ise false olur.

//TODO Örnekler: 
//Bir sayı 10-50 arasında mı kontrol et
// let sayi1 = 100;
// if (sayi1 > 10 && sayi1 < 50) {
//     console.log("sayi aradadır..")
// }
// else{
//     console.log("sayi aralıkta değildir.")
// }
// console.log(sayi1);

//Bir sayının pozitif tek sayı olup olmadığını kontrol et
// let sayi1 = 20;
// if(sayi1 % 2 == 1 || sayi1 > 0){
//     console.log("sayi tek pozitiftir.") //math.abs mutlak değeri yani -1 döndürür.
// }

// x, y, z sayı atanarak hangisi büyük kontrol et
// let x=10, y=50, z=30;
// if (x>y && x>z) {
//     console.log("x büyüktür.")
// }else if(y>x && y>z){
//     console.log("y büyüktür.")
// }else if (z>y && z>x) {
//     console.log("z büyüktür.")
// }else{
//     console.log("lütfen istenen sayilari giriniz.")
// }

//TODO String kullanımı
// let ad = "melih";
// let soyad = "karakuş";
// let yas = 23;
// let sehir = "İstanbul";

// let mesaj = "Benim Adım : " + ad + "Soyad : " + soyad + "Şehir : " + sehir + ".  " + yas;

// let mesaj2 = `Adım soyadım ${ad} ${soyad} yaşadığım şehir ve yaşım ${sehir,yas}`;

// console.log(mesaj2); 

//TODO String Metotlar
// let kursadi = "Komple web geliştirme";
// let sonuc;
// sonuc = kursadi.toLowerCase();
// sonuc = kursadi.toUpperCase();
// sonuc = kursadi.length;
// sonuc = kursadi[0];
// sonuc = kursadi.slice(0, 6);
// sonuc = kursadi.slice(10);
// sonuc = kursadi.substring(0, 10);
// sonuc = kursadi.replace("Komple");
// sonuc = kursadi.trim();
// sonuc = kursadi.indexOf("Komple");
// sonuc = kursadi.split(" ");
// console.log(sonuc);

//TODO String Örnek
// let SiteAdi = "Melih.com.tr";
//TODO Siteadi kaç karakterli
// sonuc = SiteAdi.length;
//TODO Kaç kelimeden oluşmaktadır.
// sonuc = SiteAdi.split(" ").length;
//TODO Site melih ile mi başlıyor.
// sonuc = SiteAdi.startsWith("Melih");
// if (sonuc) {
//     console.log("Evet Başlıyor.");
// }
//TODO Site içerisinde melih kelimesi varmı.
// sonuc = SiteAdi.indexOf("melih");
// if (sonuc) {
//     console.log("melih kelimesi vardır.")
// }
//TODO Değişken eklenmesi isteniyor.
// SiteAdi = SiteAdi.toLowerCase();
// SiteAdi = SiteAdi.replace(" ", "-")
// sonuc = SiteAdi;
// console.log(sonuc);

//TODO Numbers Metotlar
// let sonuc;

// sonuc = 10;
// sonuc = "10";
// sonuc = Number("10");
// sonuc = parseInt("10.6");
// sonuc = parseFloat("10.6");

// let sayi = 12.3456;
// sonuc = sayi.toPrecision(3);
// sonuc = sayi.toFixed(4);
// sonuc = Math.round(2.4)
// console.log(typeof(sonuc));
// console.log(sonuc);

//TODO Date metotlar
// let simdi = new Date();

//Get Methods
// sonuc = simdi.getDate(); //gün ve saat bilgileri
// sonuc = simdi.getDay(); //gün
// sonuc = simdi.getFullYear();

//Set Methods
// simdi.setFullYear(2025)
// simdi.setMonth(6);
// sonuc = simdi;

// console.log(sonuc);

//TODO Date Örnek
// let dogumTarihi = new Date(1990, 5, 15);
// let simdiki = new Date();
// simdiki.getFullYear(2025)
// sonuc = simdiki.getFullYear() - dogumTarihi.getFullYear();
// console.log(sonuc);

//TODO Diziler
// let urun1 = "Samsung";
// let urun2 = "İphone";
// let urun3 = "Xiomi";

// let urunler = ["İphone", "Samsung", "Xiomi"];
// let fiyatlar = [12000, 4000, 3000];

// console.log(urunler[0], fiyatlar[0]);
// console.log(`Telefon ${urunler[0]}, Fiyat ${fiyatlar[0]}`);

//TODO Dizi Metotları

// let ogrenciler = ["Çinar", "Yiğit", "Ada"];

// sonuc = ogrenciler.length;

// sonuc = ogrenciler.toString();
// sonuc = ogrenciler.join("-");

//Eleman silme işlemi
// sonuc = ogrenciler.pop(); //son eleman silinir ve silinen eleman geri döndürülür.
// sonuc = ogrenciler.shift(); //ilk eleman silinir ve silinen eleman geri döndürülür.

//Eleman ekleme işlemi
// sonuc = ogrenciler.push("Sena"); //dizinin sonuna ekleme yapar.
// sonuc = ogrenciler.unshift("Mert") //dizinin başına ekleme yapar.

//sonuc = ogreciler.contact(urunler); Buradaki işlem bir diziyle diğer diziyi birleştirmeye yarayacak dizidir.
//sonuc = urunler.splice(0, 0, ogrenciler); // Diziye eleman eklemek için hangi diziden başlamak için
// console.log(sonuc);

//TODO Dizi Örnekleri
//TODO Dizi oluştur.
// let meyveler = ["elma", "armut", "muz", "çilek"];
//TODO Dizi Kaç Elemanlıdır.
// console.log(meyveler.length);
//TODO dizinin son elemanlarını getir
// console.log(meyveler[0]);
// console.log(meyveler[meyveler.length -1]);
//TODO Elma dizinin bir elemanımıdır.
// console.log(meyveler.includes("elma"));
//TODO Kiraz meyvesini sonuna ekle
// meyveler[meyveler.length] = "kiraz";
// meyveler.push("Kiraz")
// console.log(meyveler);
//TODO Dizinin son 2 elemanını siliniz.
// meyveler.pop();
// meyveler.pop();
// meyveler.splice(meyveler.length - 2, 2);
// console.log(meyveler);
//TODO Öğrenci bilgisi ve gerekli bilgileri saklama örneği dizi olarak
// let ogr1 = [
//     "melih", "karakuş", 2000, [70,89,90]
// ];
// let ogr2 = [
//     "sude", "bayrak", 2003, [100,100,100]
// ];
// let ogreciler = [ogr1, ogr2];
// let ogr1Yas = new Date().getFullYear() - ogreciler[0] [2];
// let ogr2Yas = new Date().getFullYear() - ogreciler[1] [2];

// let ogr1Not = (ogreciler[0] [3] [0] + ogreciler[0] [3] [1] + ogreciler[0] [3] [2]) / 3;
// let ogr2Not = (ogreciler[1] [3] [0] + ogreciler[1] [3] [1] + ogreciler[1] [3] [2]) / 3;
// console.log(ogr1Yas, ogr2Yas, ogr1Not.toFixed(1), ogr2Not.toFixed(1));


//TODO Objeler Konusu
// let user = {
//     "name": "Melih",
//     "last": "Karakuş",
//     "old": 23,
//     "adress": {
//         "country": "Türkiye",
//         "city": "İstanbul" 
//     }
// }

// let sonuc;

// sonuc = user.adress.country

// console.log(sonuc);

//TODO Obje Uygulama

// let siparis_1 = {
//     "siparis_ID": 101,
//     "siparis_Tarih": "10.02.2024",
//     "odeme_Sekli": "Kredi Kartı",
//     "kargo_Adresi":{
//         "mahalle": "597 sk. No: 16 Daire: 4",
//         "ilce": "Gaziosmanpaşa",
//         "İl": "İstanbul"
//     },
//     "urunler":[
//         {
//             "urun_ID": 6, 
//             "urun_Adi": "İphone 13",
//             "urun_url": "Https://abc.com/iphone-13",
//             "urun_fiyat": 13000
//         },
//         {
//             "urun_ID": 7, 
//             "urun_Adi": "İphone 13 pro",
//             "urun_url": "Https://abc.com/iphone-13-pro",
//             "urun_fiyat": 13000
//         }
//     ]
// };
// let siparis_2 = {
//     "siparis_ID": 101,
//     "siparis_Tarih": "10.02.2024",
//     "odeme_Sekli": "Kredi Kartı",
//     "kargo_Adresi":{
//         "mahalle": "597 sk. No: 16 Daire: 4",
//         "ilce": "Gaziosmanpaşa",
//         "İl": "İstanbul"
//     },
//     "urunler":[
//         {
//             "urun_ID": 6, 
//             "urun_Adi": "İphone 13",
//             "urun_url": "Https://abc.com/iphone-13",
//             "urun_fiyat": 13000
//         },
//     ]
// };


// let toplam1 = (siparis_1.urunler[0].urun_fiyat + siparis_1.urunler[1].urun_fiyat) * 1.18
// let toplam2 = (siparis_2.urunler[0].urun_fiyat) * 1.18

// let toplamsiparis_ucret = toplam1 + toplam2;

// console.log(toplam1);
// console.log(toplam2);

// console.log("toplam ödenen:" + toplamsiparis_ucret);

// let siparisler = [siparis_1, siparis_2]

//TODO Döngüler
// let toplam = 0;
// for (let i = 1; i <= 10; i++) {
//     toplam += i;
//     console.log(toplam);
// }

// let sayilar = [1, 2, 3, 4, 5];
// let toplam = 0;
// for (let i = 0; i < sayilar.length; i++) {
//     toplam += sayilar[i];
// }
// console.log(toplam)

// let sayilar = [1, 2, 3, 4, 5];
// for(let index in sayilar){
//     console.log(index)
// }

//TODO DÖngüler Uygulama
//TODO sayilarin karesi hesaplama
// let sayilar =  [1, 5, 7, 15, 3, 25];
// for(let sayi of sayilar){
//     console.log(sayi)
// }
// for(let i =0; i < sayilar.length; i++){
//     if(sayilar[i] % 5 == 0){
//         console.log(sayilar[i]);
//     }
// }
// let toplam = 0;
// for(let i in sayilar){
//     if (sayilar[i] % 2 == 0) {
//           toplam += sayilar[i];
//        }
// }
// console.log(toplam)
//TODO Ürünler Uygulaması
// let urunler = ["iphone 12", "iphone 11", "iphone x"];

//TODO Butun ürünleri büyük harf yazdırma 
// for(let urun of urunler){
//     console.log(urun.toUpperCase());
// }

//TODO Samsung geçen ürün varmı 
// let adet = 0;
// for(let urun of urunler){
//     if(urun.includes("samsung"));
//     adet++;
// }
// console.log(adet)

//TODO Öğrenciler Uygulaması 

// let ogrenciler = [
//     {"ad":"melih", "soyad": "karakus","notlar": [0,0,90]},
//     {"ad":"sude", "soyad": "bayrak","notlar": [60,70,90]}
// ]
//TODO not ortalamalarının başarılı durumunu ekrana yazdırın
// for(let ogr of ogrenciler){
//     let toplam = 0;
//     let not_ort = 0;
//     let adet = 0; 
//     for(let not of ogr.notlar){
//         toplam += not;
//         adet++;
//     }
//     ortalama = toplam / adet
//     console.log(`${ogr.ad}, ${ogr.soyad} isimli öğrencinin not ortalaması ${not_ort}`)
//     if (ortalama >= 50) {
//         console.log("Başarılı")
//     }
//     else{
//         console.log("başarısız")
//     }
// }

//TODO Fonksiyonlar
// function selamlama(msg){
//     console.log(msg)
// }
// selamlama("Merhaba");
// selamlama("İyi Günler");


// function yasHesapla(dogumYili){
//     return new Date().getFullYear() - dogumYili
// }
// let melih = yasHesapla(2000)

// function emeklilikKaçYil(dogumYili){
//     let yas = yasHesapla(dogumYili);
//     let kalanSene = 65 - yas;
//     if(kalanSene > 0){
//         console.log(`emekli olmaniza ${kalanSene} yıl kaldı.`)
//     }else{
//         console.log("emeklisiniz")
//     }
// }
// emeklilikKaçYil(2000, melih)

//TODO Fonksiyonlar Uygulama

// function kelimeYazdir(kelime, adet){
//     for(let i = 0; i < adet; i++){
//         console.log(kelime)
//     }
// }
// kelimeYazdir("merhaba", 4);

//TODO Diktörgen alan çevre hesapla
// function alanCevreHesapla(kisa, uzun){
//     let alan = kisa * uzun;
//     let çevre = (kisa + uzun) * 2;

//     return `alan: ${alan} çevre: ${çevre}`
// }

// let sonuc = alanCevreHesapla(7, 10);
// console.log(sonuc);

//TODO Yazı Tura Uygulaması
// function yaziTura(){
//     let random = Math.random();
//     if(random < 0.5){
//         console.log("yazi")
//     }
//     else{
//         console.log("tura")
//     }
//     console.log(random)
// }
// yaziTura();

//TODO Kendisine tam bölünenlere dizi şeklinde yönlendir.
// function tamBolunenler(sayi){
//     let sayilar = [];
//     for(let i = 2; i < sayi; i++){
//         if (sayi % i == 0) {
//          sayilar.push(i);   
//         }
//     }
//     return sayilar;
// }
// console.log(tamBolunenler(15));

//TODO Değişkenleri parametre alan toplam bir fonksiyon
// function toplam(){
//     console.log(arguments); // sayıya bir ifade veriyor aslında Çıktı şöyle {'0': 2, '1': 5}
// }
// console.log(toplam(2, 5));

//TODO Scops İşlemleri
// var isim = "Ahmet";
// function yazdir(){
//     console.log(isim);
// }
// yazdir();

// Fonksiyonlar kendi scope alanları oluşturur.
// Bloglar içerisinde yeni bir scope oluşmaz.