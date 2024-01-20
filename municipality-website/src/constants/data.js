import images from "./images";
import {FaPaperPlane, FaEdit, FaRocket, FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt, FaConnectdevelop} from "react-icons/fa";
import { BsHospital } from "react-icons/bs";
import { BiMove } from "react-icons/bi";

const gradient = "url(#blue-gradient)" ;

const services = [
    {
        id: 1,
        icon: <FaPaperPlane style = {{ fill: gradient }} />,
        title: "Belediyecilik",
        text: "Meramın her yönüyle gelişmesi için çalışıyoruz."
    },
    {
        id: 2,
        icon: <FaConnectdevelop style = {{ fill: gradient }} />,
        title: "Halkla İlişkiler",
        text: "Halkımızın isteklerini önemsiyoruz ve isteklerine, şikayetlerine göre çalışıyoruz.  "
    },
    {
        id: 3,
        icon: <FaRocket style = {{ fill: gradient }} />,
        title: "Yol Bakım Ve Çalışmaları",
        text: "Meramın ulaşımda örnek bir ilçe olması için yollarımıza gerekli yapım,bakım ve onarımı yapıyoruz. Hem yollarımızın araçlar için uygun hem de yayalarımız için güvenli olmasını önemsiyoruz. "
    },
    {
        id: 4, 
        icon: <FaEdit style = {{ fill: gradient }} />,
        title: "Eğitim",
        text: "Farklı yaş gruplarına farklı dallardan eğitimler vererek bilgi paylaşımını ve gelişimi artırıyoruz."
    },
    {
        id: 5,
        icon: <BsHospital style = {{ fill: gradient }} />,
        title: "Sağlık",
        text: "İlçemiz sınırları içerisinde sağlık ocağı, acil müdahale yerleri halkımıza ulaşılabilir konumdadır."
    },
    {
        id: 6,
        icon: <BiMove style = {{ fill: gradient }} />,
        title: "Sosyal Hayat",
        text: "Spor imkanları ile insanların sosyalleşmesini,spor yapmasını; Akademikerimizde bulunan herkese açık imkanlar ile sosyallik sağlanıyor."
    }
];

const about = [
    {
        id: 7,
        text: "Her Şey Meram İçin"
    }
]

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style = {{ fill: gradient }} />,
        title: "Amaç",
        text: "Meram Belediyesi ve Üretken Akademi iş birliğindeki MEGA(Meram Belediyesi Gelişim Akademisi) Yazılım Akademisi ile yazılım meraklıları HTML, CSS, JavaScript ve ReactJS eğitimleri alma şansı buluyorlar."
    }   
];

const features = [
    {
        id: 10,
        title: "E-Belediye",
        text: "Ödeme,ihale,istek/şikayet gibi işlemlerinizi gerçekleştirebilirsiniz."
    },
    {
        id: 11,
        title: "Nikah İşlemleri",
        text: "Evlendirme Memurluğu aracılığıyla müracaatta bulunarak evlilik işlemlerinizi gerçekleştirebilirsiniz."
    },
    {
        id: 12,
        title: "İhaleler",
        text: "İşlemde veya gerçekleşmiş ihaleleri görüntüleyebilirsiniz."
    },
    {
        id: 13,
        title: "Eczaneler",
        text: "En yakın eczanelere ve nöbetçi eczaneleri öğrenebilirsiniz."
    }, 
    {
        id: 14,
        title: "Ödeme",
        text: "Sistemimizde olan gerçekleştirebileceğiniz ödemelerinizi kolayca yapabilirsiniz."
    },
    {
        id: 15,
        title: "Duyuru",
        text: "En son gelişmelerden haberdar olabilirsiniz."
    }
];

const portfolio = [
    {
        id: 16,
        title: "MEGA YAZILIM AKADEMİSİ",
        text: "HTML,CSS,JAVASCRIPT,REACTJS EĞİTİMLERİYLE KENDİNİ GELİŞTİRME İMKANI YAKALA",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "YAKA SOSYAL TESİSİ",
        text: "Halkımızın kullanımına açacağımız bir yeni sosyal tesis",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "KIZLAR KAYASI",
        text: "Kapadokya'ya gitmeden aynı havayı yaşatan ve muhteşem görsel şölen sunan Kızlar Kayası.",
        image: images.portfolio_img_3,
    }
];

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style = {{ fill: gradient }} />,
        info: "444 3 042",
        
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style = {{ fill: gradient }} />,
        info: "bizimmeram@meram.bel.tr",
        
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style = {{ fill: gradient }} />,
        info: "Türkiye, Konya",
        
    }
]

const sections = {services, about, qualities, features, portfolio, contact};

export default sections;