import type { Locale } from "@/i18n/config";

export const dictionaries = {
  en: {
    nav: { explore: "Explore", buy: "Buy", rent: "Rent", about: "Our story", contact: "Contact" },
    common: { viewAll: "Explore properties", viewDetails: "View details", getInTouch: "Contact owner", thailand: "Thailand", demo: "Sample only · Not a real listing", back: "Back to properties", bedrooms: "Beds", bathrooms: "Baths", area: "Area", perMonth: "/ month", sale: "For sale", rent: "For rent" },
    home: { eyebrow: "A PLACE TO BEGIN", title: "Find your place in Thailand.", description: "Explore properties for sale and rent, directly from a single property owner. Thoughtful spaces, clearly presented.", explore: "Browse properties", rent: "Explore rentals", sectionEyebrow: "THE COLLECTION", sectionTitle: "Spaces worth exploring", sectionDescription: "A preview of how your properties will be presented. All listings below are fictional examples.", promiseTitle: "A simpler way to find a place", promiseText: "Clear details. Easy discovery. A direct connection with the owner." },
    catalog: { eyebrow: "THE COLLECTION", title: "Explore properties", buyTitle: "Properties for sale", rentTitle: "Properties for rent", description: "Find an apartment, condominium, land, or home in Thailand.", search: "Search by property or location", allTypes: "All property types", allModes: "Buy & rent", results: "sample properties", empty: "No matching sample properties. Try different filters.", type: "Type", mode: "Listing type" },
    detail: { overview: "Property overview", features: "At a glance", notice: "This is a fictional demonstration listing. No property is available for sale or rent through this preview.", inquiry: "Contact details will be published after the owner confirms them." },
    about: { eyebrow: "ABOUT KESTA", title: "More personal than a marketplace.", text: "KESTA is being built as a dedicated website for one property owner in Thailand, making it easier for Myanmar customers to explore sale and rental opportunities directly.", note: "Owner profile and verified business information will appear here when provided." },
    contact: { eyebrow: "LET'S CONNECT", title: "The right place starts with a conversation.", text: "Direct owner contact information and supported messaging channels will be added after verification.", note: "Contact links are not active yet. No phone number or messaging account has been invented." },
    types: { condo: "Condominium", apartment: "Apartment", land: "Land", house: "House" },
    footer: { tagline: "Places in Thailand. A clearer way home.", disclaimer: "Preview website · Sample content only" },
  },
  th: {
    nav: { explore: "อสังหาริมทรัพย์", buy: "ซื้อ", rent: "เช่า", about: "เกี่ยวกับเรา", contact: "ติดต่อ" },
    common: { viewAll: "ดูอสังหาริมทรัพย์", viewDetails: "ดูรายละเอียด", getInTouch: "ติดต่อเจ้าของ", thailand: "ประเทศไทย", demo: "ตัวอย่างเท่านั้น · ไม่ใช่ประกาศจริง", back: "กลับไปรายการทรัพย์", bedrooms: "ห้องนอน", bathrooms: "ห้องน้ำ", area: "พื้นที่", perMonth: "/ เดือน", sale: "ขาย", rent: "ให้เช่า" },
    home: { eyebrow: "เริ่มต้นค้นหาที่ของคุณ", title: "ค้นหาพื้นที่ของคุณในประเทศไทย", description: "ดูอสังหาริมทรัพย์สำหรับซื้อหรือเช่าจากเจ้าของโดยตรง ข้อมูลชัดเจน ค้นหาได้ง่าย", explore: "ดูรายการทรัพย์", rent: "ดูทรัพย์ให้เช่า", sectionEyebrow: "รายการอสังหาริมทรัพย์", sectionTitle: "พื้นที่ที่น่าสนใจ", sectionDescription: "ตัวอย่างหน้าตาประกาศที่จะใช้จริง รายการต่อไปนี้เป็นข้อมูลสมมติทั้งหมด", promiseTitle: "ค้นหาทรัพย์ได้ง่ายกว่า", promiseText: "รายละเอียดชัดเจน ค้นหาสะดวก ติดต่อเจ้าของโดยตรง" },
    catalog: { eyebrow: "รายการอสังหาริมทรัพย์", title: "ค้นหาอสังหาริมทรัพย์", buyTitle: "ทรัพย์สำหรับขาย", rentTitle: "ทรัพย์สำหรับเช่า", description: "เลือกดูคอนโด อพาร์ตเมนต์ ที่ดิน และบ้านในประเทศไทย", search: "ค้นหาชื่อทรัพย์หรือทำเล", allTypes: "ทุกประเภท", allModes: "ซื้อและเช่า", results: "รายการตัวอย่าง", empty: "ไม่พบรายการตัวอย่างตามเงื่อนไข ลองเปลี่ยนตัวกรอง", type: "ประเภททรัพย์", mode: "ประเภทประกาศ" },
    detail: { overview: "รายละเอียดทรัพย์", features: "ข้อมูลเบื้องต้น", notice: "ประกาศนี้เป็นข้อมูลสมมติสำหรับสาธิต ยังไม่มีอสังหาริมทรัพย์ที่เปิดขายหรือเช่าผ่านหน้านี้", inquiry: "จะแสดงช่องทางติดต่อเมื่อเจ้าของยืนยันข้อมูลแล้ว" },
    about: { eyebrow: "เกี่ยวกับ KESTA", title: "เว็บไซต์ส่วนตัว ไม่ใช่ตลาดรวมประกาศ", text: "KESTA กำลังพัฒนาเป็นเว็บไซต์อสังหาริมทรัพย์ของเจ้าของรายเดียวในประเทศไทย เพื่อให้ลูกค้าชาวเมียนมาค้นหาทรัพย์ขายและเช่าได้โดยตรง", note: "จะเพิ่มข้อมูลเจ้าของและธุรกิจที่ตรวจสอบแล้วภายหลัง" },
    contact: { eyebrow: "ติดต่อเรา", title: "พื้นที่ที่ใช่ เริ่มต้นจากการพูดคุย", text: "ช่องทางติดต่อเจ้าของและแอปส่งข้อความจะเพิ่มหลังตรวจสอบข้อมูล", note: "ขณะนี้ยังไม่มีข้อมูลโทรศัพท์หรือบัญชีติดต่อที่ยืนยันแล้ว" },
    types: { condo: "คอนโด", apartment: "อพาร์ตเมนต์", land: "ที่ดิน", house: "บ้าน" },
    footer: { tagline: "อสังหาริมทรัพย์ในไทย ค้นหาง่ายขึ้น", disclaimer: "เว็บไซต์ตัวอย่าง · ข้อมูลสมมติ" },
  },
  my: {
    nav: { explore: "အိမ်ခြံမြေများ", buy: "ဝယ်ရန်", rent: "ငှားရန်", about: "ကျွန်ုပ်တို့အကြောင်း", contact: "ဆက်သွယ်ရန်" },
    common: { viewAll: "အိမ်ခြံမြေများကြည့်ရန်", viewDetails: "အသေးစိတ်ကြည့်ရန်", getInTouch: "ပိုင်ရှင်ကို ဆက်သွယ်ရန်", thailand: "ထိုင်းနိုင်ငံ", demo: "နမူနာသာ · အမှန်တကယ် ကြော်ငြာမဟုတ်ပါ", back: "အိမ်ခြံမြေများသို့ ပြန်ရန်", bedrooms: "အိပ်ခန်း", bathrooms: "ရေချိုးခန်း", area: "အကျယ်အဝန်း", perMonth: "/ လ", sale: "ရောင်းရန်", rent: "ငှားရန်" },
    home: { eyebrow: "သင့်နေရာကို ရှာဖွေပါ", title: "ထိုင်းနိုင်ငံမှာ သင့်အတွက် နေရာတစ်ခု ရှာဖွေပါ။", description: "ပိုင်ရှင်ထံမှ တိုက်ရိုက် ရောင်းရန်နှင့် ငှားရန် အိမ်ခြံမြေများကို လွယ်ကူစွာ ရှာဖွေကြည့်ရှုနိုင်ပါသည်။", explore: "အိမ်ခြံမြေများကြည့်ရန်", rent: "ငှားရန် ကြည့်ရန်", sectionEyebrow: "အိမ်ခြံမြေစုစည်းမှု", sectionTitle: "စိတ်ဝင်စားဖွယ် နေရာများ", sectionDescription: "အောက်ပါကြော်ငြာများသည် ဝက်ဘ်ဆိုက်ပုံစံကို ပြသရန် ဖန်တီးထားသည့် နမူနာများသာ ဖြစ်ပါသည်။", promiseTitle: "နေရာရှာဖွေရန် ပိုမိုလွယ်ကူစေခြင်း", promiseText: "ရှင်းလင်းသော အချက်အလက်များ၊ လွယ်ကူသော ရှာဖွေမှုနှင့် ပိုင်ရှင်ထံ တိုက်ရိုက်ဆက်သွယ်နိုင်မှု။" },
    catalog: { eyebrow: "အိမ်ခြံမြေများ", title: "အိမ်ခြံမြေများ ရှာဖွေရန်", buyTitle: "ရောင်းရန် အိမ်ခြံမြေများ", rentTitle: "ငှားရန် အိမ်ခြံမြေများ", description: "ထိုင်းနိုင်ငံရှိ ကွန်ဒို၊ တိုက်ခန်း၊ မြေကွက်နှင့် အိမ်များကို ရှာဖွေပါ။", search: "အမည် သို့မဟုတ် နေရာဖြင့် ရှာရန်", allTypes: "အမျိုးအစားအားလုံး", allModes: "ဝယ်ရန်နှင့် ငှားရန်", results: "နမူနာစာရင်း", empty: "ရှာဖွေမှုနှင့် ကိုက်ညီသော နမူနာမတွေ့ပါ။ စစ်ထုတ်မှုကို ပြောင်းကြည့်ပါ။", type: "အိမ်ခြံမြေအမျိုးအစား", mode: "ကြော်ငြာအမျိုးအစား" },
    detail: { overview: "အိမ်ခြံမြေ အကြောင်း", features: "အချက်အလက်များ", notice: "ဤကြော်ငြာသည် စမ်းသပ်ပြသရန် ဖန်တီးထားသော နမူနာဖြစ်ပြီး အမှန်တကယ် ရောင်းချခြင်း သို့မဟုတ် ငှားရမ်းခြင်း မရှိပါ။", inquiry: "ပိုင်ရှင်၏ ဆက်သွယ်ရန် အချက်အလက်များကို အတည်ပြုပြီးမှ ဖော်ပြပါမည်။" },
    about: { eyebrow: "KESTA အကြောင်း", title: "ပိုင်ရှင်နှင့် တိုက်ရိုက်ချိတ်ဆက်နိုင်မည့် နေရာ။", text: "KESTA သည် ထိုင်းနိုင်ငံရှိ အိမ်ခြံမြေပိုင်ရှင်တစ်ဦး၏ ရောင်းရန်နှင့် ငှားရန် အိမ်ခြံမြေများကို မြန်မာဖောက်သည်များ ရှာဖွေကြည့်ရှုနိုင်ရန် ဖန်တီးနေသော ဝက်ဘ်ဆိုက်ဖြစ်ပါသည်။", note: "အတည်ပြုထားသော ပိုင်ရှင်နှင့် လုပ်ငန်းအချက်အလက်များကို နောက်ပိုင်းတွင် ထည့်သွင်းပါမည်။" },
    contact: { eyebrow: "ဆက်သွယ်ရန်", title: "သင့်နေရာအသစ်ကို ရှာဖွေဖို့ စကားပြောကြရအောင်။", text: "အတည်ပြုထားသော ပိုင်ရှင်၏ ဆက်သွယ်ရန် နည်းလမ်းများကို နောက်ပိုင်းတွင် ထည့်သွင်းပါမည်။", note: "ဆက်သွယ်ရန် ဖုန်းနံပါတ် သို့မဟုတ် အကောင့်ကို အတည်မပြုရသေးပါ။" },
    types: { condo: "ကွန်ဒို", apartment: "တိုက်ခန်း", land: "မြေကွက်", house: "အိမ်" },
    footer: { tagline: "ထိုင်းနိုင်ငံရှိ သင့်နေရာကို ရှာဖွေပါ။", disclaimer: "စမ်းသပ်ဝက်ဘ်ဆိုက် · နမူနာအချက်အလက်များသာ" },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
