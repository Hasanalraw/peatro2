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

    // Modals Translations
    "modal-ingredients": "İçindekiler",
    "modal-select-size": "Boyut Seçin",
    "size-small": "Küçük",
    "size-medium": "Orta",
    "size-large": "Büyük",
    "btn-confirm": "Onayla ve Rezerve Et",

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
    "filter-drinks": "المشاريب",
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

// 2. Baseline Database (Empty baseline menu as requested by user)
const defaultDishes = [];


// Global state variables
let currentLanguage = "tr";
let currentSelectedDishId = "";
let currentSelectedSize = "medium"; // default
let currentSlideIndex = 0;
let totalSlides = 1;
const dishesData = {}; // Global dictionary mapping active dishes

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
  
  // Re-populate dynamic drinks dropdown based on current language
  populateDrinksDropdown();
  
  // Re-render menu using new active language translations
  renderMenu();
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

window.openSizeModal = function(id) {
  const dish = dishesData[id];
  if (!dish) return;

  currentSelectedDishId = id;
  currentSelectedSize = "medium"; // reset size selection to default

  const modal = document.getElementById("size-modal");
  document.getElementById("size-modal-dish-title").textContent = dish.name[currentLanguage] || dish.name["tr"];

  // Set prices dynamically (ALL IN TL NOW FOR ALL LANGUAGES)
  const currencyPrices = dish.prices[currentLanguage] || dish.prices["tr"];
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
  const selectedPriceLabel = (dish.prices[currentLanguage] || dish.prices["tr"])[currentSelectedSize];
  const dishName = dish.name[currentLanguage] || dish.name["tr"];

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
    drink = drinkSelect.options[drinkSelect.selectedIndex].text;
  }

  // Simple validation helper
  if (!name || !phone || !date || !time) return;

  // Fetch bookings list, append new booking, and save
  let bookings = safeGetItem("pietro_bookings");
  const newBooking = {
    id: 'B-' + Date.now(),
    name,
    phone,
    date,
    time,
    guests,
    dish: dish || "",      // SEPARATED!
    drink: drink || "",    // SEPARATED!
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
      const basePrices = norm.prices.tr || norm.prices.en || norm.prices.ar || { small: '0 TL', medium: '0 TL', large: '0 TL' };
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
      tr: { small: '0 TL', medium: '0 TL', large: '0 TL' },
      en: { small: '0 TL', medium: '0 TL', large: '0 TL' },
      ar: { small: '0 TL', medium: '0 TL', large: '0 TL' }
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

  // Draw HTML Cards dynamically in order
  activeDishes.forEach(dish => {
    const name = dish.name[currentLanguage] || dish.name["tr"];
    const desc = dish.desc[currentLanguage] || dish.desc["tr"];
    const priceMedium = (dish.prices[currentLanguage] || dish.prices["tr"]).medium;

    const card = document.createElement("div");
    card.className = "menu-card";
    card.setAttribute("data-category", dish.category);

    card.innerHTML = `
      <div class="menu-card-img-wrapper">
        <img src="${dish.image}" alt="${name}" class="menu-card-img">
        <span class="image-disclaimer" data-key="image-disclaimer">
          ${translations[currentLanguage]["image-disclaimer"]}
        </span>
      </div>
      <div class="menu-card-content">
        <h4 class="menu-item-title">${name}</h4>
        <p class="menu-item-desc">${desc}</p>
        <div class="menu-item-footer">
          <div class="price-area">
            <span class="price">${priceMedium}</span>
            <span class="price-note" data-key="price-note">
              ${translations[currentLanguage]["price-note"]}
            </span>
          </div>
          <div class="menu-card-actions">
            <button class="btn-learn-more" onclick="openDetailModal('${dish.id}')" data-key="btn-learn-more">
              ${translations[currentLanguage]["btn-learn-more"]}
            </button>
            <button class="btn-select-item" onclick="openSizeModal('${dish.id}')" data-key="btn-select">
              ${translations[currentLanguage]["btn-select"]}
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
    if (event.key === "pietro_custom_drinks" || event.key === "pietro_custom_drinks_updated_event") {
      populateDrinksDropdown();
    }
  });

  // Initialize page in Turkish language by default & render custom dishes
  setLanguage("tr");
  renderMenu();
  populateDrinksDropdown();
});
