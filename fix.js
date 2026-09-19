const fs = require('fs'); 
const products = [
  { id: 'p1', name: 'Blue Designer Lehenga', category: 'GARMENTS', image: '/images/p19_blue_lehenga_1789372302425.jpg' },
  { id: 'p2', name: 'Antique Temple Jewellery', category: 'JEWELLERY', image: '/images/p20_temple_jewellery_1789372320321.jpg' },
  { id: 'p3', name: 'Pearl Embellished Potli', category: 'ACCESSORIES', image: '/images/p21_pearl_potli_1789372334792.jpg' },
  { id: 'p4', name: 'Magenta Silk Saree', category: 'GARMENTS', image: '/images/p22_magenta_saree_1789372351468.jpg' },
  { id: 'p5', name: 'Mens Raw Silk Sherwani', category: 'GARMENTS', image: '/images/p23_sherwani_1789372364071.jpg' },
  { id: 'p6', name: 'Georgette Floral Dupatta', category: 'ACCESSORIES', image: '/images/p24_dupatta_1789372390774.jpg' },
  { id: 'p7', name: 'Banarasi Silk Fabric', category: 'FABRICS', image: '/images/p25_fabric_1789372404713.jpg' },
  { id: 'p8', name: 'Designer Ruffle Saree', category: 'GARMENTS', image: '/images/p26_ruffle_saree_1789372417176.jpg' },
  { id: 'p9', name: 'Kundan Maang Tikka', category: 'JEWELLERY', image: '/images/p27_maang_tikka_1789372433916.jpg' },
  { id: 'p10', name: 'Rose Gold Tissue Lehenga', category: 'GARMENTS', image: '/images/p28_rose_lehenga_1789372447057.jpg' },
  { id: 'p11', name: 'Mint Green Organza Saree', category: 'GARMENTS', image: '/images/p29_mint_saree_1789372473704.jpg' },
  { id: 'p12', name: 'Ruby Diamond Necklace', category: 'JEWELLERY', image: '/images/p30_ruby_necklace_1789372486980.jpg' },
  { id: 'p13', name: 'Hand Embroidered Jutti', category: 'ACCESSORIES', image: '/images/p31_jutti_1789372517183.jpg' },
  { id: 'p14', name: 'Premium Maroon Lehenga', category: 'GARMENTS', image: '/images/user_lehenga_collage.jpg' },
  { id: 'p15', name: 'Blush Pink Bridal Lehenga', category: 'GARMENTS', image: '/images/user_lehenga_pink.jpg' },
  { id: 'p16', name: 'Silver Crystal Lehenga', category: 'GARMENTS', image: '/images/user_lehenga_silver.jpg' },
  { id: 'p17', name: 'Mauve Indo-Western Suit', category: 'GARMENTS', image: '/images/user_mauve_suit.jpg' },
  { id: 'p18', name: 'Traditional Red Saree', category: 'GARMENTS', image: '/images/p10_saree.jpg' },
  { id: 'p19', name: 'Polki Bridal Choker', category: 'JEWELLERY', image: '/images/p11_choker.jpg' },
  { id: 'p20', name: 'Velvet Zardosi Potli', category: 'ACCESSORIES', image: '/images/p12_potli.jpg' }
].map((p, i) => ({ ...p, price: 15000 + i*500, mrp: 20000 + i*500, rating: 5, reviews: 10 + i*7, isNew: i < 5 }));

const content = 'export interface Product { id: string; name: string; category: string; price: number; mrp: number; discount?: number; image: string; rating: number; reviews: number; isNew?: boolean; }\n\nexport const sampleProducts: Product[] = ' + JSON.stringify(products, null, 2) + ';\n\nexport const categories = ' + JSON.stringify(require('./src/data/products.ts').categories, null, 2) + ';';

fs.writeFileSync('./src/data/products.ts', content);
