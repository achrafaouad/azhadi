/* ═══════════════════════════════════════════════════
   Azhadi Traiteur — Main JavaScript
   Includes: i18n (AR ↔ FR), scroll animations, slider, etc.
   ═══════════════════════════════════════════════════ */

// ─── TRANSLATIONS ───
const translations = {
  ar: {
    'logo': 'أزهادي',
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.gallery': 'معرض الصور',
    'nav.testimonials': 'آراء العملاء',
    'nav.contact': 'تواصلوا معنا',

    'hero.welcome': 'مرحباً بكم في',
    'hero.name': 'أزهادي',
    'hero.desc': 'فن الارتقاء بحفلات زفافكم ومناسباتكم\nبمطبخ استثنائي في الرباط',
    'hero.cta1': 'طلب عرض أسعار',
    'hero.cta2': 'خدماتنا',
    'hero.scroll': 'اكتشفوا',

    'about.tag': 'قصتنا',
    'about.title': 'التميّز في خدمة\nمناسباتكم',
    'about.exp': 'سنة من الخبرة',
    'about.p1': 'منذ أكثر من 15 سنة، يرافق <strong>أزهادي تريتور</strong> العائلات في الرباط وعبر المغرب في تنظيم أجمل مناسباتهم. شغفنا بالمطبخ المغربي والعالمي ينعكس في كل طبق نحضره بعناية فائقة.',
    'about.p2': 'نؤمن بأن كل حفل زفاف فريد من نوعه. لذلك نقدم خدمة مخصصة بالكامل، من تصميم قائمة الطعام إلى التنسيق والخدمة يوم الحفل، لتكون مناسبتكم في مستوى أحلامكم.',
    'about.f1': 'مكونات طازجة ومحلية',
    'about.f2': 'قوائم طعام مخصصة',
    'about.f3': 'فريق محترف',
    'about.f4': 'ديكور أنيق وراقي',

    'stats.weddings': 'حفل زفاف',
    'stats.guests': 'ضيف تم خدمتهم',
    'stats.menus': 'قائمة طعام',
    'stats.satisfaction': '% رضا العملاء',

    'services.tag': 'ما نقدمه لكم',
    'services.title': 'خدماتنا',
    'services.desc': 'مرافقة شاملة لجعل مناسبتكم لحظة ساحرة لا تُنسى',
    'services.popular': 'الأكثر طلباً',
    'services.s1.title': 'حفلات الزفاف',
    'services.s1.desc': 'تنظيم كامل لحفل الاستقبال: بوفيهات فاخرة، أطباق مقدمة على الطاولة، وعروض طهي حية لحفل زفاف لا يُنسى.',
    'services.s1.l1': 'بوفيه مغربي تقليدي',
    'services.s1.l2': 'قائمة طعام فاخرة',
    'services.s1.l3': 'كوكتيل استقبال',
    'services.s1.l4': 'قالب الحفل والحلويات',
    'services.s2.title': 'الخطوبة والملكة',
    'services.s2.desc': 'تشكيلات أنيقة وراقية للاحتفال بخطوبتكم بأسلوب عصري مع لمسة من التقاليد المغربية الأصيلة.',
    'services.s2.l1': 'صواني الحلويات التقليدية',
    'services.s2.l2': 'شاي وقهوة الحفل',
    'services.s2.l3': 'مقبلات فاخرة',
    'services.s2.l4': 'تزيين بالزهور الطبيعية',
    'services.s3.title': 'المناسبات الخاصة',
    'services.s3.desc': 'العقيقة، أعياد الميلاد، حفلات الشركات — نكيّف خدماتنا لتناسب كل مناسبة مميزة.',
    'services.s3.l1': 'فطور وغداء فاخر',
    'services.s3.l2': 'عشاء احتفالي',
    'services.s3.l3': 'كوكتيل عشاء',
    'services.s3.l4': 'خدمة في المنزل',

    'menu.tag': 'نكهات استثنائية',
    'menu.title': 'لمحة عن قائمتنا',
    'menu.tab1': 'المقبلات',
    'menu.tab2': 'الأطباق الرئيسية',
    'menu.tab3': 'الحلويات',
    'menu.e1.name': 'بسطيلة بفواكه البحر',
    'menu.e1.desc': 'بسطيلة مقرمشة محشوة بالقريدس والحبار مع صلصة كريمية',
    'menu.e2.name': 'بريوات بالجبن',
    'menu.e2.desc': 'رقائق مقرمشة محشوة بجبن الماعز والأعشاب الطازجة',
    'menu.e3.name': 'سلطة ملكية',
    'menu.e3.desc': 'مزيج من الخضروات الطازجة والحوامض مع صلصة زيت الأركان',
    'menu.e4.name': 'حريرة الأعراس',
    'menu.e4.desc': 'شوربة تقليدية بالعدس والحمص وتوابل محلية أصيلة',
    'menu.p1.name': 'مشوي الخروف',
    'menu.p1.desc': 'خروف كامل مشوي ببطء مع التوابل، طري ومعطر',
    'menu.p2.name': 'طاجين بالبرقوق',
    'menu.p2.desc': 'طاجين لحم الغنم بالبرقوق واللوز والسمسم المحمص',
    'menu.p3.name': 'كسكس ملكي',
    'menu.p3.desc': 'سميد ناعم بسبع خضروات مع لحم الغنم والدجاج والمرقاز',
    'menu.p4.name': 'دجاج محمر',
    'menu.p4.desc': 'دجاج متبل بالزيتون والحامض المصير، مطهو على الفحم',
    'menu.d1.name': 'قالب الحفل',
    'menu.d1.desc': 'إبداع حلواني مخصص لحفلكم',
    'menu.d2.name': 'كعب الغزال',
    'menu.d2.desc': 'حلوى تقليدية بعجينة اللوز وماء الزهر',
    'menu.d3.name': 'الشباكية بالعسل',
    'menu.d3.desc': 'وردات مقرمشة بالعسل وحبوب السمسم',
    'menu.d4.name': 'تشكيلة فواكه',
    'menu.d4.desc': 'اختيار من الفواكه الطازجة الموسمية، منحوتة ومقدمة بفن',

    'gallery.tag': 'أعمالنا',
    'gallery.title': 'معرض الصور',
    'gallery.g1': 'بوفيه فاخر',
    'gallery.g2': 'حلويات راقية',
    'gallery.g3': 'أطباق تقليدية',
    'gallery.g4': 'تزيين الطاولات',
    'gallery.g5': 'عشاء احتفالي',
    'gallery.g6': 'كوكتيل عشاء',

    'trail.badge': 'تجربة تفاعلية',
    'trail.title': 'لحظات استثنائية تُخلّد في الذاكرة',
    'trail.subtitle': 'حرّكوا المؤشر عبر هذه المساحة لاكتشاف ومضات من إبداعاتنا وفن الطهي المغربي الرفيع',
    'trail.hint': 'مرّروا الفأرة أو إصبعكم هنا',

    'testimonials.tag': 'عملاؤنا يشهدون',
    'testimonials.title': 'آراء العملاء',
    'testimonials.t1.text': '"أزهادي تريتور دارو لينا عرس كيحلم بيه أي واحد. الماكلة كانت فوق الرائع والسيرفيس ما عليه كلام. كاع الضيافة مازال كيهضرو عليه!"',
    'testimonials.t1.name': 'سارة وكريم',
    'testimonials.t1.event': 'عرس — الرباط، 2025',
    'testimonials.t2.text': '"والله بروفيسيوناليزم ما كاينش بحالو! الفريق ديال أزهادي سمعو لينا مزيان وداروا لينا مينو على حسب ما بغينا بالضبط. المشوي كان خطييير. شكراً بزاف ليكم."',
    'testimonials.t2.name': 'لمياء وأحمد',
    'testimonials.t2.event': 'عرس — تمارة، 2024',
    'testimonials.t3.text': '"فالخطوبة ديالنا، أزهادي حضرو لينا بوفيه زويين بزاف. التقديم كان بحال شي بالاص والمذاق أصيل ومغربي بزاف. كنوصي بيهم وعينيا مغمضين."',
    'testimonials.t3.name': 'هاجر ويوسف',
    'testimonials.t3.event': 'خطوبة — سلا، 2025',

    'cta.title': 'مستعدون لتحقيق حفل أحلامكم؟',
    'cta.desc': 'تواصلوا معنا اليوم للحصول على استشارة مجانية وعرض أسعار مخصص',
    'cta.btn': 'طلب عرض أسعار مجاني',

    'contact.tag': 'حدثونا عن مشروعكم',
    'contact.title': 'تواصلوا معنا',
    'contact.address.label': 'العنوان',
    'contact.address.value': 'شارع الكفاح، الرباط\nالمغرب',
    'contact.phone.label': 'الهاتف',
    'contact.email.label': 'البريد الإلكتروني',
    'contact.hours.label': 'أوقات العمل',
    'contact.hours.value': 'الاثنين – السبت: 9ص – 7م\nالأحد: بموعد مسبق',

    'form.name': 'الاسم الكامل',
    'form.name.ph': 'اسمكم',
    'form.phone': 'الهاتف',
    'form.email': 'البريد الإلكتروني',
    'form.email.ph': 'بريدكم@email.com',
    'form.event': 'نوع المناسبة',
    'form.event.choose': 'اختاروا...',
    'form.event.o1': 'حفل زفاف',
    'form.event.o2': 'خطوبة / ملكة',
    'form.event.o3': 'عقيقة',
    'form.event.o4': 'عيد ميلاد',
    'form.event.o5': 'حفل شركات',
    'form.event.o6': 'أخرى',
    'form.guests': 'عدد الضيوف',
    'form.guests.ph': 'مثال: 200',
    'form.date': 'التاريخ المرغوب',
    'form.message': 'الرسالة',
    'form.message.ph': 'صفوا لنا مشروعكم...',
    'form.submit': 'طلب عرض أسعار عبر واتساب',
    'form.sending': 'جاري فتح واتساب...',
    'form.sent': 'تم فتح واتساب بنجاح!',
    'form.notice': 'سيتم تحويلكم مباشرة إلى تطبيق واتساب برسالة منظمة وجاهزة للإرسال',

    'contact.map.title': 'موقعنا على الخريطة',
    'contact.map.directions': 'فتح في خرائط Google',

    'footer.desc': 'خدمات تنظيم حفلات الزفاف والمناسبات بالرباط. نكهات أصيلة، خدمة متميزة، لحظات لا تُنسى.',
    'footer.nav': 'التنقل',
    'footer.services': 'خدماتنا',
    'footer.newsletter.title': 'ابقوا على اطلاع',
    'footer.newsletter.desc': 'تلقوا آخر عروضنا وإلهاماتنا',
    'footer.newsletter.ph': 'بريدكم الإلكتروني',
    'footer.copy': '© 2026 أزهادي تريتور. جميع الحقوق محفوظة.',
    'footer.made': 'صنع بـ',
    'footer.location': 'في الرباط، المغرب',
  },

  fr: {
    'logo': 'Azhadi',
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.testimonials': 'Avis',
    'nav.contact': 'Contactez-nous',

    'hero.welcome': 'Bienvenue chez',
    'hero.name': 'Azhadi',
    'hero.desc': "L'art de sublimer vos mariages et événements\navec une cuisine d'exception à Rabat",
    'hero.cta1': 'Demander un Devis',
    'hero.cta2': 'Nos Services',
    'hero.scroll': 'Découvrir',

    'about.tag': 'Notre Histoire',
    'about.title': "L'Excellence au Service\nde Vos Événements",
    'about.exp': "Ans d'Expérience",
    'about.p1': 'Depuis plus de 15 ans, <strong>Azhadi Traiteur</strong> accompagne les familles de Rabat et de tout le Maroc dans la réalisation de leurs plus beaux événements. Notre passion pour la gastronomie marocaine et internationale se reflète dans chaque plat que nous préparons.',
    'about.p2': "Nous croyons que chaque mariage est unique. C'est pourquoi nous offrons un service personnalisé, allant de la conception du menu jusqu'à la mise en place et le service le jour J, pour que votre célébration soit à la hauteur de vos rêves.",
    'about.f1': 'Ingrédients frais & locaux',
    'about.f2': 'Menus sur mesure',
    'about.f3': 'Équipe professionnelle',
    'about.f4': 'Décoration élégante',

    'stats.weddings': 'Mariages Réalisés',
    'stats.guests': 'Invités Servis',
    'stats.menus': 'Menus Créés',
    'stats.satisfaction': '% Satisfaction',

    'services.tag': 'Ce Que Nous Offrons',
    'services.title': 'Nos Services',
    'services.desc': 'Un accompagnement complet pour faire de votre événement un moment magique',
    'services.popular': 'Populaire',
    'services.s1.title': 'Mariages',
    'services.s1.desc': "Organisation complète de la réception : buffets somptueux, plats servis à table, et animations culinaires pour un mariage inoubliable.",
    'services.s1.l1': 'Buffet marocain traditionnel',
    'services.s1.l2': 'Menu gastronomique',
    'services.s1.l3': 'Cocktail de bienvenue',
    'services.s1.l4': 'Pièce montée & desserts',
    'services.s2.title': 'Fiançailles & Khotba',
    'services.s2.desc': "Des formules élégantes et raffinées pour célébrer vos fiançailles avec style et traditions marocaines.",
    'services.s2.l1': 'Plateaux de pâtisseries',
    'services.s2.l2': 'Thé & café de cérémonie',
    'services.s2.l3': 'Amuse-bouches fins',
    'services.s2.l4': 'Décoration florale',
    'services.s3.title': 'Événements Privés',
    'services.s3.desc': "Baptêmes, anniversaires, réceptions d'entreprise — nous adaptons nos services à chaque occasion spéciale.",
    'services.s3.l1': 'Brunchs & déjeuners',
    'services.s3.l2': 'Dîners de gala',
    'services.s3.l3': 'Cocktails dînatoires',
    'services.s3.l4': 'Service à domicile',

    'menu.tag': "Saveurs d'Exception",
    'menu.title': 'Aperçu du Menu',
    'menu.tab1': 'Entrées',
    'menu.tab2': 'Plats',
    'menu.tab3': 'Desserts',
    'menu.e1.name': 'Pastilla aux Fruits de Mer',
    'menu.e1.desc': 'Croustillante pastilla garnie de crevettes, calamars et sauce onctueuse',
    'menu.e2.name': 'Briouates au Fromage',
    'menu.e2.desc': 'Feuilletés croustillants farcis au fromage de chèvre et herbes fraîches',
    'menu.e3.name': 'Salade Royale',
    'menu.e3.desc': "Mélange de crudités fraîches, agrumes et vinaigrette à l'argan",
    'menu.e4.name': 'Harira de Fête',
    'menu.e4.desc': 'Soupe traditionnelle aux lentilles, pois chiches et épices du terroir',
    'menu.p1.name': "Méchoui d'Agneau",
    'menu.p1.desc': 'Agneau entier rôti lentement aux épices, fondant et parfumé',
    'menu.p2.name': 'Tajine aux Pruneaux',
    'menu.p2.desc': "Tajine d'agneau confit aux pruneaux, amandes et sésame doré",
    'menu.p3.name': 'Couscous Royal',
    'menu.p3.desc': 'Semoule fine aux sept légumes, agneau, poulet et merguez',
    'menu.p4.name': "Poulet M'chermel",
    'menu.p4.desc': 'Poulet mariné aux olives et citron confit, cuit au charbon de bois',
    'menu.d1.name': 'Pièce Montée',
    'menu.d1.desc': 'Création pâtissière personnalisée pour votre cérémonie',
    'menu.d2.name': 'Cornes de Gazelle',
    'menu.d2.desc': "Pâtisserie traditionnelle à la pâte d'amande et fleur d'oranger",
    'menu.d3.name': 'Chebbakia au Miel',
    'menu.d3.desc': 'Roses feuilletées croustillantes au miel et graines de sésame',
    'menu.d4.name': 'Assortiment de Fruits',
    'menu.d4.desc': 'Sélection de fruits frais de saison, sculptés et présentés avec art',

    'gallery.tag': 'Nos Réalisations',
    'gallery.title': 'Galerie',
    'gallery.g1': 'Buffet Royal',
    'gallery.g2': 'Pâtisseries Fines',
    'gallery.g3': 'Plats Traditionnels',
    'gallery.g4': 'Décoration de Table',
    'gallery.g5': 'Dîner de Gala',
    'gallery.g6': 'Cocktail Dînatoire',

    'trail.badge': 'Expérience Interactive',
    'trail.title': 'Des Instants d’Exception Gravés à Jamais',
    'trail.subtitle': 'Déplacez votre curseur sur cet espace pour révéler les clichés de nos plus belles réceptions',
    'trail.hint': 'Glissez votre curseur ou doigt ici',

    'testimonials.tag': 'Ils Nous Font Confiance',
    'testimonials.title': 'Témoignages',
    'testimonials.t1.text': '"Azhadi Traiteur a transformé notre mariage en un véritable conte de fées. La qualité des plats était exceptionnelle et le service irréprochable. Tous nos invités en parlent encore !"',
    'testimonials.t1.name': 'Sara & Karim',
    'testimonials.t1.event': 'Mariage — Rabat, 2025',
    'testimonials.t2.text': '"Un professionnalisme rare ! L\'équipe d\'Azhadi a su écouter nos envies et créer un menu qui reflétait parfaitement notre vision. Le méchoui était à tomber. Merci infiniment."',
    'testimonials.t2.name': 'Lamia & Ahmed',
    'testimonials.t2.event': 'Mariage — Témara, 2024',
    'testimonials.t3.text': '"Pour nos fiançailles, Azhadi a préparé un buffet magnifique. La présentation était digne d\'un palace et les saveurs authentiques. Je recommande les yeux fermés."',
    'testimonials.t3.name': 'Hajar & Youssef',
    'testimonials.t3.event': 'Fiançailles — Salé, 2025',

    'cta.title': 'Prêt à Créer Votre Événement de Rêve ?',
    'cta.desc': "Contactez-nous dès aujourd'hui pour une consultation gratuite et un devis personnalisé",
    'cta.btn': 'Demander un Devis Gratuit',

    'contact.tag': 'Parlons de Votre Projet',
    'contact.title': 'Contactez-Nous',
    'contact.address.label': 'Adresse',
    'contact.address.value': 'Rue Al Kifah, Rabat\nMaroc',
    'contact.phone.label': 'Téléphone',
    'contact.email.label': 'Email',
    'contact.hours.label': 'Horaires',
    'contact.hours.value': 'Lun – Sam : 9h – 19h\nDimanche sur RDV',

    'form.name': 'Nom Complet',
    'form.name.ph': 'Votre nom',
    'form.phone': 'Téléphone',
    'form.email': 'Email',
    'form.email.ph': 'votre@email.com',
    'form.event': "Type d'Événement",
    'form.event.choose': 'Choisir...',
    'form.event.o1': 'Mariage',
    'form.event.o2': 'Fiançailles / Khotba',
    'form.event.o3': 'Baptême / Aqiqa',
    'form.event.o4': 'Anniversaire',
    'form.event.o5': "Événement d'entreprise",
    'form.event.o6': 'Autre',
    'form.guests': "Nombre d'Invités",
    'form.guests.ph': 'Ex: 200',
    'form.date': 'Date Souhaitée',
    'form.message': 'Message',
    'form.message.ph': 'Décrivez votre projet...',
    'form.submit': 'Demander un devis via WhatsApp',
    'form.sending': 'Ouverture de WhatsApp...',
    'form.sent': 'WhatsApp ouvert avec succès !',
    'form.notice': "Vous serez redirigé vers WhatsApp avec un message bien structuré prêt à l'envoi",

    'contact.map.title': 'Notre Emplacement',
    'contact.map.directions': 'Ouvrir dans Google Maps',

    'footer.desc': "Traiteur de prestige pour mariages et événements à Rabat. Saveurs authentiques, service impeccable, moments inoubliables.",
    'footer.nav': 'Navigation',
    'footer.services': 'Services',
    'footer.newsletter.title': 'Restez Informés',
    'footer.newsletter.desc': 'Recevez nos dernières offres et inspirations',
    'footer.newsletter.ph': 'Votre email',
    'footer.copy': '© 2026 Azhadi Traiteur. Tous droits réservés.',
    'footer.made': 'Fait avec',
    'footer.location': 'à Rabat, Maroc',
  }
};

// ─── i18n ENGINE ───
let currentLang = localStorage.getItem('azhadi-lang') || 'ar';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('azhadi-lang', lang);

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === 'ar' ? 'rtl' : 'ltr';

  // Update page title
  document.title = lang === 'ar'
    ? 'أزهادي تريتور — حفلات الزفاف والمناسبات بالرباط'
    : 'Azhadi Traiteur — Mariages & Événements à Rabat';

  const dict = translations[lang];

  // Translate text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) {
      // Check if the translation contains HTML tags
      if (dict[key].includes('<strong>') || dict[key].includes('<br')) {
        el.innerHTML = dict[key].replace(/\n/g, '<br/>');
      } else {
        el.innerHTML = dict[key].replace(/\n/g, '<br/>');
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset['i18nPh'];
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // Update toggle button
  const arOpt = document.querySelector('.lang-ar');
  const frOpt = document.querySelector('.lang-fr');
  if (arOpt && frOpt) {
    arOpt.classList.toggle('active', lang === 'ar');
    frOpt.classList.toggle('active', lang === 'fr');
  }

  // Update newsletter arrow direction
  const nlBtn = document.querySelector('.newsletter-form button i');
  if (nlBtn) {
    nlBtn.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
  }

  // Update testimonial navigation chevrons for RTL/LTR
  const prevIcon = document.querySelector('#prevBtn i');
  const nextIcon = document.querySelector('#nextBtn i');
  if (prevIcon && nextIcon) {
    if (lang === 'ar') {
      prevIcon.className = 'fas fa-chevron-right';
      nextIcon.className = 'fas fa-chevron-left';
    } else {
      prevIcon.className = 'fas fa-chevron-left';
      nextIcon.className = 'fas fa-chevron-right';
    }
  }

  // Update testimonial avatars
  const avatars = document.querySelectorAll('.testimonial-avatar');
  if (avatars.length >= 3) {
    if (lang === 'ar') {
      avatars[0].textContent = 'س&ك'; avatars[0].innerHTML = 'س&amp;ك';
      avatars[1].textContent = 'ل&أ'; avatars[1].innerHTML = 'ل&amp;أ';
      avatars[2].textContent = 'ه&ي'; avatars[2].innerHTML = 'ه&amp;ي';
    } else {
      avatars[0].innerHTML = 'S&amp;K';
      avatars[1].innerHTML = 'L&amp;A';
      avatars[2].innerHTML = 'H&amp;Y';
    }
  }
}

// ─── MAIN INIT ───
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language
  setLanguage(currentLang);

  // Language toggle
  const langToggle = document.getElementById('langToggle');
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'fr' : 'ar');
  });

  // ─── PRELOADER ───
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.classList.add('loaded');
    }, 1200);
  });
  setTimeout(() => {
    preloader.classList.add('hidden');
    document.body.classList.add('loaded');
  }, 3000);

  // ─── NAVBAR ───
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
    document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 600);
  });

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // ─── SMOOTH SCROLL ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // ─── ACTIVE NAV ───
  const sections = document.querySelectorAll('section[id]');
  function updateActiveNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (link) link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // ─── SCROLL REVEAL ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
    .forEach(el => revealObserver.observe(el));

  // ─── COUNTER ANIMATION ───
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        animateCounter(el, parseInt(el.dataset.target));
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number, .exp-number')
    .forEach(c => counterObserver.observe(c));

  function animateCounter(el, target) {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    function update() {
      current += step;
      if (current >= target) { el.textContent = target.toLocaleString(); return; }
      el.textContent = Math.floor(current).toLocaleString();
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // ─── MENU TABS ───
  document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.menu-panel').forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `tab-${target}`) {
          panel.classList.add('active');
          panel.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
            el.classList.remove('revealed');
            void el.offsetWidth;
            el.classList.add('revealed');
          });
        }
      });
    });
  });

  // ─── TESTIMONIALS SLIDER ───
  const track = document.getElementById('testimonialTrack');
  const cards = track ? track.querySelectorAll('.testimonial-card') : [];
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('testimonialDots');
  let currentSlide = 0;

  if (cards.length > 0) {
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('testimonial-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.testimonial-dot');

    function goToSlide(index) {
      currentSlide = index;
      track.style.transform = `translateX(${document.documentElement.dir === 'rtl' ? '' : '-'}${index * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    prevBtn.addEventListener('click', () => {
      goToSlide(currentSlide > 0 ? currentSlide - 1 : cards.length - 1);
    });
    nextBtn.addEventListener('click', () => {
      goToSlide(currentSlide < cards.length - 1 ? currentSlide + 1 : 0);
    });

    let autoSlide = setInterval(() => {
      goToSlide(currentSlide < cards.length - 1 ? currentSlide + 1 : 0);
    }, 5000);

    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => {
        goToSlide(currentSlide < cards.length - 1 ? currentSlide + 1 : 0);
      }, 5000);
    });

    // Touch
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextBtn.click(); else prevBtn.click();
      }
    }, { passive: true });
  }

  // ─── HERO PARTICLES ───
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 8 + 's';
      p.style.animationDuration = (6 + Math.random() * 8) + 's';
      p.style.width = p.style.height = (2 + Math.random() * 4) + 'px';
      particlesContainer.appendChild(p);
    }
  }

  // ─── BACK TO TOP ───
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ─── CONTACT FORM (WHATSAPP DISPATCH) ───
  const contactForm = document.getElementById('contactForm');
  // Real WhatsApp phone number for Azhadi Traiteur (Rabat, Maroc)
  const AZHADI_WHATSAPP_PHONE = '212663083670';

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button[type="submit"]');
      const submitSpan = btn.querySelector('[data-i18n="form.submit"]');
      const dict = translations[currentLang];

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const eventSelect = document.getElementById('event');
      const eventText = eventSelect && eventSelect.selectedIndex >= 0
        ? eventSelect.options[eventSelect.selectedIndex].text
        : '';
      const guests = document.getElementById('guests').value.trim();
      const date = document.getElementById('date').value.trim();
      const message = document.getElementById('message').value.trim();

      // Format date for better readability (DD/MM/YYYY)
      let formattedDate = date;
      if (date && date.includes('-')) {
        const parts = date.split('-');
        if (parts.length === 3) {
          formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
      }

      // Build structured message based on current language
      let waMessage = '';
      if (currentLang === 'fr') {
        waMessage = `✨ *NOUVELLE DEMANDE DE DEVIS — AZHADI TRAITEUR* ✨
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Nom Complet :* ${name}
📞 *Téléphone :* ${phone}
📧 *Email :* ${email}
🎉 *Type d'Événement :* ${eventText}
👥 *Nombre d'Invités :* ${guests ? guests + ' personnes' : 'Non précisé'}
📅 *Date Souhaitée :* ${formattedDate || 'Non précisée'}

💬 *Détails & Remarques :*
${message ? message : 'Merci de me recontacter pour discuter des formules et menus disponibles.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *Lieu :* Rabat et régions
_Demande envoyée depuis le site officiel Azhadi Traiteur_`;
      } else {
        waMessage = `✨ *طلب عرض أسعار جديد — أزهادي تريتور* ✨
━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *الاسم الكامل:* ${name}
📞 *الهاتف:* ${phone}
📧 *البريد الإلكتروني:* ${email}
🎉 *نوع المناسبة:* ${eventText}
👥 *عدد الضيوف:* ${guests ? guests + ' شخص' : 'غير محدد'}
📅 *التاريخ المرغوب:* ${formattedDate || 'غير محدد'}

💬 *تفاصيل وملاحظات إضافية:*
${message ? message : 'المرجو التواصل معي لاقتراح لائحة الطعام والخيارات المناسبة.'}
━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 *الموقع:* الرباط ونواحيها
_تم إرسال هذا الطلب عبر الموقع الرسمي لأزهادي تريتور_`;
      }

      // Update UI state
      btn.disabled = true;
      submitSpan.textContent = dict['form.sending'];

      const waUrl = `https://wa.me/${AZHADI_WHATSAPP_PHONE}?text=${encodeURIComponent(waMessage)}`;

      // Open WhatsApp after a brief UX animation
      setTimeout(() => {
        window.open(waUrl, '_blank');
        submitSpan.textContent = dict['form.sent'];
        btn.classList.add('success');

        setTimeout(() => {
          submitSpan.textContent = dict['form.submit'];
          btn.disabled = false;
          btn.classList.remove('success');
          contactForm.reset();
        }, 3000);
      }, 600);
    });
  }

  // ─── PARALLAX ───
  window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    if (hero) hero.style.setProperty('--scroll', window.scrollY * 0.3 + 'px');
  });

  // ─── LIGHTBOX GALLERY ───
  const galleryData = {
    buffet: {
      title: { ar: 'بوفيه فاخر', fr: 'Buffet Royal' },
      images: [
        'static/images/buffet-reception.jpeg',
        'static/images/dates-majhoul.jpeg',
        'static/images/table-or.jpeg',
        'static/images/table-cristal.jpeg'
      ]
    },
    patisseries: {
      title: { ar: 'حلويات راقية', fr: 'Pâtisseries Fines' },
      images: [
        'static/images/patisserie-box.jpeg',
        'static/images/cornes-gazelle.jpeg',
        'static/images/gateaux-soiree.jpeg',
        'static/images/patisserie-fleurs.jpeg',
        'static/images/sables-amandes.jpeg',
        'static/images/patisserie-dorees.jpeg'
      ]
    },
    plats: {
      title: { ar: 'أطباق تقليدية', fr: 'Plats Traditionnels' },
      images: [
        'static/images/pastilla.jpeg',
        'static/images/mechoui.jpeg',
        'static/images/djad-mhammar.jpeg',
        'static/images/table-or.jpeg'
      ]
    },
    decoration: {
      title: { ar: 'تزيين الطاولات', fr: 'Décoration de Table' },
      images: [
        'static/images/table-or.jpeg',
        'static/images/table-cristal.jpeg',
        'static/images/table-bougies.jpeg',
        'static/images/table-riad.jpeg',
        'static/images/table-noire-or.jpeg',
        'static/images/table-tente.jpeg'
      ]
    },
    gala: {
      title: { ar: 'عشاء احتفالي', fr: 'Dîner de Gala' },
      images: [
        'static/images/hero-wedding.jpeg',
        'static/images/stats-bg.jpeg',
        'static/images/cta-bg.jpeg',
        'static/images/about-wedding.jpeg'
      ]
    },
    cocktail: {
      title: { ar: 'ضيافة واستقبال', fr: 'Accueil & Réceptions' },
      images: [
        'static/images/dates-majhoul.jpeg',
        'static/images/stage-dore.jpeg',
        'static/images/stage-argent.jpeg',
        'static/images/tente-caidale.jpeg',
        'static/images/chapiteau-jardin.jpeg'
      ]
    }
  };

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCurrent = document.getElementById('lightboxCurrent');
  const lightboxTotal = document.getElementById('lightboxTotal');
  const lightboxThumbs = document.getElementById('lightboxThumbs');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let lbCategory = null;
  let lbIndex = 0;

  function openLightbox(category) {
    const data = galleryData[category];
    if (!data) return;

    lbCategory = category;
    lbIndex = 0;

    // Set title
    lightboxTitle.textContent = data.title[currentLang] || data.title.ar;

    // Set total
    lightboxTotal.textContent = data.images.length;

    // Build thumbnails
    lightboxThumbs.innerHTML = '';
    data.images.forEach((src, i) => {
      const thumb = document.createElement('div');
      thumb.classList.add('lightbox-thumb');
      if (i === 0) thumb.classList.add('active');
      thumb.innerHTML = `<img src="${src.replace('w=1200', 'w=150')}" alt="" />`;
      thumb.addEventListener('click', () => showImage(i));
      lightboxThumbs.appendChild(thumb);
    });

    showImage(0);

    // Show lightbox
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbCategory = null;
  }

  function showImage(index) {
    const data = galleryData[lbCategory];
    if (!data) return;

    lbIndex = index;

    // Update image with loading state
    lightboxImg.classList.remove('loaded');
    lightboxImg.src = data.images[index];
    lightboxImg.onload = () => lightboxImg.classList.add('loaded');

    // Update counter
    lightboxCurrent.textContent = index + 1;

    // Update thumbs
    lightboxThumbs.querySelectorAll('.lightbox-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === index);
    });
  }

  function nextImage() {
    const data = galleryData[lbCategory];
    if (!data) return;
    showImage(lbIndex < data.images.length - 1 ? lbIndex + 1 : 0);
  }

  function prevImage() {
    const data = galleryData[lbCategory];
    if (!data) return;
    showImage(lbIndex > 0 ? lbIndex - 1 : data.images.length - 1);
  }

  // Gallery item click handlers
  document.querySelectorAll('.gallery-item[data-gallery]').forEach(item => {
    item.addEventListener('click', () => {
      openLightbox(item.dataset.gallery);
    });
  });

  // Lightbox controls
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevImage);
  lightboxNext.addEventListener('click', nextImage);

  // Close on overlay click
  document.querySelector('.lightbox-overlay').addEventListener('click', closeLightbox);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') {
      document.documentElement.dir === 'rtl' ? prevImage() : nextImage();
    }
    if (e.key === 'ArrowLeft') {
      document.documentElement.dir === 'rtl' ? nextImage() : prevImage();
    }
  });

  // Touch swipe in lightbox
  let lbTouchStart = 0;
  const lbBody = document.querySelector('.lightbox-body');
  if (lbBody) {
    lbBody.addEventListener('touchstart', e => { lbTouchStart = e.changedTouches[0].screenX; }, { passive: true });
    lbBody.addEventListener('touchend', e => {
      const diff = lbTouchStart - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextImage(); else prevImage();
      }
    }, { passive: true });
  }

  // ─── IMAGE TRAIL ENGINE ───
  const trailSection = document.getElementById('trail-section');
  const trailCanvas = document.getElementById('trailCanvas');

  if (trailSection && trailCanvas) {
    const trailImages = [
      'static/images/hero-wedding.jpeg',
      'static/images/about-wedding.jpeg',
      'static/images/pastilla.jpeg',
      'static/images/mechoui.jpeg',
      'static/images/djad-mhammar.jpeg',
      'static/images/patisserie-box.jpeg',
      'static/images/cornes-gazelle.jpeg',
      'static/images/table-or.jpeg',
      'static/images/dates-majhoul.jpeg',
      'static/images/table-cristal.jpeg',
      'static/images/stage-dore.jpeg',
      'static/images/buffet-reception.jpeg',
      'static/images/gateaux-soiree.jpeg',
      'static/images/table-bougies.jpeg',
      'static/images/stats-bg.jpeg',
      'static/images/cta-bg.jpeg',
      'static/images/patisserie-fleurs.jpeg',
      'static/images/tente-caidale.jpeg',
      'static/images/table-noire-or.jpeg',
      'static/images/stage-argent.jpeg',
      'static/images/sables-amandes.jpeg'
    ];

    // Preload images for instant rendering without lag
    trailImages.forEach(src => {
      const preloadImg = new Image();
      preloadImg.src = src;
    });

    let imgCursor = 0;
    let lastX = 0;
    let lastY = 0;
    let zIndexCounter = 1;
    const DISTANCE_THRESHOLD = 75; // Distance in px before dropping next image
    const activeNodes = [];
    const MAX_ACTIVE_IMAGES = 10;

    function spawnTrailImage(x, y) {
      // Pick next image
      const src = trailImages[imgCursor % trailImages.length];
      imgCursor++;

      // Create image element
      const img = document.createElement('img');
      img.className = 'trail-img';
      img.src = src;
      img.alt = 'Azhadi Traiteur Décor';
      img.loading = 'eager';

      // Random rotation between -12deg and +12deg
      const randomRot = (Math.random() - 0.5) * 24;
      img.style.setProperty('--rot', `${randomRot.toFixed(1)}deg`);
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.zIndex = zIndexCounter++;

      trailCanvas.appendChild(img);
      activeNodes.push(img);

      // Trigger enter animation on next repaint
      requestAnimationFrame(() => {
        img.classList.add('is-visible');
      });

      // Cleanup oldest if exceeded limit
      if (activeNodes.length > MAX_ACTIVE_IMAGES) {
        const oldest = activeNodes.shift();
        if (oldest && oldest.parentNode) {
          oldest.classList.remove('is-visible');
          oldest.classList.add('is-fading');
          setTimeout(() => {
            if (oldest.parentNode) oldest.parentNode.removeChild(oldest);
          }, 400);
        }
      }

      // Automatically fade out and remove after lifecycle
      setTimeout(() => {
        img.classList.remove('is-visible');
        img.classList.add('is-fading');
        setTimeout(() => {
          if (img.parentNode) {
            img.parentNode.removeChild(img);
            const idx = activeNodes.indexOf(img);
            if (idx > -1) activeNodes.splice(idx, 1);
          }
        }, 500);
      }, 950);
    }

    function handlePointerMove(clientX, clientY) {
      const rect = trailSection.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      // Check bounds
      if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

      const dist = Math.hypot(x - lastX, y - lastY);
      if (dist >= DISTANCE_THRESHOLD || (lastX === 0 && lastY === 0)) {
        lastX = x;
        lastY = y;
        spawnTrailImage(x, y);
      }
    }

    // Mouse events
    trailSection.addEventListener('mousemove', (e) => {
      handlePointerMove(e.clientX, e.clientY);
    });

    // Touch events for mobile/tablet
    trailSection.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    trailSection.addEventListener('mouseleave', () => {
      lastX = 0;
      lastY = 0;
    });
  }
});
