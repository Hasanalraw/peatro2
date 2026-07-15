/* ==========================================================================
   Pietro Coffee Pizzeria - Core JavaScript
   Multilingual i18n support, filters, scroll interactions, and reservations
   ========================================================================== */

// 1. i18n Translations Dictionary
const translations = {
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

    // About Us Section
    "about-title": "Otantik Bir İtalyan Deneyimi",
    "about-subtitle": "Pietro Coffee Pizzeria'nın Hikayesi",
    "about-text-1": "Yalova'nın kalbinde yer alan Pietro Coffee Pizzeria, otantik İtalyan lezzetlerinin buluşma noktasıdır. Odun ateşinde pişen çıtır pizzalarımız, el yapımı makarnalarımız ve kaliteli İtalyan kahvelerimiz ile İtalya'nın gerçek ruhunu masanıza taşıyoruz.",
    "about-text-2": "Sıcak ahşap dokuları, loş aydınlatmaları ve imza niteliğindeki botanik duvar resmimizle tasarlanan sıcak mekânımız, unutulmaz bir yemek deneyimi için mükemmel bir atmosfer sunuyor. Her yemeğimiz, nesilden nesile aktarılan geleneksel tariflerle ve en taze malzemelerle özenle hazırlanmaktadır.",
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

    // Modals Translations
    "modal-ingredients": "İçindekiler",
    "modal-select-size": "Boyut Seçin",
    "size-small": "Küçük",
    "size-medium": "Orta",
    "size-large": "Büyük",
    "btn-confirm": "Onayla ve Rezerve Et",

    // Individual Menu Items
    "menu-item-1-title": "Pizza Margherita",
    "menu-item-1-desc": "İmza Napoliten hamurumuz üzerinde taze mozzarella, domates sosu ve fesleğen yaprakları.",
    "menu-item-2-title": "Pizza Quattro Formaggi",
    "menu-item-2-desc": "Taze adaçayı ile zenginleştirilmiş mozzarella, gorgonzola, parmesan ve fontina peynirleri karışımı.",
    "menu-item-3-title": "Pizza Pollo Picante",
    "menu-item-3-desc": "Taze domates sosu üzerinde ızgara tavuk, acı biberler, kekik ve mozzarella peyniri.",
    "menu-item-4-title": "Pizza Pietro (Şefin Özel Tabağı)",
    "menu-item-4-desc": "Özel kurutulmuş dana eti, yaban mantarları, renkli dolmalık biberler ve tıraşlanmış parmesan peyniri.",
    "menu-item-5-title": "Penne Burrata",
    "menu-item-5-desc": "Üzerinde bütün taze burrata peyniri ile zengin, kremalı domates ve fesleğen soslu kalem makarna.",
    "menu-item-6-title": "Tagliatelli Pollo",
    "menu-item-6-desc": "Izgara tavuk parçaları, taze adaçayı ve kadifemsi tereyağı sosu ile sotelenmiş yassı tagliatelli makarna.",
    "menu-item-7-title": "Tagliatelli Scampi",
    "menu-item-7-desc": "Sotelenmiş karides, sarımsak, maydanoz, limon kabuğu rendesi ve tıraşlanmış parmesanlı tagliatelli.",
    "menu-item-8-title": "Tagliatelli Forester",
    "menu-item-8-desc": "Sotelenmiş yaban orman mantarları, kestane mantarları ve adaçayı ile harmanlanmış şerit makarna.",

    // Reservation Section
    "reserve-title": "Masa Rezervasyonu",
    "reserve-subtitle": "İtalyan Gecenizi Şimdiden Planlayın",
    "reserve-text": "Pietro Coffee Pizzeria'da kendiniz ve sevdikleriniz için bir masa ayırtın. Sıcak atmosferimiz ve benzersiz İtalyan tatlarımızla sizleri ağırlamaktan mutluluk duyacağız.",
    "contact-phone": "Telefon",
    "contact-hours": "Çalışma Saatleri",
    "contact-hours-desc": "Her Gün: 10:00 - 20:00",
    "label-name": "Adınız Soyadınız",
    "label-phone": "Telefon Numaranız",
    "label-date": "Tarih",
    "label-time": "Saat",
    "label-guests": "Kişi Sayısı",
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

    // Modals Translations
    "modal-ingredients": "Ingredients",
    "modal-select-size": "Select Size",
    "size-small": "Small",
    "size-medium": "Medium",
    "size-large": "Large",
    "btn-confirm": "Confirm & Reserve",

    // Individual Menu Items
    "menu-item-1-title": "Pizza Margherita",
    "menu-item-1-desc": "Fresh mozzarella, tomato sauce, and basil leaves on our signature Neapolitan crust.",
    "menu-item-2-title": "Pizza Quattro Formaggi",
    "menu-item-2-desc": "A rich blend of mozzarella, gorgonzola, parmesan, and fontina cheeses with fresh sage.",
    "menu-item-3-title": "Pizza Pollo Picante",
    "menu-item-3-desc": "Grilled chicken, spicy hot peppers, oregano, and mozzarella over fresh tomato sauce.",
    "menu-item-4-title": "Pizza Pietro (Chef's Special)",
    "menu-item-4-desc": "Premium cured beef (prosciutto style), wild mushrooms, colorful bell peppers, and shaved parmesan cheese.",
    "menu-item-5-title": "Penne Burrata",
    "menu-item-5-desc": "Penne pasta in a rich, creamy tomato-basil sauce topped with a whole fresh burrata ball.",
    "menu-item-6-title": "Tagliatelli Pollo",
    "menu-item-6-desc": "Flat tagliatelli pasta tossed with tender grilled chicken, fresh sage, and a velvety butter sauce.",
    "menu-item-7-title": "Tagliatelli Scampi",
    "menu-item-7-desc": "Tagliatelli pasta with sautéed shrimp, garlic, parsley, lemon zest, and shaved parmesan.",
    "menu-item-8-title": "Tagliatelli Forester",
    "menu-item-8-desc": "Flat ribbon pasta tossed with sautéed wild forest mushrooms, chestnut mushrooms, and sage.",

    // Reservation Section
    "reserve-title": "Book a Table",
    "reserve-subtitle": "Plan Your Italian Evening Now",
    "reserve-text": "Reserve a table for yourself and your loved ones at Pietro Coffee Pizzeria. We will be delighted to host you with our warm hospitality and unique Italian flavors.",
    "contact-phone": "Phone",
    "contact-hours": "Opening Hours",
    "contact-hours-desc": "Daily: 10:00 AM - 8:00 PM",
    "label-name": "Your Full Name",
    "label-phone": "Your Phone Number",
    "label-date": "Date",
    "label-time": "Time",
    "label-guests": "Number of Guests",
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
    "filter-drinks": "المشروبات",
    "image-disclaimer": "هذه الصورة تم استخدامها بناءً على شكل تقريبي لكيف يجب أن يكون مطعمكم، وسيتم استبدالها بصوركم الخاصة.",
    "price-note": "سعر تقريبي مبدئي - يرجى تحديث السعر الفعلي",
    "btn-select": "اختر",
    "btn-learn-more": "تعرّف عليها أكثر",

    // Modals Translations
    "modal-ingredients": "المكونات",
    "modal-select-size": "اختر الحجم",
    "size-small": "صغيرة",
    "size-medium": "متوسطة",
    "size-large": "كبيرة",
    "btn-confirm": "تأكيد الحجز",

    // Individual Menu Items
    "menu-item-1-title": "Pizza Margherita",
    "menu-item-1-desc": "موزاريلا طازجة، صلصة طماطم، وأوراق ريحان طازجة على عجينتنا النابولية المميزة.",
    "menu-item-2-title": "Pizza Quattro Formaggi",
    "menu-item-2-desc": "مزيج غني من أربعة أجبان (موزاريلا، جورجونزولا، بارميزان، فونتينا) مع أوراق الميرمية الطازجة.",
    "menu-item-3-title": "Pizza Pollo Picante",
    "menu-item-3-desc": "دجاج مشوي، فلفل حار، أوريجانو، وجبنة موزاريلا فوق صلصة الطماطم الطازجة.",
    "menu-item-4-title": "Pizza Pietro (طبق الشيف المميز)",
    "menu-item-4-desc": "شرائح لحم بقري مجفف فاخر (بروشوتو)، فطر بري، فلفل ملون، ورقائق جبنة البارميزان.",
    "menu-item-5-title": "Penne Burrata",
    "menu-item-5-desc": "باستا بيني بصلصة طماطم كريمية غنية بالريحان تعلوها كرة كاملة من جبنة البوراتا الطازجة.",
    "menu-item-6-title": "Tagliatelli Pollo",
    "menu-item-6-desc": "تاليياتيلي مسطحة مطبوخة بقطع الدجاج المشوي والميرمية الطازجة وصلصة الزبدة الغنية.",
    "menu-item-7-title": "Tagliatelli Scampi",
    "menu-item-7-desc": "تاليياتيلي بالجمبري السوتيه مع الثوم، البقدونس، مبشور قشر الليمون ورقائق البارميزان.",
    "menu-item-8-title": "Tagliatelli Forester",
    "menu-item-8-desc": "باستا شريطية مسطحة مطبوخة بالفطر البري وفطر الكستناء السوتيه مع أوراق الميرمية والزبدة.",

    // Reservation Section
    "reserve-title": "حجز طاولة",
    "reserve-subtitle": "خطط لأمسيتك الإيطالية الآن",
    "reserve-text": "احجز طاولة لك ولمن تحب في Pietro Coffee Pizzeria. سنسعد باستضافتكم وتقديم أرقى مستويات الخدمة مع أشهى الأطباق الإيطالية الفريدة.",
    "contact-phone": "الهاتف",
    "contact-hours": "ساعات العمل",
    "contact-hours-desc": "يومياً: 10:00 صباحاً - 8:00 مساءً",
    "label-name": "الاسم الكامل",
    "label-phone": "رقم الهاتف للتواصل",
    "label-date": "التاريخ",
    "label-time": "الوقت",
    "label-guests": "عدد الأفراد",
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

// 2. Meal Database (Detail descriptions, ingredients & sizing prices - ALL STRICTLY IN TL)
const dishesData = {
  "1": {
    image: "images/pizza_margherita.jpg",
    name: { tr: "Pizza Margherita", en: "Pizza Margherita", ar: "Pizza Margherita" },
    desc: {
      tr: "İmza Napoliten hamurumuz üzerinde taze mozzarella, domates sosu ve fesleğen yaprakları.",
      en: "Fresh mozzarella, tomato sauce, and basil leaves on our signature Neapolitan crust.",
      ar: "موزاريلا طازجة، صلصة طماطم، وأوراق ريحان طازجة على عجينتنا النابولية المميزة."
    },
    ingredients: {
      tr: ["Taze Mozzarella", "Domates Sosu", "Taze Fesleğen", "Sızma Zeytinyağı", "Kekik"],
      en: ["Fresh Mozzarella", "Tomato Sauce", "Fresh Basil", "Extra Virgin Olive Oil", "Oregano"],
      ar: ["موزاريلا طازجة", "صلصة طماطم", "ريحان طازج", "زيت زيتون بكر ممتاز", "أوريجانو"]
    },
    prices: {
      tr: { small: "340 TL", medium: "380 TL", large: "440 TL" },
      en: { small: "340 TL", medium: "380 TL", large: "440 TL" },
      ar: { small: "340 TL", medium: "380 TL", large: "440 TL" }
    }
  },
  "2": {
    image: "images/pizza_quattro.jpg",
    name: { tr: "Pizza Quattro Formaggi", en: "Pizza Quattro Formaggi", ar: "Pizza Quattro Formaggi" },
    desc: {
      tr: "Taze adaçayı ile zenginleştirilmiş mozzarella, gorgonzola, parmesan ve fontina peynirleri karışımı.",
      en: "A rich blend of mozzarella, gorgonzola, parmesan, and fontina cheeses with fresh sage.",
      ar: "مزيج غني من أربعة أجبان (موزاريلا، جورجونزولا، بارميزان، فونتينا) مع أوراق الميرمية الطازجة."
    },
    ingredients: {
      tr: ["Mozzarella Peyniri", "Gorgonzola Peyniri", "Parmesan Peyniri", "Fontina Peyniri", "Taze Adaçayı", "Zeytinyağı"],
      en: ["Mozzarella Cheese", "Gorgonzola Cheese", "Parmesan Cheese", "Fontina Cheese", "Fresh Sage", "Olive Oil"],
      ar: ["جبن الموزاريلا", "جبن الجورجونزولا", "جبن البارميزان", "جبن الفونتينا", "ميرمية طازجة", "زيت زيتون"]
    },
    prices: {
      tr: { small: "430 TL", medium: "490 TL", large: "560 TL" },
      en: { small: "430 TL", medium: "490 TL", large: "560 TL" },
      ar: { small: "430 TL", medium: "490 TL", large: "560 TL" }
    }
  },
  "3": {
    image: "images/pizza_pollo.jpg",
    name: { tr: "Pizza Pollo Picante", en: "Pizza Pollo Picante", ar: "Pizza Pollo Picante" },
    desc: {
      tr: "Taze domates sosu üzerinde ızgara tavuk, acı biberler, kekik ve mozzarella peyniri.",
      en: "Grilled chicken, spicy hot peppers, oregano, and mozzarella over fresh tomato sauce.",
      ar: "دجاج مشوي، فلفل حار، أوريجانو، وجبنة موزاريلا فوق صلصة الطماطم الطازجة."
    },
    ingredients: {
      tr: ["Izgara Tavuk Göğsü", "Acı Kırmızı Biber", "Közlenmiş Renkli Biberler", "Kekik", "Mozzarella Peyniri", "Domates Sosu"],
      en: ["Grilled Chicken Breast", "Hot Chili Pepper", "Roasted Bell Peppers", "Oregano", "Mozzarella", "Tomato Sauce"],
      ar: ["صدر دجاج مشوي", "فلفل حار", "فلفل حلو مشوي", "أوريجانو", "موزاريلا", "صلصة طماطم"]
    },
    prices: {
      tr: { small: "410 TL", medium: "460 TL", large: "520 TL" },
      en: { small: "410 TL", medium: "460 TL", large: "520 TL" },
      ar: { small: "410 TL", medium: "460 TL", large: "520 TL" }
    }
  },
  "4": {
    image: "images/pizza_pietro.jpg",
    name: { tr: "Pizza Pietro", en: "Pizza Pietro", ar: "Pizza Pietro" },
    desc: {
      tr: "Özel kurutulmuş dana eti, yaban mantarları, renkli dolmalık biberler ve tıraşlanmış parmesan peyniri.",
      en: "Premium cured beef (prosciutto style), wild mushrooms, colorful bell peppers, and shaved parmesan cheese.",
      ar: "شرائح لحم بقري مجفف فاخر (بروشوتو)، فطر بري، فلفل ملون، ورقائق جبنة البارميزان."
    },
    ingredients: {
      tr: ["Kurutulmuş Dana Eti", "Yaban Orman Mantarları", "Kültür Mantarı", "Renkli Dolmalık Biberler", "Tıraşlanmış Parmesan", "Taze Roka"],
      en: ["Cured Prosciutto Beef", "Wild Forest Mushrooms", "White Button Mushrooms", "Bell Peppers", "Shaved Parmesan", "Fresh Arugula"],
      ar: ["بروشوتو بقري مجفف", "فطر بري", "فطر أبيض", "فلفل ألوان", "شرائح بارميزان", "جرجير طازج"]
    },
    prices: {
      tr: { small: "480 TL", medium: "540 TL", large: "610 TL" },
      en: { small: "480 TL", medium: "540 TL", large: "610 TL" },
      ar: { small: "480 TL", medium: "540 TL", large: "610 TL" }
    }
  },
  "5": {
    image: "images/penne_burrata.jpg",
    name: { tr: "Penne Burrata", en: "Penne Burrata", ar: "Penne Burrata" },
    desc: {
      tr: "Üzerinde bütün taze burrata peyniri ile zengin, kremalı domates ve fesleğen soslu kalem makarna.",
      en: "Penne pasta in a rich, creamy tomato-basil sauce topped with a whole fresh burrata ball.",
      ar: "باستا بيني بصلصة طماطم كريمية غنية بالريحان تعلوها كرة كاملة من جبنة البوراتا الطازجة."
    },
    ingredients: {
      tr: ["Kalem Makarna", "Bütün Taze Burrata", "Kremalı Domates Marinara", "Kiraz Domatesler", "Taze Fesleğen", "Parmesan Peyniri"],
      en: ["Penne Pasta", "Whole Fresh Burrata", "Cherry Tomatoes", "Fresh Basil", "Parmesan Cheese"],
      ar: ["مكرونة بيني", "كرة بوراتا كاملة", "صلصة مارينارا كريمية", "طماطم كرزية", "ريحان طازج", "جبن بارميزان"]
    },
    prices: {
      tr: { small: "390 TL", medium: "440 TL", large: "500 TL" },
      en: { small: "390 TL", medium: "440 TL", large: "500 TL" },
      ar: { small: "390 TL", medium: "440 TL", large: "500 TL" }
    }
  },
  "6": {
    image: "images/tagliatelli_pollo.jpg",
    name: { tr: "Tagliatelli Pollo", en: "Tagliatelli Pollo", ar: "Tagliatelli Pollo" },
    desc: {
      tr: "Izgara tavuk parçaları, taze adaçayı ve kadifemsi tereyağı sosu ile sotelenmiş yassı tagliatelli makarna.",
      en: "Flat tagliatelli pasta tossed with tender grilled chicken, fresh sage, and a velvety butter sauce.",
      ar: "تاليياتيلي مسطحة مطبوخة بقطع الدجاج المشوي والميرمية الطازجة وصلصة الزبدة الغنية."
    },
    ingredients: {
      tr: ["Tagliatelli Makarna", "Izgara Tavuk Parçaları", "Taze Adaçayı", "Tereyağlı Özel Sos", "Sarımsak", "Rendelenmiş Parmesan"],
      en: ["Tagliatelli Pasta", "Grilled Chicken Pieces", "Fresh Sage", "Special Butter Sauce", "Garlic", "Grated Parmesan"],
      ar: ["باستا تاليياتيلي", "قطع دجاج مشوي", "ميرمية طازجة", "صلصة زبدة خاصة", "ثوم", "بارميزان مبشور"]
    },
    prices: {
      tr: { small: "390 TL", medium: "440 TL", large: "500 TL" },
      en: { small: "390 TL", medium: "440 TL", large: "500 TL" },
      ar: { small: "390 TL", medium: "440 TL", large: "500 TL" }
    }
  },
  "7": {
    image: "images/tagliatelli_scampi.jpg",
    name: { tr: "Tagliatelli Scampi", en: "Tagliatelli Scampi", ar: "Tagliatelli Scampi" },
    desc: {
      tr: "Sotelenmiş karides, sarımsak, maydanoz, limon kabuğu rendesi ve tıraşlanmış parmesanlı tagliatelli.",
      en: "Tagliatelli pasta with sautéed shrimp, garlic, parsley, lemon zest, and shaved parmesan.",
      ar: "تاليياتيلي بالجمبري السوتيه مع الثوم، البقدونس، مبشور قشر الليمون ورقائق البارميزان."
    },
    ingredients: {
      tr: ["Tagliatelli Makarna", "Sotelenmiş Karides", "Sarımsaklı Tereyağı Sosu", "Taze Maydanoz", "Limon Kabuğu Rendesi", "Tıraşlanmış Parmesan"],
      en: ["Tagliatelli Pasta", "Sautéed Shrimp", "Garlic Butter Sauce", "Fresh Parsley", "Lemon Zest", "Shaved Parmesan"],
      ar: ["باستا تاليياتيلي", "جمبري سوتيه", "صلصة زبدة بالثوم", "بقدونس طازج", "قشر ليمون", "بارميزان مبشور"]
    },
    prices: {
      tr: { small: "460 TL", medium: "520 TL", large: "590 TL" },
      en: { small: "460 TL", medium: "520 TL", large: "590 TL" },
      ar: { small: "460 TL", medium: "520 TL", large: "590 TL" }
    }
  },
  "8": {
    image: "images/tagliatelli_forester.jpg",
    name: { tr: "Tagliatelli Forester", en: "Tagliatelli Forester", ar: "Tagliatelli Forester" },
    desc: {
      tr: "Sotelenmiş yaban orman mantarları, kestane mantarları ve adaçayı ile harmanlanmış şerit makarna.",
      en: "Flat ribbon pasta tossed with sautéed wild forest mushrooms, chestnut mushrooms, and sage.",
      ar: "باستا شريطية مسطحة مطبوخة بالفطر البري وفطر الكستناء السوتيه مع أوراق الميرمية والزبدة."
    },
    ingredients: {
      tr: ["Tagliatelli Makarna", "Yaban Mantarları", "Kestane Mantarı", "Taze Adaçayı", "Tereyağlı ve Kremalı Sos", "Rendelenmiş Parmesan"],
      en: ["Tagliatelli Pasta", "Wild Chanterelle Mushrooms", "Chestnut Mushrooms", "Fresh Sage", "Butter and Cream Sauce", "Grated Parmesan"],
      ar: ["باستا تاليياتيلي", "فطر بري", "فطر كستنائي", "ميرمية طازجة", "صلصة زبدة بالكريمة", "بارميزان مبشور"]
    },
    prices: {
      tr: { small: "370 TL", medium: "420 TL", large: "480 TL" },
      en: { small: "370 TL", medium: "420 TL", large: "480 TL" },
      ar: { small: "370 TL", medium: "420 TL", large: "480 TL" }
    }
  }
};

// Global state variables
let currentLanguage = "tr";
let currentSelectedDishId = "";
let currentSelectedSize = "medium"; // default

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
      dish: "Örn. Pizza Pietro (Orta - 540 TL)"
    },
    en: {
      name: "e.g. John Doe",
      phone: "e.g. +1 (555) 123-4567",
      dish: "e.g. Pizza Pietro (Medium - 540 TL)"
    },
    ar: {
      name: "مثال: أحمد محمد",
      phone: "مثال: +966 50 123 4567",
      dish: "مثال: بيتزا بيترو (متوسطة - 540 TL)"
    }
  };

  const nameInput = document.getElementById("booking-name");
  const phoneInput = document.getElementById("booking-phone");
  const dishInput = document.getElementById("booking-dish");

  if (nameInput) nameInput.placeholder = placeholders[lang].name;
  if (phoneInput) phoneInput.placeholder = placeholders[lang].phone;
  if (dishInput) dishInput.placeholder = placeholders[lang].dish;

  // Update WhatsApp text on the link
  updateWhatsAppLink(lang);
  
  // Refresh placeholder in menu empty filter if it exists
  const placeholder = document.getElementById("menu-empty-placeholder");
  if (placeholder && placeholder.style.display === "block") {
    const emptyKey = lang === "tr" ? "İçecek menümüz yakında eklenecektir. İlginiz için teşekkür ederiz." :
                     (lang === "en" ? "Our drinks menu is coming soon. Thank you for your interest." :
                     "قائمة المشروبات ستتوفر قريباً. شكراً لاهتمامكم.");
    placeholder.querySelector("span").textContent = emptyKey;
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
  whatsappFloat.href = `https://wa.me/905300000000?text=${encodedMessage}`;
}

// 5. Menu Filtering System with Empty Category Placeholder handler
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Update active filter button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");
    let visibleCount = 0;

    menuCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filterValue === "all" || category === filterValue) {
        card.classList.remove("hidden");
        card.style.opacity = "1";
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    // Handle empty category state (e.g. Drinks menu)
    let placeholder = document.getElementById("menu-empty-placeholder");
    if (visibleCount === 0) {
      if (!placeholder) {
        placeholder = document.createElement("div");
        placeholder.id = "menu-empty-placeholder";
        placeholder.className = "menu-empty-placeholder";
        placeholder.style.textAlign = "center";
        placeholder.style.gridColumn = "1 / -1";
        placeholder.style.padding = "60px 20px";
        placeholder.style.color = "var(--color-text-secondary)";
        placeholder.style.fontStyle = "italic";
        document.querySelector(".menu-grid").appendChild(placeholder);
      }
      placeholder.style.display = "block";
      placeholder.innerHTML = `<i class="fa-solid fa-mug-hot" style="font-size: 3rem; color: rgba(0,0,0,0.06); margin-bottom: 16px; display: block;"></i> <span style="font-weight:300;"></span>`;
      
      const emptyKey = currentLanguage === "tr" ? "İçecek menümüz yakında eklenecektir. İlginiz için teşekkür ederiz." :
                       (currentLanguage === "en" ? "Our drinks menu is coming soon. Thank you for your interest." :
                       "قائمة المشروبات ستتوفر قريباً. شكراً لاهتمامكم.");
      placeholder.querySelector("span").textContent = emptyKey;
    } else if (placeholder) {
      placeholder.style.display = "none";
    }
  });
});

// 6. Modal Interactions: Detail & Size Modals
window.openDetailModal = function(id) {
  const dish = dishesData[id];
  if (!dish) return;

  const modal = document.getElementById("detail-modal");
  document.getElementById("modal-dish-img").src = dish.image;
  document.getElementById("modal-dish-title").textContent = dish.name[currentLanguage];
  document.getElementById("modal-dish-desc").textContent = dish.desc[currentLanguage];

  const ingredientsList = document.getElementById("modal-dish-ingredients");
  ingredientsList.innerHTML = "";
  dish.ingredients[currentLanguage].forEach(ing => {
    const li = document.createElement("li");
    li.textContent = ing;
    ingredientsList.appendChild(li);
  });

  modal.classList.add("active");
};

window.closeDetailModal = function() {
  document.getElementById("detail-modal").classList.remove("active");
};

window.closeDetailModalOnOutsideClick = function(event) {
  if (event.target === document.getElementById("detail-modal")) {
    closeDetailModal();
  }
};

window.openSizeModal = function(id) {
  const dish = dishesData[id];
  if (!dish) return;

  currentSelectedDishId = id;
  currentSelectedSize = "medium"; // reset size selection to default

  const modal = document.getElementById("size-modal");
  document.getElementById("size-modal-dish-title").textContent = dish.name[currentLanguage];

  // Set prices dynamically (ALL IN TL NOW FOR ALL LANGUAGES)
  const currencyPrices = dish.prices[currentLanguage];
  document.getElementById("price-small").textContent = currencyPrices.small;
  document.getElementById("price-medium").textContent = currencyPrices.medium;
  document.getElementById("price-large").textContent = currencyPrices.large;

  // Reset active classes on size selection cards
  document.querySelectorAll(".size-option-card").forEach(card => card.classList.remove("active"));
  document.getElementById("size-card-medium").classList.add("active");

  modal.classList.add("active");
};

window.selectSize = function(size) {
  currentSelectedSize = size;
  document.querySelectorAll(".size-option-card").forEach(card => card.classList.remove("active"));
  document.getElementById(`size-card-${size}`).classList.add("active");
};

window.closeSizeModal = function() {
  document.getElementById("size-modal").classList.remove("active");
};

window.closeSizeModalOnOutsideClick = function(event) {
  if (event.target === document.getElementById("size-modal")) {
    closeSizeModal();
  }
};

window.confirmSizeSelection = function() {
  const dish = dishesData[currentSelectedDishId];
  if (!dish) return;

  const sizeLabels = {
    tr: { small: "Küçük", medium: "Orta", large: "Büyük" },
    en: { small: "Small", medium: "Medium", large: "Large" },
    ar: { small: "صغيرة", medium: "متوسطة", large: "كبيرة" }
  };

  const selectedSizeLabel = sizeLabels[currentLanguage][currentSelectedSize];
  const selectedPriceLabel = dish.prices[currentLanguage][currentSelectedSize];
  const dishName = dish.name[currentLanguage];

  const reservationInput = document.getElementById("booking-dish");
  if (reservationInput) {
    reservationInput.value = `${dishName} (${selectedSizeLabel} - ${selectedPriceLabel})`;
    
    // Highlight input momentarily
    reservationInput.style.borderColor = "var(--color-gold)";
    setTimeout(() => {
      reservationInput.style.borderColor = "rgba(255, 255, 255, 0.1)";
    }, 1500);
  }

  closeSizeModal();

  // Scroll to reservation
  const bookingSection = document.getElementById("reservation");
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: "smooth" });
  }
};

// 7. Reservation Form Handler (Accumulates multiple reservations in localStorage)
window.handleBookingSubmit = function(event) {
  event.preventDefault();

  const name = document.getElementById("booking-name").value;
  const phone = document.getElementById("booking-phone").value;
  const date = document.getElementById("booking-date").value;
  const time = document.getElementById("booking-time").value;
  const guests = document.getElementById("booking-guests").value;
  const dish = document.getElementById("booking-dish").value;
  const drinkSelect = document.getElementById("booking-drink");
  
  // Format drink option name nicely
  let drink = "";
  if (drinkSelect && drinkSelect.value) {
    const drinkText = drinkSelect.options[drinkSelect.selectedIndex].text;
    drink = drinkText;
  }

  // Simple validation helper
  if (!name || !phone || !date || !time) return;

  // Append selected food + drink details into a combined summary if both exist
  let orderSummary = dish;
  if (drink) {
    if (orderSummary) {
      orderSummary += ` + ${drink}`;
    } else {
      orderSummary = drink;
    }
  }

  // Fetch bookings list, append new booking, and save
  let bookings = JSON.parse(localStorage.getItem("pietro_bookings")) || [];
  const newBooking = {
    id: 'B-' + Date.now(),
    name,
    phone,
    date,
    time,
    guests,
    dish: orderSummary || "Masa Rezervasyonu",
    status: "pending",
    timestamp: new Date().toISOString()
  };
  bookings.unshift(newBooking); // add to top
  localStorage.setItem("pietro_bookings", JSON.stringify(bookings));

  // Dispatch storage update trigger event for local tab-to-tab sync
  localStorage.setItem("pietro_new_booking_event", Date.now().toString());

  // Show Success Popup Modal card
  const popup = document.getElementById("form-success-popup");
  if (popup) {
    popup.classList.add("active");
  }
};

window.closePopup = function() {
  const popup = document.getElementById("form-success-popup");
  if (popup) {
    popup.classList.remove("active");
  }
  // Reset the form
  const form = document.getElementById("booking-form");
  if (form) form.reset();
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

// 10. Initial Load Configuration
document.addEventListener("DOMContentLoaded", () => {
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

  // Initialize page in Turkish language by default
  setLanguage("tr");
});
