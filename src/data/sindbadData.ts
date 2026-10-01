import { Branch, ProductItem, ReviewItem, CatalogPage } from '../types';

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'mabela',
    nameAr: 'فرع المعبيلة — مسقط',
    nameEn: 'Al Ma\'abela Branch — Muscat',
    regionAr: 'محافظة مسقط',
    regionEn: 'Muscat Governorate',
    addressAr: 'شارع السلام، المعبيلة الجنوبية، بجوار المها بلازا',
    addressEn: 'Al Salam Street, South Al Ma\'abela, near Al Maha Plaza',
    phone: '+968 71155500',
    phoneSecondary: '+968 71155577',
    timingAr: 'السبت - الخميس: 9:00 ص - 1:00 م | 4:30 م - 9:30 م',
    timingEn: 'Sat - Thu: 9:00 AM - 1:00 PM | 4:30 PM - 9:30 PM',
    coordinates: { x: 74, y: 31 },
    googleMapsUrl: 'https://maps.google.com/?q=Al+Maabela+Muscat+Sindbad'
  },
  {
    id: 'adhiba',
    nameAr: 'فرع العذيبة — مسقط',
    nameEn: 'Al Adhiba Branch — Muscat',
    regionAr: 'محافظة مسقط',
    regionEn: 'Muscat Governorate',
    addressAr: 'شارع 18 نوفمبر، العذيبة الشمالية، مسقط',
    addressEn: '18th November Street, North Al Adhiba, Muscat',
    phone: '+968 71155511',
    timingAr: 'السبت - الخميس: 9:00 ص - 1:00 م | 4:30 م - 9:30 م',
    timingEn: 'Sat - Thu: 9:00 AM - 1:00 PM | 4:30 PM - 9:30 PM',
    coordinates: { x: 77, y: 33 },
    googleMapsUrl: 'https://maps.google.com/?q=Al+Azaiba+Muscat+Sindbad'
  },
  {
    id: 'ibri',
    nameAr: 'فرع عبري — الظاهرة',
    nameEn: 'Ibri Branch — Al Dhahirah',
    regionAr: 'محافظة الظاهرة',
    regionEn: 'Al Dhahirah Governorate',
    addressAr: 'الشارع العام، بجوار المجمع التجاري، عبري',
    addressEn: 'Main Commercial Street, Ibri',
    phone: '+968 71155522',
    timingAr: 'السبت - الخميس: 9:00 ص - 1:00 م | 4:30 م - 9:30 م',
    timingEn: 'Sat - Thu: 9:00 AM - 1:00 PM | 4:30 PM - 9:30 PM',
    coordinates: { x: 57, y: 38 },
    googleMapsUrl: 'https://maps.google.com/?q=Ibri+Sindbad'
  },
  {
    id: 'salalah',
    nameAr: 'فرع صلالة — ظفار',
    nameEn: 'Salalah Branch — Dhofar',
    regionAr: 'محافظة ظفار',
    regionEn: 'Dhofar Governorate',
    addressAr: 'شارع السلام، منطقة السعادة، صلالة',
    addressEn: 'Al Salam Street, Al Saada Area, Salalah',
    phone: '+968 71155533',
    timingAr: 'السبت - الخميس: 9:00 ص - 1:00 م | 4:30 م - 9:30 م',
    timingEn: 'Sat - Thu: 9:00 AM - 1:00 PM | 4:30 PM - 9:30 PM',
    coordinates: { x: 30, y: 84 },
    googleMapsUrl: 'https://maps.google.com/?q=Salalah+Sindbad'
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'kitchen-verona',
    category: 'kitchens',
    titleAr: 'مطبخ فيرونا الإيطالي الفاخر',
    titleEn: 'Verona Italian Luxury Kitchen',
    collectionAr: 'تشكيلة أوبين الأوروبية 2026',
    collectionEn: 'OPPEIN European 2026 Collection',
    descriptionAr: 'تصميم إيطالي انسيابي بدون مقابض مع رخام كوارتز طبيعي، أنظمة إضاءة ذكية مخفية، ومقاومة استثنائية للرطوبة والحرارة وفق معايير الخليج.',
    descriptionEn: 'Seamless handleless Italian architecture featuring Calacatta Quartz island, concealed ambient illumination, and certified moisture-resistant core panels.',
    finishes: ['رخام كوارتز كالاكاتا', 'خشب الجوز الطبيعي', 'طلاء سوفت تاتش نانو إيطالي'],
    featuresAr: ['مفصلات بلوم النمساوية الأصلية', 'مقاوم للرطوبة 100%', 'جزيرة طهي رحبة مع شريط إفطار'],
    featuresEn: ['Original Austrian Blum hardware', '100% Moisture resistant Gulf grade', 'Integrated breakfast bar & smart storage'],
    style: 'Modern Minimalist',
    warranty: '10 Years',
    image: '/images/kitchen-verona.jpg'
  },
  {
    id: 'kitchen-milano',
    category: 'kitchens',
    titleAr: 'مطبخ ميلانو النيوكلاسيكي',
    titleEn: 'Milano Neo-Classic Kitchen',
    collectionAr: 'تشكيلة النخبة المعاصرة',
    collectionEn: 'Contemporary Elite Line',
    descriptionAr: 'دمج ساحر بين الفخامة الكلاسيكية والوظائف المعاصرة مع واجهات إطارية خشبية وإكسسوارات نحاسية مطفية وحلول تخزين ذكية مدمجة.',
    descriptionEn: 'Harmonious fusion of classic shaker warmth and cutting-edge ergonomics with matte bronze fixtures and concealed pull-out pantries.',
    finishes: ['خشب بلوط ماسيف مطلي', 'أسطح بورسلين إسباني', 'نحاس إيطالي معتق'],
    featuresAr: ['دواليب طويلة بتخزين ذكي', 'إضاءة داخلية مع مستشعرات حركة', 'شفاط مخفي عالي القوة'],
    featuresEn: ['Full-height walk-in pantry units', 'Motion-sensor internal LED lighting', 'Heavy-duty integrated suction system'],
    style: 'Transitional Neo-Classic',
    warranty: '10 Years',
    image: '/images/kitchen-milano.jpg'
  },
  {
    id: 'wardrobe-roma',
    category: 'wardrobes',
    titleAr: 'غرفة ملابس روما البانورامية (Walk-in)',
    titleEn: 'Roma Panoramic Walk-in Wardrobe',
    collectionAr: 'حلول الخزائن الفندقية الراقية',
    collectionEn: 'Luxury Hotel Boutique Series',
    descriptionAr: 'غرفة ملابس مفتوحة بأبواب زجاجية ملوثة مع إطارات ألمنيوم فائقة النحافة، وإضاءة طولية دافئة، وأدراج مقسمة مخصصة للساعات والمجوهرات.',
    descriptionEn: 'Architectural walk-in closet with smoked tempered glass doors, ultra-slim aluminum framing, recessed linear vertical LED, and velvet watch displays.',
    finishes: ['زجاج رمادي مدخن مصلد', 'ألمنيوم تيتانيوم مطفي', 'بطانة مخمل إيطالي فاخر'],
    featuresAr: ['نظام سحب وإغلاق هادئ ناعم', 'أرفف أحذية بزاوية مضاءة', 'مرآة كاملة ذكية مدمجة'],
    featuresEn: ['Silent soft-close gliding mechanism', 'Angled shoe display with LED strip', 'Integrated smart dressing vanity mirror'],
    style: 'Luxury Architectural',
    warranty: '10 Years',
    image: '/images/wardrobe-roma.jpg'
  },
  {
    id: 'wardrobe-florence',
    category: 'wardrobes',
    titleAr: 'خزائن فلورنسا الجدارية المدمجة',
    titleEn: 'Florence Built-in Wall Wardrobe',
    collectionAr: 'نظام الاستغلال الأمثل للمساحات',
    collectionEn: 'Space Optimization Masterclass',
    descriptionAr: 'خزائن ممتدة من الأرض إلى السقف بتصميم هندسي مخصص يعطي الغرفة اتساعاً بصرياً ويوفر سعة تخزين هائلة للأزياء العمانية التقليدية والحديثة.',
    descriptionEn: 'Floor-to-ceiling built-in architectural wardrobes tailored specifically for traditional Omani dishdasha/abayas and contemporary fashion.',
    finishes: ['قشور خشب طبيعي معتمدة', 'ورنيش غير لامع مقاوم للبصمات', 'مقابض طولية مدمجة'],
    featuresAr: ['علاقات هيدروليكية علوية سهلة السحب', 'أدراج أقفال رقمية للأمانات', 'تهوية داخلية مدمجة'],
    featuresEn: ['Hydraulic pull-down hanging rails', 'Digital biometric security drawer', 'Micro-perforated interior air circulation'],
    style: 'Modern Architectural',
    warranty: '10 Years',
    image: '/images/wardrobe-florence.jpg'
  },
  {
    id: 'windows-alps',
    category: 'windows',
    titleAr: 'نوافذ ألمنيوم ثيرمال بريك العازلة',
    titleEn: 'Thermal-Break Acoustic Window Systems',
    collectionAr: 'أنظمة النوافذ والواجهات الزجاجية',
    collectionEn: 'High-Performance Glazing Systems',
    descriptionAr: 'نوافذ وأبواب جرارة بمقاطع ألمنيوم عازلة حرارياً وزجاج مزدوج منخفض الانبعاث يوفر عزلاً تاماً لحرارة الصيف وعواصف الغبار والضوضاء الخارجية.',
    descriptionEn: 'Architectural slimline sliding doors and windows with thermal barrier and acoustic double-glazing, engineered for Gulf climate insulation.',
    finishes: ['ألمنيوم كورتن مقاوم للملوحة', 'زجاج عاكس مخصص للخليج', 'إكسسوارات أوروبية أصلية'],
    featuresAr: ['عزل صوتي يصل إلى 42 ديسبل', 'توفير فواتير التكييف بنسبة 35%', 'مقاومة تامة للغبار والرطوبة'],
    featuresEn: ['Sound insulation up to 42dB', 'Reduces AC cooling loss by 35%', 'Hermetic triple-seal dust barrier'],
    style: 'Contemporary Minimalist',
    warranty: '10 Years',
    image: '/images/modern-windows.jpg'
  },
  {
    id: 'living-venice',
    category: 'living',
    titleAr: 'وحدات الصالات والمجالس المتكاملة',
    titleEn: 'Venice Integrated Living & TV Suites',
    collectionAr: 'أثاث وديكورات الجدران الراقية',
    collectionEn: 'Bespoke Wall Architecture Series',
    descriptionAr: 'جدران تلفزيون مكسوة بالبدائل الرخامية والخشب المخطط، مدمجة مع خزائن عائمة ومدفأة بخار ديكورية وإضاءة محيطية ساحرة تناسب المجالس العمانية.',
    descriptionEn: 'Statement TV entertainment walls with continuous bookmatched stone, fluted wood paneling, floating credenzas, and ambient cove lighting.',
    finishes: ['ألواح رخام معرق مستورد', 'خشب جوز طبيعي مجزع', 'دهانات بيئية خالية من المركبات'],
    featuresAr: ['إخفاء تام للأسلاك والأجهزة', 'أرفف عرض عائمة مدعمة', 'تناسق كامل مع ألوان المطبخ'],
    featuresEn: ['Concealed acoustic cable routing', 'Reinforced floating display shelving', 'Architectural harmony with home layout'],
    style: 'Modern Luxury',
    warranty: '10 Years',
    image: '/images/living-venice.jpg'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    authorAr: 'أحمد الشعيلي',
    authorEn: 'Ahmed Al Shuailli',
    branchAr: 'فرع العذيبة',
    branchEn: 'Al Adhiba Branch',
    rating: 5,
    timeAr: 'قبل 10 أشهر',
    timeEn: '10 months ago',
    contentAr: 'تجربتي كانت جميلة جداً مع شركة السندباد. إبداع في التصميم وجودة التنفيذ وإتقان في التركيب، وسرعة الاستجابة للصيانة والاهتمام برضى العميل. أنصح بشدة بالتعامل معهم.',
    contentEn: 'My experience with Sindbad was exceptional. Creative design, precision fabrication, flawless installation, and rapid responsive customer service. Highly recommended.',
    verified: true,
    avatarColor: '#EA580C'
  },
  {
    id: 'rev-2',
    authorAr: 'وليد العبري',
    authorEn: 'Waleed Alabri',
    branchAr: 'فرع المعبيلة',
    branchEn: 'Al Ma\'abela Branch',
    rating: 5,
    timeAr: 'قبل 10 أشهر',
    timeEn: '10 months ago',
    contentAr: 'أتقدم بخالص الشكر والتقدير للمهندس أحمد فراج - فرع المعبيلة - والمهندس عماد، على حسن تعاملهم واحترافيتهم العالية في التصميم وطول بالهم في تلبية متطلبات العمل وإرسائه بأعلى مستوى.',
    contentEn: 'Sincere thanks and appreciation to Eng. Ahmed Farraj at Al Ma\'abela and Eng. Imad for their superb professionalism in design and patience in realizing every architectural detail.',
    verified: true,
    avatarColor: '#009AA6'
  },
  {
    id: 'rev-3',
    authorAr: 'أبو عبد الرحمن الفهدي',
    authorEn: 'Abu Abdul Rahman Al Fahdi',
    branchAr: 'فرع المعبيلة',
    branchEn: 'Al Ma\'abela Branch',
    rating: 5,
    timeAr: 'قبل 10 أشهر',
    timeEn: '10 months ago',
    contentAr: 'العمل متقن جداً وفريق العمل بداية من المصمم وانتهاء بعمال التركيب رائعون جداً ومستوى عالٍ من الاحترافية في التصميم والتنفيذ. لقد سررت كثيراً بهذه التجربة وأنصح به كل من هو مقبل على تأثيث بيته.',
    contentEn: 'The craftsmanship is truly meticulous. From the initial 3D designer to the installation crew, the dedication was remarkable. I advise anyone building their home to choose them.',
    verified: true,
    avatarColor: '#07333B'
  },
  {
    id: 'rev-4',
    authorAr: 'مصطفى علاء',
    authorEn: 'Mustafa Alaa',
    branchAr: 'فرع عبري',
    branchEn: 'Ibri Branch',
    rating: 5,
    timeAr: 'قبل 10 أشهر',
    timeEn: '10 months ago',
    contentAr: 'تجربة ممتازة جداً وعمل جبار ومجهود تشكرون عليه، والشغل على منتهى الروعة والدقة في التفاصيل ماشاء الله. والتعامل راقي من البداية وحتى مرحلة التسليم.',
    contentEn: 'An outstanding experience and magnificent effort. The finished kitchen is stunning in its details. The respect and communication throughout installation was premier.',
    verified: true,
    avatarColor: '#028090'
  }
];

export const CATALOG_PAGES: CatalogPage[] = [
  {
    pageNumber: 1,
    titleAr: 'الغلاف: أوبين السندباد 2026',
    titleEn: 'Cover: OPPEIN Sindbad 2026 Collection',
    category: 'Overview',
    highlightAr: 'ابنِ منزل أحلامك مع أحدث حلول المطابخ الإيطالية',
    highlightEn: 'Build Your Dream Home with Next-Gen Italian Kitchens'
  },
  {
    pageNumber: 2,
    titleAr: 'سلسلة المطابخ المودرن بدون مقابض',
    titleEn: 'Handleless Modern Kitchen Series',
    category: 'Kitchens',
    highlightAr: 'رخام الكوارتز المعالج وتقنيات الفتح باللمس المتطورة',
    highlightEn: 'Engineered Quartz Countertops & Touch-to-Open Cabinetry'
  },
  {
    pageNumber: 3,
    titleAr: 'خزائن الملابس الزجاجية الفاخرة',
    titleEn: 'Architectural Glass Walk-in Closets',
    category: 'Wardrobes',
    highlightAr: 'أنظمة الإنارة الرأسية المدمجة والزجاج المدخن العاكس',
    highlightEn: 'Recessed Vertical Illumination & Smoked Glass Panels'
  },
  {
    pageNumber: 4,
    titleAr: 'معايير الجودة الأوروبية وخامات أوبين',
    titleEn: 'OPPEIN European Material Specifications',
    category: 'Specifications',
    highlightAr: 'مفصلات بلوم واختبارات مقاومة الرطوبة الخليجية',
    highlightEn: 'Blum Austria Hardware & Gulf Moisture Resistance Certs'
  }
];

export const WHY_CHOOSE_PILLARS = [
  {
    id: 'comprehensive',
    titleAr: 'خدمة شاملة متكاملة',
    titleEn: 'Comprehensive Service',
    descriptionAr: 'من الاستشارة الميدانية وتصميم الـ 3D الهندسي الدقيق، مروراً بالتصنيع عالي الجودة والتركيب المحترف، وحتى ما بعد البيع — نحن نتكفل بكل شيء.',
    descriptionEn: 'From initial site measurement and 3D architectural renders to specialized installation and long-term aftercare — complete peace of mind in one place.',
    iconName: 'Sparkles'
  },
  {
    id: 'design',
    titleAr: 'تصميم إيطالي متقن',
    titleEn: 'Meticulous Design',
    descriptionAr: 'تصاميم إيطالية مدروسة تجمع بين أقصى درجات العملية والجمال العصري، ينفذها حرفيون متخصصون يراعون تفاصيل حياتك اليومية.',
    descriptionEn: 'Thoughtful Italian ergonomics balancing seamless functional workflow with refined modern beauty, tailored to daily Gulf family lifestyles.',
    iconName: 'Palette'
  },
  {
    id: 'quality',
    titleAr: 'جودة أوروبية فائقة',
    titleEn: 'Superior Quality',
    descriptionAr: 'نعتمد ألواحاً ومواد أوروبية معتمدة من كبرى المصانع العالمية، مصممة لمقاومة الرطوبة العالية والحرارة، وخالية تماماً من الانبعاثات الضارة.',
    descriptionEn: 'Globally certified European core boards engineered specifically to resist extreme Gulf humidity and heat, 100% eco-friendly and food-safe.',
    iconName: 'Gem'
  },
  {
    id: 'warranty',
    titleAr: 'ضمان رسمي موثوق 10 سنوات',
    titleEn: 'Reliable 10-Year Warranty',
    descriptionAr: 'نقدم ضماناً كتابياً معتمداً لمدة 10 سنوات على المواد والتركيب، مع التزام تام بالصيانة الدورية وسرعة التجاوب لتستمتع براحة بال دائمة.',
    descriptionEn: 'We deliver a binding 10-year written warranty covering both materials and installation, backed by swift dedicated after-sales technicians.',
    iconName: 'ShieldCheck'
  }
];
