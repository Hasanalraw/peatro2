/* ==========================================================================
   Pietro Coffee Pizzeria - Core JavaScript
   Multilingual i18n support, filters, scroll interactions, and reservations
   ========================================================================== */

// Global Safe LocalStorage Parser
function safeGetItem(key, defaultValue = []) {
  try {
    const val = localStorage.getItem(key);
    if (!val) return defaultValue;
    return JSON.parse(val) || defaultValue;
  } catch (e) {
    console.error("Error parsing localStorage key " + key + ":", e);
    // Auto-clear corrupted key to prevent infinite loop crashes
    localStorage.removeItem(key);
    return defaultValue;
  }
}


// 1. i18n Translations Dictionary
const defaultTranslations = {
  tr: {
    // Header & Nav
    "nav-home": "Ana Sayfa",
    "nav-about": "Hakkımızda",
    "nav-menu": "Menü",
    "nav-reviews": "Değerlendirmeler",
    "nav-where": "Neredeyiz",
    "nav-contact": "İletişim",
    "btn-book-nav": "Masa Rezervasyonu",
    "whatsapp-chat": "Bize Ulaşın",

    // Hero Section
    "hero-tag": "PIETRO COFFEE PIZZERIA",
    "hero-title": "Yalova'da Gerçek İtalyan Lezzeti",
    "hero-subtitle": "Odun ateşinde pişen çıtır pizzalar, taze el yapımı makarnalar ve İtalyan kahvesinin eşsiz aroması sıcak bir atmosferde buluşuyor.",
    "btn-book-hero": "Masa Rezervasyonu",
    "btn-menu-hero": "Menüyü İncele",
    "hero-badge-title": "Şefin İmza Tabağı",
    "hero-badge-subtitle": "Pizza Pietro",

    // About Us Section
    "about-title": "Otantik Bir İtalyan Deneyimi",
    "about-subtitle": "Pietro Coffee Pizzeria'nın Hikayesi",
    "about-text-1": "Yalova'nın kalbinde yer alan Pietro Coffee Pizzeria, otantik İtalyan lezzetlerinin buluşma noktasıdır. Odun ateşinde pişen çıtır pizzalarımız, el yapımı makarnalarımız ve kaliteli İtalyan kahvelerimiz ile İtalya'nın gerçek ruhunu masanıza taşıyoruz.",
    "about-text-2": "Sıcak ahşap dokuları, loş aydınlatmaları ve imza niteliğindeki botanik duvar resmimizle tasarlanan sıcak mekânımız, memnuniyet verici bir atmosfer sunuyor. Her yemeğimiz, nesilden nesile aktarılan geleneksel tariflerle ve en taze malzemelerle özenle hazırlanmaktadır.",
    "feat-woodfire": "Odun Ateşinde Pizza",
    "feat-handpasta": "El Yapımı Makarna",
    "feat-coffee": "Nitelikli Kahve",

    // Menu Section
    "menu-title": "Lezzet Yolculuğu",
    "menu-subtitle": "Gerçek İtalyan Malzemeleriyle Hazırlanan Menümüz",
    "filter-all": "Tümü",
    "filter-pizza": "Pizzalar",
    "filter-pasta": "Makarnalar",
    "filter-drinks": "İçecekler",
    "image-disclaimer": "Bu görsel temsil amaçlı kullanılmıştır. Kendi fotoğraflarınızla değiştirilecektir.",
    "price-note": "Yaklaşık fiyat - lütfen güncel fiyatı güncelleyin",
    "btn-select": "Seç",
    "btn-learn-more": "Daha Fazla",
    "btn-view-more": "Daha Fazla Gör",

    // Modals Translations
    "modal-ingredients": "İçindekiler",
    "modal-select-size": "Boyut Seçin",
    "size-small": "Küçük",
    "size-medium": "Orta",
    "size-large": "Büyük",
    "btn-confirm": "Onayla ve Rezerve Et",
    "btn-add-more": "Sepete Ekle",
    "btn-confirm-booking": "Masa Rezerve Et",
    "label-selected-dishes": "Seçilen Yemekler",
    "cart-empty": "Henüz yemek seçilmedi. Menümüzden yemek ekleyebilirsiniz.",
    "added-to-cart-toast": "Yemek sepete eklendi!",
    "cart-drawer-title": "Sepetiniz",
    "cart-total-label": "Toplam:",
    "btn-go-to-booking": "Rezervasyonu Tamamla",

    // Reservation Section
    "reserve-title": "Masa Rezervasyonu",
    "reserve-subtitle": "İtalyan Gecenizi Şimdiden Planlayın",
    "reserve-text": "Pietro Coffee Pizzeria'da kendiniz ve sevdikleriniz için bir masa ayırtın. Sıcak atmosferimiz ve benzersiz İtalyan tatlarımızla sizleri ağırlamaktan mutluluk duyacağız.",
    "contact-phone": "Telefon",
    "contact-phone-val": "+90 530 000 00 00",
    "contact-email-val": "info@pietroyalova.com",
    "contact-address-val": "Rüstempaşa Mahallesi, Park Sk. No:3 D:1, 77200 Yalova Merkez/Yalova, Türkiye",
    "contact-hours": "Çalışma Saatleri",
    "contact-hours-desc": "Her Gün: 10:00 - 20:00",
    "label-name": "Adınız Soyadınız",
    "label-phone": "Telefon Numaranız",
    "label-date": "Tarih",
    "label-time": "Saat",
    "label-guests": "Kişi Sayısı",
    "label-table": "Masa Tercihi",
    "option-table-indoor": "İç Mekan",
    "option-table-garden": "Bahçe",
    "option-table-window": "Cam Kenarı",
    "label-notes": "Rezervasyon Notları",
    "btn-edit-cart-link": "Sepeti Düzenle",
    "filter-coffee": "Kahve",
    "filter-dessert": "Tatlı",
    "label-dish": "Tercih Ettiğiniz Yemek (İsteğe Bağlı)",
    "label-drink": "Tercih Ettiğiniz İçecek (İsteğe Bağlı)",
    "option-no-drink": "İçecek seçin (İsteğe bağlı)",
    "drink-cola": "Cola (Yakında)",
    "drink-fanta": "Fanta (Yakında)",
    "drink-water": "Su (Yakında)",
    "btn-book-now": "Şimdi Rezervasyon Yap",
    "popup-title": "Rezervasyon Talebi Gönderildi",
    "popup-message": "Rezervasyon talebiniz alınmıştır. Onaylamak için en kısa sürede sizinle iletişime geçeceğiz. Teşekkürler!",
    "btn-close": "Kapat",
    "logo-text": "Pietro",
    "btn-add-review-text": "Değerlendirme Ekle",
    "review-modal-title": "Değerlendirme Ekle",
    "label-review-author": "Adınız Soyadınız",
    "label-review-rating": "Puanınız",
    "label-review-text": "Yorumunuz",
    "btn-submit-review": "Gönder",

    // Testimonials
    "reviews-title": "Müşteri Yorumları",
    "reviews-subtitle": "Misafirlerimizin Pietro Deneyimi",
    "review-warning": "Taslak yorum - lütfen gerçek yorumlarla değiştirin",
    "review-1-text": "\"Yalova'da gerçek İtalyan pizzası bulabileceğiniz tek yer. Pizza Pietro'daki prosciutto ve mantar uyumu harikaydı. Mekanın atmosferi ve botanik duvar resmi çok estetik.\"",
    "review-2-text": "\"Penne Burrata enfes! Kremalı sosun kıvamı ve burrata peynirinin tazeliği mükemmeldi. Ayrıca yemekten sonra içtiğimiz espresso tam kıvamındaydı.\"",
    "review-3-text": "\"İç mekan tasarımı çok sıcak ve davetkar. Tavanlardaki ahşap geometrik detaylar ve duvar resmi muazzam. Yalova'da böylesi bir şık İtalyan restoranı açılması harika olmuş.\"",

    // Contact
    "contact-title": "İletişim ve Konum",
    "contact-subtitle": "Bizleri Ziyaret Edin",
    "btn-directions": "Yol Tarifi Al",
    "footer-credit": "Otantik İtalyan deneyimleri için tutkuyla tasarlandı."
  },
  en: {
    // Header & Nav
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-menu": "Menu",
    "nav-reviews": "Reviews",
    "nav-where": "Where We Are",
    "nav-contact": "Contact",
    "btn-book-nav": "Book a Table",
    "whatsapp-chat": "Contact Us",

    // Hero Section
    "hero-tag": "PIETRO COFFEE PIZZERIA",
    "hero-title": "Authentic Italian Taste in Yalova",
    "hero-subtitle": "Crispy wood-fired pizzas, fresh handcrafted pastas, and the unique aroma of Italian coffee meet in a warm, welcoming atmosphere.",
    "btn-book-hero": "Book a Table",
    "btn-menu-hero": "Explore Menu",
    "hero-badge-title": "Chef's Signature",
    "hero-badge-subtitle": "Pizza Pietro",

    // About Us Section
    "about-title": "An Authentic Italian Experience",
    "about-subtitle": "The Story of Pietro Coffee Pizzeria",
    "about-text-1": "Nestled in the heart of Yalova, Pietro Coffee Pizzeria is your ultimate destination for authentic Italian flavors. We bring the true essence of Italy to your table with our wood-fired pizzas, handcrafted pastas, and premium Italian coffees.",
    "about-text-2": "Our cozy space, featuring warm wood accents, ambient lighting, and our signature botanical mural, offers the perfect atmosphere for a memorable dining experience. Every dish is prepared with fresh, locally sourced ingredients and traditional recipes passed down through generations.",
    "feat-woodfire": "Wood-fired Pizza",
    "feat-handpasta": "Handmade Pasta",
    "feat-coffee": "Specialty Coffee",

    // Menu Section
    "menu-title": "Taste Journey",
    "menu-subtitle": "Our Menu Prepared with Authentic Italian Ingredients",
    "filter-all": "All",
    "filter-pizza": "Pizzas",
    "filter-pasta": "Pastas",
    "filter-drinks": "Drinks",
    "image-disclaimer": "This image is used as a representation. It will be replaced with your actual photos.",
    "price-note": "Approximate price - please update real price",
    "btn-select": "Select",
    "btn-learn-more": "Learn More",
    "btn-view-more": "View More",

    // Modals Translations
    "modal-ingredients": "Ingredients",
    "modal-select-size": "Select Size",
    "size-small": "Small",
    "size-medium": "Medium",
    "size-large": "Large",
    "btn-confirm": "Confirm & Reserve",
    "btn-add-more": "Add to Cart",
    "btn-confirm-booking": "Book Table Now",
    "label-selected-dishes": "Selected Dishes",
    "cart-empty": "No food selected yet. You can add food from our menu.",
    "added-to-cart-toast": "Food added to cart!",
    "cart-drawer-title": "Your Cart",
    "cart-total-label": "Total:",
    "btn-go-to-booking": "Complete Reservation",

    // Reservation Section
    "reserve-title": "Book a Table",
    "reserve-subtitle": "Plan Your Italian Evening Now",
    "reserve-text": "Reserve a table for yourself and your loved ones at Pietro Coffee Pizzeria. We will be delighted to host you with our warm hospitality and unique Italian flavors.",
    "contact-phone": "Phone",
    "contact-phone-val": "+90 530 000 00 00",
    "contact-email-val": "info@pietroyalova.com",
    "contact-address-val": "Rüstempaşa Mahallesi, Park Sk. No:3 D:1, 77200 Yalova Merkez/Yalova, Türkiye",
    "contact-hours": "Opening Hours",
    "contact-hours-desc": "Daily: 10:00 AM - 8:00 PM",
    "label-name": "Your Full Name",
    "label-phone": "Your Phone Number",
    "label-date": "Date",
    "label-time": "Time",
    "label-guests": "Number of Guests",
    "label-table": "Table Choice",
    "option-table-indoor": "Indoor",
    "option-table-garden": "Garden",
    "option-table-window": "Window Side",
    "label-notes": "Reservation Notes",
    "btn-edit-cart-link": "Edit Cart",
    "filter-coffee": "Coffee",
    "filter-dessert": "Dessert",
    "label-dish": "Preferred Dish (Optional)",
    "label-drink": "Preferred Drink (Optional)",
    "option-no-drink": "Select a drink (Optional)",
    "drink-cola": "Cola (Soon)",
    "drink-fanta": "Fanta (Soon)",
    "drink-water": "Water (Soon)",
    "btn-book-now": "Book Table Now",
    "popup-title": "Booking Request Received",
    "popup-message": "Your table reservation request has been received. We will contact you shortly to confirm your booking. Thank you!",
    "btn-close": "Close",
    "logo-text": "Pietro",
    "btn-add-review-text": "Add Review",
    "review-modal-title": "Add Review",
    "label-review-author": "Your Name",
    "label-review-rating": "Your Rating",
    "label-review-text": "Your Review",
    "btn-submit-review": "Submit",

    // Testimonials
    "reviews-title": "Guest Reviews",
    "reviews-subtitle": "What Our Guests Say About Pietro",
    "review-warning": "Draft review - please replace with real reviews",
    "review-1-text": "\"The only place in Yalova to find authentic Italian pizza. The combination of prosciutto and mushrooms on Pizza Pietro is wonderful. The atmosphere and plant mural are beautiful.\"",
    "review-2-text": "\"Penne Burrata is exquisite! The consistency of the creamy sauce and the freshness of the burrata cheese were perfect. The espresso we had after dinner was also top notch.\"",
    "review-3-text": "\"Interior design is very warm and inviting. The wooden geometric details on the ceiling and the mural are gorgeous. Great to have such an elegant Italian bistro in Yalova.\"",

    // Contact
    "contact-title": "Contact & Location",
    "contact-subtitle": "Visit Us",
    "btn-directions": "Get Directions",
    "footer-credit": "Designed with passion for authentic Italian experiences."
  },
  ar: {
    // Header & Nav
    "nav-home": "الرئيسية",
    "nav-about": "من نحن",
    "nav-menu": "القائمة",
    "nav-reviews": "التقييمات",
    "nav-where": "أين نحن",
    "nav-contact": "الاتصال",
    "btn-book-nav": "احجز طاولتك",
    "whatsapp-chat": "تواصل معنا",

    // Hero Section
    "hero-tag": "بيتزا وبيسترو بيترو",
    "hero-title": "المذاق الإيطالي الأصيل في يالوفا",
    "hero-subtitle": "تلمس جوهر المطبخ الإيطالي الحقيقي في مكان دافئ يجمع بين البيتزا المقرمشة على الحطب، والباستا الطازجة المصنوعة يدوياً، وعبق القهوة الإيطالية الفاخرة.",
    "btn-book-hero": "احجز طاولتك",
    "btn-menu-hero": "شاهد القائمة",
    "hero-badge-title": "طبق الشيف المميز",
    "hero-badge-subtitle": "بيتزا بيترو",

    // About Us Section
    "about-title": "تجربة إيطالية حقيقية",
    "about-subtitle": "قصة مطعم Pietro Coffee Pizzeria",
    "about-text-1": "يقع Pietro Coffee Pizzeria في قلب يالوفا، وهو وجهتك المثالية لتناول النكهات الإيطالية الأصيلة. نحن ننقل الجوهر الحقيقي لإيطاليا إلى طاولتك من خلال البيتزا المخبوزة على الحطب، والباستا المصنوعة يدويًا، والقهوة الإيطالية الفاخرة.",
    "about-text-2": "يوفر مكاننا الدافئ، الذي يتميز بلمسات خشبية دافئة، وإضاءة مريحة، وجداريتنا النباتية المميزة لوجه امرأة، الأجواء المثالية لتجربة طعام لا تُنسى. يتم إعداد كل طبق بمكونات طازجة ووصفات تقليدية متوارثة عبر الأجيال.",
    "feat-woodfire": "بيتزا على الحطب",
    "feat-handpasta": "باستا يدوية الصنع",
    "feat-coffee": "قهوة مختصة فاخرة",

    // Menu Section
    "menu-title": "رحلة النكهات",
    "menu-subtitle": "قائمتنا المحضرة بأجود المكونات الإيطالية الأصيلة",
    "filter-all": "الكل",
    "filter-pizza": "البيتزا",
    "filter-pasta": "الباستا",
    "filter-drinks": "المشاريب",
    "image-disclaimer": "هذه الصورة تم استخدامها بناءً على شكل تقريبي لكيف يجب أن يكون مطعمكم، وسيتم استبدالها بصوركم الخاصة.",
    "price-note": "سعر تقريبي مبدئي - يرجى تحديث السعر الفعلي",
    "btn-select": "اختر",
    "btn-learn-more": "تعرّف عليها أكثر",
    "btn-view-more": "شاهد المزيد",

    // Modals Translations
    "modal-ingredients": "المكونات",
    "modal-select-size": "اختر الحجم",
    "size-small": "صغيرة",
    "size-medium": "متوسطة",
    "size-large": "كبيرة",
    "btn-confirm": "تأكيد الحجز",
    "btn-add-more": "إضافة إلى السلة",
    "btn-confirm-booking": "احجز الطاولة الآن",
    "label-selected-dishes": "الوجبات المختارة",
    "cart-empty": "لم يتم اختيار أي وجبة بعد. يمكنك إضافة الطعام من القائمة في الأعلى.",
    "added-to-cart-toast": "تمت إضافة الوجبة للسلة!",
    "cart-drawer-title": "سلتك",
    "cart-total-label": "الإجمالي:",
    "btn-go-to-booking": "إتمام الحجز",

    // Reservation Section
    "reserve-title": "حجز طاولة",
    "reserve-subtitle": "خطط لأمسيتك الإيطالية الآن",
    "reserve-text": "احجز طاولة لك ولمن تحب في Pietro Coffee Pizzeria. سنسعد باستضافتكم وتقديم أرقى مستويات الخدمة مع أشهى الأطباق الإيطالية الفريدة.",
    "contact-phone": "الهاتف",
    "contact-phone-val": "+90 530 000 00 00",
    "contact-email-val": "info@pietroyalova.com",
    "contact-address-val": "Rüstempaşa Mahallesi, Park Sk. No:3 D:1, 77200 Yalova Merkez/Yalova, Türkiye",
    "contact-hours": "ساعات العمل",
    "contact-hours-desc": "يومياً: 10:00 صباحاً - 8:00 مساءً",
    "label-name": "الاسم الكامل",
    "label-phone": "رقم الهاتف للتواصل",
    "label-date": "التاريخ",
    "label-time": "الوقت",
    "label-guests": "عدد الأفراد",
    "label-table": "اختيار الطاولة",
    "option-table-indoor": "صالة داخلية",
    "option-table-garden": "الحديقة",
    "option-table-window": "بجانب النافذة",
    "label-notes": "ملاحظات الحجز",
    "btn-edit-cart-link": "تعديل السلة",
    "filter-coffee": "القهوة",
    "filter-dessert": "الحلويات",
    "label-dish": "الوجبة المفضلة (اختياري)",
    "label-drink": "المشروب المفضل (اختياري)",
    "option-no-drink": "اختر مشروباً (اختياري)",
    "drink-cola": "كولا (قريباً)",
    "drink-fanta": "فانتا (قريباً)",
    "drink-water": "ماء (قريباً)",
    "btn-book-now": "احجز الآن",
    "popup-title": "تم استلام طلب الحجز",
    "popup-message": "لقد تلقينا طلب حجز الطاولة الخاص بك بنجاح. سنتواصل معك في أقرب وقت لتأكيد الحجز. شكراً لك!",
    "btn-close": "إغلاق",
    "logo-text": "بيترو",
    "btn-add-review-text": "إضافة تقييم",
    "review-modal-title": "إضافة تقييم",
    "label-review-author": "الاسم بالكامل",
    "label-review-rating": "التقييم",
    "label-review-text": "التعليق",
    "btn-submit-review": "إرسال",

    // Testimonials
    "reviews-title": "تقييمات العملاء",
    "reviews-subtitle": "آراء وتجارب زبائننا في Pietro",
    "review-warning": "نموذج مبدئي - يرجى استبداله بتقييمات حقيقية",
    "review-1-text": "\"المكان الوحيد في يالوفا الذي يقدم بيتزا إيطالية حقيقية. التناغم بين البروشوتو والفطر في بيتزا بيترو كان خيالياً. أجواء المكان والجدارية النباتية مميزة للغاية.\"",
    "review-2-text": "\"طبق Penne Burrata يفوق الوصف! تماسك الصلصة الكريمية وطزاجة جبن البوراتا كانت multiplets. والقهوة الإسبريسو بعد العشاء كانت ممتازة.\"",
    "review-3-text": "\"التصميم الداخلي مريح ودافئ جداً. تفاصيل الخشب الهندسية في السقف والجدارية يمنحان طاقة رائعة. إضافة ممتازة لمدينة يالوفا.\"",

    // Contact
    "contact-title": "الاتصال والموقع",
    "contact-subtitle": "تفضلوا بزيارتنا",
    "btn-directions": "احصل على الاتجاهات",
    "footer-credit": "صُنع بكل حب وشغف لتقديم تجارب إيطالية أصيلة."
  }
};

// 2. Load translations from localStorage or fallback
let translations = safeGetItem("pietro_translations", defaultTranslations);

// 3. Baseline Config and Storage
const defaultConfig = {
  logoImg: "images/logo.svg",
  heroBg: "images/pizza_pietro.jpg",
  heroOverlay1: "0.8",
  heroOverlay2: "0.9",
  aboutGalleryImg1: "images/penne_burrata.jpg",
  aboutGalleryImg2: "images/tagliatelli_scampi.jpg",
  phoneVal: "+90 530 000 00 00",
  emailVal: "info@pietroyalova.com",
  addressVal: "Rüstempaşa Mahallesi, Park Sk. No:3 D:1, 77200 Yalova Merkez/Yalova, Türkiye",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Pietro+Coffee+Pizzeria+Yalova",
  mapsEmbed: "https://maps.google.com/maps?q=R%C3%BCstempa%C5%9Fa%20Mahallesi,%20Park%20Sk.%20No:3%20D:1,%2077200%20Yalova%20Merkez/Yalova,%20T%C3%BCrkiye&t=&z=17&ie=UTF8&iwloc=&output=embed",
  reservationBg: "",
  reservationOverlay: "0.8",
  contactBg: "",
  contactOverlay: "0.9",
  socialLinks: [
    { platform: "instagram", url: "#", icon: "fab fa-instagram" },
    { platform: "facebook", url: "#", icon: "fab fa-facebook-f" },
    { platform: "tripadvisor", url: "#", icon: "fab fa-tripadvisor" }
  ]
};

let siteConfig = safeGetItem("pietro_site_config", null);
if (!siteConfig) {
  siteConfig = defaultConfig;
}

// 2. Baseline Database (Populated with default authentic Italian menu)
const defaultDishes = [
  {
    id: "pizza-pietro",
    category: "pizza",
    image: "images/pizza_pietro.jpg",
    images: ["images/pizza_pietro.jpg"],
    name: { tr: "Pizza Pietro", en: "Pizza Pietro", ar: "بيتزا بيترو" },
    desc: { tr: "Şefin özel sosu, dilimlenmiş mantar, dana jambon ve fesleğen.", en: "Chef's signature sauce, sliced mushrooms, beef ham, and fresh basil.", ar: "صلصة الشيف المميزة، شرائح الفطر، مرتديلا لحم البقر، وريحان طازج." },
    ingredients: { tr: ["Özel Sos", "Mantarlar", "Dana Jambon", "Fesleğen"], en: ["Signature Sauce", "Mushrooms", "Beef Ham", "Basil"], ar: ["صلصة مميزة", "فطر", "مرتديلا لحم بقر", "ريحان"] },
    prices: {
      tr: { medium: "380 TL", large: "440 TL" },
      en: { medium: "380 TL", large: "440 TL" },
      ar: { medium: "380 TL", large: "440 TL" }
    }
  },
  {
    id: "penne-burrata",
    category: "pasta",
    image: "images/penne_burrata.jpg",
    images: ["images/penne_burrata.jpg"],
    name: { tr: "Penne Burrata", en: "Penne Burrata", ar: "بيني بوراتا" },
    desc: { tr: "Taze burrata peyniri, fesleğenli domates sosu ve zeytinyağı.", en: "Fresh burrata cheese, tomato sauce with basil, and virgin olive oil.", ar: "جبنة بوراتا طازجة، صلصة الطماطم بالريحان، وزيت زيتون بكر." },
    ingredients: { tr: ["Penne", "Burrata Peyniri", "Domates Sosu", "Zeytinyağı"], en: ["Penne", "Burrata Cheese", "Tomato Sauce", "Olive Oil"], ar: ["باستا بيني", "جبنة بوراتا", "صلصة طماطم", "زيت زيتون"] },
    prices: {
      tr: { medium: "320 TL", large: "360 TL" },
      en: { medium: "320 TL", large: "360 TL" },
      ar: { medium: "320 TL", large: "360 TL" }
    }
  },
  {
    id: "pizza-margherita",
    category: "pizza",
    image: "images/pizza_margherita.jpg",
    images: ["images/pizza_margherita.jpg"],
    name: { tr: "Pizza Margherita", en: "Pizza Margherita", ar: "بيتزا مارغريتا" },
    desc: { tr: "Klasik İtalyan pizzası: Mozzarella, domates sosu ve fesleğen.", en: "Classic Italian pizza with mozzarella, tomato sauce, and basil.", ar: "بيتزا إيطالية كلاسيكية: موزاريلا، صلصة طماطم، وريحان." },
    ingredients: { tr: ["Mozzarella", "Domates Sosu", "Fesleğen"], en: ["Mozzarella", "Tomato Sauce", "Basil"], ar: ["موزاريلا", "صلصة طماطم", "ريحان"] },
    prices: {
      tr: { medium: "340 TL", large: "380 TL" },
      en: { medium: "340 TL", large: "380 TL" },
      ar: { medium: "340 TL", large: "380 TL" }
    }
  },
  {
    id: "tagliatelli-scampi",
    category: "pasta",
    image: "images/tagliatelli_scampi.jpg",
    images: ["images/tagliatelli_scampi.jpg"],
    name: { tr: "Tagliatelli Scampi", en: "Tagliatelli Scampi", ar: "تاغلياتيلي سكامبي" },
    desc: { tr: "Karides, sarımsak, zeytinyağı ve krema soslu makarna.", en: "Tagliatelli pasta with shrimp, garlic, olive oil, and cream sauce.", ar: "باستا تاغلياتيلي مع الروبيان، الثوم، زيت الزيتون، وصلصة الكريمة." },
    ingredients: { tr: ["Tagliatelli", "Karides", "Sarımsak", "Krema"], en: ["Tagliatelli", "Shrimp", "Garlic", "Cream"], ar: ["تاغلياتيلي", "روبيان", "ثوم", "كريمة"] },
    prices: {
      tr: { medium: "410 TL", large: "460 TL" },
      en: { medium: "410 TL", large: "460 TL" },
      ar: { medium: "410 TL", large: "460 TL" }
    }
  }
];

function safeGetCategories() {
  const defaults = [
    { id: "pizza", name: { tr: "Pizza", en: "Pizza", ar: "البيتزا" } },
    { id: "pasta", name: { tr: "Makarna", en: "Pasta", ar: "الباستا" } },
    { id: "coffee", name: { tr: "İçecekler", en: "Drinks", ar: "المشروبات" } },
    { id: "dessert", name: { tr: "Tatlı", en: "Dessert", ar: "الحلويات" } }
  ];
  return safeGetItem("pietro_categories", defaults);
}

window.renderCategoryFilters = function() {
  const container = document.querySelector(".menu-filters");
  if (!container) return;
  
  const currentActiveBtn = container.querySelector(".filter-btn.active");
  const previousFilter = currentActiveBtn ? currentActiveBtn.getAttribute("data-filter") : "all";
  
  container.innerHTML = "";
  const categories = safeGetCategories();

  // 1. Render Tümü
  const allBtn = document.createElement("button");
  allBtn.className = previousFilter === "all" ? "filter-btn active" : "filter-btn";
  allBtn.setAttribute("data-filter", "all");
  allBtn.setAttribute("data-key", "filter-all");
  allBtn.textContent = translations[currentLanguage]["filter-all"] || "Tümü";
  allBtn.addEventListener("click", () => {
    container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    allBtn.classList.add("active");
    applyActiveFilter();
  });
  container.appendChild(allBtn);

  // 2. Render categories
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = previousFilter === cat.id ? "filter-btn active" : "filter-btn";
    btn.setAttribute("data-filter", cat.id);
    btn.textContent = cat.name[currentLanguage] || cat.name["tr"];
    btn.addEventListener("click", () => {
      container.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      applyActiveFilter();
    });
    container.appendChild(btn);
  });
};

window.populateCategoryDropdowns = function() {
  const categories = safeGetCategories();
  const editSelect = document.getElementById("edit-dish-category");
  if (editSelect) {
    editSelect.innerHTML = "";
    categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.id;
      opt.textContent = cat.name[currentLanguage] || cat.name["tr"];
      editSelect.appendChild(opt);
    });
  }
};


// Global state variables
let bookingCart = [];
let currentLanguage = "tr";
let currentSelectedDishId = "";
let currentSelectedSize = "medium"; // default
let currentSlideIndex = 0;
let totalSlides = 1;
const dishesData = {}; // Global dictionary mapping active dishes

let adminMode = false;

// 4.1 Admin Mode Management
window.checkAdminMode = function() {
  const params = new URLSearchParams(window.location.search);
  const isAdminParam = params.get("admin") === "true";
  
  if (isAdminParam) {
    if (window.self === window.top) {
      // Standalone page loaded with ?admin=true - redirect to admin dashboard!
      window.location.href = "admin.html";
      return;
    }
    activateAdminMode();
  } else {
    // Standalone page loaded without ?admin=true - do not redirect so they can view the customer page normally
    const stored = sessionStorage.getItem("pietro_admin_mode");
    if (stored === "true") {
      activateAdminMode();
    }
  }
};

window.logoutAdmin = function() {
  sessionStorage.removeItem("pietro_admin_mode");
  adminMode = false;
  document.body.classList.remove("admin-mode-active");
  const bar = document.getElementById("admin-control-bar");
  if (bar) bar.style.display = "none";
  initializeVisualEditor();
  renderMenu();
};

window.activateAdminMode = function() {
  sessionStorage.setItem("pietro_admin_mode", "true");
  adminMode = true;
  document.body.classList.add("admin-mode-active");
  const bar = document.getElementById("admin-control-bar");
  if (bar) bar.style.display = "flex";
  initializeVisualEditor();
  renderMenu();
};

window.promptAdminLogin = function() {
  const pw = prompt("Yönetici Şifresi / Admin Password:");
  if (pw === "admin123") {
    sessionStorage.setItem("pietro_admin_mode", "true");
    window.location.href = "admin.html"; // Go directly to admin panel dashboard!
  } else if (pw !== null) {
    alert("Hatalı Şifre! / Incorrect Password!");
  }
};

// 4.2 Apply Visual Configurations from siteConfig
window.applySiteConfig = function() {
  // Logo
  const logo = document.querySelector(".header-logo");
  if (logo && siteConfig.logoImg) logo.src = siteConfig.logoImg;

  // Hero background and overlays
  const hero = document.getElementById("home");
  if (hero && siteConfig.heroBg) {
    const o1 = siteConfig.heroOverlay1 || "0.8";
    const o2 = siteConfig.heroOverlay2 || "0.9";
    hero.style.backgroundImage = `linear-gradient(rgba(18, 18, 18, ${o1}), rgba(18, 18, 18, ${o2})), url('${siteConfig.heroBg}')`;
  }

  // Section backgrounds
  const reservationSec = document.getElementById("reservation");
  if (reservationSec && siteConfig.reservationBg) {
    const ro = siteConfig.reservationOverlay || "0.8";
    reservationSec.style.backgroundImage = `linear-gradient(rgba(18, 18, 18, ${ro}), rgba(18, 18, 18, ${ro})), url('${siteConfig.reservationBg}')`;
  }

  const contactSec = document.getElementById("contact");
  if (contactSec && siteConfig.contactBg) {
    const co = siteConfig.contactOverlay || "0.9";
    contactSec.style.backgroundImage = `linear-gradient(rgba(18, 18, 18, ${co}), rgba(18, 18, 18, ${co})), url('${siteConfig.contactBg}')`;
  }

  // Gallery and editable images
  document.querySelectorAll("[data-img-key]").forEach(img => {
    const key = img.getAttribute("data-img-key");
    if (siteConfig[key]) {
      img.src = siteConfig[key];
    }
  });

  // Contact Info
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (key === "contact-phone-val" && siteConfig.phoneVal) el.textContent = siteConfig.phoneVal;
    if (key === "contact-email-val" && siteConfig.emailVal) el.textContent = siteConfig.emailVal;
    if (key === "contact-address-val" && siteConfig.addressVal) el.textContent = siteConfig.addressVal;
  });

  // Map Iframe src
  const mapIframe = document.getElementById("contact-map-iframe");
  if (mapIframe && siteConfig.mapsEmbed) {
    mapIframe.src = siteConfig.mapsEmbed;
  }
  
  // Directions link
  const directionsBtn = document.querySelector("[data-link-key='google-maps-link']");
  if (directionsBtn && siteConfig.mapsLink) {
    directionsBtn.href = siteConfig.mapsLink;
  }

  // Social Links
  renderSocialLinks();
};

window.renderSocialLinks = function() {
  const container = document.getElementById("site-social-links-container");
  if (!container) return;
  container.innerHTML = "";

  const links = siteConfig.socialLinks || [];
  links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.setAttribute("aria-label", link.platform);
    a.innerHTML = `<i class="${link.icon || 'fa-solid fa-globe'}"></i>`;
    container.appendChild(a);
  });
};

function persistSiteConfig() {
  localStorage.setItem("pietro_site_config", JSON.stringify(siteConfig));
  applySiteConfig();
  initializeVisualEditor();
}

// Helper to create circular, consistent edit buttons with forced inline styles
function createEditButton(title, onClick) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "edit-overlay-btn";
  
  // Set all properties with !important to override any cached/polluted CSS rules
  btn.style.setProperty("position", "absolute", "important");
  btn.style.setProperty("top", "-10px", "important");
  btn.style.setProperty("right", "-10px", "important");
  btn.style.setProperty("width", "22px", "important");
  btn.style.setProperty("height", "22px", "important");
  btn.style.setProperty("border-radius", "50%", "important");
  btn.style.setProperty("background-color", "var(--color-gold)", "important");
  btn.style.setProperty("border", "1px solid #FFFFFF", "important");
  btn.style.setProperty("padding", "0", "important");
  btn.style.setProperty("font-size", "0.75rem", "important");
  btn.style.setProperty("cursor", "pointer", "important");
  btn.style.setProperty("z-index", "900", "important"); // lower than header (1000) and admin bar (5000)
  btn.style.setProperty("display", "inline-flex", "important");
  btn.style.setProperty("align-items", "center", "important");
  btn.style.setProperty("justify-content", "center", "important");
  btn.style.setProperty("box-shadow", "0 2px 5px rgba(0, 0, 0, 0.4)", "important");
  btn.style.setProperty("transition", "transform 0.2s, background-color 0.2s", "important");
  
  btn.title = title;
  btn.innerHTML = `<i class="fa-solid fa-pen" style="color: #000000 !important; font-size: 0.75rem !important; pointer-events: none !important;"></i>`;
  btn.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    onClick(e);
  };

  // Hover animations
  btn.onmouseenter = function() {
    btn.style.setProperty("transform", "scale(1.15)", "important");
    btn.style.setProperty("background-color", "#FFFFFF", "important");
    btn.querySelector("i").style.setProperty("color", "var(--color-gold)", "important");
  };
  btn.onmouseleave = function() {
    btn.style.setProperty("transform", "none", "important");
    btn.style.setProperty("background-color", "var(--color-gold)", "important");
    btn.querySelector("i").style.setProperty("color", "#000000", "important");
  };

  return btn;
}

// 4.3 Visual Inline Editing Overlay Injections
window.initializeVisualEditor = function() {
  // Remove existing edit buttons
  document.querySelectorAll(".edit-overlay-btn").forEach(btn => btn.remove());
  document.querySelectorAll(".editable-parent").forEach(el => el.classList.remove("editable-parent"));

  if (!adminMode) return;

  // 1. Text elements with data-key (skip system elements and grouped contact items)
  document.querySelectorAll("[data-key]").forEach(el => {
    if (el.tagName === "OPTION" || el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "BUTTON") return;
    if (el.closest("[data-contact-group]")) return; // Skip grouped contact elements
    
    el.classList.add("editable-parent");
    const key = el.getAttribute("data-key");
    
    const btn = createEditButton("Metni Düzenle / Edit Text", function() {
      openTextEditModal(key);
    });
    el.appendChild(btn);
  });

  // 2. Contact Groups (Phone, Hours, Email, Address)
  document.querySelectorAll("[data-contact-group]").forEach(el => {
    el.classList.add("editable-parent");
    const groupName = el.getAttribute("data-contact-group");

    const btn = createEditButton("İletişimi Düzenle / Edit Contact Group", function() {
      openContactEditModal(groupName);
    });
    el.appendChild(btn);
  });

  // 3. Images with data-img-key
  document.querySelectorAll("[data-img-key]").forEach(el => {
    const parent = el.parentElement;
    parent.classList.add("editable-parent");
    const key = el.getAttribute("data-img-key");

    const btn = createEditButton("Görseli Değiştir / Replace Image", function() {
      openImageEditModal(key);
    });
    parent.appendChild(btn);
  });

  // 4. Section Backgrounds
  const sectionsWithBg = [
    { id: "home", name: "Hero", key: "heroBg" },
    { id: "reservation", name: "Reservation", key: "reservationBg" },
    { id: "contact", name: "Contact", key: "contactBg" }
  ];

  sectionsWithBg.forEach(sec => {
    const el = document.getElementById(sec.id);
    if (el) {
      el.classList.add("editable-parent");
      const btn = createEditButton("Arka Planı Düzenle / Edit Background", function() {
        openBgEditModal(sec.id, sec.key);
      });
      // Section background buttons are offset differently so they sit inside the section padded area
      btn.style.setProperty("top", "15px", "important");
      btn.style.setProperty("right", "15px", "important");
      btn.className = "edit-overlay-btn edit-bg-btn";
      el.appendChild(btn);
    }
  });

  // 5. Social Links Container
  const socialContainer = document.getElementById("site-social-links-container");
  if (socialContainer) {
    socialContainer.classList.add("editable-parent");
    const btn = createEditButton("Sosyal Medya Linklerini Düzenle / Edit Social Links", function() {
      openSocialEditModal();
    });
    socialContainer.appendChild(btn);
  }
};

window.openContactEditModal = function(groupName) {
  const groupConfig = {
    phone: {
      title: "Telefon Düzenle | Edit Phone",
      titleKey: "contact-phone",
      valueKey: "contact-phone-val"
    },
    hours: {
      title: "Çalışma Saatleri Düzenle | Edit Working Hours",
      titleKey: "contact-hours",
      valueKey: "contact-hours-desc"
    },
    address: {
      title: "Adres Düzenle | Edit Address",
      titleKey: null,
      valueKey: "contact-address-val"
    },
    email: {
      title: "E-posta Düzenle | Edit Email",
      titleKey: null,
      valueKey: "contact-email-val"
    }
  };

  const config = groupConfig[groupName];
  if (!config) return;

  document.getElementById("edit-contact-group-id").value = groupName;
  document.getElementById("admin-contact-modal-title").textContent = config.title;
  
  if (config.titleKey) {
    document.getElementById("contact-title-fields-container").style.display = "block";
    document.getElementById("edit-contact-title-keys").value = config.titleKey;
    document.getElementById("edit-contact-title-tr").value = translations.tr[config.titleKey] || "";
    document.getElementById("edit-contact-title-en").value = translations.en[config.titleKey] || "";
    document.getElementById("edit-contact-title-ar").value = translations.ar[config.titleKey] || "";
  } else {
    document.getElementById("contact-title-fields-container").style.display = "none";
    document.getElementById("edit-contact-title-keys").value = "";
  }

  document.getElementById("edit-contact-value-keys").value = config.valueKey;
  document.getElementById("edit-contact-value-tr").value = translations.tr[config.valueKey] || "";
  document.getElementById("edit-contact-value-en").value = translations.en[config.valueKey] || "";
  document.getElementById("edit-contact-value-ar").value = translations.ar[config.valueKey] || "";

  openModal("admin-contact-modal");
};

window.saveAdminContact = function() {
  const groupName = document.getElementById("edit-contact-group-id").value;
  const titleKey = document.getElementById("edit-contact-title-keys").value;
  const valueKey = document.getElementById("edit-contact-value-keys").value;

  if (!translations.tr) translations.tr = {};
  if (!translations.en) translations.en = {};
  if (!translations.ar) translations.ar = {};

  if (titleKey) {
    translations.tr[titleKey] = document.getElementById("edit-contact-title-tr").value;
    translations.en[titleKey] = document.getElementById("edit-contact-title-en").value;
    translations.ar[titleKey] = document.getElementById("edit-contact-title-ar").value;
  }

  translations.tr[valueKey] = document.getElementById("edit-contact-value-tr").value;
  translations.en[valueKey] = document.getElementById("edit-contact-value-en").value;
  translations.ar[valueKey] = document.getElementById("edit-contact-value-ar").value;

  // Also update standard values in siteConfig for compatibility (if any)
  if (groupName === "phone") {
    siteConfig.phoneVal = document.getElementById("edit-contact-value-tr").value;
  } else if (groupName === "email") {
    siteConfig.emailVal = document.getElementById("edit-contact-value-tr").value;
  } else if (groupName === "address") {
    siteConfig.addressVal = document.getElementById("edit-contact-value-tr").value;
  }

  localStorage.setItem("pietro_translations", JSON.stringify(translations));
  persistSiteConfig();
  closeAdminModal("admin-contact-modal");
  setLanguage(currentLanguage);
  initializeVisualEditor();
};

// 4.4 Admin Modal Windows Action Triggers
window.openTextEditModal = function(key) {
  document.getElementById("edit-text-key").value = key;
  document.getElementById("edit-text-tr").value = translations.tr[key] || "";
  document.getElementById("edit-text-en").value = translations.en[key] || "";
  document.getElementById("edit-text-ar").value = translations.ar[key] || "";
  openModal("admin-text-modal");
};

window.saveAdminText = function() {
  const key = document.getElementById("edit-text-key").value;
  const trVal = document.getElementById("edit-text-tr").value;
  const enVal = document.getElementById("edit-text-en").value;
  const arVal = document.getElementById("edit-text-ar").value;

  if (!translations.tr) translations.tr = {};
  if (!translations.en) translations.en = {};
  if (!translations.ar) translations.ar = {};

  translations.tr[key] = trVal;
  translations.en[key] = enVal;
  translations.ar[key] = arVal;

  localStorage.setItem("pietro_translations", JSON.stringify(translations));
  closeAdminModal("admin-text-modal");
  setLanguage(currentLanguage);
  initializeVisualEditor();
};

window.openImageEditModal = function(key) {
  document.getElementById("edit-image-key").value = key;
  document.getElementById("edit-image-url").value = siteConfig[key] || "";
  document.getElementById("edit-image-file").value = "";
  openModal("admin-image-modal");
};

window.saveAdminImage = function() {
  const key = document.getElementById("edit-image-key").value;
  const urlVal = document.getElementById("edit-image-url").value;
  const fileInput = document.getElementById("edit-image-file");

  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onloadend = function() {
      siteConfig[key] = reader.result;
      persistSiteConfig();
      closeAdminModal("admin-image-modal");
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    siteConfig[key] = urlVal;
    persistSiteConfig();
    closeAdminModal("admin-image-modal");
  }
};

window.openBgEditModal = function(sectionId, bgKey) {
  document.getElementById("edit-bg-section-id").value = sectionId;
  document.getElementById("edit-bg-url").value = siteConfig[bgKey] || "";
  document.getElementById("edit-bg-file").value = "";
  
  let currentOpacity = "0.8";
  if (sectionId === "home") {
    currentOpacity = siteConfig.heroOverlay1 || "0.8";
  } else if (sectionId === "reservation") {
    currentOpacity = siteConfig.reservationOverlay || "0.8";
  } else if (sectionId === "contact") {
    currentOpacity = siteConfig.contactOverlay || "0.9";
  }
  
  document.getElementById("edit-bg-opacity-range").value = currentOpacity;
  document.getElementById("edit-bg-opacity-val").value = currentOpacity;
  openModal("admin-bg-modal");
};

window.saveAdminBg = function() {
  const sectionId = document.getElementById("edit-bg-section-id").value;
  const urlVal = document.getElementById("edit-bg-url").value;
  const opacityVal = document.getElementById("edit-bg-opacity-range").value;
  const fileInput = document.getElementById("edit-bg-file");

  const bgKey = sectionId === "home" ? "heroBg" : (sectionId === "reservation" ? "reservationBg" : "contactBg");
  
  if (sectionId === "home") {
    siteConfig.heroOverlay1 = opacityVal;
    siteConfig.heroOverlay2 = (parseFloat(opacityVal) + 0.1).toFixed(2);
  } else if (sectionId === "reservation") {
    siteConfig.reservationOverlay = opacityVal;
  } else if (sectionId === "contact") {
    siteConfig.contactOverlay = opacityVal;
  }

  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onloadend = function() {
      siteConfig[bgKey] = reader.result;
      persistSiteConfig();
      closeAdminModal("admin-bg-modal");
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    siteConfig[bgKey] = urlVal;
    persistSiteConfig();
    closeAdminModal("admin-bg-modal");
  }
};

window.openSocialEditModal = function() {
  renderSocialLinksEditorList();
  document.getElementById("new-social-link").value = "";
  openModal("admin-social-modal");
};

function renderSocialLinksEditorList() {
  const list = document.getElementById("social-links-editor-list");
  if (!list) return;
  list.innerHTML = "";

  const links = siteConfig.socialLinks || [];
  if (links.length === 0) {
    list.innerHTML = `<p style="font-size:0.85rem; font-style:italic; color:var(--color-text-secondary); text-align:center;">Henüz sosyal link eklenmemiş.</p>`;
    return;
  }

  links.forEach((link, idx) => {
    const item = document.createElement("div");
    item.style = "display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.03); padding:8px 12px; border-radius:6px; border:1px solid rgba(255,255,255,0.05);";
    item.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <i class="${link.icon}" style="font-size:1.1rem; color:var(--color-gold);"></i>
        <span style="font-size:0.8rem; color:#FFF; max-width:260px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${link.url}</span>
      </div>
      <button class="btn btn-outline" style="padding:4px 8px; font-size:0.7rem; border-color:#ff4d4d; color:#ff4d4d; background:none;" onclick="deleteSocialLink(${idx})">Kaldır</button>
    `;
    list.appendChild(item);
  });
}

window.deleteSocialLink = function(idx) {
  siteConfig.socialLinks.splice(idx, 1);
  renderSocialLinksEditorList();
};

window.addNewSocialLink = function() {
  const platform = document.getElementById("new-social-platform").value;
  const url = document.getElementById("new-social-link").value.trim();
  
  if (!url) {
    alert("Lütfen geçerli bir URL girin!");
    return;
  }

  const iconMap = {
    instagram: "fab fa-instagram",
    facebook: "fab fa-facebook-f",
    tiktok: "fab fa-tiktok",
    "x-twitter": "fab fa-x-twitter",
    youtube: "fab fa-youtube",
    whatsapp: "fab fa-whatsapp",
    snapchat: "fab fa-snapchat",
    tripadvisor: "fab fa-tripadvisor",
    globe: "fa-solid fa-globe"
  };

  if (!siteConfig.socialLinks) siteConfig.socialLinks = [];
  siteConfig.socialLinks.push({
    platform: platform,
    url: url,
    icon: iconMap[platform] || "fa-solid fa-globe"
  });

  renderSocialLinksEditorList();
  document.getElementById("new-social-link").value = "";
};

window.saveAdminSocialLinks = function() {
  persistSiteConfig();
  closeAdminModal("admin-social-modal");
};

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add("active");
}

window.closeAdminModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
};

// 3. Language Switcher Logic
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;

  // Toggle active class in headers
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Set html parameters
  document.documentElement.lang = lang;
  if (lang === "ar") {
    document.documentElement.dir = "rtl";
    document.body.classList.add("rtl");
  } else {
    document.documentElement.dir = "ltr";
    document.body.classList.remove("rtl");
  }

  // Update elements with data-key
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholder inputs for reservation form
  const placeholders = {
    tr: {
      name: "Örn. Ahmet Yılmaz",
      phone: "Örn. +90 530 123 4567",
      dish: "Örn. Pizza Pietro (Orta - 540 TL)",
      notes: "Örn. Doğum günü kutlaması, bahçe katı vb."
    },
    en: {
      name: "e.g. John Doe",
      phone: "e.g. +1 (555) 123-4567",
      dish: "e.g. Pizza Pietro (Medium - 540 TL)",
      notes: "e.g. Birthday celebration, window seat etc."
    },
    ar: {
      name: "مثال: أحمد محمد",
      phone: "مثال: +966 50 123 4567",
      dish: "مثال: بيتزا بيترو (متوسطة - 540 TL)",
      notes: "مثال: حفل عيد ميلاد، طاولة بجانب النافذة إلخ."
    }
  };

  const nameInput = document.getElementById("booking-name");
  const phoneInput = document.getElementById("booking-phone");
  const dishInput = document.getElementById("booking-dish");
  const notesInput = document.getElementById("booking-notes");

  if (nameInput) nameInput.placeholder = placeholders[lang].name;
  if (phoneInput) phoneInput.placeholder = placeholders[lang].phone;
  if (dishInput) dishInput.placeholder = placeholders[lang].dish;
  if (notesInput) notesInput.placeholder = placeholders[lang].notes;

  // Update WhatsApp text on the link
  updateWhatsAppLink(lang);
  
  // Re-populate dynamic drinks dropdown based on current language
  populateDrinksDropdown();
  
  // Re-render dynamic cart items to apply active language translations
  renderCart();
  
  renderCategoryFilters();
  populateCategoryDropdowns();

  // Re-render menu using new active language translations
  renderMenu();

  // Re-apply admin overlays in visual editor
  initializeVisualEditor();

  if (window.renderReviews) {
    window.renderReviews();
  }
}

// 4. Dynamic WhatsApp Link generator based on active language
function updateWhatsAppLink(lang) {
  const whatsappFloat = document.querySelector(".whatsapp-float");
  if (!whatsappFloat) return;

  const messages = {
    tr: "Merhaba, Pietro'da masa rezervasyonu hakkında bilgi alabilir miyim?",
    en: "Hello, I would like to inquire about booking a table at Pietro.",
    ar: "مرحباً، أود الاستفسار عن حجز طاولة في مطعم بيترو."
  };

  const encodedMessage = encodeURIComponent(messages[lang]);
  
  let rawPhone = "";
  if (translations && translations[lang] && translations[lang]["contact-phone-val"]) {
    rawPhone = translations[lang]["contact-phone-val"];
  } else if (translations && translations["tr"] && translations["tr"]["contact-phone-val"]) {
    rawPhone = translations["tr"]["contact-phone-val"];
  } else if (defaultTranslations && defaultTranslations[lang] && defaultTranslations[lang]["contact-phone-val"]) {
    rawPhone = defaultTranslations[lang]["contact-phone-val"];
  } else {
    rawPhone = "905300000000";
  }

  let cleanedPhone = rawPhone.replace(/[^0-9+]/g, "");
  if (cleanedPhone.startsWith("05")) {
    cleanedPhone = "90" + cleanedPhone.substring(1);
  } else if (cleanedPhone.startsWith("5")) {
    cleanedPhone = "90" + cleanedPhone;
  } else if (cleanedPhone.startsWith("+")) {
    cleanedPhone = cleanedPhone.substring(1);
  }

  if (!cleanedPhone) {
    cleanedPhone = "905300000000";
  }

  whatsappFloat.href = `https://wa.me/${cleanedPhone}?text=${encodedMessage}`;
}

// 5. Menu Filtering System with Empty Category Placeholder handler
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Update active filter button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    
    applyActiveFilter();
  });
});

function applyActiveFilter() {
  const activeFilterBtn = document.querySelector(".filter-btn.active");
  if (!activeFilterBtn) return;

  const filterValue = activeFilterBtn.getAttribute("data-filter");
  let visibleCount = 0;

  document.querySelectorAll(".menu-card").forEach(card => {
    const category = card.getAttribute("data-category");
    if (filterValue === "all" || category === filterValue) {
      card.classList.remove("hidden");
      card.style.opacity = "1";
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  // Show empty category placeholder if active (e.g. Empty Drinks menu)
  let placeholder = document.getElementById("menu-empty-placeholder");
  if (visibleCount === 0) {
    if (!placeholder) {
      const menuGrid = document.querySelector(".menu-grid");
      placeholder = document.createElement("div");
      placeholder.id = "menu-empty-placeholder";
      placeholder.className = "menu-empty-placeholder";
      placeholder.style.textAlign = "center";
      placeholder.style.gridColumn = "1 / -1";
      placeholder.style.padding = "60px 20px";
      placeholder.style.color = "var(--color-text-secondary)";
      placeholder.style.fontStyle = "italic";
      if (menuGrid) menuGrid.appendChild(placeholder);
    }
    placeholder.style.display = "block";
    placeholder.innerHTML = `<i class="fa-solid fa-mug-hot" style="font-size: 3rem; color: rgba(255, 255, 255, 0.06); margin-bottom: 16px; display: block;"></i> <span style="font-weight:300;"></span>`;
    
    const emptyKey = currentLanguage === "tr" ? "İçecek menümüz yakında eklenecektir. İlginiz için teşekkür ederiz." :
                     (currentLanguage === "en" ? "Our drinks menu is coming soon. Thank you for your interest." :
                     "قائمة المشروبات ستتوفر قريباً. شكراً لاهتمامكم.");
    placeholder.querySelector("span").textContent = emptyKey;
  } else if (placeholder) {
    placeholder.style.display = "none";
  }
}

// 6. Modal Interactions: Detail Carousel & Size Modals
window.openDetailModal = function(id) {
  const dish = dishesData[id];
  if (!dish) return;

  const modal = document.getElementById("detail-modal");
  document.getElementById("modal-dish-title").textContent = dish.name[currentLanguage] || dish.name["tr"];
  document.getElementById("modal-dish-desc").textContent = dish.desc[currentLanguage] || dish.desc["tr"];

  const ingredientsList = document.getElementById("modal-dish-ingredients");
  ingredientsList.innerHTML = "";
  
  const ingList = dish.ingredients[currentLanguage] || dish.ingredients["tr"] || [];
  ingList.forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    ingredientsList.appendChild(li);
  });

  // Populate Carousel slides
  const slidesContainer = document.getElementById("modal-carousel-slides");
  slidesContainer.innerHTML = "";
  
  let imagesArray = [];
  if (dish.images && dish.images.length > 0) {
    imagesArray = dish.images;
  } else {
    imagesArray = [dish.image];
  }
  
  imagesArray.forEach(imgUrl => {
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = dish.name[currentLanguage] || dish.name["tr"];
    slidesContainer.appendChild(img);
  });

  // Reset Carousel Slider state
  currentSlideIndex = 0;
  totalSlides = imagesArray.length;
  
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  
  if (totalSlides <= 1) {
    if (prevBtn) prevBtn.style.display = "none";
    if (nextBtn) nextBtn.style.display = "none";
  } else {
    if (prevBtn) prevBtn.style.display = "flex";
    if (nextBtn) nextBtn.style.display = "flex";
  }
  
  // Populate Sizes and Prices
  const sizesContainer = document.getElementById("modal-dish-sizes-prices");
  if (sizesContainer) {
    sizesContainer.innerHTML = "";
    const currencyPrices = dish.prices[currentLanguage] || dish.prices["tr"] || {};
    
    const sizeKeys = {
      small: { tr: "Küçük", en: "Small", ar: "صغيرة" },
      medium: { tr: "Orta", en: "Medium", ar: "متوسطة" },
      large: { tr: "Büyük", en: "Large", ar: "كبيرة" }
    };
    
    // Check which sizes are available and render them
    Object.keys(sizeKeys).forEach(sizeKey => {
      const price = currencyPrices[sizeKey];
      if (price && price.trim() !== "") {
        const sizeRow = document.createElement("div");
        sizeRow.style.display = "flex";
        sizeRow.style.justifyContent = "space-between";
        sizeRow.style.alignItems = "center";
        sizeRow.style.padding = "8px 12px";
        sizeRow.style.background = "rgba(255, 255, 255, 0.03)";
        sizeRow.style.border = "1px solid rgba(255, 255, 255, 0.05)";
        sizeRow.style.borderRadius = "6px";
        
        const labelStr = sizeKeys[sizeKey][currentLanguage] || sizeKeys[sizeKey]["tr"];
        sizeRow.innerHTML = `
          <span style="font-weight: 500; font-size: 0.9rem; color: var(--color-text-primary);">${labelStr}</span>
          <span style="font-weight: 600; font-size: 0.95rem; color: var(--color-gold);">${price}</span>
        `;
        sizesContainer.appendChild(sizeRow);
      }
    });
  }

  updateCarouselTranslate();
  modal.classList.add("active");
};

function updateCarouselTranslate() {
  const slidesContainer = document.getElementById("modal-carousel-slides");
  if (!slidesContainer) return;
  
  const isRTL = document.documentElement.dir === 'rtl';
  const directionMultiplier = isRTL ? 1 : -1;
  slidesContainer.style.transform = `translateX(${currentSlideIndex * 100 * directionMultiplier}%)`;
}

window.slideNext = function() {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  updateCarouselTranslate();
};

window.slidePrev = function() {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  updateCarouselTranslate();
};

window.closeDetailModal = function() {
  document.getElementById("detail-modal").classList.remove("active");
};

window.closeDetailModalOnOutsideClick = function(event) {
  if (event.target === document.getElementById("detail-modal")) {
    closeDetailModal();
  }
};





// 8. Mobile Menu Burger Animation & Toggle
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (mobileNavToggle && mainNav) {
  mobileNavToggle.addEventListener("click", () => {
    mobileNavToggle.classList.toggle("active");
    mainNav.classList.toggle("open");
  });

  // Close menu when clicking on any nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      mobileNavToggle.classList.remove("active");
      mainNav.classList.remove("open");
    });
  });
}

// 9. Sticky Navigation & Scroll Spy (Highlight active links)
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  // Sticky header class switch
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Scroll spy active link toggle
  let currentActiveId = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - varHeaderHeight() - 10;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentActiveId = section.getAttribute("id");
    }
  });

  if (currentActiveId) {
    navLinks.forEach(link => {
      const hrefId = link.getAttribute("href").substring(1);
      link.classList.toggle("active", hrefId === currentActiveId);
    });
  }
});

function varHeaderHeight() {
  return header ? header.offsetHeight : 80;
}

// 11. Unified Dynamic Menu Card Rendering Engine
function normalizeDish(dish) {
  const norm = { ...dish };
  
  // Normalize name
  if (typeof norm.name === 'string') {
    const val = norm.name;
    norm.name = { tr: val, en: val, ar: val };
  }
  if (!norm.name) norm.name = { tr: 'Unnamed', en: 'Unnamed', ar: 'Unnamed' };
  if (!norm.name.tr) norm.name.tr = norm.name.en || norm.name.ar || 'Unnamed';
  if (!norm.name.en) norm.name.en = norm.name.tr;
  if (!norm.name.ar) norm.name.ar = norm.name.tr;

  // Normalize desc
  if (typeof norm.desc === 'string') {
    const val = norm.desc;
    norm.desc = { tr: val, en: val, ar: val };
  }
  if (!norm.desc) norm.desc = { tr: '', en: '', ar: '' };
  if (!norm.desc.tr) norm.desc.tr = norm.desc.en || norm.desc.ar || '';
  if (!norm.desc.en) norm.desc.en = norm.desc.tr;
  if (!norm.desc.ar) norm.desc.ar = norm.desc.tr;

  // Normalize ingredients
  if (Array.isArray(norm.ingredients)) {
    const val = norm.ingredients;
    norm.ingredients = { tr: val, en: val, ar: val };
  }
  if (!norm.ingredients) norm.ingredients = { tr: [], en: [], ar: [] };
  if (!norm.ingredients.tr) norm.ingredients.tr = norm.ingredients.en || norm.ingredients.ar || [];
  if (!norm.ingredients.en) norm.ingredients.en = norm.ingredients.tr;
  if (!norm.ingredients.ar) norm.ingredients.ar = norm.ingredients.tr;

  // Normalize prices (handles old flat vs new nested tr/en/ar format)
  if (norm.prices) {
    if (norm.prices.tr || norm.prices.en || norm.prices.ar) {
      const basePrices = norm.prices.tr || norm.prices.en || norm.prices.ar || { small: '', medium: '0 TL', large: '0 TL' };
      if (!norm.prices.tr) norm.prices.tr = { ...basePrices };
      if (!norm.prices.en) norm.prices.en = { ...basePrices };
      if (!norm.prices.ar) norm.prices.ar = { ...basePrices };
    } else {
      const flatPrices = { ...norm.prices };
      norm.prices = {
        tr: flatPrices,
        en: flatPrices,
        ar: flatPrices
      };
    }
  } else {
    norm.prices = {
      tr: { small: '', medium: '0 TL', large: '0 TL' },
      en: { small: '', medium: '0 TL', large: '0 TL' },
      ar: { small: '', medium: '0 TL', large: '0 TL' }
    };
  }

  // Normalize images
  if (!norm.images || norm.images.length === 0) {
    norm.images = [norm.image || 'images/pizza_margherita.jpg'];
  }
  if (!norm.image) {
    norm.image = norm.images[0];
  }

  return norm;
}

function renderMenu() {
  const menuGrid = document.querySelector(".menu-grid");
  if (!menuGrid) return;
  menuGrid.innerHTML = "";

  const deletedDefaultIds = safeGetItem("pietro_deleted_default_dishes");
  const customDishes = safeGetItem("pietro_custom_dishes");

  // Create deep local copy of baseline default dishes and normalize them
  let activeDishes = defaultDishes.map(d => normalizeDish(d));

  // Filter out deleted default items completely
  activeDishes = activeDishes.filter(d => !deletedDefaultIds.includes(d.id));

  // Merge edits / custom new dishes and normalize them
  customDishes.forEach(customDish => {
    const normalizedCustom = normalizeDish(customDish);
    const defaultIndex = activeDishes.findIndex(d => d.id === normalizedCustom.id);
    if (defaultIndex !== -1) {
      activeDishes[defaultIndex] = normalizedCustom; // Override details in-place
    } else {
      activeDishes.push(normalizedCustom); // Append new custom dishes at bottom
    }
  });

  // Populate global active dishes mapping dictionary for modal dialog lookups
  activeDishes.forEach(dish => {
    dishesData[dish.id] = dish;
  });

  if (activeDishes.length === 0) {
    const placeholder = document.createElement("div");
    placeholder.id = "menu-empty-placeholder";
    placeholder.className = "menu-empty-placeholder";
    placeholder.style.textAlign = "center";
    placeholder.style.gridColumn = "1 / -1";
    placeholder.style.padding = "60px 20px";
    placeholder.style.color = "var(--color-text-secondary)";
    placeholder.style.fontStyle = "italic";
    menuGrid.appendChild(placeholder);
    
    const emptyKey = currentLanguage === "tr" ? "Menümüzde şu an aktif ürün bulunmuyor." :
                     (currentLanguage === "en" ? "There are no active items in our menu." :
                     "لا توجد عناصر نشطة في قائمتنا حالياً.");
    placeholder.textContent = emptyKey;
    return;
  }

  function getLowestPrice(dish, lang) {
    const prices = dish.prices[lang] || dish.prices["tr"];
    if (prices.small && prices.small.trim() !== "" && prices.small.trim() !== "0 TL") {
      return { label: "S", price: prices.small };
    }
    if (prices.medium && prices.medium.trim() !== "" && prices.medium.trim() !== "0 TL") {
      return { label: "M", price: prices.medium };
    }
    if (prices.large && prices.large.trim() !== "" && prices.large.trim() !== "0 TL") {
      return { label: "L", price: prices.large };
    }
    return { label: "M", price: "0 TL" };
  }

  // Draw HTML Cards dynamically in order
  activeDishes.forEach(dish => {
    const name = dish.name[currentLanguage] || dish.name["tr"];
    const desc = dish.desc[currentLanguage] || dish.desc["tr"];
    
    // Get lowest available price to display in the card
    const lowestPriceObj = getLowestPrice(dish, currentLanguage);
    const priceDisplay = lowestPriceObj.price;

    const card = document.createElement("div");
    card.className = "menu-card editable-parent";
    card.setAttribute("data-category", dish.category);

    const editBtnHtml = adminMode ? `
      <button class="edit-overlay-btn" onclick="openEditDishModal('${dish.id}', event)" style="display: inline-flex !important;">
        <i class="fa-solid fa-pen"></i>
      </button>
    ` : '';

    card.innerHTML = `
      <div class="menu-card-img-wrapper" style="position: relative;">
        <img src="${dish.image}" alt="${name}" class="menu-card-img" ${adminMode ? `style="outline: 2px dashed var(--color-gold); cursor:pointer;" onclick="openEditDishModal('${dish.id}', event)"` : ''}>
        <span class="image-disclaimer" data-key="image-disclaimer">
          ${translations[currentLanguage]["image-disclaimer"]}
        </span>
        ${editBtnHtml}
      </div>
      <div class="menu-card-content">
        <h4 class="menu-item-title">${name}</h4>
        <p class="menu-item-desc">${desc}</p>
        <div class="menu-item-footer">
          <div class="price-area" style="margin-bottom: 12px;">
            <span class="price">${priceDisplay}</span>
            <span class="price-note" data-key="price-note">
              ${translations[currentLanguage]["price-note"]}
            </span>
          </div>
          <div class="menu-card-actions" style="width: 100%;">
            <button class="btn btn-gold btn-block" onclick="openDetailModal('${dish.id}')" data-key="btn-view-more" style="width: 100%; justify-content: center; align-items: center; min-height: 38px;">
              ${translations[currentLanguage]["btn-view-more"] || (currentLanguage === "tr" ? "Daha Fazla Gör" : (currentLanguage === "ar" ? "شاهد المزيد" : "View More"))}
            </button>
          </div>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });

  // Re-apply current category filter rules
  applyActiveFilter();
}

// 12. Populate Dynamic Drinks Select Dropdown
function populateDrinksDropdown() {
  const drinkSelect = document.getElementById("booking-drink");
  if (!drinkSelect) return;

  drinkSelect.innerHTML = "";

  // Add the default select option
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.selected = true;
  
  const defaultLabel = currentLanguage === "tr" ? "İçecek seçin (İsteğe bağlı)" :
                      (currentLanguage === "en" ? "Select a drink (Optional)" :
                      "اختر مشروباً (اختياري)");
  defaultOption.textContent = defaultLabel;
  drinkSelect.appendChild(defaultOption);

  // Load available drinks from localStorage
  const drinksList = safeGetItem("pietro_custom_drinks");
  
  drinksList.forEach(drink => {
    const option = document.createElement("option");
    
    // Get localized properties
    const name = drink.name[currentLanguage] || drink.name["tr"] || "Unnamed Drink";
    const price = drink.price ? ` - ${drink.price}` : "";
    
    option.value = `${name}${price}`;
    option.textContent = `${name}${price}`;
    drinkSelect.appendChild(option);
  });
}

// 10. Initial Load Configuration
document.addEventListener("DOMContentLoaded", () => {
  // Apply persistent configurations & render social icons
  applySiteConfig();

  // Set default date for reservation (tomorrow)
  const dateInput = document.getElementById("booking-date");
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
    dateInput.min = new Date().toISOString().split("T")[0];
  }

  // Setup language button listeners
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });

  // Listen to remote changes to reload custom dishes / bookings list in real-time
  window.addEventListener("storage", (event) => {
    if (event.key === "pietro_custom_dishes" || event.key === "pietro_deleted_default_dishes" || event.key === "pietro_custom_dishes_updated_event") {
      renderMenu();
    }
    if (event.key === "pietro_categories" || event.key === "pietro_categories_updated_event") {
      renderCategoryFilters();
      populateCategoryDropdowns();
      renderMenu();
    }
    if (event.key === "pietro_custom_drinks" || event.key === "pietro_custom_drinks_updated_event") {
      populateDrinksDropdown();
    }
    if (event.key === "pietro_site_config") {
      siteConfig = safeGetItem("pietro_site_config", defaultConfig);
      applySiteConfig();
    }
    if (event.key === "pietro_translations") {
      translations = safeGetItem("pietro_translations", defaultTranslations);
      setLanguage(currentLanguage);
    }
    if (event.key === "pietro_reviews" || event.key === "pietro_reviews_updated_event") {
      if (window.renderReviews) window.renderReviews();
    }
  });

  // Initialize page in Turkish language by default & render custom dishes
  setLanguage("tr");
  renderMenu();
  populateDrinksDropdown();

  // Check and initialize admin mode state
  checkAdminMode();
});


// 13. Admin Dish CRUD Visual Operations
window.openNewDishModal = function() {
  document.getElementById("admin-dish-modal-title").textContent = "Yeni Yemek Ekle | Add New Dish";
  document.getElementById("edit-dish-modal-id").value = "";
  document.getElementById("edit-dish-category").value = "pizza";
  
  document.getElementById("edit-dish-name-tr").value = "";
  document.getElementById("edit-dish-name-en").value = "";
  document.getElementById("edit-dish-name-ar").value = "";

  document.getElementById("edit-dish-price-small").value = "";
  document.getElementById("edit-dish-price-medium").value = "";
  document.getElementById("edit-dish-price-large").value = "";

  document.getElementById("edit-dish-desc-tr").value = "";
  document.getElementById("edit-dish-desc-en").value = "";
  document.getElementById("edit-dish-desc-ar").value = "";

  document.getElementById("edit-dish-ing-tr").value = "";
  document.getElementById("edit-dish-ing-en").value = "";
  document.getElementById("edit-dish-ing-ar").value = "";

  document.getElementById("edit-dish-image-url").value = "";
  document.getElementById("edit-dish-images-file").value = "";
  
  // Hide delete button for new entries
  const delBtn = document.getElementById("admin-dish-delete-btn");
  if (delBtn) delBtn.style.display = "none";
  
  openModal("admin-dish-modal");
};

window.openEditDishModal = function(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const dish = dishesData[id];
  if (!dish) return;

  document.getElementById("admin-dish-modal-title").textContent = "Yemek Düzenle | Edit Dish";
  document.getElementById("edit-dish-modal-id").value = id;
  document.getElementById("edit-dish-category").value = dish.category || "pizza";
  
  document.getElementById("edit-dish-name-tr").value = dish.name.tr || "";
  document.getElementById("edit-dish-name-en").value = dish.name.en || "";
  document.getElementById("edit-dish-name-ar").value = dish.name.ar || "";

  document.getElementById("edit-dish-price-small").value = dish.prices.tr.small || "";
  document.getElementById("edit-dish-price-medium").value = dish.prices.tr.medium || "";
  document.getElementById("edit-dish-price-large").value = dish.prices.tr.large || "";

  document.getElementById("edit-dish-desc-tr").value = dish.desc.tr || "";
  document.getElementById("edit-dish-desc-en").value = dish.desc.en || "";
  document.getElementById("edit-dish-desc-ar").value = dish.desc.ar || "";

  document.getElementById("edit-dish-ing-tr").value = (dish.ingredients.tr || []).join(", ");
  document.getElementById("edit-dish-ing-en").value = (dish.ingredients.en || []).join(", ");
  document.getElementById("edit-dish-ing-ar").value = (dish.ingredients.ar || []).join(", ");

  document.getElementById("edit-dish-image-url").value = dish.image || "";
  document.getElementById("edit-dish-images-file").value = "";
  
  // Show delete button for existing entries
  const delBtn = document.getElementById("admin-dish-delete-btn");
  if (delBtn) delBtn.style.display = "block";
  
  openModal("admin-dish-modal");
};

window.saveAdminDish = function() {
  const id = document.getElementById("edit-dish-modal-id").value || ('D-' + Date.now());
  const category = document.getElementById("edit-dish-category").value;
  
  const nameTr = document.getElementById("edit-dish-name-tr").value.trim();
  const nameEn = document.getElementById("edit-dish-name-en").value.trim();
  const nameAr = document.getElementById("edit-dish-name-ar").value.trim();

  const priceSmall = document.getElementById("edit-dish-price-small").value.trim();
  const priceMedium = document.getElementById("edit-dish-price-medium").value.trim();
  const priceLarge = document.getElementById("edit-dish-price-large").value.trim();

  if (!priceSmall && !priceMedium && !priceLarge) {
    alert("Lütfen en az bir fiyat girin! / Please enter at least one price!");
    return;
  }

  const descTr = document.getElementById("edit-dish-desc-tr").value.trim();
  const descEn = document.getElementById("edit-dish-desc-en").value.trim();
  const descAr = document.getElementById("edit-dish-desc-ar").value.trim();

  const ingTr = document.getElementById("edit-dish-ing-tr").value.split(",").map(i => i.trim()).filter(Boolean);
  const ingEn = document.getElementById("edit-dish-ing-en").value.split(",").map(i => i.trim()).filter(Boolean);
  const ingAr = document.getElementById("edit-dish-ing-ar").value.split(",").map(i => i.trim()).filter(Boolean);

  const imageUrl = document.getElementById("edit-dish-image-url").value.trim();
  const fileInput = document.getElementById("edit-dish-images-file");

  const saveToLocal = (imgDataArray) => {
    let customDishes = safeGetItem("pietro_custom_dishes");
    const existingIdx = customDishes.findIndex(d => d.id === id);

    let imagesList = imgDataArray && imgDataArray.length > 0 ? imgDataArray : [imageUrl || "images/pizza_margherita.jpg"];

    const dishObj = {
      id,
      category,
      name: { tr: nameTr, en: nameEn || nameTr, ar: nameAr || nameTr },
      desc: { tr: descTr, en: descEn || descTr, ar: descAr || descTr },
      ingredients: { tr: ingTr, en: ingEn || ingTr, ar: ingAr || ingTr },
      prices: {
        tr: { small: priceSmall, medium: priceMedium, large: priceLarge },
        en: { small: priceSmall, medium: priceMedium, large: priceLarge },
        ar: { small: priceSmall, medium: priceMedium, large: priceLarge }
      },
      image: imagesList[0],
      images: imagesList
    };

    if (existingIdx !== -1) {
      customDishes[existingIdx] = dishObj;
    } else {
      customDishes.push(dishObj);
    }

    localStorage.setItem("pietro_custom_dishes", JSON.stringify(customDishes));
    localStorage.setItem("pietro_custom_dishes_updated_event", Date.now().toString());
    
    renderMenu();
    closeAdminModal("admin-dish-modal");
  };

  if (fileInput.files.length > 0) {
    let loadedCount = 0;
    const results = [];
    for (let i = 0; i < fileInput.files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = function() {
        results.push(reader.result);
        loadedCount++;
        if (loadedCount === fileInput.files.length) {
          saveToLocal(results);
        }
      };
      reader.readAsDataURL(fileInput.files[i]);
    }
  } else {
    saveToLocal();
  }
};

window.deleteAdminDish = function() {
  const id = document.getElementById("edit-dish-modal-id").value;
  if (!id) return;

  if (confirm("Bu yemeği silmek istediğinizden emin misiniz? / Are you sure you want to delete this dish?")) {
    let customDishes = safeGetItem("pietro_custom_dishes");
    customDishes = customDishes.filter(d => d.id !== id);
    localStorage.setItem("pietro_custom_dishes", JSON.stringify(customDishes));
    
    let deletedDefaultIds = safeGetItem("pietro_deleted_default_dishes");
    if (!deletedDefaultIds.includes(id)) {
      deletedDefaultIds.push(id);
      localStorage.setItem("pietro_deleted_default_dishes", JSON.stringify(deletedDefaultIds));
    }

    localStorage.setItem("pietro_custom_dishes_updated_event", Date.now().toString());
    renderMenu();
    closeAdminModal("admin-dish-modal");
  }
};

// Reviews System Logic & Helpers
function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
}

const defaultReviews = [
  {
    id: "R-default-1",
    author: "Ayşe K.",
    text: "Yalova'da gerçek İtalyan pizzası bulabileceğiniz tek yer. Pizza Pietro'daki prosciutto ve mantar uyumu harikaydı. Mekanın atmosferi ve botanik duvar resmi çok estetik.",
    rating: 5,
    status: "visible",
    timestamp: new Date().toISOString()
  },
  {
    id: "R-default-2",
    author: "Mehmet T.",
    text: "Penne Burrata enfes! Kremalı sosun kıvamı ve burrata peynirinin tazeliği mükemmeldi. Ayrıca yemekten sonra içtiğimiz espresso tam kıvamındaydı.",
    rating: 5,
    status: "visible",
    timestamp: new Date().toISOString()
  },
  {
    id: "R-default-3",
    author: "Selim G.",
    text: "İç mekan tasarımı çok sıcak ve davetkar. Tavanlardaki ahşap geometrik detaylar ve duvar resmi muazzam. Yalova'da böylesi bir şık İtalyan restoranı açılması harika olmuş.",
    rating: 5,
    status: "visible",
    timestamp: new Date().toISOString()
  }
];

function safeGetReviews() {
  const saved = localStorage.getItem("pietro_reviews");
  if (!saved) {
    localStorage.setItem("pietro_reviews", JSON.stringify(defaultReviews));
    return defaultReviews;
  }
  try {
    return JSON.parse(saved);
  } catch (e) {
    return defaultReviews;
  }
}

window.renderReviews = function() {
  const container = document.getElementById("reviews-container");
  if (!container) return;

  container.innerHTML = "";
  const reviews = safeGetReviews();
  const visibleReviews = reviews.filter(r => r.status === "visible");

  if (visibleReviews.length === 0) {
    const emptyText = document.createElement("p");
    emptyText.style = "grid-column: 1/-1; text-align: center; color: var(--color-text-secondary); font-style: italic;";
    emptyText.textContent = currentLanguage === "tr" ? "Henüz değerlendirme bulunmuyor." :
                           (currentLanguage === "ar" ? "لا توجد تقييمات بعد." : "No reviews yet.");
    container.appendChild(emptyText);
    return;
  }

  visibleReviews.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";
    
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        starsHtml += `<i class="fa-solid fa-star" style="color: #FFD700;"></i>`;
      } else {
        starsHtml += `<i class="fa-regular fa-star" style="color: #555;"></i>`;
      }
    }

    card.innerHTML = `
      <div class="rating-stars" style="margin-bottom:12px;">
        ${starsHtml}
      </div>
      <p class="review-text" style="color:var(--color-text-muted-light); font-size:0.95rem; margin-bottom:16px;">"${escapeHTML(review.text)}"</p>
      <h5 class="review-author" style="color:var(--color-gold); font-family:var(--font-serif); font-size:1.05rem; font-style:italic;">${escapeHTML(review.author)}</h5>
    `;
    container.appendChild(card);
  });
};

window.openAddReviewModal = function() {
  document.getElementById("review-author-input").value = "";
  document.getElementById("review-text-input").value = "";
  setReviewRating(5);
  openModal("review-add-modal");
};

window.setReviewRating = function(rating) {
  document.getElementById("review-rating-value").value = rating;
  const starsContainer = document.getElementById("interactive-review-stars");
  if (!starsContainer) return;
  const stars = starsContainer.querySelectorAll(".star-btn");
  stars.forEach((star, idx) => {
    if (idx < rating) {
      star.style.color = "#FFD700";
    } else {
      star.style.color = "#555";
    }
  });
};

window.submitCustomerReview = function() {
  const author = document.getElementById("review-author-input").value.trim();
  const text = document.getElementById("review-text-input").value.trim();
  const rating = parseInt(document.getElementById("review-rating-value").value) || 5;

  if (!author || !text) {
    alert(currentLanguage === "tr" ? "Lütfen tüm alanları doldurun!" :
          (currentLanguage === "ar" ? "يرجى ملء جميع الحقول!" : "Please fill in all fields!"));
    return;
  }

  const reviews = safeGetReviews();
  const newReview = {
    id: "R-" + Date.now(),
    author,
    text,
    rating,
    status: "visible",
    timestamp: new Date().toISOString()
  };

  reviews.unshift(newReview);
  localStorage.setItem("pietro_reviews", JSON.stringify(reviews));
  localStorage.setItem("pietro_reviews_updated_event", Date.now().toString());

  renderReviews();
  closeAdminModal("review-add-modal");

  alert(currentLanguage === "tr" ? "Değerlendirmeniz için teşekkür ederiz!" :
        (currentLanguage === "ar" ? "شكراً لتقييمك!" : "Thank you for your review!"));
};
