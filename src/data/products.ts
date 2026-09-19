export interface Product { id: string; name: string; category: string; price: number; mrp: number; discount?: number; image: string; rating: number; reviews: number; isNew?: boolean; }

export const sampleProducts: Product[] = [
  {
    "id": "p1",
    "name": "Blue Designer Lehenga",
    "category": "GARMENTS",
    "image": "/images/p19_blue_lehenga_1789372302425.jpg",
    "price": 15000,
    "mrp": 20000,
    "rating": 5,
    "reviews": 10,
    "isNew": true
  },
  {
    "id": "p2",
    "name": "Antique Temple Jewellery",
    "category": "JEWELLERY",
    "image": "/images/p20_temple_jewellery_1789372320321.jpg",
    "price": 15500,
    "mrp": 20500,
    "rating": 5,
    "reviews": 17,
    "isNew": true
  },
  {
    "id": "p3",
    "name": "Pearl Embellished Potli",
    "category": "ACCESSORIES",
    "image": "/images/p21_pearl_potli_1789372334792.jpg",
    "price": 16000,
    "mrp": 21000,
    "rating": 5,
    "reviews": 24,
    "isNew": true
  },
  {
    "id": "p4",
    "name": "Magenta Silk Saree",
    "category": "GARMENTS",
    "image": "/images/p22_magenta_saree_1789372351468.jpg",
    "price": 16500,
    "mrp": 21500,
    "rating": 5,
    "reviews": 31,
    "isNew": true
  },
  {
    "id": "p5",
    "name": "Mens Raw Silk Sherwani",
    "category": "GARMENTS",
    "image": "/images/p23_sherwani_1789372364071.jpg",
    "price": 17000,
    "mrp": 22000,
    "rating": 5,
    "reviews": 38,
    "isNew": true
  },
  {
    "id": "p6",
    "name": "Georgette Floral Dupatta",
    "category": "ACCESSORIES",
    "image": "/images/p24_dupatta_1789372390774.jpg",
    "price": 17500,
    "mrp": 22500,
    "rating": 5,
    "reviews": 45,
    "isNew": false
  },
  {
    "id": "p7",
    "name": "Banarasi Silk Fabric",
    "category": "FABRICS",
    "image": "/images/p25_fabric_1789372404713.jpg",
    "price": 18000,
    "mrp": 23000,
    "rating": 5,
    "reviews": 52,
    "isNew": false
  },
  {
    "id": "p8",
    "name": "Designer Ruffle Saree",
    "category": "GARMENTS",
    "image": "/images/p26_ruffle_saree_1789372417176.jpg",
    "price": 18500,
    "mrp": 23500,
    "rating": 5,
    "reviews": 59,
    "isNew": false
  },
  {
    "id": "p9",
    "name": "Kundan Maang Tikka",
    "category": "JEWELLERY",
    "image": "/images/p27_maang_tikka_1789372433916.jpg",
    "price": 19000,
    "mrp": 24000,
    "rating": 5,
    "reviews": 66,
    "isNew": false
  },
  {
    "id": "p10",
    "name": "Rose Gold Tissue Lehenga",
    "category": "GARMENTS",
    "image": "/images/p28_rose_lehenga_1789372447057.jpg",
    "price": 19500,
    "mrp": 24500,
    "rating": 5,
    "reviews": 73,
    "isNew": false
  },
  {
    "id": "p11",
    "name": "Mint Green Organza Saree",
    "category": "GARMENTS",
    "image": "/images/p29_mint_saree_1789372473704.jpg",
    "price": 20000,
    "mrp": 25000,
    "rating": 5,
    "reviews": 80,
    "isNew": false
  },
  {
    "id": "p12",
    "name": "Ruby Diamond Necklace",
    "category": "JEWELLERY",
    "image": "/images/p30_ruby_necklace_1789372486980.jpg",
    "price": 20500,
    "mrp": 25500,
    "rating": 5,
    "reviews": 87,
    "isNew": false
  },
  {
    "id": "p13",
    "name": "Hand Embroidered Jutti",
    "category": "ACCESSORIES",
    "image": "/images/p31_jutti_1789372517183.jpg",
    "price": 21000,
    "mrp": 26000,
    "rating": 5,
    "reviews": 94,
    "isNew": false
  },
  {
    "id": "p14",
    "name": "Premium Maroon Lehenga",
    "category": "GARMENTS",
    "image": "/images/user_lehenga_collage.jpg",
    "price": 21500,
    "mrp": 26500,
    "rating": 5,
    "reviews": 101,
    "isNew": false
  },
  {
    "id": "p15",
    "name": "Blush Pink Bridal Lehenga",
    "category": "GARMENTS",
    "image": "/images/user_lehenga_pink.jpg",
    "price": 22000,
    "mrp": 27000,
    "rating": 5,
    "reviews": 108,
    "isNew": false
  },
  {
    "id": "p16",
    "name": "Silver Crystal Lehenga",
    "category": "GARMENTS",
    "image": "/images/user_lehenga_silver.jpg",
    "price": 22500,
    "mrp": 27500,
    "rating": 5,
    "reviews": 115,
    "isNew": false
  },
  {
    "id": "p17",
    "name": "Mauve Indo-Western Suit",
    "category": "GARMENTS",
    "image": "/images/user_mauve_suit.jpg",
    "price": 23000,
    "mrp": 28000,
    "rating": 5,
    "reviews": 122,
    "isNew": false
  },
  {
    "id": "p18",
    "name": "Traditional Red Saree",
    "category": "GARMENTS",
    "image": "/images/p10_saree.jpg",
    "price": 23500,
    "mrp": 28500,
    "rating": 5,
    "reviews": 129,
    "isNew": false
  },
  {
    "id": "p19",
    "name": "Polki Bridal Choker",
    "category": "JEWELLERY",
    "image": "/images/p11_choker.jpg",
    "price": 24000,
    "mrp": 29000,
    "rating": 5,
    "reviews": 136,
    "isNew": false
  },
  {
    "id": "p20",
    "name": "Velvet Zardosi Potli",
    "category": "ACCESSORIES",
    "image": "/images/p12_potli.jpg",
    "price": 24500,
    "mrp": 29500,
    "rating": 5,
    "reviews": 143,
    "isNew": false
  }
];

export const categories = [
  {
    "id": "c1",
    "name": "GARMENTS",
    "image": "/images/cat_garments.jpg",
    "description": "Premium ethnic and western wear"
  },
  {
    "id": "c2",
    "name": "JEWELLERY",
    "image": "/images/cat_jewellery.jpg",
    "description": "Handcrafted designer jewellery"
  },
  {
    "id": "c3",
    "name": "ACCESSORIES",
    "image": "/images/cat_accessories.jpg",
    "description": "Elegant add-ons for your outfit"
  },
  {
    "id": "c4",
    "name": "FABRICS",
    "image": "/images/cat_fabrics.jpg",
    "description": "Premium materials for custom outfits"
  },
  {
    "id": "c5",
    "name": "BOUTIQUE COLLECTION",
    "image": "/images/cat_boutique.jpg",
    "description": "Exclusive designer creations"
  },
  {
    "id": "c6",
    "name": "PREMIUM COLLECTION",
    "image": "/images/cat_premium.jpg",
    "description": "Luxury outfits for special occasions"
  }
];