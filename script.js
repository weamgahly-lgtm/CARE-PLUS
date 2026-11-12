// بيانات المنتجات

const products = [

    // منتجات كريم التخسيس
    {
        id: 1,
        category: "slim",
        name: "كريم تنحيف الجسم",
        price: 290,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/1262x1374/public/uploads/products/grapexon-cream-100ml-fozs-01768126145.png",
        description: "كريم شد الجسم من جريبكسون للتخلص من علامات التمدد و السليلوليت وشد التلاهلات",
        ingredients: "مستخلص من الشاي الاخضر/ فيتامين سي/ جلسرين",
        usage: "يُستخدم وضع كمية مناسبة علي المنطقة مع توزيعها جيدا بحركات دائرية (يستخدم مرتين يوميا)"
    },
    {
        id: 2,
        category: "slim",
        name: "جريبكسون جل 100جم",
        price: 350,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/1262x1374/public/uploads/products/grapexon-gel-100gm-onux-01768128583.png",
        description: "ستعيدي نعومة بشرتك ومظهرها المشدود مع جل جريبكسون. تركيبة فعّالة صُممت خصيصًا لتقليل مظهر علامات التمدد، السيلوليت، والتجاعيد في الجسم، ليكون رفيقك المثالي خلال برامج التخسيس وجلسات نحت القوام",
        ingredients: "كولاجين/هيالورونيك أسيد/ خلاصة الشاي الاخضر/فيتامين سي/ جلسرين",
        usage: "يُستخدم مرتين يوميًا على المنطقة المراد علاجها مع التدليك بلطف حتى الامتصاص الكامل"
    },
    {
        id: 3,
        category: "slim",
        name: "جريبكسون ادفانس | 30 كبسولة ",
        price: 285,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/grapexon-advance-30-caps-yrau-01768124447.png",
        description: " جريبكسون أدفانس مكمل غذائي يساعد على التحكم في الشهية، وزيادة معدل حرق الدهون بالجسم "   ,
        ingredients: "مستخلص من القهوة الخضراء/مستخلص من الشاي الاخضر/الكافيين اللامائي/كيتون التوت الاحمر",
        usage: "كبسولة واحدة يوميا قبل الوجبة الرئيسية بنصف ساغة "
    },
    {
        id: 4,
        category: "slim",
        name: "مازورا | سليم ستيفيا | 50 كيس ",
        price: 120,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/mazora-slim-stevia-powder-50-sachs-aoz8-01793541618.png",
        description: "مازورا | سليم ستيفيا | 50 كيس",
       
    },
    {
        id: 5,
        category: "slim",
        name: "جريبكسون ثيرموجينيك | 30 كبسولة ",
        price: 250,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/grapexon-thermogenic-30-caps-yhn5-01768128009.png",
        description: "جرابيكسون ثيرموجينيك هو مكمل غذائي مُصمم علميًا لدعم إدارة الوزن الصحي من خلال تحسين استقلاب الدهون، والتحكم في الشهية، وزيادة استهلاك الطاقة",
        ingredients: "مسحوق خل التفاح /مسحوق جذر الكونجاك /مستخلص القهوة الخضراء",
        usage: " للبالغين فقط تناول اربع كبسولات يوميا"
    },
    {  
        id: 6,
        category: "slim",
        name: "دواء سلفستر وان للتخسيس sylvester 1 | ٢٠ كبسولة ",
        price: 150,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/sylvester-1-20cap-kecv-01724611562.png",
        description: "دواء سلفستر وان للتخسيس ( sylvester 1 cap ) من أشهر الادوية التى تُستخدم لانقاص الوزن ويحتوى على مجموعة من المكونات التى تساعد على تعزيز الحرق وتقليل الشهية ",
        ingredients: "خلاصة ثمار جارسينيا كامبوجيا (Garcinia Cambogia): تقلل الشهية تجاه الطعام وتزيد من الشعور بالشبع، كما أنها تقلل من تحول النشويات إلى دهون وتحسن من حرق النشويات والدهون. ",
        usage: "تؤخذ الكبسولات بالفم مع كمية كافية من الماء قبل الأكل بنصف ساعة ويمكن تناول كبسولتين قبل الوجبات الدسمة."
    },

 {  
        id: 7,
        category: "slim",
        name: "حبوب اورلي للتخسيس وانقاص الوزن orly cap | ٣٠ كبسولة ",
        price: 240,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/orly-for-slimming-30-tab-11671525738.png",
        description: " حبوب اورلي للتخسيس (Orly capsules) من أشهر المكملات الغذائية التى تساعد على التخسيس وفقدان الوزن تعمل على منع امتصاص الدهون الموجودة في الطعام",
        ingredients: " تحتوى حبوب اورلي على أورليستات (Orlistat) وهى مادة تعمل على منع امتصاص الدهون الموجودة في الطعام، مما يزيد من خروجها مع البراز ويمنع اختزانها داخل الجسم.     ",
        usage: "كبسولة واحدة فقط قبل الوجبات التي تحتوي على دهون."
    },


 {  
        id: 8,
        category: "slim",
        name: "أورلي 60مجم | 30 كبسولة ",
        price: 150,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/orly-60mg-30-caps-ldio-01725185510.png",
        description: "دواء سلفستر وان للتخسيس ( sylvester 1 cap ) من أشهر الادوية التى تُستخدم لانقاص الوزن ويحتوى على مجموعة من المكونات التى تساعد على تعزيز الحرق وتقليل الشهية ",
        ingredients: "خلاصة ثمار جارسينيا كامبوجيا (Garcinia Cambogia): تقلل الشهية تجاه الطعام وتزيد من الشعور بالشبع، كما أنها تقلل من تحول النشويات إلى دهون وتحسن من حرق النشويات والدهون. ",
        usage: "تؤخذ الكبسولات بالفم مع كمية كافية من الماء قبل الأكل بنصف ساعة ويمكن تناول كبسولتين قبل الوجبات الدسمة."
    },


    // منتجات كريم البشرة
    {
        id: 9,
        category: "skin",
        name: "نيفيا | لوشن للجسم موس بزبدة الشيا | 200مل ",
        price: 235,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-body-lotion-mousse-with-sheaf-butter-200ml-qksb-01730754932.png",
        description: "ماركة 	نيفيا",
        ingredients: "نيفيا | لوشن للجسم موس بزبدة الشيا | 200مل",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 10,
        category: "skin",
        name: "نيفيا | لوشن للجسم بزبدة كاكاو | 250مل ",
        price: 153,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-cocoa-butter-body-lotion-250ml-01680773759.png",
        description: "توفر زبدة الكاكاو وفيتامين إي رطوبة عميقة وطويلة الأمد وتنعم البهتان ، تاركة توهجًا صحيًا طبيعيًا./تغذي التركيبة غير اللزجة بشكل مكثف للحصول على بشرة ناعمة لا تقاوم.",
        ingredients: "ماركة 	نيفيا",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 11,
        category: "skin",
        name: "نيفيا | لوشن للجسم بتركيبة طبيعية لتفتيح لون البشرة وفيتامين سي | 250مل ",
        price: 210,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-body-lotion-even-tone-natural-fairness-complex-vitamin-c-250ml-i71e-01683048660.png",
        description: "نيفيا | لوشن للجسم بتركيبة طبيعية لتفتيح لون البشرة وفيتامين سي | 250مل",
        ingredients: "ماركة 	نيفيا",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
    {
        id: 12,
        category: "skin",
        name: "نيفيا | لوشن للترطيب والحماية من أشعة الشمس | 200مل ",
        price: 650,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-after-sun-moisturising-soothing-lotion-200-ml-01655372667.png",
        description: "تركيبة مخصصة لحماية البشرة المتعرضة لأشعة الشمس ومعالجتها وضمان اسمرار البشرة بشكل رائع ولفترة تدوم طويلا مزودة بالألوفيرا وزيت الأفوكادو لترطيب وعلاج البشرة بتركيبة كثيفة التركيبة تمتص سريعًا بفيتامين اي للحماية من الأشعة الضارة وتقليل علامات تقدم العمر.",
        ingredients: "نيفيا | لوشن للترطيب والحماية من أشعة الشمس | 200مل",
        usage: "يُستخدم حسب تعليمات العبوة."
    },
   

    // منتجات الشاور جل
    {
        id: 13,
        category: "shower",
        name: "نيفيا | فريش بيور جل الاستحمام بالمعادن البحرية والرائحة المائية | 250مل",
        price: 120,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-fresh-pure-shower-gel-sea-minerals-aquatic-scent-250ml-0pkj-01655381678.png",
        description: "نيفيا | فريش بيور جل الاستحمام بالمعادن البحرية والرائحة المائية | 250مل",
        ingredients: "غني بالمعادن البحرية والعطور المائية./تركيبة خالية من البلاستيك الدقيق وقابلة للتحلل بنسبة 98٪ ، عبوة بلاستيكية معاد تدويرها بنسبة 96٪ (باستثناء الغطاء)./توافق الجلد معتمد جلديا.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 14,
        category: "shower",
        name: "نيفيا | شاور جل كريم سوفت بزيت اللوز | 250مل ",
        price: 120,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-creme-soft-shower-gel-almond-oil-mild-scent-250ml-wlyn-01655378393.png",
        description: "نيفيا | شاور جل كريم سوفت بزيت اللوز | 250مل",
        ingredients: "يوفر لك جل الاستحمام Nivea Creme Soft دشًا منعشًا ويترك بشرتك ناعمة ومنتعشة ومغذية./جل الاستحمام من نيفيا كريم سوفت هو درجة حموضة متوازنة للبشرة وموافق عليها من قبل أطباء الجلدية ومناسب لجميع أنواع البشرة.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 15,
        category: "shower",
        name: "نيفيا | شاور جل فريش باور فروت برائحة التوت البري | 250مل ",
        price: 120,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-fresh-powerfruit-shower-gel-blueberry-scent-250ml-dwmh-01722158734.png",
        description: "نيفيا | شاور جل فريش باور فروت برائحة التوت البري | 250مل",
        ingredients: "تركيبة تنظيف للجسم.",
        usage: "يُستخدم أثناء الاستحمام."
    },
    {
        id: 16,
        category: "shower",
        name: "نيفيا | جل استحمام حريمي ألو فريش بالصبار | 250مل ",
        price: 130,
        image: "https://cdn.chefaa.com/filters:format(webp)/fit-in/718x718/public/uploads/products/nivea-fresh-aloe-shower-gel-natural-aloe-vera-fresh-scent-250ml-tmsh-01655382285.png",
        description: "نيفيا | جل استحمام حريمي ألو فريش بالصبار | 250مل",
        ingredients: "انتعاش فوري للبشرة./تركيبة قابلة للتحلل بنسبة 99%./نيڤيا، مئة عام من العناية بالبشرة تدوم مدى الحياة!",
        usage: "يُستخدم أثناء الاستحمام."
    },
   
    
   
];


// أسماء الأقسام

const categories = {
    slim: "منتجات تخسيس",
    skin: "منتجات للبشرة",
    shower: "الشاور جل"
};


// المتغيرات الأساسية

let current_category = "";
let current_product = null;
let current_quantity = 1;

let cart = JSON.parse(localStorage.getItem("my_cart")) || [];


// التنقل بين الصفحات
function show_page(page_id) {

    // إظهار الصفحة المطلوبة
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(page_id).classList.add("active");

    // تسجيل الصفحة في تاريخ المتصفح
    history.pushState(
        { page: page_id },
        "",
        "#" + page_id
    );

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// الصفحة الرئيسية

function show_home() {
    show_page("home_page");
}


// عرض منتجات القسم

function show_category(category) {

    current_category = category;

    document.getElementById("category_title").textContent =
        categories[category];

    document.getElementById("search_input").value = "";
    document.getElementById("sort_select").value = "default";

    render_products();

    show_page("category_page");
}


// إنشاء كارت المنتج

function create_product_card(product) {

    return `
        <div class="product_card">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.onerror=null;this.src='images/placeholder.svg';"
                onclick="show_details(${product.id})"
            >

            <div class="product_info">

                <h3>${product.name}</h3>

                <p>${product.price} جنيه</p>

                <div class="product_actions">

                    <button
                        class="main_btn"
                        onclick="add_to_cart(${product.id})"
                    >
                        إضافة للسلة
                    </button>

                    <button
                        class="back_btn"
                        onclick="show_details(${product.id})"
                    >
                        التفاصيل
                    </button>

                </div>

            </div>

        </div>
    `;
}


// عرض المنتجات

function render_products() {

    let list = products.filter(function(product) {
        return product.category === current_category;
    });

    const search = document
        .getElementById("search_input")
        .value
        .trim()
        .toLowerCase();

    list = list.filter(function(product) {
        return product.name.toLowerCase().includes(search);
    });

    const sort = document.getElementById("sort_select").value;

    if (sort === "low") {
        list.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
        list.sort((a, b) => b.price - a.price);
    }

    if (sort === "name") {
        list.sort((a, b) => a.name.localeCompare(b.name, "ar"));
    }

    const grid = document.getElementById("product_grid");

    if (list.length === 0) {
        grid.innerHTML = `<p class="empty_msg">مفيش منتجات مطابقة للبحث.</p>`;
        return;
    }

    grid.innerHTML = list.map(create_product_card).join("");
}


// البحث

function search_products() {
    render_products();
}


// ترتيب المنتجات

function sort_products() {
    render_products();
}


// عرض تفاصيل المنتج

function show_details(id) {

    current_product = products.find(function(product) {
        return product.id === id;
    });

    if (!current_product) return;

    current_quantity = 1;

    document.getElementById("product_details").innerHTML = `

        <img
            src="${current_product.image}"
            alt="${current_product.name}"
            onerror="this.onerror=null;this.src='images/placeholder.svg';"
        >

        <div class="details_info">

            <h2>${current_product.name}</h2>

            <div class="details_price">
                ${current_product.price} جنيه
            </div>

            <p><strong>الوصف:</strong> ${current_product.description}</p>

            <p><strong>المكونات:</strong> ${current_product.ingredients}</p>

            <p><strong>طريقة الاستخدام:</strong> ${current_product.usage}</p>

            <div class="qty_box">

                <button onclick="change_quantity(-1)">-</button>

                <span id="detail_qty">1</span>

                <button onclick="change_quantity(1)">+</button>

            </div>

            <button
                class="main_btn"
                onclick="add_to_cart(${current_product.id}, current_quantity)"
            >
                <i class="fa-solid fa-cart-shopping"></i>
                إضافة للسلة
            </button>

        </div>
    `;

    show_related();
    show_page("details_page");
}


// تغيير كمية المنتج في التفاصيل

function change_quantity(value) {

    current_quantity += value;

    if (current_quantity < 1) {
        current_quantity = 1;
    }

    document.getElementById("detail_qty").textContent =
        current_quantity;
}


// المنتجات المشابهة

function show_related() {

    const related = products.filter(function(product) {
        return product.category === current_product.category &&
               product.id !== current_product.id;
    }).slice(0, 4);

    document.getElementById("related_grid").innerHTML =
        related.map(create_product_card).join("");
}


// الرجوع لمنتجات القسم

function back_to_category() {
    show_category(current_product.category);
}


// حفظ السلة

function save_cart() {

    localStorage.setItem("my_cart", JSON.stringify(cart));

    update_cart_count();
}


// إضافة منتج للسلة

function add_to_cart(id, quantity = 1) {

    const product = products.find(function(item) {
        return item.id === id;
    });

    if (!product) return;

    const found = cart.find(function(item) {
        return item.id === id;
    });

    if (found) {
        found.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    save_cart();

    alert("تمت إضافة المنتج للسلة بنجاح ❤️");
}


// عدد المنتجات في السلة

function update_cart_count() {

    const count = cart.reduce(function(total, item) {
        return total + item.quantity;
    }, 0);

    document.getElementById("cart_count").textContent = count;
}


// فتح السلة

function show_cart() {

    render_cart();

    show_page("cart_page");
}


// عرض منتجات السلة

function render_cart() {

    const cart_items = document.getElementById("cart_items");
    const cart_total = document.getElementById("cart_total");

    if (cart.length === 0) {

        cart_items.innerHTML = `
            <div class="empty_msg">
                <i class="fa-solid fa-cart-shopping"></i>
                <h3>السلة فارغة</h3>
                <p>ابدئي التسوق وأضيفي منتجاتك المفضلة.</p>
            </div>
        `;

        cart_total.textContent = 0;

        return;
    }

    let total = 0;

    cart_items.innerHTML = cart.map(function(item) {

        total += item.price * item.quantity;

        return `

            <div class="cart_item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    onerror="this.onerror=null;this.src='images/placeholder.svg';"
                >

                <div class="cart_item_info">

                    <h3>${item.name}</h3>

                    <p>${item.price} جنيه</p>

                    <strong>
                        الإجمالي: ${item.price * item.quantity} جنيه
                    </strong>

                </div>

                <div class="cart_controls">

                    <button onclick="change_cart(${item.id}, 1)">+</button>

                    <span>${item.quantity}</span>

                    <button onclick="change_cart(${item.id}, -1)">-</button>

                    <button
                        class="delete_btn"
                        onclick="remove_from_cart(${item.id})"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>

                </div>

            </div>

        `;

    }).join("");

    cart_total.textContent = total;
}


// تعديل كمية منتج في السلة

function change_cart(id, value) {

    const item = cart.find(function(product) {
        return product.id === id;
    });

    if (!item) return;

    item.quantity += value;

    if (item.quantity <= 0) {
        cart = cart.filter(function(product) {
            return product.id !== id;
        });
    }

    save_cart();
    render_cart();
}


// حذف منتج من السلة

function remove_from_cart(id) {

    cart = cart.filter(function(item) {
        return item.id !== id;
    });

    save_cart();
    render_cart();
}


// إتمام الطلب - تجربة Front-End

function checkout() {

    if (cart.length === 0) {
        alert("السلة فارغة، أضيفي منتجات أولاً.");
        return;
    }

    alert("تم تسجيل طلبك تجريبياً بنجاح ❤️");

    cart = [];

    save_cart();
    render_cart();

    show_home();
}


// تشغيل الموقع

update_cart_count();

/*الخدمات  */

/* الخدمات والقائمة الجانبية */

const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const sideMenu = document.getElementById("side-menu");
const menuOverlay = document.getElementById("menu-overlay");

function openSideMenu() {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
}

function closeSideMenu() {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
}

menuBtn.addEventListener("click", openSideMenu);
closeMenu.addEventListener("click", closeSideMenu);
menuOverlay.addEventListener("click", closeSideMenu);


/* تسجيل الدخول */

let phone = "";
let demoCode = "123456";

const phoneInput = document.getElementById("phone");
const otpInput = document.getElementById("otp");

const loginLink = document.getElementById("login-link");
const profileLink = document.getElementById("profile-link");
const logoutBtn = document.getElementById("logout-btn");


/* التنقل من القائمة */

document.querySelectorAll(".side-link[data-page]").forEach(function(btn) {

    btn.addEventListener("click", function() {

        let page = btn.dataset.page;

        if (page === "profile_page" && !localStorage.getItem("user")) {
            page = "login_page";
        }

        const target = document.getElementById(page);

        if (!target) {
            alert("الصفحة المطلوبة غير موجودة في HTML");
            closeSideMenu();
            return;
        }

        show_page(page);
        closeSideMenu();

    });

});


/* تحديث القائمة والحساب */

function updateAccount() {

    let user = null;

    try {
        user = JSON.parse(localStorage.getItem("user"));
    } catch (error) {
        localStorage.removeItem("user");
    }

    if (user) {

        loginLink.hidden = true;
        profileLink.hidden = false;
        logoutBtn.hidden = false;

        document.querySelector(".menu-user h4").textContent =
            "أهلاً " + user.name;

        document.querySelector(".menu-user p").textContent =
            user.phone;

        document.getElementById("user-name").textContent =
            "الاسم: " + user.name;

        document.getElementById("user-phone").textContent =
            "الموبايل: " + user.phone;

        document.getElementById("user-email").textContent =
            "البريد: " + user.email;

    } else {

        loginLink.hidden = false;
        profileLink.hidden = true;
        logoutBtn.hidden = true;

        document.querySelector(".menu-user h4").textContent =
            "أهلاً بيكي";

        document.querySelector(".menu-user p").textContent =
            "سجلي الدخول للاستفادة من خدماتنا";

    }
}


/* إرسال رقم الموبايل */

document.getElementById("phone-btn").addEventListener("click", function() {

    const value = phoneInput.value.trim();
    const error = document.getElementById("phone-error");

    if (!/^01[0125][0-9]{8}$/.test(value)) {
        error.textContent = "اكتبي رقم موبايل مصري صحيح";
        return;
    }

    phone = value;
    error.textContent = "";

    show_page("otp_page");

});


/* تأكيد كود التحقق */

document.getElementById("otp-btn").addEventListener("click", function() {

    const code = otpInput.value.trim();
    const error = document.getElementById("otp-error");

    if (code !== demoCode) {
        error.textContent = "كود التحقق غير صحيح";
        return;
    }

    error.textContent = "";

    let oldUser = null;

    try {
        oldUser = JSON.parse(localStorage.getItem("user"));
    } catch (e) {
        oldUser = null;
    }

    if (oldUser && oldUser.phone === phone) {

        updateAccount();
        show_page("profile_page");

    } else {

        show_page("register_page");

    }

});


/* إعادة إرسال الكود */

document.getElementById("resend").addEventListener("click", function() {

    demoCode = "123456";

    alert("كود التحقق التجريبي هو 123456");

});


/* حفظ البيانات الشخصية */

document.getElementById("save-btn").addEventListener("click", function() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const error = document.getElementById("register-error");

    if (name.length < 3) {
        error.textContent = "اكتبي الاسم بالكامل";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error.textContent = "اكتبي بريد إلكتروني صحيح";
        return;
    }

    const user = {
        name: name,
        phone: phone,
        email: email
    };

    localStorage.setItem("user", JSON.stringify(user));

    updateAccount();
    show_page("profile_page");

});


/* تسجيل الخروج */

logoutBtn.addEventListener("click", function() {

    localStorage.removeItem("user");

    updateAccount();
    closeSideMenu();
    show_page("home_page");

});


/* تشغيل الحساب عند فتح الموقع */

updateAccount();

// ================= الروشتات الطبية =================

const prescriptionInput = document.getElementById("prescription_file");
const prescriptionCamera = document.getElementById("prescription_camera");
const prescriptionGallery = document.getElementById("prescription_gallery");
const prescriptionEmpty = document.getElementById("prescription_empty");
const prescriptionViewer = document.getElementById("prescription_viewer");
const prescriptionLarge = document.getElementById("prescription_large");
const prescriptionClose = document.getElementById("prescription_close");
const prescriptionNotes = document.getElementById("prescription_notes");
const prescriptionBtn = document.getElementById("prescription_btn");
const prescriptionError = document.getElementById("prescription_error");
const prescriptionSuccess = document.getElementById("prescription_success");

let prescriptionImages = [];

function addPrescriptionImages(files) {

    prescriptionError.textContent = "";
    prescriptionSuccess.textContent = "";

    Array.from(files).forEach(function(file) {

        if (!file.type.startsWith("image/")) {
            prescriptionError.textContent = "اختاري ملفات صور فقط.";
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        prescriptionImages.push({
            file: file,
            url: imageUrl
        });

    });

    renderPrescriptionImages();
}

function renderPrescriptionImages() {

    prescriptionGallery.innerHTML = "";

    prescriptionEmpty.style.display =
        prescriptionImages.length === 0 ? "block" : "none";

    prescriptionImages.forEach(function(image, index) {

        const item = document.createElement("div");
        item.className = "pres-item";

        const img = document.createElement("img");
        img.src = image.url;
        img.alt = "صورة الروشتة " + (index + 1);
        img.title = "اضغطي لعرض الصورة بحجم كبير";

        img.addEventListener("click", function() {
            openPrescriptionImage(image.url);
        });

        const name = document.createElement("p");
        name.textContent = image.file.name;

        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "pres-remove";
        removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        removeBtn.title = "حذف الصورة";

        removeBtn.addEventListener("click", function() {
            removePrescriptionImage(index);
        });

        item.appendChild(img);
        item.appendChild(name);
        item.appendChild(removeBtn);

        prescriptionGallery.appendChild(item);

    });
}

// اختيار الصور من الجهاز
if (prescriptionInput) {
    prescriptionInput.addEventListener("change", function() {
        addPrescriptionImages(this.files);
        this.value = "";
    });
}

// تصوير الروشتة بالكاميرا
if (prescriptionCamera) {
    prescriptionCamera.addEventListener("change", function() {
        addPrescriptionImages(this.files);
        this.value = "";
    });
}

// فتح الصورة بالحجم الكبير
function openPrescriptionImage(imageUrl) {

    prescriptionLarge.src = imageUrl;
    prescriptionViewer.classList.add("active");

}

// إغلاق الصورة
function closePrescriptionImage() {

    prescriptionViewer.classList.remove("active");
    prescriptionLarge.src = "";

}

if (prescriptionClose) {
    prescriptionClose.addEventListener("click", closePrescriptionImage);
}

if (prescriptionViewer) {
    prescriptionViewer.addEventListener("click", function(event) {

        if (event.target === prescriptionViewer) {
            closePrescriptionImage();
        }

    });
}

// إغلاق الصورة بزر Escape
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closePrescriptionImage();
    }

});

// حذف صورة
function removePrescriptionImage(index) {

    URL.revokeObjectURL(prescriptionImages[index].url);

    prescriptionImages.splice(index, 1);

    renderPrescriptionImages();

}

// زر إرسال الروشتة
if (prescriptionBtn) {

    prescriptionBtn.addEventListener("click", function() {

        prescriptionError.textContent = "";
        prescriptionSuccess.textContent = "";

        if (prescriptionImages.length === 0) {
            prescriptionError.textContent = "من فضلك اختاري صورة الروشتة أولاً.";
            return;
        }

        const notes = prescriptionNotes.value.trim();

        console.log("صور الروشتة:", prescriptionImages.map(function(item) {
            return item.file;
        }));

        console.log("ملاحظات العميل:", notes);

        prescriptionSuccess.textContent =
            "تم تجهيز الروشتة والملاحظات بنجاح في الواجهة التجريبية.";

    });

}
// التعامل مع زرار الرجوع والتقدم في المتصفح

window.addEventListener("popstate", function(event) {

    const page_id = event.state?.page || "home_page";

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    const target = document.getElementById(page_id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// كود سلايدر آراء العملاء
document.addEventListener("DOMContentLoaded", function() {
    const track = document.getElementById("testimonialsTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // لما ندوس على السهم الشمال (اللي بيرجع لورا)
    prevBtn.addEventListener("click", () => {
        // بنحرك السلايدر بمقدار عرض الكارت + المسافة بينهم
        track.scrollBy({ left: 350, behavior: 'smooth' });
    });

    // لما ندوس على السهم اليمين (اللي بيروح لقدام)
    nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: -350, behavior: 'smooth' });
    });
});
// Dark Mode

const darkBtn = document.getElementById("dark-btn");
const darkIcon = darkBtn.querySelector("i");

// تحميل الوضع المحفوظ
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    darkIcon.classList.replace("fa-moon", "fa-sun");
}

// تغيير الوضع
darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        darkIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
    }

});

// بداية كود الشات بوت المعزول
(() => {


// ======================================
// 1) تحديد عناصر الشات بوت
// ======================================

const chatbotPopup = document.querySelector(".chatbot-popup");
const chatBody = document.querySelector(".chat-body");
const chatForm = document.querySelector(".chat-form");
const messageInput = document.querySelector(".message-input");
const closeChatbot = document.getElementById("close-chatbot");

// إنشاء زر عائم لفتح الشات بعد إغلاقه
const openChatbot = document.createElement("button");
openChatbot.className = "chatbot-launcher";
openChatbot.type = "button";
openChatbot.innerHTML = '<span class="material-symbols-rounded">chat</span>';
openChatbot.setAttribute("aria-label", "افتح المساعد");

document.body.appendChild(openChatbot);

// ======================================
// 2) فتح وإغلاق الشات
// ======================================



// إخفاء زر فتح الشات في البداية
openChatbot.style.display = "none";

// إغلاق الشات
if (closeChatbot) {
    closeChatbot.addEventListener("click", () => {
        chatbotPopup.style.display = "none";
        openChatbot.style.display = "flex";
    });
}

// فتح الشات مرة أخرى
openChatbot.addEventListener("click", () => {
    chatbotPopup.style.display = "flex";
    openChatbot.style.display = "none";
    messageInput.focus();
});


// ======================================
// 3) قاعدة بيانات الأدوية
// ======================================


const medicines = [
    {
        keywords: ["بانادول", "panadol", "باراسيتامول", "paracetamol"],
        answer: "بانادول من الأدوية التي تحتوي على الباراسيتامول، ويُستخدم لتخفيف الألم وخفض الحرارة. توجد منه أنواع وتركيبات مختلفة، لذلك يجب التأكد من المادة الفعالة وتركيز العبوة وتجنب الجمع بين أكثر من منتج يحتوي على باراسيتامول."
    },
    {
        keywords: ["بانادول اكسترا", "بانادول إكسترا", "panadol extra"],
        answer: "بانادول إكسترا يحتوي عادةً على باراسيتامول وكافيين، ويُستخدم لتخفيف بعض أنواع الألم. قد لا يناسب بعض الأشخاص، ويجب مراجعة النشرة والصيدلي قبل استخدامه."
    },
    {
        keywords: ["بانادول ادفانس", "بانادول أدفانس", "panadol advance"],
        answer: "بانادول أدفانس يحتوي على باراسيتامول لتخفيف الألم وخفض الحرارة. راجع تركيز العبوة والنشرة، ولا تجمعه مع أدوية أخرى تحتوي على نفس المادة."
    },
    {
        keywords: ["بانادول كولد اند فلو", "بانادول كولد", "panadol cold and flu"],
        answer: "بانادول كولد آند فلو من مستحضرات أعراض البرد والإنفلونزا، وقد يحتوي على عدة مواد فعالة تختلف حسب التركيبة. يجب مراجعة المكونات والتحذيرات قبل استخدامه."
    },
    {
        keywords: ["بروفين", "brufen", "ايبوبروفين", "إيبوبروفين", "ibuprofen"],
        answer: "بروفين يحتوي على إيبوبروفين، وهو مسكن ومضاد للالتهاب وخافض للحرارة. قد لا يناسب مرضى قرحة المعدة أو الكلى وبعض مرضى القلب، ويجب استشارة مختص قبل استخدامه."
    },
    {
        keywords: ["اوجمنتين", "أوجمنتين", "augmentin"],
        answer: "أوجمنتين مضاد حيوي يحتوي على أموكسيسيلين وحمض كلافولانيك، ويُستخدم لعلاج بعض العدوى البكتيرية. لا يعالج الفيروسات، ولا يُستخدم إلا بوصفة أو توجيه طبي."
    },
    {
        keywords: ["كونجستال", "congestal"],
        answer: "كونجستال مستحضر لأعراض البرد والإنفلونزا، وتختلف تركيبته حسب المنتج. قد يسبب النعاس أو يتداخل مع أدوية أخرى، لذلك راجع النشرة والصيدلي."
    },
    {
        keywords: ["فولتارين", "voltaren", "ديكلوفيناك", "diclofenac"],
        answer: "فولتارين يحتوي على ديكلوفيناك، وهو مضاد للالتهاب ومسكن للألم. يتوفر بأشكال مختلفة مثل الجل والأقراص، ولكل شكل احتياطات خاصة."
    },
    {
        keywords: ["كلاريتين", "claritine", "claritin", "لوراتادين", "loratadine"],
        answer: "كلاريتين يحتوي على لوراتادين، وهو مضاد للحساسية يُستخدم لتخفيف العطس وسيلان الأنف والحكة. راجع النشرة للتأكد من ملاءمته."
    },
    {
        keywords: ["زيرتك", "zyrtec", "سيتريزين", "cetirizine"],
        answer: "زيرتك يحتوي على سيتريزين، وهو مضاد للحساسية. قد يسبب النعاس لدى بعض الأشخاص، لذلك يجب الانتباه عند القيادة أو تشغيل الآلات."
    },
    {
        keywords: ["اوتريفين", "أوتريفين", "otrivin"],
        answer: "أوتريفين مستحضر لتخفيف احتقان الأنف، ويتوفر بأشكال وتركيزات مختلفة. لا تستخدم بعض أنواعه لفترة أطول من المدة المحددة في النشرة لتجنب الاحتقان الارتدادي."
    },
    {
        keywords: ["كاتافلام", "cataflam", "ديكلوفيناك بوتاسيوم"],
        answer: "كاتافلام يحتوي على ديكلوفيناك بوتاسيوم، وهو مسكن ومضاد للالتهاب. قد لا يناسب مرضى المعدة أو الكلى أو القلب، ويجب مراجعة الصيدلي قبل استخدامه."
    },
    {
        keywords: ["نيكسيوم", "nexium", "ايزوميبرازول", "إيزوميبرازول", "esomeprazole"],
        answer: "نيكسيوم يحتوي على إيزوميبرازول، ويقلل إفراز حمض المعدة. يُستخدم في بعض حالات الحموضة وارتجاع المريء، ويحدد المختص مدى ملاءمته."
    },
    {
        keywords: ["بوسكوبان", "buscopan", "هيوسين", "hyoscine"],
        answer: "بوسكوبان يحتوي على هيوسين بيوتيل بروميد، ويُستخدم لتخفيف بعض التقلصات والمغص. قد لا يناسب بعض الحالات مثل الجلوكوما، ويجب مراجعة الصيدلي."
    },
    {
        keywords: ["سبازمو ديجستين", "spasmo digestin"],
        answer: "سبازمو ديجستين مستحضر يُستخدم لبعض أعراض اضطرابات الهضم والتقلصات. تختلف ملاءمته حسب الحالة والأدوية الأخرى، فاستشر الصيدلي."
    },
    {
        keywords: ["جافيسكون", "gaviscon"],
        answer: "جافيسكون يُستخدم لتخفيف أعراض الحموضة وارتجاع الحمض إلى المريء. تتوفر منه تركيبات مختلفة، ويجب مراجعة مكوناته وطريقة استخدامه."
    },
    {
        keywords: ["مالوكس", "maalox"],
        answer: "مالوكس من مضادات الحموضة، ويُستخدم لتخفيف أعراض زيادة حمض المعدة. قد لا يناسب بعض مرضى الكلى، لذلك يجب مراجعة النشرة."
    },
    {
        keywords: ["فلاجيل", "flagyl", "ميترونيدازول", "metronidazole"],
        answer: "فلاجيل يحتوي على ميترونيدازول، ويُستخدم لعلاج أنواع معينة من العدوى البكتيرية والطفيليات. لا يُستخدم دون وصفة، ويجب الالتزام بتعليمات الطبيب."
    },
    {
        keywords: ["سيبروفار", "سيبروفلوكساسين", "ciprofloxacin"],
        answer: "سيبروفلوكساسين مضاد حيوي من مجموعة الفلوروكينولون لعلاج عدوى بكتيرية محددة. له تحذيرات وتداخلات مهمة، ولا يُستخدم إلا بوصفة طبية."
    },
    {
        keywords: ["زيثروماكس", "zithromax", "ازيثرومايسين", "أزيثروميسين", "azithromycin"],
        answer: "زيثروماكس يحتوي على أزيثروميسين، وهو مضاد حيوي لبعض العدوى البكتيرية. لا يعالج نزلات البرد الفيروسية، ويُستخدم وفق وصفة طبية."
    },
    {
        keywords: ["كيورام", "curam"],
        answer: "كيورام من المضادات الحيوية التي تحتوي على أموكسيسيلين مع حمض كلافولانيك في بعض الأسواق. يجب التأكد من تركيبة العبوة وعدم استخدامه دون وصفة."
    },
    {
        keywords: ["أموكسيل", "اموكسيل", "amoxil", "أموكسيسيلين", "amoxicillin"],
        answer: "أموكسيل يحتوي على أموكسيسيلين، وهو مضاد حيوي لعلاج بعض العدوى البكتيرية. يجب استخدامه بوصفة طبية وإكمال الخطة العلاجية حسب تعليمات الطبيب."
    },
    {
        keywords: ["أوسبين", "اوسبين", "ospamox", "ospin"],
        answer: "تختلف أسماء وتركيبات المنتجات التجارية المتقاربة؛ تأكد من المادة الفعالة المكتوبة على العبوة قبل تحديد الاستخدام، واسأل الصيدلي."
    },
    {
        keywords: ["سيفترياكسون", "ceftriaxone", "روسيفين", "rocephin"],
        answer: "سيفترياكسون مضاد حيوي من مجموعة السيفالوسبورينات، ويُعطى عادةً عن طريق الحقن بواسطة مختص. لا يُستخدم دون تشخيص ووصفة طبية."
    },
    {
        keywords: ["كلافيموكس", "clavimox"],
        answer: "كلافيموكس من الأسماء التجارية التي قد تحتوي على أموكسيسيلين وحمض كلافولانيك. يجب التحقق من التركيز والتركيبة على العبوة واستعماله بوصفة."
    },
    {
        keywords: ["فيوسيدين", "fucidin", "فيوسيدك اسيد", "fusidic acid"],
        answer: "فيوسيدين مستحضر موضعي يحتوي على حمض الفيوسيديك، وهو مضاد حيوي لبعض الالتهابات البكتيرية الجلدية. لا يناسب كل أنواع الطفح أو الفطريات."
    },
    {
        keywords: ["ميبو", "mebo"],
        answer: "ميبو مرهم موضعي يُستخدم في العناية ببعض الحروق والجروح السطحية. لا يغني عن التقييم الطبي للحروق العميقة أو الواسعة أو المصحوبة بعدوى."
    },
    {
        keywords: ["بيتادين", "betadine", "بوفيدون", "povidone iodine"],
        answer: "بيتادين مطهر موضعي يحتوي على بوفيدون يود، ويُستخدم لتطهير الجلد في استعمالات محددة. يجب الحذر في حالات الحساسية لليود وبعض اضطرابات الغدة الدرقية."
    },
    {
        keywords: ["بانثينول", "panthenol"],
        answer: "بانثينول مستحضر موضعي يساعد على ترطيب الجلد والعناية به. تختلف المنتجات في التركيز والإضافات، ويُفضّل اختيار النوع المناسب لطبيعة البشرة."
    },
    {
        keywords: ["بيبانثين", "bepanthen"],
        answer: "بيبانثين اسم تجاري لمنتجات جلدية تحتوي بعض أنواعها على ديكسبانثينول. تُستخدم للعناية بالبشرة الجافة والمتهيجة، وتختلف الاستخدامات حسب النوع."
    },
    {
        keywords: ["كانستين", "canesten", "كلوتريمازول", "clotrimazole"],
        answer: "كانستين يحتوي على كلوتريمازول، وهو مضاد للفطريات يُستخدم لعلاج بعض الالتهابات الفطرية. توجد أشكال جلدية وأخرى مهبلية، ويجب اختيار الشكل المناسب باستشارة مختص."
    },
    {
        keywords: ["لاميزيل", "lamisil", "تيربينافين", "terbinafine"],
        answer: "لاميزيل يحتوي على تيربينافين، وهو مضاد للفطريات يُستخدم لبعض عدوى الجلد والأظافر حسب الشكل الدوائي. علاج فطريات الأظافر يحتاج تقييمًا طبيًا."
    },
    {
        keywords: ["دكتارين", "daktarin", "ميكونازول", "miconazole"],
        answer: "دكتارين يحتوي على ميكونازول، وهو مضاد للفطريات. تتوفر منه مستحضرات جلدية وفموية، ويختلف الاستخدام حسب الشكل والتركيز."
    },
    {
        keywords: ["أفيل", "افيل", "avil", "فينيرامين", "pheniramine"],
        answer: "أفيل من مضادات الحساسية التي قد تسبب النعاس. يجب مراجعة النشرة والحذر من القيادة أو الجمع مع المهدئات."
    },
    {
        keywords: ["تلفاست", "telfast", "فيكسوفينادين", "fexofenadine"],
        answer: "تلفاست يحتوي على فيكسوفينادين، وهو مضاد للحساسية يُستخدم لتخفيف أعراض الحساسية والشرى. راجع النشرة واسأل الصيدلي عن ملاءمته."
    },
    {
        keywords: ["إيريوس", "ايريوس", "aerius", "ديسلوراتادين", "desloratadine"],
        answer: "إيريوس يحتوي على ديسلوراتادين، وهو مضاد للحساسية يُستخدم لتخفيف أعراض الأنف التحسسية والشرى. يجب مراجعة النشرة قبل الاستخدام."
    },
    {
        keywords: ["سينجولير", "singulair", "مونتيلوكاست", "montelukast"],
        answer: "سينجولير يحتوي على مونتيلوكاست، ويُستخدم في حالات محددة للسيطرة على الربو وأعراض حساسية الأنف. ليس علاجًا لنوبة الربو الحادة، وله تحذيرات نفسية وسلوكية مهمة تستلزم مراجعة الطبيب."
    },
    {
        keywords: ["فنتولين", "ventolin", "سالبوتامول", "salbutamol"],
        answer: "فنتولين يحتوي على سالبوتامول، وهو موسع للشعب الهوائية يُستخدم لتخفيف التشنج الشعبي. تكرار الحاجة إليه أو صعوبة التنفس يستدعيان تقييمًا طبيًا عاجلًا."
    },
    {
        keywords: ["سيريتايد", "seretide"],
        answer: "سيريتايد بخاخ يحتوي على فلوتيكازون وسالميتيرول، ويُستخدم للسيطرة على بعض حالات الربو ومرض الانسداد الرئوي. ليس مخصصًا لإسعاف النوبة المفاجئة، ويحتاج وصفة ومتابعة."
    },
    {
        keywords: ["ألفينترن", "الفينترن", "alphintern"],
        answer: "ألفينترن مستحضر يحتوي على إنزيمات مضادة للتورم والالتهاب في بعض الحالات. لا يُستخدم كبديل لتشخيص سبب التورم أو الألم، واستشر الصيدلي بشأن ملاءمته."
    },
    {
        keywords: ["أمبيزيم", "امبيزيم", "ambezim"],
        answer: "أمبيزيم مستحضر إنزيمي يُستخدم في بعض الحالات المرتبطة بالتورم والالتهاب. يجب مراجعة النشرة والصيدلي، خاصةً مع الأدوية الأخرى."
    },
    {
        keywords: ["دافلون", "daflon", "ديوسمين", "diosmin"],
        answer: "دافلون يحتوي على مواد فلافونويدية مثل الديوسمين، ويُستخدم في بعض حالات أعراض القصور الوريدي والبواسير. لا يغني عن تقييم النزيف أو الألم الشديد."
    },
    {
        keywords: ["فاكتو", "faktu"],
        answer: "فاكتو مستحضر موضعي يُستخدم لبعض أعراض البواسير، وتختلف تركيبته حسب المنتج. استمرار النزيف أو وجود ألم شديد يستدعي مراجعة الطبيب."
    },
    {
        keywords: ["بروكتو جليفينول", "procto glyvenol"],
        answer: "بروكتو جليفينول مستحضر موضعي لبعض أعراض البواسير، ويحتوي على مكونات تختلف حسب الشكل الدوائي. يجب استشارة الطبيب عند النزيف أو استمرار الأعراض."
    },
    {
        keywords: ["حديد", "فيروجلوبين", "feroglobin"],
        answer: "فيروجلوبين مكمل يحتوي على الحديد وبعض الفيتامينات والمعادن. يُستخدم عند الحاجة إلى تعويض عناصر غذائية، لكن نقص الحديد يُفضّل تأكيده بالتحاليل وتحديد العلاج مع الطبيب."
    },
    {
        keywords: ["فيروترون", "ferrotron"],
        answer: "فيروترون مكمل غذائي يحتوي على الحديد ومكونات أخرى بحسب التركيبة. لا يُنصح بتناول مكملات الحديد دون التأكد من الحاجة إليها، واحفظها بعيدًا عن الأطفال."
    },
    {
        keywords: ["سنتروم", "centrum"],
        answer: "سنتروم مكمل متعدد الفيتامينات والمعادن، وتختلف تركيبته حسب الفئة والعمر والبلد. لا يُغني عن الغذاء المتوازن، ويجب تجنب الجمع العشوائي بين المكملات."
    },
    {
        keywords: ["سوبرافيت", "supravit"],
        answer: "سوبرافيت اسم لمكملات غذائية تختلف تركيبتها حسب النوع. تحقق من المكونات والجرعات المكتوبة على العبوة، واستشر مختصًا عند الحمل أو وجود أمراض مزمنة."
    },
    {
        keywords: ["فيتامين سي", "vitamin c", "ascorbic acid", "اسكوربيك"],
        answer: "فيتامين سي عنصر غذائي يساهم في تكوين الكولاجين ووظيفة الجهاز المناعي. يوجد في الطعام والمكملات، والجرعات العالية قد تسبب اضطرابات هضمية أو مشكلات لبعض الأشخاص."
    },
    {
        keywords: ["فيتامين د", "vitamin d", "cholecalciferol", "كوليكالسيفيرول"],
        answer: "فيتامين د يساعد الجسم على امتصاص الكالسيوم ودعم صحة العظام. يُفضّل تحديد الحاجة للمكمل وجرعته بناءً على التقييم الطبي والتحاليل عند الحاجة."
    },
    {
        keywords: ["اوميجا 3", "أوميجا 3", "omega 3", "fish oil"],
        answer: "أوميجا 3 أحماض دهنية توجد في الأسماك وبعض المكملات، وتساهم في وظائف الجسم. قد تتداخل المكملات مع أدوية سيولة الدم، لذا استشر الطبيب قبل استخدامها."
    }

    
];


// ======================================
// 4) قاعدة بيانات أسئلة الصيدلية
// ======================================

const pharmacyQuestions = [
    {
        keywords: ["اهلا", "أهلا", "مرحبا", "السلام عليكم", "هاي", "hello", "hi"],
        answer:
            "أهلًا بيك في صيدليتنا! 💚 أنا مساعدك الإلكتروني. أقدر أساعدك بمعلومات عامة عن الأدوية والمنتجات وخدمات الصيدلية. تحب تسأل عن إيه؟"
    },
    {
        keywords: ["اسمك", "انت مين", "انتي مين", "من انت"],
        answer:
            "أنا المساعد الإلكتروني للصيدلية 💚 موجود علشان أساعدك في الاستفسارات العامة عن الأدوية والمنتجات والخدمات."
    },
    {
        keywords: ["التوصيل", "الشحن", "الدليفري", "delivery"],
        answer:
            "بالنسبة للتوصيل، تقدر تعرف تفاصيل الخدمة ومدة وصول الطلب من خلال صفحة السلة أو التواصل مع خدمة عملاء الصيدلية."
    },
    {
        keywords: ["الدفع", "ادفع", "فيزا", "كاش", "طرق الدفع"],
        answer:
            "تقدر تراجع طرق الدفع المتاحة عند إتمام الطلب من صفحة السلة. هتظهر لك الاختيارات المتوفرة في الصيدلية."
    },
    {
        keywords: ["روشتة", "روشته", "وصفة", "وصفه", "الروشتة الطبية"],
        answer:
            "تقدر ترفع صورة الروشتة الطبية من قسم رفع الوصفة داخل التطبيق. احرص على أن تكون الصورة واضحة وتظهر فيها تفاصيل الوصفة."
    },
    {
        keywords: ["طلب", "اوردر", "أوردر", "الطلب", "اتابع الطلب"],
        answer:
            "لمتابعة طلبك، راجع صفحة حسابك أو تواصل مع خدمة عملاء الصيدلية باستخدام بيانات الطلب."
    },
    {
        keywords: ["الاسعار", "الأسعار", "السعر", "بكام", "الثمن"],
        answer:
            "تقدر تشوف أسعار المنتجات من الأقسام أو صفحة تفاصيل المنتج داخل التطبيق. الأسعار المعروضة هناك هي المرجع المتاح للعميل."
    },
    {
        keywords: ["منتجات", "المنتجات", "عندكم ايه", "بتبيعوا ايه"],
        answer:
            "تقدر تتصفح المنتجات من صفحة الأقسام، وتفتح أي منتج لمعرفة تفاصيله وسعره وإضافته إلى السلة."
    },
    {
        keywords: ["مواعيد", "ميعاد", "فاتحين", "مفتوحين"],
        answer:
            "خدمة 24 ساعة "
    },
    {
        keywords: ["شكرا", "شكرًا", "متشكر", "تسلم"],
        answer:
            "العفو! 💚 سعداء بمساعدتك، ولو عندك أي استفسار تاني أنا موجود."
    },
    /**/ 

    
    
];


/* ===== اقتراح أسماء الأدوية تلقائياً ===== */

const medicineInput = document.querySelector(".message-input");
const chatFooter = document.querySelector(".chat-footer");

// إنشاء صندوق الاقتراحات
const suggestionBox = document.createElement("div");
suggestionBox.className = "medicine-suggestions";
chatFooter.insertBefore(suggestionBox, chatFooter.querySelector(".chat-form"));

// توحيد شكل الحروف العربية والإنجليزية
function normalizeSuggestion(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[أإآ]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي");
}

// البحث وعرض الاقتراحات
medicineInput.addEventListener("input", function () {

    const searchText = normalizeSuggestion(this.value);

    suggestionBox.innerHTML = "";

    if (searchText.length === 0) {
        suggestionBox.style.display = "none";
        return;
    }

    const suggestions = [];

    medicines.forEach((medicine) => {

        medicine.keywords.forEach((keyword) => {

            const normalizedKeyword = normalizeSuggestion(keyword);

            if (
                normalizedKeyword.startsWith(searchText) &&
                !suggestions.some(item => item.medicine === medicine)
            ) {
                suggestions.push({
                    name: keyword,
                    medicine: medicine
                });
            }

        });

    });

    // عرض أول 7 اقتراحات
    suggestions.slice(0, 7).forEach((item) => {

        const suggestion = document.createElement("button");

        suggestion.type = "button";
        suggestion.className = "suggestion-item";
        suggestion.textContent = item.name;

        suggestion.addEventListener("click", () => {

            medicineInput.value = item.name;

            suggestionBox.style.display = "none";

            // إرسال الاسم باستخدام نموذج الشات الحالي
            medicineInput.closest("form").requestSubmit();

        });

        suggestionBox.appendChild(suggestion);

    });

    suggestionBox.style.display =
        suggestions.length > 0 ? "block" : "none";

});

// إخفاء الاقتراحات عند الضغط خارجها
document.addEventListener("click", function (event) {

    if (
        !suggestionBox.contains(event.target) &&
        event.target !== medicineInput
    ) {
        suggestionBox.style.display = "none";
    }

});

// ======================================
// 5) تجهيز السؤال للبحث
// ======================================

function normalizeText(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[أإآ]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .replace(/[ًٌٍَُِّْ]/g, "")
        .replace(/[؟?.,!،]/g, "");
}

// ======================================
// 6) البحث عن إجابة
// ======================================

function getBotResponse(userMessage) {
    const question = normalizeText(userMessage);

    // البحث في الأدوية
    const medicine = medicines.find(item =>
        item.keywords.some(keyword =>
            question.includes(normalizeText(keyword))
        )
    );

    if (medicine) {
        return medicine.answer;
    }

    // البحث في أسئلة الصيدلية
    const pharmacyQuestion = pharmacyQuestions.find(item =>
        item.keywords.some(keyword =>
            question.includes(normalizeText(keyword))
        )
    );

    if (pharmacyQuestion) {
        return pharmacyQuestion.answer;
    }

    // الرد في حالة عدم وجود إجابة
    return "معلش، مش لاقي إجابة دقيقة لسؤالك حاليًا. 💚 ممكن تسألني عن دواء معين أو عن المنتجات والتوصيل وطرق الدفع، أو تتواصل مع الصيدلي للمساعدة.";
}

// ======================================
// 7) إضافة الرسائل إلى شاشة المحادثة
// ======================================

function addMessage(text, sender) {
    const message = document.createElement("div");
    message.classList.add("message", `${sender}-message`);

    if (sender === "bot") {
        const avatar = document.querySelector(".bot-avatar");

        if (avatar) {
            const avatarCopy = avatar.cloneNode(true);
            message.appendChild(avatarCopy);
        }
    }

    const messageText = document.createElement("div");
    messageText.className = "message-text";

    // استخدام textContent لتجنب إدخال HTML غير آمن
    messageText.textContent = text;

    message.appendChild(messageText);
    chatBody.appendChild(message);

    // النزول لآخر رسالة
    chatBody.scrollTop = chatBody.scrollHeight;
}

// ======================================
// 8) استقبال الرسائل وإرسال الرد
// ======================================

chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userMessage = messageInput.value.trim();

    if (!userMessage) return;

    // عرض رسالة العميل
    addMessage(userMessage, "user");

    // تفريغ مربع الكتابة
    messageInput.value = "";

    // رد المساعد
    setTimeout(() => {
        const botReply = getBotResponse(userMessage);
        addMessage(botReply, "bot");
    }, 500);
});

// ======================================
// 9) إرسال الرسالة بزر Enter
// ======================================

messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        chatForm.requestSubmit();
    }
});

// ======================================
// 10) رسالة الترحيب
// ======================================

const welcomeMessage = document.querySelector(
    ".bot-message .message-text"
);

if (welcomeMessage) {
    welcomeMessage.textContent =
        "أهلًا بيك في صيدليتنا 💚\nأنا مساعدك الإلكتروني، أقدر أساعدك في الاستفسار عن الأدوية والمنتجات وخدمات الصيدلية. اسألني اللي تحب تعرفه!";
}




// بداية تشغيل الشات بوت
(() => {

    const chatbotPopup = document.querySelector(".chatbot-popup");
    const closeChatbot = document.getElementById("close-chatbot");

    if (!chatbotPopup) {
        console.error("لم يتم العثور على HTML الشات بوت");
        return;
    }

    // إنشاء زر فتح الشات
    const openChatbot = document.createElement("button");

    openChatbot.className = "chatbot-launcher";
    openChatbot.type = "button";
    openChatbot.innerHTML =
        '<span class="material-symbols-rounded">chat</span>';

    openChatbot.setAttribute("aria-label", "افتح المساعد");

    document.body.appendChild(openChatbot);

    // إخفاء نافذة المحادثة وإظهار زر الفتح
    chatbotPopup.style.display = "none";
    openChatbot.style.display = "flex";

    // فتح الشات
    openChatbot.addEventListener("click", () => {
        chatbotPopup.style.display = "flex";
        openChatbot.style.display = "none";
    });

    // إغلاق الشات
    if (closeChatbot) {
        closeChatbot.addEventListener("click", () => {
            chatbotPopup.style.display = "none";
            openChatbot.style.display = "flex";
        });
    }

})();

})();
