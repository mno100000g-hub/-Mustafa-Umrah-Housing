
import { Hotel } from './types';

export const MOCK_HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'فندق برج الساعة الملكي',
    city: 'Mecca',
    rating: 5,
    distanceToHaram: 50,
    pricePerNight: 1200,
    image: 'https://picsum.photos/seed/makkah1/800/600',
    amenities: ['إفطار مجاني', 'واي فاي', 'إطلالة على الكعبة'],
    description: 'يقع الفندق في قلب مكة المكرمة، ويوفر إطلالات خلابة ومباشرة على المسجد الحرام.'
  },
  {
    id: '2',
    name: 'فندق دار التقوى',
    city: 'Medina',
    rating: 5,
    distanceToHaram: 20,
    pricePerNight: 900,
    image: 'https://picsum.photos/seed/madina1/800/600',
    amenities: ['قرب من الروضة', 'خدمة غرف 24 ساعة', 'مطعم فاخر'],
    description: 'يتميز بموقعه الاستراتيجي أمام بوابة النساء في المسجد النبوي الشريف.'
  },
  {
    id: '3',
    name: 'فندق أنوار المدينة موفنبيك',
    city: 'Medina',
    rating: 5,
    distanceToHaram: 100,
    pricePerNight: 750,
    image: 'https://picsum.photos/seed/madina2/800/600',
    amenities: ['تسوق قريب', 'مركز رجال أعمال'],
    description: 'أكبر فندق في المدينة المنورة ويقدم خدمات ضيافة عالمية المستوى.'
  },
  {
    id: '4',
    name: 'فندق جبل عمر كونراد',
    city: 'Mecca',
    rating: 5,
    distanceToHaram: 150,
    pricePerNight: 1050,
    image: 'https://picsum.photos/seed/makkah2/800/600',
    amenities: ['صالة للياقة البدنية', 'مواقف سيارات'],
    description: 'فخامة لا تضاهى في منطقة جبل عمر الحديثة.'
  },
  {
    id: '5',
    name: 'فندق إيلاف المشاعر',
    city: 'Mecca',
    rating: 4,
    distanceToHaram: 400,
    pricePerNight: 450,
    image: 'https://picsum.photos/seed/makkah3/800/600',
    amenities: ['سعر اقتصادي', 'تكييف مركزي'],
    description: 'خيار مثالي للعائلات التي تبحث عن الجودة بسعر مناسب.'
  }
];
