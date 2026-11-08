import type { Property } from "@/types/property";

// Fictional examples only. Never label these as real, available owner assets.
export const demoProperties: Property[] = [
  {
    id: "demo-001", slug: "sample-bangkok-condo",
    title: { my: "ဘန်ကောက် နမူနာ ကွန်ဒို", th: "ตัวอย่างคอนโด กรุงเทพฯ", en: "Sample Bangkok Condo" },
    description: { my: "မြို့ပြနေထိုင်မှုအတွက် ဖန်တီးထားသော နမူနာကွန်ဒို ကြော်ငြာဖြစ်ပါသည်။", th: "ตัวอย่างประกาศคอนโดสำหรับสาธิตการแสดงข้อมูลเท่านั้น", en: "A fictional condominium entry used to demonstrate the catalogue." },
    location: { my: "ဘန်ကောက်", th: "กรุงเทพมหานคร", en: "Bangkok" },
    provinceCode: "10", type: "condo", listingMode: "sale", status: "available",
    priceTHB: 2500000, areaSqm: 35, bedrooms: 1, bathrooms: 1, images: [], isDemo: true,
  },
  {
    id: "demo-002", slug: "sample-samut-prakan-apartment",
    title: { my: "စမွတ်ပရာကန် နမူနာ တိုက်ခန်း", th: "ตัวอย่างอพาร์ตเมนต์ สมุทรปราการ", en: "Sample Samut Prakan Apartment" },
    description: { my: "ငှားရမ်းရန် စာမျက်နှာပုံစံကို ပြသသော နမူနာ တိုက်ခန်းဖြစ်ပါသည်။", th: "ตัวอย่างอพาร์ตเมนต์ให้เช่าสำหรับทดสอบการแสดงผล", en: "A fictional rental apartment entry used for interface testing." },
    location: { my: "စမွတ်ပရာကန်", th: "สมุทรปราการ", en: "Samut Prakan" },
    provinceCode: "11", type: "apartment", listingMode: "rent", status: "available",
    priceTHB: 8500, areaSqm: 28, bedrooms: 1, bathrooms: 1, images: [], isDemo: true,
  },
  {
    id: "demo-003", slug: "sample-pathum-thani-land",
    title: { my: "ပထုမ်ဌာနီ နမူနာ မြေကွက်", th: "ตัวอย่างที่ดิน ปทุมธานี", en: "Sample Pathum Thani Land" },
    description: { my: "မြေကွက်ကြော်ငြာ စာမျက်နှာပုံစံကို ပြသရန် ဖန်တီးထားသော နမူနာဖြစ်ပါသည်။", th: "ตัวอย่างประกาศขายที่ดินเพื่อทดสอบรูปแบบเว็บไซต์", en: "A fictional land listing demonstrating how land can be presented." },
    location: { my: "ပထုမ်ဌာနီ", th: "ปทุมธานี", en: "Pathum Thani" },
    provinceCode: "13", type: "land", listingMode: "sale", status: "available",
    priceTHB: 1750000, areaSqm: 160, images: [], isDemo: true,
  },
];
