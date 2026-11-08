import type { Property } from "@/types/property";

/**
 * Real public listing facts for editorial market-reference browsing.
 * These properties DO NOT belong to KESTA; source pages remain the authority
 * for listing availability, current pricing and seller communication.
 *
 * Photography: Unsplash-licensed illustrative architecture/interior imagery
 * from separate locations, NOT photographs of these listed properties.
 * No photos are copied from the real-estate listing portals.
 */
export const demoProperties: Property[] = [
  {
    id: "ref-noble-33",
    slug: "noble-around-sukhumvit-33",
    title: { en: "Noble Around Sukhumvit 33 · 2 Bedrooms", th: "Noble Around Sukhumvit 33 · 2 ห้องนอน", my: "Noble Around Sukhumvit 33 · အိပ်ခန်း ၂ ခန်း" },
    description: {
      en: "Two-bedroom condominium listing in the Sukhumvit 33 area of Watthana, Bangkok. The published listing describes a 60.6 m² unit on floor 13 with two bathrooms. Figures are sourced from the external listing.",
      th: "ข้อมูลจากประกาศคอนโดมิเนียมย่านสุขุมวิท 33 เขตวัฒนา กรุงเทพฯ ขนาด 60.6 ตร.ม. ชั้น 13 มี 2 ห้องนอน 2 ห้องน้ำ ราคาเป็นข้อมูลที่ประกาศในเว็บไซต์ต้นทาง",
      my: "ဘန်ကောက် Watthana ရှိ Sukhumvit 33 အနီး ကွန်ဒိုအခန်းအကြောင်း ပြင်ပကြော်ငြာမှ အချက်အလက်ဖြစ်ပါသည်။ ဧရိယာ 60.6 m²၊ ၁၃ လွှာ၊ အိပ်ခန်း ၂ ခန်းနှင့် ရေချိုးခန်း ၂ ခန်း ပါဝင်သည်။",
    },
    location: { en:"Bangkok", th:"กรุงเทพมหานคร", my:"ဘန်ကောက်" },
    district: { en:"Watthana · Sukhumvit 33", th:"วัฒนา · สุขุมวิท 33", my:"Watthana · Sukhumvit 33" },
    provinceCode:"10",type:"condo",listingMode:"sale",status:"reference",
    priceTHB:12900000,areaSqm:60.6,bedrooms:2,bathrooms:2,floor:13,
    images:["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1280&q=78"],
    imageIsIllustrative:true,
    source:{ provider:"PropertyHub",url:"https://propertyhub.in.th/en/condo-for-sale/project-noble-around-sukhumvit-33",checkedAt:"2026-11-08" },
  },
  {
    id:"ref-link-sukhumvit",
    slug:"the-link-sukhumvit-50",
    title:{ en:"The Link Sukhumvit 50 · 1 Bedroom",th:"The Link Sukhumvit 50 · 1 ห้องนอน",my:"The Link Sukhumvit 50 · အိပ်ခန်း ၁ ခန်း" },
    description:{
      en:"A published rental listing at The Link Sukhumvit 50, Khlong Toei, Bangkok, for a 32 m² one-bedroom, one-bathroom unit on floor 2. Check the original source for current rental terms.",
      th:"ข้อมูลจากประกาศเช่าคอนโด The Link Sukhumvit 50 เขตคลองเตย กรุงเทพฯ ห้องขนาด 32 ตร.ม. ชั้น 2 มี 1 ห้องนอน 1 ห้องน้ำ ตรวจสอบเงื่อนไขเช่าปัจจุบันจากประกาศต้นทาง",
      my:"The Link Sukhumvit 50၊ ဘန်ကောက် Khlong Toei ရှိ ငှားရမ်းရန် ပြင်ပကြော်ငြာမှ အချက်အလက်ဖြစ်သည်။ 32 m²၊ ၂ လွှာ၊ အိပ်ခန်း ၁ ခန်း၊ ရေချိုးခန်း ၁ ခန်း ပါဝင်သည်။",
    },
    location:{ en:"Bangkok",th:"กรุงเทพมหานคร",my:"ဘန်ကောက်" },
    district:{ en:"Khlong Toei · Sukhumvit 50",th:"คลองเตย · สุขุมวิท 50",my:"Khlong Toei · Sukhumvit 50" },
    provinceCode:"10",type:"condo",listingMode:"rent",status:"reference",
    priceTHB:12000,areaSqm:32,bedrooms:1,bathrooms:1,floor:2,
    images:["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1280&q=78"],
    imageIsIllustrative:true,
    source:{provider:"PropertyHub",url:"https://propertyhub.in.th/en/listings/condo-for-rent-the-link-sukhumvit-50-near-bts-on-nut--b0340a39---5452509",checkedAt:"2026-11-08"},
  },
  {
    id:"ref-bangna-land",
    slug:"bangna-trad-soi-14-land",
    title:{en:"Bangna–Trad Soi 14 · Land",th:"ที่ดินบางนา-ตราด ซอย 14",my:"Bangna–Trad လမ်းသွယ် ၁၄ · မြေကွက်"},
    description:{
      en:"Published land listing on Bangna–Trad Soi 14 in Bangkok. The source states 112 square wah of land. The metric equivalent shown here is 448 m² (1 square wah = 4 m²). Verify the original listing for details.",
      th:"ข้อมูลจากประกาศขายที่ดินบางนา-ตราด ซอย 14 กรุงเทพมหานคร ขนาด 112 ตารางวา คิดเป็น 448 ตารางเมตร (1 ตารางวา = 4 ตารางเมตร) ตรวจสอบข้อมูลกับประกาศต้นทาง",
      my:"ဘန်ကောက် Bangna–Trad လမ်းသွယ် ၁၄ ရှိ မြေကွက်အကြောင်း ပြင်ပကြော်ငြာမှ အချက်အလက်ဖြစ်သည်။ ၁၁၂ စတုရန်းဝါ (448 m²) ရှိသည်။",
    },
    location:{en:"Bangkok",th:"กรุงเทพมหานคร",my:"ဘန်ကောက်"},
    district:{en:"Bang Na · Bangna–Trad Soi 14",th:"บางนา · บางนา-ตราด ซอย 14",my:"Bang Na · Bangna–Trad Soi 14"},
    provinceCode:"10",type:"land",listingMode:"sale",status:"reference",
    priceTHB:8900000,areaSqm:448,landAreaSquareWa:112,
    images:["https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1280&q=78"],
    imageIsIllustrative:true,
    source:{provider:"PropertyHub",url:"https://propertyhub.in.th/en/listings/s-lbnt101-line-p2nproperty---5839959",checkedAt:"2026-11-08"},
  },
  {
    id:"ref-aries-apartment",
    slug:"utd-aries-bangkok-studio",
    title:{en:"UTD Aries Residence · Studio",th:"UTD Aries Residence · ห้องสตูดิโอ",my:"UTD Aries Residence · စတူဒီယိုအခန်း"},
    description:{
      en:"External apartment rental entry at UTD Aries Hotel & Residence in Suan Luang, Bangkok. The published entry lists a 24 m² studio with one bathroom and a monthly rental price.",
      th:"ข้อมูลอ้างอิงห้องพักให้เช่าที่ UTD Aries Hotel & Residence เขตสวนหลวง กรุงเทพฯ ห้องสตูดิโอ 24 ตร.ม. มี 1 ห้องน้ำ ราคาเช่าต่อเดือนตามประกาศต้นทาง",
      my:"ဘန်ကောက် Suan Luang ရှိ UTD Aries Hotel & Residence စတူဒီယိုအခန်း ငှားရမ်းရန် ပြင်ပကြော်ငြာမှ အချက်အလက်ဖြစ်သည်။ 24 m² နှင့် ရေချိုးခန်း ၁ ခန်း ပါဝင်သည်။",
    },
    location:{en:"Bangkok",th:"กรุงเทพมหานคร",my:"ဘန်ကောက်"},
    district:{en:"Suan Luang",th:"สวนหลวง",my:"Suan Luang"},
    provinceCode:"10",type:"apartment",listingMode:"rent",status:"reference",
    priceTHB:7000,areaSqm:24,bathrooms:1,
    images:["https://images.unsplash.com/photo-1534655610770-dd69616f05ff?auto=format&fit=crop&w=1280&q=78"],
    imageIsIllustrative:true,
    source:{provider:"Thailand Property",url:"https://www.thailand-property.com/apartments-for-rent/bangkok?sort=min_price",checkedAt:"2026-11-08"},
  },
];
