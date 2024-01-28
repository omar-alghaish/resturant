export const foodCategories = [
  {
    id: 1,
    name: 'الأطباق الرئيسية',
    subcategories: [
      {
        id: 11,
        name: 'الأطباق التقليدية',
        foods: [
          { id: 111, name: 'كبة حلبية', quantity: 1, price: 10 },
          { id: 112, name: 'منسف', quantity: 1, price: 12 },
          { id: 113, name: 'ملوخية', quantity: 1, price: 15 },
          { id: 114, name: 'كفتة مشوية', quantity: 1, price: 18 },
          { id: 115, name: 'روز بلبن', quantity: 1, price: 20 }
        ]
      },
      {
        id: 12,
        name: 'المأكولات العالمية',
        foods: [
          { id: 121, name: 'باستا بولونيز', quantity: 1, price: 18 },
          {
            id: 122,
            name: 'سوشي',
            quantity: 1,
            price: 20,
            options: [
              { id: 7, name: 'عدد القطع', price: 0 },
              { id: 8, name: 'نوع السمك', price: 5 }
            ],
            additionals: [{ id: 107, name: 'صوص الصويا', price: 3 }]
          },

          { id: 123, name: 'تاكوس', quantity: 1, price: 22 },
          { id: 124, name: 'برجر كلاسيكي', quantity: 1, price: 15 },
          { id: 125, name: 'بيتزا مارغريتا', quantity: 1, price: 25 }
        ]
      },
      {
        id: 13,
        name: 'خيارات نباتية',
        foods: [
          { id: 131, name: 'فاصوليا بالطماطم', quantity: 1, price: 14 },
          { id: 132, name: 'كاري الخضار', quantity: 1, price: 16 },
          { id: 133, name: 'بطاطا مهروسة بالزيت', quantity: 1, price: 12 },
          { id: 134, name: 'سلطة تونة نباتية', quantity: 1, price: 20 },
          { id: 135, name: 'كوسة محشوة', quantity: 1, price: 18 }
        ]
      },
      {
        id: 14,
        name: 'أطباق الأسماك',
        foods: [
          { id: 141, name: 'سمك مشوي', quantity: 1, price: 22 },
          { id: 142, name: 'تجبيرة سمك', quantity: 1, price: 25 },
          { id: 143, name: 'سلطة سمك السلمون', quantity: 1, price: 30 },
          { id: 144, name: 'كريب سمك بالصلصة', quantity: 1, price: 28 },
          { id: 145, name: 'شوربة بحرية', quantity: 1, price: 24 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 2,
    name: 'المقبلات',
    subcategories: [
      {
        id: 21,
        name: 'أطعمة الأصابع',
        foods: [
          {
            id: 211,
            name: 'ناتشوز',
            quantity: 1,
            price: 8,
            options: [
              { id: 9, name: 'صغير', price: 0 },
              { id: 10, name: 'كبير', price: 2 }
            ],
            additionals: [
              { id: 108, name: 'جبنة', price: 4 },
              { id: 109, name: 'باريكيو', price: 3 },
              { id: 1110, name: 'خضار', price: 10 }
            ]
          },

          { id: 212, name: 'كريسبي تشيكن', quantity: 1, price: 10 },
          { id: 213, name: 'بطاطس مقلية', quantity: 1, price: 6 },
          { id: 214, name: 'ربيان مقرمش', quantity: 1, price: 15 },
          { id: 215, name: 'البطاطا الحلوة المشوية', quantity: 1, price: 12 }
        ]
      },
      {
        id: 22,
        name: 'الصلصات والسالسا',
        foods: [
          { id: 221, name: 'صلصة الرانش', quantity: 1, price: 15 },
          { id: 222, name: 'صوص الطماطم', quantity: 1, price: 12 },
          { id: 223, name: 'صلصة البيستو', quantity: 1, price: 18 },
          { id: 224, name: 'صوص الصويا', quantity: 1, price: 14 },
          { id: 225, name: 'صلصة الثوم', quantity: 1, price: 10 }
        ]
      },
      {
        id: 23,
        name: 'تشكيلة الحساء',
        foods: [
          { id: 231, name: 'حساء الطماطم', quantity: 1, price: 14 },
          { id: 232, name: 'حساء العدس', quantity: 1, price: 16 },
          { id: 233, name: 'حساء الفطر', quantity: 1, price: 18 },
          { id: 234, name: 'حساء الدجاج بالخضار', quantity: 1, price: 20 },
          { id: 235, name: 'شوربة البصل المحمصة', quantity: 1, price: 22 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 3,
    name: 'الحلويات',
    subcategories: [
      {
        id: 31,
        name: 'الكيك والمعجنات',
        foods: [
          { id: 311, name: 'كيك الشوكولاته', quantity: 1, price: 15 },
          { id: 312, name: 'تشيز كيك', quantity: 1, price: 18 },
          { id: 313, name: 'كرواسون بالفستق', quantity: 1, price: 12 },
          { id: 314, name: 'بسكويت الزبدة', quantity: 1, price: 10 },
          { id: 315, name: 'كليجا', quantity: 1, price: 20 }
        ]
      },
      {
        id: 32,
        name: 'أطعمة الآيس كريم',
        foods: [
          { id: 321, name: 'آيس كريم الفانيليا', quantity: 1, price: 10 },
          { id: 322, name: 'آيس كريم الشوكولاته', quantity: 1, price: 12 },
          { id: 323, name: 'آيس كريم الفراولة', quantity: 1, price: 14 },
          { id: 324, name: 'آيس كريم الكراميل', quantity: 1, price: 16 },
          { id: 325, name: 'آيس كريم الكوكيز', quantity: 1, price: 18 }
        ]
      },
      {
        id: 33,
        name: 'أطباق الفاكهة',
        foods: [
          { id: 331, name: 'فاكهة موس', quantity: 1, price: 14 },
          { id: 332, name: 'سلطة فواكه', quantity: 1, price: 16 },
          { id: 333, name: 'كوكتيل فاكهة', quantity: 1, price: 18 },
          { id: 334, name: 'عصير الفراولة', quantity: 1, price: 12 },
          { id: 335, name: 'تشكيلة الفواكه الموسمية', quantity: 1, price: 20 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 4,
    name: 'المشروبات',
    subcategories: [
      {
        id: 41,
        name: 'المشروبات الغازية',
        foods: [
          { id: 411, name: 'كوكا كولا', quantity: 1, price: 5 },
          { id: 412, name: 'بيبسي', quantity: 1, price: 5 },
          { id: 413, name: 'فانتا', quantity: 1, price: 5 },
          { id: 414, name: 'سفن أب', quantity: 1, price: 5 },
          { id: 415, name: 'ميرندا', quantity: 1, price: 5 }
        ]
      },
      {
        id: 42,
        name: 'عصائر طازجة',
        foods: [
          { id: 421, name: 'عصير البرتقال', quantity: 1, price: 8 },
          { id: 422, name: 'عصير التفاح', quantity: 1, price: 7 },
          { id: 423, name: 'عصير العنب', quantity: 1, price: 9 },
          { id: 424, name: 'عصير الفراولة', quantity: 1, price: 10 },
          { id: 425, name: 'عصير الليمون', quantity: 1, price: 6 }
        ]
      },
      {
        id: 43,
        name: 'القهوة والشاي',
        foods: [
          { id: 431, name: 'قهوة سوداء', quantity: 1, price: 12 },
          { id: 432, name: 'قهوة بالحليب', quantity: 1, price: 14 },
          { id: 433, name: 'شاي أخضر', quantity: 1, price: 10 },
          { id: 434, name: 'شاي أسود', quantity: 1, price: 8 },
          { id: 435, name: 'شاي بالنعناع', quantity: 1, price: 15 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 5,
    name: 'وجبات الفطور الخاصة',
    subcategories: [
      {
        id: 51,
        name: 'الفطائر والوافل',
        foods: [
          { id: 511, name: 'وافل بالعسل', quantity: 1, price: 15 },
          { id: 512, name: 'فطيرة بالتفاح', quantity: 1, price: 18 },
          { id: 513, name: 'وافل بالشوكولاته', quantity: 1, price: 20 },
          { id: 514, name: 'فطيرة بالجبنة', quantity: 1, price: 16 },
          { id: 515, name: 'وافل بالفواكه', quantity: 1, price: 22 }
        ]
      },
      {
        id: 52,
        name: 'البيض المخفوق والبيض المطهو',
        foods: [
          { id: 521, name: 'بيض مسلوق', quantity: 1, price: 10 },
          { id: 522, name: 'بيض مقلي', quantity: 1, price: 12 },
          { id: 523, name: 'عجة بالبصل', quantity: 1, price: 14 }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'السلطات',
    subcategories: [
      {
        id: 61,
        name: 'سلطات الخضار',
        foods: [
          { id: 611, name: 'سلطة جرجير', quantity: 1, price: 12 },
          { id: 612, name: 'سلطة طماطم وخيار', quantity: 1, price: 14 },
          { id: 613, name: 'سلطة البطاطس بالمايونيز', quantity: 1, price: 16 },
          { id: 614, name: 'سلطة الكينوا بالخضار', quantity: 1, price: 18 },
          { id: 615, name: 'سلطة البندورة والجبنة', quantity: 1, price: 20 }
        ]
      },
      {
        id: 62,
        name: 'سلطات الفاكهة',
        foods: [
          { id: 621, name: 'سلطة الفواكه المشكلة', quantity: 1, price: 18 },
          { id: 622, name: 'سلطة المانجو والأفوكادو', quantity: 1, price: 20 },
          { id: 623, name: 'سلطة البرتقال والزبيب', quantity: 1, price: 16 },
          { id: 624, name: 'سلطة الفراولة والبندورة', quantity: 1, price: 22 },
          { id: 625, name: 'سلطة الكيوي والتفاح', quantity: 1, price: 15 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 7,
    name: 'المشويات',
    subcategories: [
      {
        id: 71,
        name: 'لحوم مشوية',
        foods: [
          { id: 711, name: 'شيش طاووق', quantity: 1, price: 22 },
          { id: 712, name: 'ستيك لحم بقر', quantity: 1, price: 25 },
          { id: 713, name: 'كباب خروف', quantity: 1, price: 30 },
          { id: 714, name: 'برجر مشوي', quantity: 1, price: 28 },
          { id: 715, name: 'كباب كفتة', quantity: 1, price: 24 }
        ]
      },
      {
        id: 72,
        name: 'أسماك مشوية',
        foods: [
          { id: 721, name: 'سمك سلمون مشوي', quantity: 1, price: 25 },
          { id: 722, name: 'توتو مشوي', quantity: 1, price: 28 },
          { id: 723, name: 'سمك تونة مشوي', quantity: 1, price: 30 },
          { id: 724, name: 'سلمون سويدي مشوي', quantity: 1, price: 32 },
          { id: 725, name: 'كباب سمك', quantity: 1, price: 26 }
        ]
      },
      {
        id: 73,
        name: 'خضار مشوية',
        foods: [
          { id: 731, name: 'خضار مشوية مع صلصة الباربيكيو', quantity: 1, price: 20 },
          { id: 732, name: 'كوسا مشوية', quantity: 1, price: 18 },
          { id: 733, name: 'باذنجان مشوي', quantity: 1, price: 15 },
          { id: 734, name: 'فلفل حلو مشوي', quantity: 1, price: 16 },
          { id: 735, name: 'ذرة مشوية', quantity: 1, price: 14 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 8,
    name: 'الحساء',
    subcategories: [
      {
        id: 81,
        name: 'حساء الدجاج',
        foods: [
          { id: 811, name: 'حساء دجاج بالخضار', quantity: 1, price: 15 },
          { id: 812, name: 'شوربة دجاج بالشعيرية', quantity: 1, price: 14 },
          { id: 813, name: 'حساء الدجاج الحار', quantity: 1, price: 18 },
          { id: 814, name: 'شوربة الدجاج بالكريمة', quantity: 1, price: 20 },
          { id: 815, name: 'حساء دجاج بالفطر', quantity: 1, price: 16 }
        ]
      },
      {
        id: 82,
        name: 'حساء الخضار',
        foods: [
          { id: 821, name: 'حساء الخضار المشكل', quantity: 1, price: 12 },
          { id: 822, name: 'شوربة الطماطم بالخضار', quantity: 1, price: 14 },
          { id: 823, name: 'حساء اللفت بالزنجبيل', quantity: 1, price: 16 },
          { id: 824, name: 'شوربة البصل الفرنسية', quantity: 1, price: 15 },
          { id: 825, name: 'حساء الكرفس والجزر', quantity: 1, price: 18 }
        ]
      },
      {
        id: 83,
        name: 'حساء اللحم',
        foods: [
          { id: 831, name: 'حساء اللحم بالعدس', quantity: 1, price: 20 },
          { id: 832, name: 'شوربة اللحم بالخضار', quantity: 1, price: 22 },
          { id: 833, name: 'حساء اللحم بالفاصوليا', quantity: 1, price: 18 },
          { id: 834, name: 'شوربة اللحم بالشعيرية', quantity: 1, price: 16 },
          { id: 835, name: 'حساء اللحم التايلاندي', quantity: 1, price: 25 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 9,
    name: 'الوجبات الخفيفة',
    subcategories: [
      {
        id: 91,
        name: 'المأكولات الشارعية',
        foods: [
          { id: 911, name: 'فلافل', quantity: 1, price: 8 },
          { id: 912, name: 'شاورما', quantity: 1, price: 10 },
          { id: 913, name: 'سمبوسة', quantity: 1, price: 6 },
          { id: 914, name: 'كبة', quantity: 1, price: 12 },
          { id: 915, name: 'فول وطحينة', quantity: 1, price: 7 }
        ]
      },
      {
        id: 92,
        name: 'البيتزا الصغيرة',
        foods: [
          { id: 921, name: 'بيتزا الفطر', quantity: 1, price: 15 },
          { id: 922, name: 'بيتزا الخضار', quantity: 1, price: 14 },
          { id: 923, name: 'بيتزا البيبروني', quantity: 1, price: 18 },
          { id: 924, name: 'بيتزا الدجاج', quantity: 1, price: 16 },
          { id: 925, name: 'بيتزا البحرية', quantity: 1, price: 20 }
        ]
      },
      {
        id: 93,
        name: 'الساندويتشات',
        foods: [
          { id: 931, name: 'ساندويتش الدجاج المشوي', quantity: 1, price: 12 },
          { id: 932, name: 'ساندويتش السلمون', quantity: 1, price: 14 },
          { id: 933, name: 'ساندويتش اللحم البارد', quantity: 1, price: 16 },
          { id: 934, name: 'ساندويتش الخضار الطازجة', quantity: 1, price: 10 },
          { id: 935, name: 'ساندويتش الجبنة', quantity: 1, price: 15 }
        ]
      }
      // ... other subcategories for this category
    ]
  },
  {
    id: 10,
    name: 'الأطعمة العضوية',
    subcategories: [
      {
        id: 101,
        name: 'الخضروات العضوية',
        foods: [
          { id: 1011, name: 'بطاطس عضوية', quantity: 1, price: 8 },
          { id: 1012, name: 'جزر عضوي', quantity: 1, price: 6 },
          { id: 1013, name: 'بروكلي عضوي', quantity: 1, price: 10 },
          { id: 1014, name: 'فاصوليا خضراء عضوية', quantity: 1, price: 12 },
          { id: 1015, name: 'طماطم عضوية', quantity: 1, price: 7 }
        ]
      },
      {
        id: 102,
        name: 'الفواكه العضوية',
        foods: [
          { id: 1021, name: 'تفاح عضوي', quantity: 1, price: 10 },
          { id: 1022, name: 'موز عضوي', quantity: 1, price: 8 },
          { id: 1023, name: 'فراولة عضوية', quantity: 1, price: 12 },
          { id: 1024, name: 'عنب عضوي', quantity: 1, price: 14 },
          { id: 1025, name: 'مشمش عضوي', quantity: 1, price: 9 }
        ]
      },
      {
        id: 103,
        name: 'منتجات الألبان العضوية',
        foods: [
          { id: 1031, name: 'حليب عضوي', quantity: 1, price: 8 },
          { id: 1032, name: 'جبنة عضوية', quantity: 1, price: 10 },
          { id: 1033, name: 'زبدة عضوية', quantity: 1, price: 6 },
          { id: 1034, name: 'زبادي عضوي', quantity: 1, price: 7 },
          { id: 1035, name: 'عصير حليب عضوي', quantity: 1, price: 9 }
        ]
      }
      // ... other subcategories for this category
    ]
  }
  // Add more categories as needed
]
