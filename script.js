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
    "image-disclaimer": "Bu görsel temsil amaçlı kullanılmıştır. Kendi fotoğraflarınızla değiştirilecektir.",
    "price-note": "Yaklaşık fiyat - lütfen güncel fiyatı güncelleyin",
    "btn-select": "Seç",

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
    "footer-credit": "Otantik İtalyan deneyimleri için tutkuyla tasarlandı."
  },
  en: {
    // Header & Nav
    "nav-home": "Home",
    "nav-about": "About Us",
    "nav-menu": "Menu",
    "nav-reviews": "Reviews",
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
    "image-disclaimer": "This image is used as a representation. It will be replaced with your actual photos.",
    "price-note": "Approximate price - please update real price",
    "btn-select": "Select",

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
    "footer-credit": "Designed with passion for authentic Italian experiences."
  },
  ar: {
    // Header & Nav
    "nav-home": "الرئيسية",
    "nav-about": "من نحن",
    "nav-menu": "القائمة",
    "nav-reviews": "التقييمات",
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
    "image-disclaimer": "هذه الصورة تم استخدامها بناءً على شكل تقريبي لكيف يجب أن يكون مطعمكم، وسيتم استبدالها بصوركم الخاصة.",
    "price-note": "سعر تقريبي مبدئي - يرجى تحديث السعر الفعلي",
    "btn-select": "اختر",

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
    "btn-book-now": "احجز الآن",
    "popup-title": "تم استلام طلب الحجز",
    "popup-message": "لقد تلقينا طلب حجز الطاولة الخاص بك بنجاح. سنتواصل معك في أقرب وقت لتأكيد الحجز. شكراً لك!",
    "btn-close": "إغلاق",

    // Testimonials
    "reviews-title": "تقييمات العملاء",
    "reviews-subtitle": "آراء وتجارب زبائننا في Pietro",
    "review-warning": "نموذج مبدئي - يرجى استبداله بتقييمات حقيقية",
    "review-1-text": "\"المكان الوحيد في يالوفا الذي يقدم بيتزا إيطالية حقيقية. التناغم بين البروشوتو والفطر في بيتزا بيترو كان خيالياً. أجواء المكان والجدارية النباتية مميزة للغاية.\"",
    "review-2-text": "\"طبق Penne Burrata يفوق الوصف! تماسك الصلصة الكريمية وطزاجة جبن البوراتا كانت مثالية. والقهوة الإسبريسو بعد العشاء كانت ممتازة.\"",
    "review-3-text": "\"التصميم الداخلي مريح ودافئ جداً. تفاصيل الخشب الهندسية في السقف والجدارية يمنحان طاقة رائعة. إضافة ممتازة لمدينة يالوفا.\"",

    // Contact
    "contact-title": "الاتصال والموقع",
    "contact-subtitle": "تفضلوا بزيارتنا",
    "footer-credit": "صُنع بكل حب وشغف لتقديم تجارب إيطالية أصيلة."
  }
};

// Global state variables
let currentLanguage = "tr";

// 2. Language Switcher Logic
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
      dish: "Örn. Pizza Pietro"
    },
    en: {
      name: "e.g. John Doe",
      phone: "e.g. +1 (555) 123-4567",
      dish: "e.g. Pizza Pietro"
    },
    ar: {
      name: "مثال: أحمد محمد",
      phone: "مثال: +966 50 123 4567",
      dish: "مثال: بيتزا بيترو"
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
}

// 3. Dynamic WhatsApp Link generator based on active language
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

// 4. Menu Filtering System
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Update active filter button
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filterValue = btn.getAttribute("data-filter");

    menuCards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filterValue === "all" || category === filterValue) {
        card.classList.remove("hidden");
        // Fade in animation
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transition = "opacity 0.4s ease";
        }, 50);
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// 5. Select menu item in card and auto-scroll/fill in form
window.selectMenuItem = function(itemName) {
  const dishInput = document.getElementById("booking-dish");
  if (dishInput) {
    dishInput.value = itemName;
    // Highlight input momentarily
    dishInput.style.borderColor = "var(--color-gold)";
    setTimeout(() => {
      dishInput.style.borderColor = "rgba(255, 255, 255, 0.1)";
    }, 1500);
  }

  // Smooth scroll to booking section
  const bookingSection = document.getElementById("reservation");
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: "smooth" });
  }
};

// 6. Reservation Form Handler
window.handleBookingSubmit = function(event) {
  event.preventDefault();

  const name = document.getElementById("booking-name").value;
  const phone = document.getElementById("booking-phone").value;
  const date = document.getElementById("booking-date").value;
  const time = document.getElementById("booking-time").value;
  const guests = document.getElementById("booking-guests").value;
  const dish = document.getElementById("booking-dish").value;

  // Simple validation helper
  if (!name || !phone || !date || !time) return;

  // Simulate mock database / API storage
  const reservationData = { name, phone, date, time, guests, dish, timestamp: new Date().toISOString() };
  localStorage.setItem("pietro_latest_booking", JSON.stringify(reservationData));

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

// 7. Mobile Menu Burger Animation & Toggle
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

// 8. Sticky Navigation & Scroll Spy (Highlight active links)
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

// 9. Initial Load Configuration
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
