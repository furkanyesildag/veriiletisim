// Veri İletişimi Teknikleri - Soru Bankası
const questions = [
    {
        id: 1,
        question: "Aşağıdakilerden hangisi veri iletişim sisteminin 5 temel unsurundan biri değildir?",
        options: {
            a: "Mesaj (Message)",
            b: "Gönderici (Sender)",
            c: "Protokol (Protocol)",
            d: "İletişim Ortamı (Transmission Medium)",
            e: "Hız (Speed)"
        },
        correctAnswer: "e",
        explanation: "Veri iletişim sisteminin 5 temel unsuru; Mesaj (Message), Gönderici (Sender), Alıcı (Receiver), İletişim Ortamı (Transmission Medium) ve Protokol (Protocol) olarak belirtilmiştir. Hız, bu 5 temel unsurdan biri değil, bir ağ performans kriteridir."
    },
    {
        id: 2,
        question: "Aşağıdakilerden hangisi veri iletişiminin etkinliğini belirleyen 4 temel kriterden biri değildir?",
        options: {
            a: "Teslim (Delivery)",
            b: "Doğruluk (Accuracy)",
            c: "Bant Genişliği (Bandwidth)",
            d: "Zamanlama (Timeliness)",
            e: "Gecikme Değişimi (Jitter)"
        },
        correctAnswer: "c",
        explanation: "Veri iletişiminin etkinliğini belirleyen 4 temel kriter; Teslim (Delivery), Doğruluk (Accuracy), Zamanlama (Timeliness) ve Gecikme Değişimi (Jitter) olarak listelenmiştir. Bant genişliği (Throughput), bir ağ kriteri olan performans başlığı altında yer alır."
    },
    {
        id: 3,
        question: "İki cihazın aynı anda hem veri gönderip hem de alabildiği iletişim modu aşağıdakilerden hangisidir?",
        options: {
            a: "Simplex",
            b: "Half-duplex",
            c: "Full-duplex",
            d: "Multiplex",
            e: "Broadcast"
        },
        correctAnswer: "c",
        explanation: "Full-duplex iletişim modu, iki cihazın eşzamanlı (aynı anda) veri gönderip alabilmesini sağlar. Simplex tek yönlüdür, half-duplex ise çift yönlü ancak sırayla iletişime izin verir."
    },
    {
        id: 4,
        question: "Hata yapma sıklığı ve hatanın düzeltilme süresi ile ölçülen ağ kriteri hangisidir?",
        options: {
            a: "Performans (Performance)",
            b: "Güvenilirlik (Reliability)",
            c: "Güvenlik (Security)",
            d: "Ölçeklenebilirlik (Scalability)",
            e: "Maliyet (Cost)"
        },
        correctAnswer: "b",
        explanation: "Güvenilirlik (Reliability) kriteri, ağın hata yapma sıklığı ve bir hatanın düzeltilme süresi ile ölçülür."
    },
    {
        id: 5,
        question: "İkiden fazla cihazın tek bir fiziksel bağlantıyı paylaştığı bağlantı konfigürasyonu hangisidir?",
        options: {
            a: "Point-to-point",
            b: "Multipoint (Multidrop)",
            c: "Simplex",
            d: "Dedicated",
            e: "Switched"
        },
        correctAnswer: "b",
        explanation: "Multipoint (veya multidrop) konfigürasyon, ikiden fazla cihazın tek bir fiziksel bağlantıyı paylaşmasını sağlar. Point-to-point ise sadece iki cihaz arasında atanmış bir bağlantıdır."
    },
    {
        id: 6,
        question: "Ağdaki her cihazın diğer tüm cihazlara doğrudan, atanmış bir bağlantı ile bağlandığı topoloji hangisidir?",
        options: {
            a: "Bus (Yol)",
            b: "Star (Yıldız)",
            c: "Ring (Halka)",
            d: "Mesh (Örgü)",
            e: "Hybrid (Karma)"
        },
        correctAnswer: "d",
        explanation: "Mesh topolojide, her cihaz ağdaki diğer tüm cihazlara doğrudan, atanmış (dedicated) bir bağlantıya sahiptir."
    },
    {
        id: 7,
        question: "Tüm cihazların merkezi bir kontrol ile (hub veya switch gibi) bağlandığı topoloji hangisidir?",
        options: {
            a: "Bus (Yol)",
            b: "Star (Yıldız)",
            c: "Ring (Halka)",
            d: "Mesh (Örgü)",
            e: "Hybrid (Karma)"
        },
        correctAnswer: "b",
        explanation: "Star topolojisinde, tüm cihazlar merkezi bir birime (hub veya switch) bağlanır."
    },
    {
        id: 8,
        question: "Genellikle bir şehir veya büyük bir kampüs alanını kapsayan ağ türü hangisidir?",
        options: {
            a: "LAN (Local Area Network)",
            b: "WAN (Wide Area Network)",
            c: "MAN (Metropolitan Area Network)",
            d: "PAN (Personal Area Network)",
            e: "CAN (Campus Area Network)"
        },
        correctAnswer: "c",
        explanation: "MAN (Metropolitan Area Network), bir şehir ölçeğinde veya büyük bir kampüs alanında hızlı iletişim sağlar."
    },
    {
        id: 9,
        question: "Veri iletişimini yöneten, neyin, ne zaman ve nasıl iletileceğini tanımlayan kurallar kümesine ne ad verilir?",
        options: {
            a: "Standart (Standard)",
            b: "Protokol (Protocol)",
            c: "Algoritma (Algorithm)",
            d: "Sözdizimi (Syntax)",
            e: "Model (Model)"
        },
        correctAnswer: "b",
        explanation: "Protokol, veri iletişimini yöneten kurallar kümesidir. Neyin, ne zaman ve nasıl iletileceğini tanımlar."
    },
    {
        id: 10,
        question: "Resmî kurumlar tarafından onaylanmış ve belgelenmiş standart türü hangisidir?",
        options: {
            a: "De facto (Fiili)",
            b: "De jure (Hukuki)",
            c: "Proprietary (Özel Mülk)",
            d: "Open Source (Açık Kaynak)",
            e: "Draft (Taslak)"
        },
        correctAnswer: "b",
        explanation: "De jure standartlar, resmî kurumlarca (ISO, IEEE gibi) onaylanmış standartlardır. De facto standartlar ise resmî onay olmaksızın yaygın kullanımla standartlaşmıştır."
    },
    {
        id: 11,
        question: "Bir web sayfasına girerken kullanıcı adı ve şifre ile giriş yapıyorsunuz. Şifrenizin şifrelenmesi (encryption) OSI modelinin hangi katmanında gerçekleşir?",
        options: {
            a: "Physical Layer - Elektrik sinyalleri seviyesinde şifreleme",
            b: "Data Link Layer - Frame şifreleme",
            c: "Network Layer - IP paket şifreleme",
            d: "Transport Layer - TCP segment şifreleme",
            e: "Presentation Layer - Veri formatı ve şifreleme"
        },
        correctAnswer: "e",
        explanation: "OSI modelinde Sunum (Presentation) katmanı, verinin syntax ve semantics özelliklerini belirler. Bu görevler arasında şifreleme (Encryption), sıkıştırma (Compression) ve çevirme (Translation) bulunur."
    },
    {
        id: 12,
        question: "Bir bilgisayarda aynı anda Zoom görüşmesi, web tarama ve e-posta kontrolü yapılıyor. Bu uygulamaları birbirinden ayıran adresleme türü hangisidir?",
        options: {
            a: "MAC adresi (Physical addressing)",
            b: "IP adresi (Logical addressing)",
            c: "Port numarası (Port addressing)",
            d: "URL adresi (Specific addressing)",
            e: "Frame numarası (Sequence addressing)"
        },
        correctAnswer: "c",
        explanation: "Taşıma (Transport) katmanında kullanılan port adreslemesi, bir bilgisayarda aynı anda çalışan farklı uygulamaları (prosesleri) birbirinden ayırmak için kullanılır."
    },
    {
        id: 13,
        question: "İstanbul'dan New York'a gönderilen bir e-posta, farklı ülkelerdeki birçok router'dan geçer. Paketin hangi yolu izleyeceğine karar veren OSI katmanı hangisidir?",
        options: {
            a: "Physical Layer - Kablo yönlendirmesi",
            b: "Data Link Layer - Switch yönlendirmesi",
            c: "Network Layer - Router yönlendirmesi",
            d: "Transport Layer - Process yönlendirmesi",
            e: "Application Layer - Uygulama yönlendirmesi"
        },
        correctAnswer: "c",
        explanation: "Ağ (Network) katmanı, paketlerin kaynak-hedef arasında farklı ağlar üzerinden (router'lar aracılığıyla) yönlendirilmesinden (routing) sorumludur."
    },
    {
        id: 14,
        question: "Ethernet ağında bir bilgisayardan switch'e gönderilen veri paketinde hem kaynak hem hedef MAC adresi bulunur. Bu adresler hangi katmanda eklenir ve bu veri birimine ne ad verilir?",
        options: {
            a: "Physical Layer - Bit stream",
            b: "Data Link Layer - Frame",
            c: "Network Layer - Packet",
            d: "Transport Layer - Segment",
            e: "Application Layer - Message"
        },
        correctAnswer: "b",
        explanation: "Veri Bağı (Data Link) katmanı, ağ katmanından gelen bitleri \"frame\" (çerçeve) adı verilen birimlere böler ve bu frame'lere fiziksel adresleri (MAC adresleri) bir başlık (header) olarak ekler."
    },
    {
        id: 15,
        question: "Google'ın geliştirdiği, UDP üzerinde çalışan ama TCP'nin güvenilirliğini sağlayan, HTTP/3'ün temelini oluşturan protokol hangisidir?",
        options: {
            a: "SCTP - Stream Control Transmission Protocol",
            b: "DCCP - Datagram Congestion Control Protocol",
            c: "QUIC - Quick UDP Internet Connections",
            d: "MPTCP - Multipath TCP",
            e: "RTP - Real-time Transport Protocol"
        },
        correctAnswer: "c",
        explanation: "QUIC, UDP üzerinde çalışan, TCP'nin güvenilirliğini sağlayan ve HTTP/3'ün temelini oluşturan modern bir protokoldür."
    },
    {
        id: 16,
        question: "IPv6 adresleri kaç bit uzunluğundadır ve teorik olarak kaç farklı adres oluşturulabilir?",
        options: {
            a: "32 bit - 4.3 milyar adres",
            b: "64 bit - 18 kentilyon adres",
            c: "96 bit - 79 oktilyon adres",
            d: "128 bit - 340 undecilyon adres",
            e: "256 bit - Sonsuz adres"
        },
        correctAnswer: "d",
        explanation: "IPv6, 128 bit adresleme yapar. Bu, 2^128 veya yaklaşık 340 undesilyon (3.4 x 10^38) adres sağlar."
    },
    {
        id: 17,
        question: "Online bir oyun oynarken (PUBG, CS:GO) genellikle UDP protokolü tercih edilir. Bunun temel sebebi nedir?",
        options: {
            a: "UDP daha güvenli şifreleme sağlar",
            b: "UDP daha büyük paketler gönderebilir",
            c: "UDP daha düşük gecikme sağlar, hız önceliklidir",
            d: "UDP veri bütünlüğünü daha iyi korur",
            e: "UDP daha az bant genişliği kullanır"
        },
        correctAnswer: "c",
        explanation: "UDP, bağlantısız (connectionless) bir protokoldür. TCP gibi bağlantı kurma (3-yollu el sıkışma) gecikmesi yoktur. Bu nedenle, online oyunlar gibi hızın ve düşük gecikmenin, %100 güvenilirlikten daha önemli olduğu uygulamalarda tercih edilir."
    },
    {
        id: 18,
        question: "5G teknolojisinde, otonom araçların haberleşmesi için hangi network slice tipi kullanılır?",
        options: {
            a: "eMBB - Yüksek bant genişliği için",
            b: "URLLC - Ultra düşük gecikme ve yüksek güvenilirlik için",
            c: "mMTC - Çok sayıda loT cihazı için",
            d: "FWA - Sabit kablosuz erişim için",
            e: "V2X - Sadece araç-araç haberleşmesi için"
        },
        correctAnswer: "b",
        explanation: "5G network slicing'de, URLLC (Ultra-Reliable Low-Latency Communications), otonom araçlar gibi 1ms'nin altında gecikme gerektiren uygulamalar için tasarlanmıştır."
    },
    {
        id: 19,
        question: "OSI modelinde veri yukarıdan aşağıya doğru inerken her katmanda ne eklenir ve Data Link katmanında özel olarak ne eklenir?",
        options: {
            a: "Sadece header eklenir, Data Link'te de header",
            b: "Sadece trailer eklenir, Data Link'te de trailer",
            c: "Rastgele header veya trailer, Data Link'te her ikisi",
            d: "Header eklenir, Data Link'te hem header hem trailer",
            e: "Hiçbir şey eklenmez, sadece format değişir"
        },
        correctAnswer: "d",
        explanation: "Veri kapsülleme (encapsulation) sırasında çoğu katman veriye bir \"header\" (başlık) ekler. Ancak Veri Bağı (Data Link) katmanı, hem bir \"header\" (adresler için) hem de bir \"trailer\" (hata kontrolü için) ekler."
    },
    {
        id: 20,
        question: "Modern \"Zero Trust\" güvenlik modelinin temel prensibi nedir?",
        options: {
            a: "Sadece firewall dışından gelen trafiği kontrol et",
            b: "Şirket ağı içindeki her şey güvenlidir",
            c: "Hiçbir şeye güvenme, her şeyi sürekli doğrula",
            d: "Sadece kritik sunucuları koru",
            e: "VPN kullanıldığında tam güven sağla"
        },
        correctAnswer: "c",
        explanation: "Zero Trust güvenlik modelinin temel prensibi, \"ağ içi güvenlidir\" varsayımını reddederek \"hiçbir şeye güvenme, her şeyi doğrula\" (Never trust, always verify) anlayışını benimser."
    },
    {id:21,question:"Analog sinyal için aşağıdakilerden hangisi doğrudur?",options:{a:"Sadece 0 ve 1 değerlerini alır",b:"Sınırlı sayıda değere sahiptir",c:"Belirli bir zaman aralığında sonsuz değere sahiptir",d:"Her zaman periyodiktir",e:"Sadece sayısal veri taşır"},correctAnswer:"c",explanation:"Analog sinyaller, belirli bir zaman aralığında sürekli değerler alır ve sonsuz sayıda değere sahip olabilir. Sayısal sinyaller ise sınırlı sayıda (ayrık) değere sahiptir."},
    {id:22,question:"Bir sinüs sinyali aşağıdaki parametrelerden hangisiyle ifade edilmez?",options:{a:"Genlik (amplitude)",b:"Frekans (frequency)",c:"Faz (phase)",d:"Bant genişliği (bandwidth)",e:"Periyot (period)"},correctAnswer:"d",explanation:"Basit bir sinüs sinyali üç parametre ile ifade edilir: Genlik (amplitude), Frekans (frequency) ve Faz (phase). Periyot, frekansın tersidir (T=1/f). Bant genişliği ise basit bir sinüs sinyalinin değil, birden fazla sinüsten oluşan birleşik (composite) sinyalin bir özelliğidir."},
    {id:23,question:"Bit rate 1 Mbps olan baseband iletişim için gereken minimum bant genişliği nedir?",options:{a:"250 KHz",b:"500 KHz",c:"1 MHz",d:"2 MHz",e:"4 MHz"},correctAnswer:"b",explanation:"Baseband (temel bant) iletişimde, bir sayısal sinyali (en kötü durum senaryosunda, 1010 gibi) iletmek için gereken minimum bant genişliği BW = N/2'dir (N=bit rate). Bu durumda, BW = 1 Mbps / 2 = 500 KHz olur."},
    {id:24,question:"Nyquist formülüne göre, 3000 Hz bant genişliğine sahip gürültüsüz bir kanalda 4 seviyeli sinyal kullanılarak maksimum bit rate nedir?",options:{a:"6000 bps",b:"9000 bps",c:"12000 bps",d:"18000 bps",e:"24000 bps"},correctAnswer:"c",explanation:"Nyquist formülü gürültüsüz bir kanal için maksimum bit hızını Bit Rate = 2 × BW × log₂(L) olarak tanımlar. BW=3000 Hz ve L=4 seviye için: Bit Rate = 2 × 3000 × log₂(4) = 6000 × 2 = 12000 bps."},
    {id:25,question:"Sinyal gücü 10 mW, gürültü (noise) gücü 1 µW olduğunda SNR (dB) değeri nedir?",options:{a:"10 dB",b:"20 dB",c:"30 dB",d:"40 dB",e:"50 dB"},correctAnswer:"d",explanation:"SNR (Signal-to-Noise Ratio), sinyal gücünün gürültü gücüne oranıdır. SNR_dB (desibel) olarak SNR_dB = 10 × log₁₀(SNR) formülüyle hesaplanır. SNR = (10 mW) / (1 µW) = (10 × 10⁻³ W) / (1 × 10⁻⁶ W) = 10.000. SNR_dB = 10 × log₁₀(10.000) = 10 × 4 = 40 dB."},
    {id:26,question:"Aşağıdakilerden hangisi sinyal zayıflamasının nedenlerinden biri değildir?",options:{a:"Attenuation",b:"Distortion",c:"Noise",d:"Modülasyon",e:"Crosstalk"},correctAnswer:"d",explanation:"Sinyal zayıflamasının (bozulmasının) üç temel nedeni vardır: Zayıflama (Attenuation - enerjinin azalması), Bozulma (Distortion - sinyal şeklinin değişmesi) ve Gürültü (Noise). Crosstalk (parazit), bir gürültü türüdür. Modülasyon ise bir zayıflama nedeni değil, veriyi sinyale dönüştürme tekniğidir."},
    {id:27,question:"Broadband iletişim için aşağıdakilerden hangisi yanlıştır?",options:{a:"Sayısal sinyal modüle edilerek analog sinyale çevrilir",b:"Band-pass kanal kullanılır",c:"Modem kullanılır",d:"Sayısal sinyal doğrudan iletilir",e:"Telefon hatları için uygundur"},correctAnswer:"d",explanation:"Bu ifade Baseband iletişim için doğrudur. Broadband (geniş bant) iletişimde ise sayısal sinyal önce modüle edilerek analog sinyale çevrilir ve bir band-pass kanal üzerinden (genellikle modem kullanarak) iletilir. Telefon hatları ve kablo TV buna örnektir."},
    {id:28,question:"Shannon formülüne göre, BW=3000 Hz ve SNR=3162 olan bir telefon hattının kanal kapasitesi yaklaşık olarak nedir?",options:{a:"24 Kbps",b:"28 Kbps",c:"32 Kbps",d:"35 Kbps",e:"40 Kbps"},correctAnswer:"d",explanation:"Shannon'ın gürültülü kanal kapasitesi formülü C = BW × log₂(1 + SNR)'dir. BW = 3000 Hz, SNR = 3162. C = 3000 × log₂(1 + 3162) = 3000 × log₂(3163) ≈ 3000 × 11.62 ≈ 34.860 bps, bu da yaklaşık 35 Kbps'dir."},
    {id:29,question:"100 sayfalık bir dosya 1 saniyede download edilmiştir. Her sayfa 24 satır × 80 sütun, her karakter 8 bit olduğuna göre bit rate nedir?",options:{a:"768 Kbps",b:"1.024 Mbps",c:"1.536 Mbps",d:"2.048 Mbps",e:"3.072 Mbps"},correctAnswer:"c",explanation:"Toplam karakter sayısı = 100 sayfa × 24 satır/sayfa × 80 sütun/satır = 192.000 karakter. Toplam bit = 192.000 karakter × 8 bit/karakter = 1.536.000 bit. Bit Hızı (1 saniyede) = 1.536.000 bit / 1 s = 1.536.000 bps = 1.536 Mbps."},
    {id:30,question:"Propagation Time (PT) formülü aşağıdakilerden hangisidir?",options:{a:"PT=MS/BW",b:"PT=D/PS",c:"PT=BW*D",d:"PT=MS*PS",e:"PT=BW/MS"},correctAnswer:"b",explanation:"Propagation Time (PT - Yayılma Süresi), sinyalin mesafeyi katetme süresidir ve PT = Mesafe (D) / Yayılma Hızı (PS) olarak hesaplanır. MS/BW ise Transmission Time (TT - İletim Süresi) formülüdür."},
    {id:31,question:"NRZ-L kodlamada bit 0 ve bit 1 nasıl temsil edilir?",options:{a:"Bit 0: negatif gerilim, Bit 1: pozitif gerilim",b:"Bit 0: pozitif gerilim, Bit 1: negatif gerilim",c:"Bit 0: sıfır gerilim, Bit 1: pozitif gerilim",d:"Bit 0: değişim var, Bit 1: değişim yok",e:"Bit 0: yüksek frekans, Bit 1: düşük frekans"},correctAnswer:"b",explanation:"NRZ-L (Non-Return-to-Zero Level) kodlamada, bit 0 pozitif gerilim ile, bit 1 ise negatif gerilim ile tanımlanır (veya tam tersi de olabilir, ancak ders notundaki şemada bu şekilde gösterilmiştir)."},
    {id:32,question:"Manchester kodlamanın bant genişliği NRZ'ye göre nasıldır?",options:{a:"Yarısı kadar",b:"Aynı",c:"1.5 katı",d:"2 katı",e:"4 katı"},correctAnswer:"d",explanation:"Manchester kodlamada, her bitin ortasında mutlaka bir geçiş (transition) olur. Bu, sinyal hızını (baud rate) bit hızının (bit rate) iki katına çıkarır, bu nedenle NRZ (BW=N/2) kodlamaya göre iki kat daha fazla bant genişliği (BW=N) gerektirir."},
    {id:33,question:"NRZ-I kodlamada hangi durumda senkronizasyon problemi yaşanır?",options:{a:"Uzun 1 serilerinde",b:"Uzun 0 serilerinde",c:"1 ve 0 karışık geldiğinde",d:"Yüksek frekansta",e:"Düşük gerilimde"},correctAnswer:"b",explanation:"NRZ-I (Invert) kodlamada, bit 1 \"değişim\" ile, bit 0 ise \"değişim olmaması\" ile temsil edilir. Bu nedenle, art arda gelen uzun '0' serilerinde sinyal seviyesi hiç değişmez, bu da alıcının saat senkronizasyonunu kaybetmesine neden olur."},
    {id:34,question:"2B1Q kodlamada 2 bit veri kaç farklı gerilim seviyesi ile temsil edilir?",options:{a:"2",b:"3",c:"4",d:"8",e:"16"},correctAnswer:"c",explanation:"2B1Q (Two-Binary, One-Quaternary), 2 bitlik (2B) veriyi 4 seviyeli (Quaternary - 1Q) bir sinyal elemanı ile kodlar. Bu seviyeler genellikle +3, +1, -1, -3'tür."},
    {id:35,question:"AMI kodlamada DC bileşen neden oluşmaz?",options:{a:"Sinyal hiç değişmediği için",b:"Pozitif ve negatif gerilimler birbirini dengelediği için",c:"Sadece pozitif gerilim kullanıldığı için",d:"Yüksek frekans kullanıldığı için",e:"Düşük güç kullanıldığı için"},correctAnswer:"b",explanation:"AMI (Alternate Mark Inversion) kodlamada, bit 0 için seviye 0'dır; bit 1 için ise seviye +V ve -V arasında sürekli değişir. Bu sürekli değişim (alternating) sayesinde pozitif ve negatif gerilimler uzun vadede birbirini dengeler ve DC bileşen oluşmaz."},
    {id:36,question:"Differential Manchester kodlamada her bitin ortasında ne olur?",options:{a:"Hiç değişim olmaz",b:"Sadece bit 1 için değişim olur",c:"Sadece bit 0 için değişim olur",d:"Her zaman seviye değişimi olur",e:"Rastgele değişim olur"},correctAnswer:"d",explanation:"Hem Manchester hem de Differential Manchester kodlamalarında, senkronizasyonu sağlamak için her bitin ortasında mutlaka bir seviye değişimi olur. Farkları, bit 0 veya 1'i temsil etmek için bit başındaki değişimi kullanmalarıdır."},
    {id:37,question:"4B/5B blok kodlamada neden 5 bit kullanılır?",options:{a:"Veri sıkıştırmak için",b:"En fazla 2 ardışık sıfır olmasını sağlamak için",c:"Hızı 5 kat artırmak için",d:"5 farklı seviye kullanmak için",e:"Güç tasarrufu için"},correctAnswer:"b",explanation:"4B/5B blok kodlaması, NRZ-I ile birlikte kullanılır. NRZ-I'ın uzun '0' serilerindeki senkronizasyon problemini çözmek için 4 bitlik veriyi, art arda ikiden fazla '0' içermeyen özel 5 bitlik kodlarla değiştirir."},
    {id:38,question:"MLT-3 kodlamada bir sonraki bit 1 ise ve şu anki seviye 0 ise, bir sonraki seviye ne olur?",options:{a:"+V",b:"-V",c:"0",d:"0 olmayan son seviyenin tersi",e:"0 olmayan son seviyenin aynısı"},correctAnswer:"d",explanation:"MLT-3 kodlamasının kurallarından biri şudur: Eğer bir sonraki bit '1' ise ve şu anki seviye '0' ise, bir sonraki seviye, '0' olmayan en son seviyenin tersi olur. Bu, +V → 0 → -V → 0 → +V döngüsünü sağlar."},
    {id:39,question:"B8ZS scrambling'de \"V\" ne anlama gelir?",options:{a:"Voltaj",b:"Violation (ihlal)",c:"Variable (değişken)",d:"Vertical (dikey)",e:"Valid (geçerli)"},correctAnswer:"b",explanation:"B8ZS (Bipolar with 8-zero substitution) tekniğinde 'V' (Violation - İhlal), AMI kuralının kasıtlı olarak ihlal edildiği anlamına gelir. Normalde AMI'de 1'ler zıt kutuplu olmalıdır; 'V' ise bir önceki '1' ile aynı kutuplu bir '1'i temsil ederek özel bir durumu belirtir."},
    {id:40,question:"Unipolar NRZ'nin en büyük dezavantajı nedir?",options:{a:"Yüksek maliyet",b:"DC bileşenin varlığı",c:"Karmaşık devre",d:"Yüksek güç tüketimi",e:"Düşük hız"},correctAnswer:"b",explanation:"Unipolar (tek kutuplu) NRZ, sinyali temsil etmek için sadece 0 Volt ve pozitif Volt (V+) kullanır. Sinyal seviyesi asla negatif olmaz. Bu durum, uzun '1' serilerinde sinyalin ortalamasının sıfırdan farklı olmasına, yani bir DC bileşen oluşmasına neden olur."},
    {id:41,question:"8B/10B kodlamada kaç fazla grup oluşur?",options:{a:"256",b:"512",c:"768",d:"1024",e:"2048"},correctAnswer:"c",explanation:"8B/10B kodlama, 8 bitlik veriyi (2⁸ = 256 farklı kombinasyon) 10 bitlik kodlarla (2¹⁰ = 1024 farklı kombinasyon) temsil eder. Aradaki fark olan 1024 - 256 = 768 adet fazla grup, senkronizasyon ve hata denetimi için kullanılır."},
    {id:42,question:"Polar RZ kodlamada sinyal ne zaman sıfıra döner?",options:{a:"Bit başında",b:"Bit sonunda",c:"Bit ortasında",d:"Hiç dönmez",e:"Rastgele zamanlarda"},correctAnswer:"c",explanation:"RZ (Return-to-Zero) kodlamada sinyal, bit 1 veya bit 0'ı temsil ettikten sonra, bit süresi bitmeden (genellikle bitin ortasında) 0 seviyesine döner."},
    {id:43,question:"HDB3'te son substitution'dan sonra çift sayıda pulse varsa hangi pattern kullanılır?",options:{a:"000V",b:"B00V",c:"00VB",d:"VB00",e:"VVVV"},correctAnswer:"b",explanation:"HDB3 (High-Density Bipolar 3-zero) kuralına göre, 4 ardışık sıfır değiştirilirken, son \"substitution\" (yer değiştirme) işleminden sonra sıfırdan farklı pals (pulse) sayısı çift ise, B00V deseni kullanılır. Eğer pals sayısı tek ise 000V deseni kullanılır."},
    {id:44,question:"Pseudoternary kodlamada bit 1 nasıl gösterilir?",options:{a:"Pozitif gerilim",b:"Negatif gerilim",c:"Sıfır gerilim",d:"Pozitif ve negatif arasında değişim",e:"Yüksek frekans"},correctAnswer:"c",explanation:"Pseudoternary kodlama, AMI'nin tersidir. Bit 1 için seviye 0'dır, bit 0 için ise seviye pozitif ve negatif arasında sürekli değişir."},
    {id:45,question:"8B6T kodlamada kaç farklı sinyal kombinasyonu mümkündür?",options:{a:"64",b:"256",c:"512",d:"729",e:"1024"},correctAnswer:"d",explanation:"8B6T (Eight-Binary, Six-Ternary) kodlamada, 8 bitlik veri (2⁸ = 256 kombinasyon), 6 adet üç seviyeli (Ternary) sinyal elemanı ile temsil edilir. Bu da 3⁶ = 729 farklı sinyal kombinasyonu sağlar."},
    {id:46,question:"4D-PAM5 kodlama hangi ağ teknolojisinde kullanılır?",options:{a:"10Base-T",b:"100Base-TX",c:"Gigabit Ethernet",d:"Token Ring",e:"ATM"},correctAnswer:"c",explanation:"4D-PAM5 (four-dimensional five-level pulse-amplitude-modulation) kodlama, Gigabit LAN (1000Base-T) ağlarda kullanılır."},
    {id:47,question:"Line coding'de \"r\" parametresi neyi gösterir?",options:{a:"Direnç değerini",b:"Bir sinyal elemanıyla taşınan bit sayısını",c:"Frekans oranını",d:"Güç değerini",e:"Hata oranını"},correctAnswer:"b",explanation:"'r' parametresi, bir sinyal elemanı (signal element) ile kaç adet veri elemanının (data element, genellikle bit) taşındığını gösteren orandır. Örneğin, 2B1Q'da 1 sinyal elemanı 2 bit taşıdığı için r=2'dir."},
    {id:48,question:"Biphase kodlamaların ortak özelliği nedir?",options:{a:"DC bileşen yoktur",b:"Düşük bant genişliği",c:"3 seviye kullanımı",d:"Asenkron çalışma",e:"Yüksek güç tüketimi"},correctAnswer:"a",explanation:"Biphase (Manchester ve Differential Manchester) kodlamalarda, her bit süresi içinde hem pozitif hem de negatif gerilim seviyeleri bulunur (veya bit ortasında geçiş olur). Bu durum, sinyalin ortalamasını sıfırda tutar ve DC bileşen oluşumunu engeller."},
    {id:49,question:"Multilevel kodlamada 2^m=L^n formülünde L neyi temsil eder?",options:{a:"Line uzunluğu",b:"Sinyal seviye sayısı",c:"Loading faktörü",d:"Latency değeri",e:"Loss oranı"},correctAnswer:"b",explanation:"mBnL olarak adlandırılan multilevel kodlamada (formül 2^m ≤ L^n), m binary veri uzunluğunu, n sinyal uzunluğunu ve L sinyal seviye sayısını gösterir. (Örneğin L=3 ise Ternary, L=4 ise Quaternary)."},
    {id:50,question:"Block coding'de \"/\" işaretinin anlamı nedir?",options:{a:"Bölme işlemi",b:"Alternatif seçenek",c:"Block coding göstergesi",d:"Hata oranı",e:"Frekans oranı"},correctAnswer:"c",explanation:"Ders notlarında, mB/nB (örneğin 4B/5B) gösterimindeki \"/\" işaretinin, bu tekniği mBnL (örneğin 8B6T) gibi multilevel kodlamalardan ayırmak için kullanılan bir blok kodlama göstergesi olduğu belirtilmiştir."},
    {id:51,question:"Nyquist teoremine göre minimum örnekleme frekansı nasıl hesaplanır?",options:{a:"fs = fmax",b:"fs = 2 * fmax",c:"fs = 4*fmax",d:"fs = fmax / 2",e:"fs = 3*fmax"},correctAnswer:"b",explanation:"Nyquist teoremine göre, bir analog sinyali kayıpsız olarak dijitalleştirebilmek için örnekleme frekansının (fs), sinyaldeki en yüksek frekansın (fmax) en az iki katı olması gerekir (fs ≥ 2 × fmax)."},
    {id:52,question:"PCM'de üç temel adım sırasıyla nelerdir?",options:{a:"Encoding, Sampling, Quantizing",b:"Quantizing, Sampling, Encoding",c:"Sampling, Quantizing, Encoding",d:"Sampling, Encoding, Quantizing",e:"Encoding, Quantizing, Sampling"},correctAnswer:"c",explanation:"PCM (Pulse Code Modulation) encoder'ın şeması, analog sinyalin sırasıyla Örnekleme (Sampling), Kuantalama (Quantizing) ve Kodlama (Encoding) adımlarından geçtiğini göstermektedir."},
    {id:53,question:"Quantization işleminde iki seviye arasındaki fark (Delta) nasıl hesaplanır?",options:{a:"Delta = Vmax + Vmin / L",b:"Delta = (Vmax - Vmin) / L",c:"Delta = Vmax × Vmin / L",d:"Delta = L / (Vmax - Vmin)",e:"Delta = (Vmax + Vmin)*L"},correctAnswer:"b",explanation:"Kuantalama (Quantization) işleminde, minimum ve maksimum voltaj aralığı L adet seviyeye bölünür. İki seviye arasındaki fark (Δ), Δ = (Vmax - Vmin) / L formülü ile hesaplanır."},
    {id:54,question:"3000 Hz maksimum frekanslı bir ses sinyali için minimum örnekleme frekansı nedir?",options:{a:"1500 Hz",b:"3000 Hz",c:"4500 Hz",d:"6000 Hz",e:"9000 Hz"},correctAnswer:"d",explanation:"Nyquist teoremine göre minimum örnekleme frekansı (Nyquist rate), sinyaldeki maksimum frekansın iki katıdır. fmax = 3000 Hz için fs = 2 × 3000 Hz = 6000 Hz'dir."},
    {id:55,question:"Delta modülasyonda kodlanan bilgi nedir?",options:{a:"Mutlak değer",b:"Frekans değişimi",c:"Artış veya azalış",d:"Faz farkı",e:"Güç seviyesi"},correctAnswer:"c",explanation:"Delta Modülasyonu (DM), PCM'den daha basittir. Sinyalin mutlak değerini kodlamak yerine, sadece bir önceki örneğe göre sinyalin yönünü (artış veya azalış) kodlar."},
    {id:56,question:"PCM'de 8 seviye kullanılıyorsa her örnek kaç bit ile kodlanır?",options:{a:"2 bit",b:"3 bit",c:"4 bit",d:"8 bit",e:"16 bit"},correctAnswer:"b",explanation:"Kuantalama seviyesi (L) ile bu seviyeleri temsil etmek için gereken bit sayısı (n) arasındaki ilişki L = 2^n'dir. L=8 seviye için 8 = 2^n, bu da n=3 bit demektir."},
    {id:57,question:"Undersampling ne zaman oluşur?",options:{a:"fs > 2fmax olduğunda",b:"fs = 2fmax olduğunda",c:"fs < 2fmax olduğunda",d:"fs = fmax olduğunda",e:"fs > 4fmax olduğunda"},correctAnswer:"c",explanation:"Örnekleme frekansı (fs), Nyquist oranından (2fmax) daha düşükse \"undersampling\" (yetersiz örnekleme) meydana gelir. Bu durum, orijinal sinyalin doğru bir şekilde yeniden oluşturulamamasına (aliasing) neden olur."},
    {id:58,question:"Sample and hold yönteminin diğer adı nedir?",options:{a:"Natural sampling",b:"Ideal sampling",c:"Flat-top sampling",d:"Delta sampling",e:"Pulse sampling"},correctAnswer:"c",explanation:"Ders notlarındaki şemada \"Sample and hold\" yöntemi, \"Flat-top sampling\" olarak da adlandırılmıştır ve en yaygın kullanılan yöntem olduğu belirtilmiştir."},
    {id:59,question:"Telefon hatlarının ses için kullandığı standart örnekleme frekansı nedir?",options:{a:"4000 Hz",b:"6000 Hz",c:"8000 Hz",d:"16000 Hz",e:"44100 Hz"},correctAnswer:"c",explanation:"Telefon sistemleri, insan sesinin yaklaşık 4 kHz'lik kısmını iletir. Nyquist teoremine göre (fs ≥ 2 × fmax), bu sinyali dijitalleştirmek için 2 × 4 kHz = 8 kHz (yani 8000 Hz) örnekleme frekansı kullanılır."},
    {id:60,question:"PAM sinyali neyi gösterir?",options:{a:"Phase Amplitude Modulation",b:"Pulse Amplitude Modulation",c:"Power Amplitude Modulation",d:"Parallel Amplitude Modulation",e:"Peak Amplitude Modulation"},correctAnswer:"b",explanation:"PAM, \"Pulse Amplitude Modulation\" (Darbe Genlik Modülasyonu) anlamına gelir. Bu, PCM sürecinin örnekleme (sampling) aşamasından sonra elde edilen sinyaldir."},
    {id:61,question:"Paralel iletişimde 8 bit veri göndermek için kaç kablo gerekir?",options:{a:"1",b:"2",c:"4",d:"8",e:"16"},correctAnswer:"d",explanation:"Paralel iletişimde, aynı anda 'n' bit göndermek için 'n' adet hat (kablo) gerekir. 8 bit veri göndermek için 8 ayrı kablo hattı kullanılır."},
    {id:62,question:"Seri iletişimin paralel iletişime göre avantajı nedir?",options:{a:"Yüksek hız",b:"Düşük maliyet",c:"Düşük gecikme",d:"Yüksek güç",e:"Basit senkronizasyon"},correctAnswer:"b",explanation:"Seri iletişim, aynı anda sadece 1 bit gönderdiği için tek bir hat (wire) gerektirir. Bu, özellikle uzun mesafelerde paralel iletişime (çoklu kablo gerektiren) göre maliyeti önemli ölçüde düşürür."},
    {id:63,question:"Asenkron iletişimde stop biti kaç bit olabilir?",options:{a:"Sadece 0.5 bit",b:"Sadece 1 bit",c:"1, 1.5 veya 2 bit",d:"Sadece 2 bit",e:"3 veya 4 bit"},correctAnswer:"c",explanation:"Ders notu şemasında asenkron iletişimde \"stop bit\" (duruş biti) gösterilmiştir. Standart uygulamalarda stop biti 1, 1.5 veya 2 bit uzunluğunda olabilir."},
    {id:64,question:"Start biti hangi seviyede iletilir?",options:{a:"Yüksek (1)",b:"Düşük (0)",c:"Değişken",d:"Floating",e:"Tri-state"},correctAnswer:"b",explanation:"Asenkron iletişimde hat boşta iken genellikle yüksek seviyededir (1). İletişimi başlatmak için \"start bit\" (başlangıç biti) gönderilir ve bu bit her zaman düşük seviyededir (0)."},
    {id:65,question:"Isochronous iletişim hangi uygulamalar için uygundur?",options:{a:"E-mail",b:"Dosya transferi",c:"Video streaming",d:"Web browsing",e:"Veritabanı sorguları"},correctAnswer:"c",explanation:"Isochronous (eşzamanlı) iletişim, verinin sabit bir hızda, gecikmelerde değişim (jitter) olmadan iletilmesini sağlar. Bu, gerçek zamanlı video ve ses (audio) uygulamaları için kritik öneme sahiptir."},
    {id:66,question:"Keyboard hangi tür iletişim kullanır?",options:{a:"Senkron paralel",b:"Asenkron seri",c:"Senkron seri",d:"Isochronous",e:"Asenkron paralel"},correctAnswer:"b",explanation:"Klavye ve fare gibi cihazlar, her tuşa basıldığında veya fare hareket ettiğinde veri ürettikleri için (sürekli değil), bu veriyi start ve stop bitleri ekleyerek asenkron seri iletişim yoluyla gönderirler."},
    {id:67,question:"Senkron iletişimin asenkron iletişime göre avantajı nedir?",options:{a:"Basit donanım",b:"Düşük maliyet",c:"Yüksek verimlilik",d:"Kolay hata tespiti",e:"Düşük güç tüketimi"},correctAnswer:"c",explanation:"Asenkron iletişim, her veri baytına (örn: 8 bit) ek olarak 1 start biti ve 1-2 stop biti ekler (%80 verimlilik gibi). Senkron iletişim, veriyi büyük bloklar halinde ve paylaşılan bir saat ile gönderdiği için bu ek yük (overhead) yoktur, bu da onu daha verimli kılar."},
    {id:68,question:"Paralel/seri dönüştürücü ne işe yarar?",options:{a:"Hız artırma",b:"Sinyal güçlendirme",c:"Veri formatı değiştirme",d:"Hata düzeltme",e:"Sıkıştırma"},correctAnswer:"c",explanation:"Gönderici (sender) tarafta, bilgisayar içindeki paralel veriyi tek hat üzerinden göndermek için seri formata çeviren bir \"paralel/seri dönüştürücü\" (parallel/serial converter) kullanılır. Alıcıda ise \"seri/paralel dönüştürücü\" bulunur. Bu, veri formatını değiştirme işlemidir."},
    {id:69,question:"ASK (Amplitude Shift Keying) modülasyonda On-Off Keying kullanıldığında bit 0 ve bit 1 nasıl temsil edilir?",options:{a:"Bit 0: düşük frekans, Bit 1: yüksek frekans",b:"Bit 0: 0 genlik, Bit 1: A genlik",c:"Bit 0: 0 derece faz, Bit 1: 180 derece faz",d:"Bit 0: pozitif genlik, Bit 1: negatif genlik",e:"Bit 0: dar bant, Bit 1: geniş bant"},correctAnswer:"b",explanation:"ASK (Amplitude Shift Keying) modülasyonunun en basit türü olan OOK (On-Off Keying), bit '1' için sinyalin gönderilmesini (A genlik), bit '0' için ise sinyalin gönderilmemesini (0 genlik) esas alır."},
    {id:70,question:"FSK modülasyonda bant genişliği formülü nedir?",options:{a:"BW = S",b:"BW = 2S",c:"BW = (1+d)S + 2Δf",d:"BW = 4S",e:"BW = S/2"},correctAnswer:"c",explanation:"FSK (Frequency Shift Keying) için bant genişliği formülü BW = (1+d)S + 2Δf olarak verilmiştir."},
    {id:71,question:"QPSK modülasyonda bir sinyal elemanı ile kaç bit veri gönderilebilir?",options:{a:"1 bit",b:"2 bit",c:"3 bit",d:"4 bit",e:"8 bit"},correctAnswer:"b",explanation:"QPSK (Quadrature Phase Shift Keying), 4 farklı faz durumu kullanır (örn: 45°, 135°, 225°, 315°). 4 = 2² olduğundan, her sinyal elemanı 2 bit veri taşır."},
    {id:72,question:"16-QAM modülasyonda kaç farklı sembol vardır?",options:{a:"4",b:"8",c:"16",d:"32",e:"64"},correctAnswer:"c",explanation:"16-QAM, \"16\" sayısının belirttiği gibi 16 farklı sembol (durum) kullanır. Her sembol log₂(16) = 4 bit veri taşır."},
    {id:73,question:"Constellation diagram neyi gösterir?",options:{a:"Sadece frekans değişimlerini",b:"Genlik ve faz değerlerini",c:"Sadece güç spektrumunu",d:"Zaman domeninde sinyali",e:"Bit hata oranını"},correctAnswer:"b",explanation:"Constellation Diagram (Takımyıldız Diyagramı), bir sinyal elemanının genlik (amplitude) ve faz (phase) değerlerini 2 boyutlu bir düzlemde göstermek için kullanılır."},
    {id:74,question:"AM radyo yayınları hangi frekans aralığında yapılır?",options:{a:"88-108 MHz",b:"530-1700 kHz",c:"2.4-2.5 GHz",d:"30-300 MHz",e:"3-30 kHz"},correctAnswer:"b",explanation:"AM (Genlik Modülasyonu) radyo yayınları için taşıyıcı frekanslar 530-1700 kHz aralığındadır. Her kanal 10 kHz bant genişliği kullanır. 88-108 MHz aralığı ise FM radyo içindir."},
    {id:75,question:"FM modülasyonda β (beta) modülasyon indeksi genellikle hangi değer alınır?",options:{a:"1",b:"2",c:"3",d:"4",e:"5"},correctAnswer:"d",explanation:"FM (Frekans Modülasyonu) bant genişliği BW = 2(1+β)B formülüyle hesaplanır. β (beta) modülasyon oranıdır ve genellikle 4 olarak alınır."},
    {id:76,question:"Hangi modülasyon tekniği gürültüye karşı en hassastır?",options:{a:"FSK",b:"PSK",c:"ASK",d:"QAM",e:"FM"},correctAnswer:"c",explanation:"ASK (Amplitude Shift Keying), bilgiyi sinyalin genliğinde (yüksekliğinde) taşır. Gürültü (noise) de sinyalin genliğini doğrudan etkilediği için ASK, gürültüye karşı en hassas (dayanıksız) modülasyon tekniğidir."},
    {id:77,question:"VCO (Voltage-Controlled Oscillator) hangi modülasyon türünde kullanılır?",options:{a:"ASK",b:"FSK ve FM",c:"Sadece PSK",d:"Sadece AM",e:"QAM"},correctAnswer:"b",explanation:"VCO (Voltage-Controlled Oscillator - Gerilim Kontrollü Osilatör), girişine uygulanan gerilime (voltaja) bağlı olarak çıkış sinyalinin frekansını değiştiren bir devredir. Bu özellik, hem analog (FM) hem de dijital (FSK) frekans modülasyonu yapmak için kullanılır."},
    {id:78,question:"64-QAM'da her sembol kaç bit veri taşır?",options:{a:"4 bit",b:"5 bit",c:"6 bit",d:"7 bit",e:"8 bit"},correctAnswer:"c",explanation:"64-QAM, 2⁶ = 64 olduğu için, her sembol 6 bit veri taşır."},
    {id:79,question:"PM (Phase Modulation) ile FM'in bant genişliği ilişkisi nasıldır?",options:{a:"PM'in bant genişliği FM'in yarısıdır",b:"PM'in bant genişliği FM'in iki katıdır",c:"PM ve FM'in bant genişlikleri aynıdır",d:"PM'in bant genişliği FM'in dörtte biridir",e:"İlişki yoktur"},correctAnswer:"c",explanation:"Hem PM (Phase Modulation) hem de FM (Frequency Modulation) için bant genişliği (BW) formülü BW = 2(1+β)B olarak verilmiştir ve aynıdır."},
    {id:80,question:"Full-duplex ASK için iki kanal arasında frekans farkı 50 kHz ise, toplam bant genişliği ne kadardır?",options:{a:"50 kHz",b:"100 kHz",c:"150 kHz",d:"200 kHz",e:"250 kHz"},correctAnswer:"b",explanation:"Full-duplex (eş zamanlı çift yönlü) iletişim için iki ayrı kanal gerekir. Ders notlarındaki \"Full-duplex ASK\" örneğinde, gönderme ve alma için iki ayrı 50 kHz'lik bant kullanılmış (biri 200-250 kHz, diğeri 250-300 kHz aralığında), toplam 100 kHz bant genişliği gerekmiştir."},
    {id:81,question:"FDM'de her kanal için neden guard band kullanılır?",options:{a:"Veri hızını artırmak için",b:"Maliyeti düşürmek için",c:"Kanallar arası girişimi (interference) önlemek için",d:"Senkronizasyon sağlamak için",e:"Güç tasarrufu yapmak için"},correctAnswer:"c",explanation:"FDM'de (Frekans Bölmeli Çoklama), farklı frekans bantlarına atanan kanalların sinyallerinin birbirine karışmasını (girişim - interference veya crosstalk) önlemek için aralarında \"Guard Band\" (koruma bandı) adı verilen boş frekans aralıkları bırakılır."},
    {id:82,question:"3 ses kanalı FDM ile birleştirilecek. Her kanal 4 kHz bant genişliğine sahipse, minimum toplam bant genişliği ne olur? (Guard band hariç)",options:{a:"4 kHz",b:"8 kHz",c:"12 kHz",d:"16 kHz",e:"20 kHz"},correctAnswer:"c",explanation:"FDM'de kanallar frekans spektrumunda yan yana yerleştirilir. Eğer guard band kullanılmadığı varsayılırsa (minimum toplam bant genişliği sorulduğu için), toplam bant genişliği kanalların bant genişliklerinin toplamıdır: 3 kanal × 4 kHz/kanal = 12 kHz."},
    {id:83,question:"WDM (Wavelength Division Multiplexing) hangi ortamda kullanılır?",options:{a:"Bakır kablo",b:"Koaksiyel kablo",c:"Fiber optik kablo",d:"Radyo dalgaları",e:"Uydu haberleşmesi"},correctAnswer:"c",explanation:"WDM (Wavelength Division Multiplexing - Dalga Boyu Bölmeli Çoklama), fiber optik kablonun çok yüksek bant genişliğini kullanmak için tasarlanmış bir analog çoklama tekniğidir. Farklı dalga boylarındaki (farklı renklerdeki) ışık sinyallerini tek bir fiber üzerinde birleştirir."},
    {id:84,question:"Senkron TDM'de 4 kanal vardır ve her biri 1 Mbps hızındadır. Çıkış bit rate'i nedir? (Overhead yoksa)",options:{a:"1 Mbps",b:"2 Mbps",c:"3 Mbps",d:"4 Mbps",e:"8 Mbps"},correctAnswer:"d",explanation:"Senkron TDM'de (Zaman Bölmeli Çoklama), giriş kanallarından gelen veriler sırayla zaman dilimlerine (time slot) yerleştirilir. Çıkış bit hızı, giriş kanallarının bit hızlarının toplamıdır (eğer overhead yoksa). 4 kanal × 1 Mbps/kanal = 4 Mbps."},
    {id:85,question:"T1 hattı kaç ses kanalı taşır ve toplam veri hızı nedir?",options:{a:"12 kanal, 1.024 Mbps",b:"24 kanal, 1.544 Mbps",c:"32 kanal, 2.048 Mbps",d:"48 kanal, 3.088 Mbps",e:"64 kanal, 4.096 Mbps"},correctAnswer:"b",explanation:"T-Carrier hiyerarşisinde T1 hattı, her biri 64 kbps olan 24 ses kanalını taşımak için standartlaşmıştır. Toplam veri hızı (framing bitleri dahil) 1.544 Mbps'dir."},
    {id:86,question:"İstatistiksel TDM'in senkron TDM'e göre avantajı nedir?",options:{a:"Daha basit devre yapısı",b:"Sabit gecikme süresi",c:"Boş slotların kullanılmaması ile yüksek verimlilik",d:"Düşük maliyet",e:"Senkronizasyon gerektirmemesi"},correctAnswer:"c",explanation:"Senkron TDM'de, veri göndermeyen kanala bile zorunlu olarak bir zaman dilimi (slot) ayrılır, bu da \"boş slot\"lara ve düşük verimliliğe neden olur. İstatistiksel TDM ise zaman dilimlerini dinamik olarak, sadece verisi olan kanallara ayırır, bu sayede boş slotları ortadan kaldırır ve çok daha yüksek verimlilik sağlar."},
    {id:87,question:"FHSS'de 8 frekans ve 3 bitlik pattern kullanılıyor. Spreading kod bilmeyen birisi iletişimi neden takip edemez?",options:{a:"Sinyal çok zayıftır",b:"Frekans atlama sırası bilinmediği için",c:"Veri şifrelenmiştir",d:"Bant genişliği çok fazladır",e:"Güç seviyesi düşüktür"},correctAnswer:"b",explanation:"FHSS (Frequency Hopping Spread Spectrum), sinyali pseudorandom (sözde rastgele) bir kod dizisine göre farklı frekanslar arasında sürekli atlatarak iletir. Bu atlama sırasını (pattern) bilmeyen bir alıcı, sinyalin bir sonraki anda hangi frekansta olacağını tahmin edemez ve iletişimi takip edemez."},
    {id:88,question:"DSSS'de 11 bitlik Barker sequence kullanıldığında bant genişliği nasıl değişir?",options:{a:"Değişmez",b:"2 kat artar",c:"5 kat artar",d:"11 kat artar",e:"22 kat artar"},correctAnswer:"d",explanation:"DSSS (Direct Sequence Spread Spectrum) tekniğinde, her bir veri biti, \"chip\" adı verilen 'n' bitlik bir kod dizisi ile çarpılır. 11-bit Barker sequence kullanıldığında, 1 bitlik veri 11 bitlik bir sinyale yayılır. Bu işlem, sinyalin bant genişliğini 11 kat artırır."},
    {id:89,question:"4 kanal TDM ile birleştiriliyor. Her kanal 100 byte/s, frame başına 1 byte alınıyor. Frame rate nedir?",options:{a:"25 frame/s",b:"50 frame/s",c:"100 frame/s",d:"200 frame/s",e:"400 frame/s"},correctAnswer:"c",explanation:"Frame rate (çerçeve hızı), bir kanalın veri hızının, o kanaldan bir çerçeveye (frame) alınan veri birimine bölünmesiyle bulunur. Her kanal 100 byte/s veri gönderiyor ve her frame'de bu kanaldan 1 byte alınıyorsa, saniyede 100 byte'ı toplamak için 100 frame gerekir. Frame Rate = (100 byte/s) / (1 byte/frame) = 100 frame/s."},
    {id:90,question:"AMPS sisteminde her kullanıcı için full-duplex iletişimde toplam kaç kHz bant genişliği ayrılır?",options:{a:"15 kHz",b:"30 kHz",c:"45 kHz",d:"60 kHz",e:"90 kHz"},correctAnswer:"d",explanation:"AMPS (Advanced Mobile Phone System) standardında, her kullanıcı tek yönlü (simplex) iletişim için 30 kHz'lik bir kanal kullanır. Full-duplex (eş zamanlı çift yönlü) iletişim için biri gönderme (uplink) diğeri alma (downlink) olmak üzere iki ayrı banda ihtiyaç vardır. Toplam bant genişliği 2 × 30 kHz = 60 kHz olur."},
    {id:91,question:"Multiplexer ve demultiplexer arasında frame bazında senkronizasyon için ne kullanılır?",options:{a:"Guard band",b:"Framing bits",c:"Parity bits",d:"Stop bits",e:"Control bits"},correctAnswer:"b",explanation:"Senkron TDM'de, alıcı (demultiplexer) ile verici (multiplexer) arasında senkronizasyonu sağlamak ve çerçevenin (frame) nerede başlayıp nerede bittiğini belirtmek için her çerçevenin başına \"framing bits\" (çerçeveleme bitleri) adı verilen özel senkronizasyon bitleri eklenir."},
    {id:92,question:"Pulse stuffing tekniği ne için kullanılır?",options:{a:"Veri sıkıştırma",b:"Hata düzeltme",c:"Farklı hızlardaki girişleri eşitleme",d:"Güç kontrolü",e:"Senkronizasyon"},correctAnswer:"c",explanation:"Pulse stuffing (darbe doldurma) tekniği, TDM'de farklı hızlardaki girişleri birleştirmek için kullanılır. Düşük hızlı kanallara, hızlarını en yüksek hızlı kanala eşitlemek için \"boş\" (stuffing) bitler eklenir."},
    {id:93,question:"Spread Spectrum'un temel amacı nedir?",options:{a:"Veri hızını artırmak",b:"Bant genişliğini azaltmak",c:"Gizlilik ve parazite dayanıklılık sağlamak",d:"Maliyeti düşürmek",e:"Güç tüketimini azaltmak"},correctAnswer:"c",explanation:"Spread Spectrum (Yayılı Spektrum), sinyali kasıtlı olarak çok geniş bir frekans bandına yayar. Bu işlemin amacı, sinyali gürültü seviyesinin altına düşürerek dinlemeyi (interception) zorlaştırmak (gizlilik) ve sinyalin parazit (jamming) veya karışmaya karşı direncini artırmaktır."},
    {id:94,question:"Processing gain formülü nedir ve DSSS'de 100 kat bant genişliği artışı kaç dB kazanç sağlar?",options:{a:"10 dB",b:"20 dB",c:"30 dB",d:"40 dB",e:"100 dB"},correctAnswer:"b",explanation:"Processing Gain (İşlem Kazancı) formülü PG(dB) = 10 × log₁₀(Bss / B)'dir, (Bss/B = Chip Rate / Bit Rate). Bant genişliği artışı 100 kat ise (Bss/B = 100): PG(dB) = 10 × log₁₀(100) = 10 × 2 = 20 dB."},
    {id:95,question:"Bluetooth hangi spread spectrum tekniğini kullanır ve kaç kanalda çalışır?",options:{a:"DSSS, 11 kanal",b:"FHSS, 79 kanal",c:"DSSS, 79 kanal",d:"FHSS, 11 kanal",e:"OFDM, 52 kanal"},correctAnswer:"b",explanation:"Bluetooth, FHSS (Frequency Hopping Spread Spectrum - Frekans Atlamalı Yayılı Spektrum) tekniğini kullanır. 2.4 GHz bandında, 1 MHz aralıklı 79 kanalda çalışır ve saniyede 1600 kez frekans atlaması yapar."},
    {id:96,question:"Transmission media (iletim ortamı) nedir?",options:{a:"Sadece kablosuz iletişimde kullanılan cihaz",b:"Bilgi taşıyan fiziksel veya boşluk ortamı",c:"Yalnızca fiber optik kablolar",d:"Sadece metal teller",e:"Modülasyon devresi"},correctAnswer:"b",explanation:"İletim ortamı (Transmission media), bilgiyi kaynaktan hedefe taşıyan fiziksel yoldur. Bu, metal kablo, fiber optik kablo gibi fiziksel bir yol (guided media) veya hava/boşluk (unguided media) olabilir."},
    {id:97,question:"İlk kablosuz iletişim hangi bilim insanı tarafından yapılmıştır?",options:{a:"Samuel Morse",b:"Hertz",c:"Graham Bell",d:"Marconi",e:"Tesla"},correctAnswer:"b",explanation:"Kablosuz iletişim, ilk defa 1895 yılında Hertz tarafından yüksek frekanslı sinyallerle gerçekleştirilmiştir."},
    {id:98,question:"Guided media'ya örnek olmayan seçenek aşağıdakilerden hangisidir?",options:{a:"Twisted-pair kablo",b:"Coaxial kablo",c:"Fiber optik kablo",d:"Radyo dalgası",e:"Ethernet kablosu"},correctAnswer:"d",explanation:"İletim ortamları iki ana gruba ayrılır: Guided (kablolu) ve Unguided (kablosuz). Guided media, fiziksel bir yol sağlar; twisted-pair (bükümlü çift), coaxial (koaksiyel) ve fiber-optik kablo bu gruba girer. Radyo dalgası ise boşlukta (free space) yayılan bir unguided (kablosuz) iletim türüdür."},
    {id:99,question:"Twisted-pair kabloda bükülmenin amacı nedir?",options:{a:"Elektrik akımını artırmak",b:"Gürültü etkisini azaltmak",c:"Sinyali güçlendirmek",d:"Tel direncini düşürmek",e:"Frekans aralığını genişletmek"},correctAnswer:"b",explanation:"Twisted-pair (bükümlü çift) kabloda teller birbirine bükülür. Bu büküm, dış kaynaklardan gelen gürültünün (noise) her iki teli de benzer oranda etkilemesini sağlar. Alıcı, iki tel arasındaki voltaj farkını okuduğu için, her iki tele de eklenen gürültü birbirini götürür ve sinyal kalitesi korunmuş olur."},
    {id:100,question:"RJ45 konnektör hangi kablo türüyle kullanılır?",options:{a:"Koaksiyel kablo",b:"Fiber optik kablo",c:"UTP kablo",d:"STP kablo",e:"Telefon kablosu"},correctAnswer:"c",explanation:"RJ45 (Registered Jack 45) konnektör, UTP (Unshielded Twisted-Pair) kablolar için kullanılan standart konnektördür ve genellikle Ethernet LAN bağlantılarında bulunur."},
    {id:101,question:"Koaksiyel kablolar hangi empedans değerleriyle tanımlanır?",options:{a:"25 Ω ve 35 Ω",b:"50 Ω ve 75 Ω",c:"100 Ω ve 120 Ω",d:"200 Ω ve 400 Ω",e:"600 Ω ve 800 Ω"},correctAnswer:"b",explanation:"Koaksiyel kablolar (RG - Radio Government) empedans değerlerine göre sınıflandırılır. En yaygın olanları kablo TV için kullanılan 75 Ω (RG-59) ve Thin/Thick Ethernet için kullanılan 50 Ω (RG-58, RG-11) kablolardır."},
    {id:102,question:"Coaxial kabloda \"BNC konnektör\" ne amaçla kullanılır?",options:{a:"Fiber bağlantısı için",b:"Anten bağlantısı için",c:"Kablo uçlarını bağlamak için",d:"Toprak hattı oluşturmak için",e:"Güç iletimi için"},correctAnswer:"c",explanation:"BNC (Bayonet Neill-Concelman) konnektör, koaksiyel kabloları cihazlara veya birbirine bağlamak için kullanılan bir konnektör tipidir."},
    {id:103,question:"Fiber optik kablo hangi tür sinyalleri taşır?",options:{a:"Elektriksel sinyal",b:"Akustik sinyal",c:"Manyetik sinyal",d:"Işık sinyali",e:"Mikrodalga"},correctAnswer:"d",explanation:"Fiber optik kablo, cam (glass) veya plastikten (plastic) yapılır ve veriyi elektrik sinyalleri yerine ışık sinyalleri (light signals) olarak iletir."},
    {id:104,question:"Fiber optik kablolarda \"refraction\" ne anlama gelir?",options:{a:"Işığın emilmesi",b:"Işığın kırılması",c:"Işığın kaybolması",d:"Işığın güçlendirilmesi",e:"Işığın soğurulması"},correctAnswer:"b",explanation:"Refraction (kırılma), ışığın farklı yoğunluktaki iki ortam arasından geçerken yön değiştirmesi olayıdır. Fiber optik ise ışığı kablo içinde tutmak için \"reflection\" (yansıma) özelliğini kullanır."},
    {id:105,question:"Fiber optik kabloda \"single mode\" ve \"multimode\" farkı nedir?",options:{a:"Kullanılan metal tipi",b:"Frekans aralığı",c:"Işık yayılım yolu sayısı",d:"Kılıf malzemesi",e:"Bağlantı şekli"},correctAnswer:"c",explanation:"Fiber optik kablolar, içinden geçen ışığın yayılım moduna (mode) göre sınıflandırılır. Multimode (çok modlu) kabloda, ışık birden fazla yoldan (farklı açılarla yansıyarak) ilerler. Single mode (tek modlu) kabloda ise merkez çapı çok küçüktür ve ışık sadece tek bir yoldan (doğrudan) ilerler."},
    {id:106,question:"Fiber optik kablolarda kullanılan üç konnektörden biri değildir?",options:{a:"SC",b:"ST",c:"MT-RJ",d:"RJ11",e:"Hiçbiri"},correctAnswer:"d",explanation:"Fiber optik kablolar için kullanılan 3 tür konnektör SC (Subscriber Connector), ST (Straight-Tip) ve MT-RJ (Mechanical Transfer Registered Jack) olarak belirtilmiştir. RJ11 ise genellikle analog telefon hatları için kullanılan bakır kablo konnektörüdür."},
    {id:107,question:"Kablosuz iletişim hangi aralıkta elektromanyetik spektrum kullanır?",options:{a:"3 Hz – 900 Hz",b:"3 kHz – 900 THz",c:"3 MHz – 900 MHz",d:"300 Hz – 900 GHz",e:"1 GHz – 300 GHz"},correctAnswer:"b",explanation:"Kablosuz iletişimde kullanılan elektromanyetik spektrum aralığı ders notlarında 3 kHz - 900 THz olarak belirtilmiştir."},
    {id:108,question:"Unguided sinyallerin üç yayılım türünden biri değildir:",options:{a:"Ground propagation",b:"Sky propagation",c:"Line-of-sight propagation",d:"Cable propagation",e:"Hiçbiri"},correctAnswer:"d",explanation:"Unguided (yönlendirilmemiş/kablosuz) sinyallerin üç yayılım türü vardır: Ground propagation (yer dalgası), Sky propagation (gök dalgası) ve Line-of-sight (LOS - görüş hattı) yayılımı. \"Cable propagation\" (kablolu yayılım) guided media'ya aittir."},
    {id:109,question:"Mikrodalgalar hangi özellikte yayılır?",options:{a:"Her yöne (omnidirectional)",b:"Tek yönde (unidirectional)",c:"Yansıyarak",d:"Dağınık biçimde",e:"Manyetik alanla"},correctAnswer:"b",explanation:"Radyo dalgaları \"omnidirectional\" (her yöne yayılan) özelliktedir. Mikrodalgalar (Microwaves) ise \"unidirectional\" (tek yönlü) yayılır. Bu nedenle mikrodalga antenlerinin (çanak antenler gibi) birbirine hizalanması gerekir."},
    {id:110,question:"Infrared dalgalar hangi ortamda kullanılır?",options:{a:"Dış mekan iletişiminde",b:"Uzun mesafeli bağlantılarda",c:"Kapalı ortamlarda kısa mesafeli iletişimde",d:"Uydu haberleşmesinde",e:"Denizaltı iletişiminde"},correctAnswer:"c",explanation:"Infrared (kızılötesi) dalgalar, 300 GHz - 400 THz aralığındadır, kısa mesafeli iletişim için kullanılır (örn: TV kumandası). Duvarlardan geçemezler, bu nedenle kapalı ortamlarda (indoor environments) kullanıma uygundur."}
];

