// Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("Service Worker Registered ✅"))
      .catch((err) => console.log("Service Worker Failed ❌", err));
  });
}

// --- 1. Menu Data ---
const menuData = [
  // --- RAMADAN START:
  {
    id: 901,
    title: "وجبة ربع شيش - فحم",
    price: "13 ريال",
    category: "ramadan",
    img: "images/rob3-sheesh.jpeg",
    description: "أرز + شوربة + سلطة + مخلل + مياه + تمر",
  },
  {
    id: 902,
    title: "وجبة كفتة",
    price: "15 ريال",
    category: "ramadan",
    img: "images/kofta-ram.jpeg",
    description: "أرز + شوربة + سلطة + مخلل + مياه + تمر",
  },
  {
    id: 903,
    title: "وجبة لحم",
    price: "15 ريال",
    category: "ramadan",
    img: "images/la7m-ram.jpeg",
    description: "أرز + إيدام + سلطة + مخلل + مياه + تمر",
  },
  {
    id: 904,
    title: "وجبة ربع حبة فرن",
    price: "9 ريال",
    category: "ramadan",
    img: "images/rob3-ram-forn.jpeg",
    description: "أرز + سلطة + مخلل + تمر",
  },
  // --- RAMADAN END ---

  // Koshary
  {
    id: 1,
    title: "علبة كشري صغيرة",
    price: "10 ريال",
    category: "koshary",
    img: "./images/k-s.jpg",
  },
  {
    id: 2,
    title: "علبة كشري صغيرة باللحمة المفرومة",
    price: "14 ريال",
    category: "koshary",
    img: "./images/k-s-la7.jpg",
  },
  {
    id: 3,
    title: "علبة كشري صغيرة الكبدة",
    price: "14 ريال",
    category: "koshary",
    img: "./images/k-s-kib.jpg",
  },
  {
    id: 4,
    title: "علبة كشري صغير بالسجق",
    price: "14 ريال",
    category: "koshary",
    img: "./images/k-s-sog.jpg",
  },
  {
    id: 23,
    title: "علبة كشري صغيرة دجاج شاورما",
    price: "14 ريال",
    category: "koshary",
    img: "images/k-l-sha.jpg",
  },
  {
    id: 5,
    title: "علبة كشري كبيرة",
    price: "14 ريال",
    category: "koshary",
    img: "./images/k-l.jpg",
  },
  {
    id: 6,
    title: "علبة كشري كبيرة باللحمة المفرومة",
    price: "18 ريال",
    category: "koshary",
    img: "images/k-l-la7.jpg",
  },
  {
    id: 7,
    title: "علبة كشري كبيرة بالكبدة",
    price: "18 ريال",
    category: "koshary",
    img: "./images/k-l-kib.jpg",
  },
  {
    id: 24,
    title: "علبة كشري كبير بالسجق",
    price: "18 ريال",
    category: "koshary",
    img: "./images/k-s-sog.jpg",
  },
  {
    id: 8,
    title: "علبة كشري كبيرة دجاج شاورما",
    price: "18 ريال",
    category: "koshary",
    img: "images/k-l-sha.jpg",
  },
  {
    id: 9,
    title: "قدر كشري عائلي صغير",
    price: "28 ريال",
    category: "koshary",
    img: "images/k-xl-s.jpg",
  },
  {
    id: 10,
    title: "قدر كشري عائلي كبير",
    price: "45 ريال",
    category: "koshary",
    img: "images/k-xl.jpg",
  },

  // Crepe
  {
    id: 11,
    title: "كريب بطاطس",
    price: "10 ريال",
    category: "crepe",
    img: "images/kr-pot.jpg",
  },
  {
    id: 12,
    title: "كريب برجر",
    price: "16 ريال",
    category: "crepe",
    img: "images/kr-brg.jpg",
  },
  {
    id: 13,
    title: "كريب بانيه",
    price: "16 ريال",
    category: "crepe",
    img: "images/kr-bane.jpg",
  },
  {
    id: 14,
    title: "كريب كباب مشوي",
    price: "20 ريال",
    category: "crepe",
    img: "images/kr-kof.jpg",
  },
  {
    id: 15,
    title: "كريب زنجر بارد / حار",
    price: "16 ريال",
    category: "crepe",
    img: "images/kr-zin.jpg",
  },
  {
    id: 16,
    title: "كريب ميكس دجاج",
    price: "20 ريال",
    category: "crepe",
    img: "images/kr-mix.jpg",
  },
  {
    id: 25,
    title: "كريب استربس بارد / حار",
    price: "16 ريال",
    category: "crepe",
    img: "images/kr-str.jpg",
  },
  {
    id: 26,
    title: "كريب كونو ميكس ترند",
    price: "22 ريال",
    category: "crepe",
    img: "images/kr-cono-mx.jpg",
  },
  {
    id: 27,
    title: "كريب سجق",
    price: "20 ريال",
    category: "crepe",
    img: "images/kr-sog.jpg",
  },

  // Grill
  {
    id: 17,
    title: "نص حبة على الفحم",
    price: "20 ريال",
    category: "grill",
    img: "images/mash-half-fa7m.jpg",
  },
  {
    id: 28,
    title: "نص حبه دجاج شيش",
    price: "20 ريال",
    category: "grill",
    img: "images/mash-sish.jpg",
  },
  {
    id: 18,
    title: "نفر كباب دجاج",
    price: "23 ريال",
    category: "grill",
    img: "images/mash-kab.jpg",
  },
  {
    id: 19,
    title: "نفر اوصال لحمة",
    price: "30 ريال",
    category: "grill",
    img: "images/mash-s-awsal.jpg",
  },
  {
    id: 29,
    title: "نفر سجق مشوي فحم",
    price: "25 ريال",
    category: "grill",
    img: "images/mash-sog.jpg",
  },
  {
    id: 45,
    title: "نفر سجق اسكندراني",
    price: "25 ريال",
    category: "grill",
    img: "images/unnamed (27).jpg",
  },
  {
    id: 46,
    title: "نفر ريش ضاني",
    price: "32 ريال",
    category: "grill",
    img: "images/unnamed (28).jpg",
  },
  {
    id: 48,
    title: "نفر شيش طاووق",
    price: "25 ريال",
    category: "grill",
    img: "images/unnamed (30).jpg",
  },
  {
    id: 49,
    title: "نفر کباب طرب",
    price: "25 ريال",
    category: "grill",
    img: "images/unnamed (31).jpg",
  },
  {
    id: 50,
    title: "نفر كبدة إسكندراني",
    price: "15 ريال",
    category: "grill",
    img: "images/unnamed (32).jpg",
  },
  {
    id: 51,
    title: "نفر كباب لحم",
    price: "30 ريال",
    category: "grill",
    img: "images/unnamed (33).jpg",
  },
  {
    id: 52,
    title: "واحد كيلو كباب لحمة",
    price: "110 ريال",
    category: "grill",
    img: "images/unnamed (34).jpg",
  },
  {
    id: 53,
    title: "واحد كيلو طرب ضاني",
    price: "100 ريال",
    category: "grill",
    img: "images/unnamed (35).jpg",
  },
  {
    id: 54,
    title: "واحد كيلو شيش طاووق",
    price: "90 ريال",
    category: "grill",
    img: "images/unnamed (36).jpg",
  },
  {
    id: 55,
    title: "نفر مشكل مشاوي",
    price: "30 ريال",
    category: "grill",
    img: "images/unnamed (37).jpg",
  },
  {
    id: 56,
    title: "حبة دجاج على الفحم",
    price: "40 ريال",
    category: "grill",
    img: "images/unnamed (38).jpg",
  },
  {
    id: 57,
    title: "حبه دجاج شيش",
    price: "40 ريال",
    category: "grill",
    img: "images/unnamed (39).jpg",
  },
  {
    id: 58,
    title: "واحد كيلو ريش ضاني",
    price: "120 ريال",
    category: "grill",
    img: "images/unnamed (40).jpg",
  },
  {
    id: 59,
    title: "واحد كيلو مشكل مشاوي",
    price: "110 ريال",
    category: "grill",
    img: "images/unnamed (41).jpg",
  },

  // Sandwiches
  {
    id: 100,
    title: "سندوتش سجق",
    price: "12 ريال",
    category: "sandwich",
    img: "images/sogok-sand.jpeg",
  },
  {
    id: 101,
    title: "سندوتش حواوشي لحم مفروم بالجبن",
    price: "12 ريال",
    category: "sandwich",
    img: "images/unnamed (43).jpg",
  },
  {
    id: 102,
    title: "سندوتش حواوشي لحم ضاني",
    price: "12 ريال",
    category: "sandwich",
    img: "images/unnamed (44).jpg",
  },
  {
    id: 103,
    title: "سندوتش حواوشي لحم",
    price: "10 ريال",
    category: "sandwich",
    img: "images/unnamed (45).jpg",
  },
  {
    id: 104,
    title: "سندوتش كباب دجاج",
    price: "10 ريال",
    category: "sandwich",
    img: "images/unnamed (46).jpg",
  },
  {
    id: 105,
    title: "سندوتش كبدة اسكندراني",
    price: "10 ريال",
    category: "sandwich",
    img: "images/unnamed (47).jpg",
  },
  {
    id: 106,
    title: "سندوتش كباب لحم",
    price: "10 ريال",
    category: "sandwich",
    img: "images/unnamed (42).jpg",
  },
  {
    id: 107,
    title: "سندوتش طرب",
    price: "10 ريال",
    category: "sandwich",
    img: "images/unnamed (49).jpg",
  },

  // Mahashi
  {
    id: 120,
    title: "محشى مشكل صغير",
    price: "10 ريال",
    category: "mahashi",
    img: "images/ma7shy-mshakl-s.jpeg",
  },
  {
    id: 121,
    title: "فرد حمام محشي",
    price: "30 ريال",
    category: "hot_meal",
    img: "images/unnamed (51).jpg",
  },
  {
    id: 122,
    title: "سمبوسة لحم ( 5 حبه )",
    price: "8 ريال",
    category: "extra",
    img: "images/samb.jpg",
  },
  {
    id: 123,
    title: "سمبوسة جبن ( 5 حبه )",
    price: "5 ريال",
    category: "extra",
    img: "images/unnamed (53).jpg",
  },
  {
    id: 124,
    title: "محشي ورق عنب",
    price: "20 ريال",
    category: "mahashi",
    img: "images/unnamed (54).jpg",
  },
  {
    id: 125,
    title: "محشي ملفوف",
    price: "20 ريال",
    category: "mahashi",
    img: "images/unnamed (55).jpg",
  },
  {
    id: 126,
    title: "محشي مشكل كبير",
    price: "20 ريال",
    category: "mahashi",
    img: "images/ma7shy-mshakl-xl.jpeg",
  },

  // Extras
  {
    id: 140,
    title: "بطاطس بوم فريت",
    price: "5 ريال",
    category: "extra",
    img: "images/fri-pot.jpg",
  },
  {
    id: 141,
    title: "ارز مصري بالشعرية",
    price: "5 ريال",
    category: "extra",
    img: "images/unnamed (58).jpg",
  },
  {
    id: 142,
    title: "ارز مصري ابيض",
    price: "5 ريال",
    category: "extra",
    img: "images/unnamed (59).jpg",
  },
  {
    id: 143,
    title: "ارز بسمتي",
    price: "6 ريال",
    category: "extra",
    img: "images/unnamed (60).jpg",
  },
  {
    id: 144,
    title: "خبز محمص",
    price: "3 ريال",
    category: "extra",
    img: "images/unnamed (61).jpg",
  },

  // Edam
  {
    id: 150,
    title: "ملوخية",
    price: "7 ريال",
    category: "edam",
    img: "images/unnamed (62).jpg",
  },
  {
    id: 151,
    title: "مسقعة باللحمة المفرومة",
    price: "10 ريال",
    category: "edam",
    img: "images/unnamed (63).jpg",
  },
  {
    id: 152,
    title: "خضار مشکل",
    price: "7 ريال",
    category: "edam",
    img: "images/unnamed (64).jpg",
  },
  {
    id: 153,
    title: "بامية",
    price: "7 ريال",
    category: "edam",
    img: "images/unnamed (65).jpg",
  },

  // Hot Meals
  {
    id: 170,
    title: "فته لحم ضاني",
    price: "40 ريال",
    category: "hot_meal",
    img: "images/unnamed (69).jpg",
  },
  {
    id: 171,
    title: "فتة لحم",
    price: "32 ريال",
    category: "hot_meal",
    img: "images/unnamed (70).jpg",
  },
  {
    id: 172,
    title: "فتة ساده",
    price: "10 ريال",
    category: "hot_meal",
    img: "images/unnamed (71).jpg",
  },
  {
    id: 173,
    title: "بطه كامله",
    price: "120 ريال",
    category: "hot_meal",
    img: "images/unnamed (72).jpg",
  },
  {
    id: 174,
    title: "حبة دجاج فرن",
    price: "40 ريال",
    category: "hot_meal",
    img: "images/unnamed (73).jpg",
  },
  {
    id: 175,
    title: "فتة كوارع",
    price: "32 ريال",
    category: "hot_meal",
    img: "images/unnamed (74).jpg",
  },
  {
    id: 176,
    title: "نص بطه",
    price: "60 ريال",
    category: "hot_meal",
    img: "images/unnamed (75).jpg",
  },
  {
    id: 177,
    title: "فته موزه",
    price: "40 ريال",
    category: "hot_meal",
    img: "images/unnamed (76).jpg",
  },

  // Tagens
  {
    id: 210,
    title: "طاجن خضار مشکل لحمة",
    price: "32 ريال",
    category: "tagen",
    img: "images/unnamed (85).jpg",
  },
  {
    id: 211,
    title: "طاجن بطاطس لحمة",
    price: "32 ريال",
    category: "tagen",
    img: "images/unnamed (86).jpg",
  },
  {
    id: 212,
    title: "طاجن بامية لحمة",
    price: "32 ريال",
    category: "tagen",
    img: "images/unnamed (87).jpg",
  },
  {
    id: 213,
    title: "طاجن ورق عنب بالكوارع",
    price: "32 ريال",
    category: "tagen",
    img: "images/unnamed (88).jpg",
  },
  {
    id: 214,
    title: "طاجن لحمة بالبصل",
    price: "32 ريال",
    category: "tagen",
    img: "images/unnamed (89).jpg",
  },
  {
    id: 215,
    title: "طاجن عكاوي",
    price: "32 ريال",
    category: "tagen",
    img: "images/unnamed (90).jpg",
  },
  {
    id: 216,
    title: "طاجن رز معمر باللحمه",
    price: "30 ريال",
    category: "tagen",
    img: "images/unnamed (91).jpg",
  },
  {
    id: 217,
    title: "طاجن رز معمر",
    price: "15 ريال",
    category: "tagen",
    img: "images/unnamed (92).jpg",
  },

  // Pasta
  {
    id: 230,
    title: "مكرونة بلونيز باللحمة المفرومة",
    price: "15 ريال",
    category: "pasta",
    img: "images/unnamed (93).jpg",
  },
  {
    id: 231,
    title: "مكرونة بشاميل",
    price: "15 ريال",
    category: "pasta",
    img: "images/unnamed (94).jpg",
  },
  {
    id: 232,
    title: "مكرونة بالسجق",
    price: "15 ريال",
    category: "pasta",
    img: "images/unnamed (95).jpg",
  },
  {
    id: 233,
    title: "مكرونة الكبدة بالصلصة",
    price: "15 ريال",
    category: "pasta",
    img: "images/unnamed (96).jpg",
  },
  {
    id: 234,
    title: "مكرونة نجرسكو",
    price: "15 ريال",
    category: "pasta",
    img: "images/unnamed (97).jpg",
  },

  // Soup
  {
    id: 200,
    title: "شوربة دجاج بالكريمة",
    price: "12 ريال",
    category: "soup",
    img: "images/unnamed (81).jpg",
  },
  {
    id: 201,
    title: "شوربة لسان بالحمة المفروم",
    price: "10 ريال",
    category: "soup",
    img: "images/unnamed (82).jpg",
  },
  {
    id: 202,
    title: "شوربة عدس",
    price: "7 ريال",
    category: "soup",
    img: "images/unnamed (83).jpg",
  },
  {
    id: 203,
    title: "شوربة كوارع قطع",
    price: "12 ريال",
    category: "soup",
    img: "images/unnamed (84).jpg",
  },

  // Salad
  {
    id: 190,
    title: "علبة طحينه",
    price: "2 ريال",
    category: "salad",
    img: "images/unnamed (77).jpg",
  },
  {
    id: 191,
    title: "سلطة طماطم متبلة",
    price: "7 ريال",
    category: "salad",
    img: "images/unnamed (78).jpg",
  },
  {
    id: 192,
    title: "سلطة خضراء",
    price: "5 ريال",
    category: "salad",
    img: "images/unnamed (79).jpg",
  },
  {
    id: 193,
    title: "سلطة الطحينه كبير",
    price: "4 ريال",
    category: "salad",
    img: "images/unnamed (80).jpg",
  },

  // Dessert
  {
    id: 160,
    title: "رز بالحليب فرن بالقشطه",
    price: "7 ريال",
    category: "dessert",
    img: "images/unnamed (66).jpg",
  },
  {
    id: 161,
    title: "ام علي",
    price: "7 ريال",
    category: "dessert",
    img: "images/unnamed (68).jpg",
  },
  {
    id: 162,
    title: "ارز بالحليب",
    price: "5 ريال",
    category: "dessert",
    img: "images/unnamed (67).jpg",
  },

  // Drinks
  {
    id: 250,
    title: "سفن اب",
    price: "3 ريال",
    category: "drinks",
    img: "images/7up.jpg",
  },
  {
    id: 251,
    title: "ديو",
    price: "3 ريال",
    category: "drinks",
    img: "images/unnamed (100).jpg",
  },
  {
    id: 252,
    title: "حمضيات",
    price: "3 ريال",
    category: "drinks",
    img: "images/unnamed - 2026-02-01T190555.267.jpg",
  },
  {
    id: 253,
    title: "بيبسي",
    price: "3 ريال",
    category: "drinks",
    img: "images/pepsi.jpg",
  },
  {
    id: 254,
    title: "لبن المراعي 180 مل",
    price: "2 ريال",
    category: "drinks",
    img: "images/laban.jpg",
  },
  {
    id: 255,
    title: "كينزا كولا",
    price: "3 ريال",
    category: "drinks",
    img: "images/kinza.jpg",
  },
  {
    id: 256,
    title: "كينزا حمضيات",
    price: "3 ريال",
    category: "drinks",
    img: "images/kinza-lim.jpg",
  },
  {
    id: 257,
    title: "عصير الربيع 250 مل",
    price: "2 ريال",
    category: "drinks",
    img: "images/unnamed - 2026-02-01T190555.440.jpg",
  },
  {
    id: 258,
    title: "مياه",
    price: "1 ريال",
    category: "drinks",
    img: "images/water.jpg",
  },
];

// --- 2. Selectors ---
const menuContainer = document.getElementById("menuItems");
const categoryBtns = document.querySelectorAll(".category-btn");
const cartContainer = document.getElementById("cartItemsContainer");
const cartTotalElement = document.getElementById("cartTotal");
const cartBadge = document.getElementById("cartBadge");
const floatingBtn = document.getElementById("floatingCartBtn");
const searchInput = document.getElementById("searchInput");

let cart = [];
let tempProductId = null;

// --- 3. Initialization ---
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menuData);
});

// --- 4. Search Logic ---
if (searchInput) {
  searchInput.addEventListener("keyup", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredMenu = menuData.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      );
    });

    displayMenu(filteredMenu);
  });
}

// --- 5. Button & UI Helpers (Professional) ---

// Generate button markup (Add vs Counter) based on cart state
function getButtonMarkup(id) {
  const itemInCart = cart.find((p) => p.id === id);

  if (itemInCart) {
    return `
        <div class="d-flex align-items-center justify-content-between rounded-pill border border-danger shadow-sm bg-white" style="width: 100%;">
            <button class="btn btn-sm text-danger" onclick="decreaseItem(${id})"><i class="fas fa-minus"></i></button>
            <span class="fw-bold text-dark mx-2">${itemInCart.qty}</span>
            <button class="btn btn-sm text-success" onclick="addToCart(${id})"><i class="fas fa-plus"></i></button>
        </div>
        `;
  } else {
    return `
        <button class="btn-simple-add w-100" onclick="addToCart(${id})">
            <i class="fas fa-cart-plus ms-2"></i> أضف 
        </button>
        `;
  }
}

// Update specific card button without redrawing entire menu
function updateCardButton(id) {
  const btnContainer = document.getElementById(`btn-container-${id}`);
  if (btnContainer) {
    btnContainer.innerHTML = getButtonMarkup(id);
  }
}

// --- 6. Display & Filter Functions ---
function displayMenu(items) {
  if (!items || items.length === 0) {
    menuContainer.innerHTML = `<div class="text-center w-100 mt-5"><h5 class="text-muted">No items found</h5></div>`;
    return;
  }

  const html = items
    .map((item, index) => {
      const loadingStrategy = index < 4 ? "eager" : "lazy";

      // --- RAMADAN START:
      let descriptionHtml = "";
      if (item.category === "ramadan" && item.description) {
        descriptionHtml = `<p class="ramadan-description"><i class="fas fa-utensils me-1"></i> ${item.description}</p>`;
      }
      // --- RAMADAN END ---

      return `
      <div class="menu-card animate-fade-in">
          <div style="overflow: hidden; position: relative; background-color: #f0f0f0;">
              <img src="${item.img}" class="card-img-top" alt="${item.title}" 
                   loading="${loadingStrategy}" 
                   width="500" height="250"
                   style="object-fit: cover; aspect-ratio: 2/1;"
                   onerror="this.src='https://via.placeholder.com/400x250?text=No+Image'">
               
               ${
                 item.category === "ramadan"
                   ? '<span class="position-absolute top-0 start-0 bg-success text-white px-2 py-1 m-2 rounded small fw-bold"><i class="fas fa-moon"></i> رمضان</span>'
                   : ""
               }
          </div>
          <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              
              ${descriptionHtml}

              <div class="card-footer-actions d-flex justify-content-between align-items-center mt-auto">
                  <span class="card-price fw-bold">${item.price}</span>
                  <div id="btn-container-${item.id}" style="width: 120px;">
                      ${getButtonMarkup(item.id)}
                  </div>
              </div>
          </div>
      </div>
    `;
    })
    .join("");

  menuContainer.innerHTML = html;
}

// Category Filters
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // UI Update
    categoryBtns.forEach((b) => b.classList.remove("active"));
    e.currentTarget.classList.add("active");

    const category = e.currentTarget.dataset.id;

    // Filter Logic
    if (category === "all") {
      displayMenu(menuData);
    } else {
      const menuCategory = menuData.filter(
        (item) => item.category === category
      );
      displayMenu(menuCategory);
    }
  });
});

// --- 7. Cart Logic ---

function addToCart(id) {
  const itemInCart = cart.find((p) => p.id === id);
  if (itemInCart) {
    itemInCart.qty++;
    updateCartUI();
    if (menuData.find((p) => p.id === id)) {
      updateCardButton(id);
    }
    return;
  }

  if (id === 903) {
    tempProductId = id;
    const modalEl = document.getElementById("edamModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
    return;
  }

  const item = menuData.find((product) => product.id === id);
  if (item) {
    cart.push({ ...item, qty: 1 });
    updateCartUI();
    updateCardButton(id);
  }
}

function confirmEdamSelection() {
  const selectedOption = document.querySelector(
    'input[name="edamOption"]:checked'
  ).value;

  const originalItem = menuData.find((p) => p.id === tempProductId);

  if (originalItem) {
    const suffix = selectedOption === "ملوخية" ? 1 : 2;
    const newId = parseInt(`${tempProductId}${suffix}`);

    const existingItem = cart.find((p) => p.id === newId);

    if (existingItem) {
      existingItem.qty++;
    } else {
      cart.push({
        ...originalItem,
        id: newId,
        title: `${originalItem.title} (${selectedOption})`,
        qty: 1,
      });
    }
  }

  updateCartUI();

  const modalEl = document.getElementById("edamModal");
  const modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
}

function decreaseItem(id) {
  const itemInCart = cart.find((product) => product.id === id);
  if (!itemInCart) return;

  itemInCart.qty--;

  if (itemInCart.qty <= 0) {
    cart = cart.filter((product) => product.id !== id);
  }

  updateCartUI();
  updateCardButton(id);
}

function updateCartUI() {
  cartContainer.innerHTML = "";
  let totalPrice = 0;
  let totalItems = 0;

  // Check empty state
  if (cart.length === 0) {
    cartContainer.innerHTML = `
            <div class="text-center text-muted mt-5">
                <i class="fas fa-shopping-cart fa-3x mb-3"></i>
                <p>السلة فارغة حالياً</p>
            </div>`;
    cartBadge.innerText = "0";
    cartTotalElement.innerText = "0 ريال";

    const offcanvas = document.getElementById("cartOffcanvas");
    if (offcanvas && !offcanvas.classList.contains("show")) {
      floatingBtn.classList.add("d-none");
    }
    return;
  }

  floatingBtn.classList.remove("d-none");

  // Render Cart Items
  cart.forEach((item) => {
    const priceNumber = parseFloat(item.price.replace(/[^\d.]/g, ""));
    const itemTotal = priceNumber * item.qty;

    totalPrice += itemTotal;
    totalItems += item.qty;

    cartContainer.innerHTML += `
        <div class="d-flex align-items-center mb-3 border-bottom pb-3">
            <img src="${item.img}" class="rounded" style="width: 50px; height: 50px; object-fit: cover;">
            <div class="ms-3 flex-grow-1">
                <h6 class="mb-0 fw-bold small">${item.title}</h6>
                <small class="text-primary fw-bold">${itemTotal} ريال</small>
            </div>
            <div class="d-flex align-items-center bg-light rounded-pill px-2">
                <button class="btn btn-sm text-danger" onclick="changeQtyFromDrawer(${item.id}, 'minus')"><i class="fas fa-minus"></i></button>
                <span class="mx-2 fw-bold small">${item.qty}</span>
                <button class="btn btn-sm text-success" onclick="changeQtyFromDrawer(${item.id}, 'plus')"><i class="fas fa-plus"></i></button>
            </div>
        </div>`;
  });

  cartTotalElement.innerText = `${totalPrice} ريال`;
  cartBadge.innerText = totalItems;
}

// Logic for Drawer Buttons (syncs with Main Menu)
function changeQtyFromDrawer(id, action) {
  if (action === "plus") {
    addToCart(id);
  } else {
    decreaseItem(id);
  }
}

// --- 8. Checkout & Utils ---
function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("عفوا، سلتك فارغة");
    return;
  }

  const isDelivery = document.getElementById("deliveryOption").checked;
  const orderType = isDelivery ? "توصيل للمنزل" : "استلام من المطعم";

  let message = "طلب جديد\n\n";
  message += `نوع الطلب: ${orderType}\n\n`;
  message += "الطلبات:\n";

  cart.forEach((item) => {
    message += `${item.qty}x ${item.title}\n`;
  });

  const phoneNumber = "966503515243";
  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

// Offcanvas Event Listeners
const cartOffcanvas = document.getElementById("cartOffcanvas");

if (cartOffcanvas) {
  cartOffcanvas.addEventListener("show.bs.offcanvas", () =>
    floatingBtn.classList.add("d-none")
  );
  cartOffcanvas.addEventListener("hidden.bs.offcanvas", () => {
    if (cart.length > 0) floatingBtn.classList.remove("d-none");
  });
}
