export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'Casual' | 'Party' | 'Luxury';
  images: string[];
  description: string;
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL')[];
  isNew?: boolean;
  isBestseller?: boolean;
  colors: string[];
}

export const products: Product[] = [
{
  id: '1',
  name: 'Riviera Slip Dress',
  price: 189,
  category: 'Casual',
  images: [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80'],

  description:
  'Effortlessly chic, the Riviera Slip Dress is crafted from pure silk for a fluid drape. Perfect for summer evenings or layered for cooler days.',
  sizes: ['XS', 'S', 'M', 'L'],
  isNew: true,
  colors: ['Ivory', 'Sage']
},
{
  id: '2',
  name: "Côte d'Azur Midi",
  price: 245,
  category: 'Party',
  images: [
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80'],

  description:
  'Inspired by the French Riviera, this midi dress features delicate pleating and a flattering waistline. A timeless addition to your wardrobe.',
  sizes: ['S', 'M', 'L', 'XL'],
  isBestseller: true,
  colors: ['Beige', 'Black']
},
{
  id: '3',
  name: 'Soleil Wrap Dress',
  price: 159,
  originalPrice: 199,
  category: 'Casual',
  images: [
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80'],

  description:
  'The Soleil Wrap Dress embodies relaxed elegance. Made from breathable linen blend, it features a classic wrap silhouette that suits every body type.',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: ['Mustard', 'White']
},
{
  id: '4',
  name: 'Noir Evening Gown',
  price: 580,
  category: 'Luxury',
  images: [
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80'],

  description:
  'Make a statement in the Noir Evening Gown. Sculptural tailoring meets modern minimalism in this floor-length masterpiece.',
  sizes: ['S', 'M', 'L'],
  isNew: true,
  colors: ['Black']
},
{
  id: '5',
  name: 'Capri Linen Dress',
  price: 129,
  category: 'Casual',
  images: [
  'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80'],

  description:
  'Lightweight and breezy, the Capri Linen Dress is your ultimate vacation companion. Features adjustable straps and side pockets.',
  sizes: ['XS', 'S', 'M', 'L'],
  colors: ['White', 'Sand']
},
{
  id: '6',
  name: 'Lumière Cocktail Dress',
  price: 320,
  category: 'Party',
  images: [
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80'],

  description:
  'Shine bright in the Lumière Cocktail Dress. Featuring subtle sequin embellishments on a silk chiffon base.',
  sizes: ['S', 'M', 'L'],
  colors: ['Gold', 'Silver']
},
{
  id: '7',
  name: 'Venetian Silk Maxi',
  price: 450,
  category: 'Luxury',
  images: [
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80',
  'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80'],

  description:
  'Pure Italian silk tailored into a flowing maxi silhouette. The Venetian dress defines understated luxury.',
  sizes: ['S', 'M', 'L'],
  isBestseller: true,
  colors: ['Red', 'Black']
},
{
  id: '8',
  name: 'Monaco Blazer Dress',
  price: 295,
  category: 'Party',
  images: [
  'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80',
  'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=600&q=80'],

  description:
  'Sharp tailoring meets feminine allure. The Monaco Blazer Dress features a double-breasted front and satin lapels.',
  sizes: ['XS', 'S', 'M', 'L'],
  colors: ['White', 'Black']
},
{
  id: '9',
  name: 'Santorini Breeze',
  price: 145,
  category: 'Casual',
  images: [
  'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=600&q=80',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80'],

  description:
  'Capture the essence of the Greek islands with this airy cotton dress. Features intricate embroidery details.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Blue/White']
},
{
  id: '10',
  name: 'Versailles Ball Gown',
  price: 890,
  category: 'Luxury',
  images: [
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
  'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80'],

  description:
  'Fit for royalty, the Versailles Ball Gown features layers of tulle and hand-stitched bodice details.',
  sizes: ['S', 'M', 'L'],
  isNew: true,
  colors: ['Champagne']
},
{
  id: '11',
  name: 'Milan Structure Dress',
  price: 210,
  category: 'Party',
  images: [
  'https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80'],

  description:
  'Architectural lines define the Milan Structure Dress. A modern choice for the contemporary woman.',
  sizes: ['XS', 'S', 'M', 'L'],
  colors: ['Grey', 'Black']
},
{
  id: '12',
  name: 'Provence Floral Midi',
  price: 175,
  category: 'Casual',
  images: [
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=80',
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80'],

  description:
  'Romantic floral prints on soft viscose fabric. The Provence Midi brings a touch of the French countryside to your look.',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Floral Print']
},
{
  id: '13',
  name: 'Tuscany Knit Dress',
  price: 135,
  category: 'Casual',
  images: [
  'https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80',
  'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&q=80'],

  description:
  'Comfort meets style in this ribbed knit dress. Hugs the figure in all the right places.',
  sizes: ['XS', 'S', 'M', 'L'],
  colors: ['Terracotta', 'Cream']
},
{
  id: '14',
  name: 'Parisian Night Mini',
  price: 260,
  category: 'Party',
  images: [
  'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80'],

  description:
  'A playful yet sophisticated mini dress with velvet trim. Perfect for nights out in the city of lights.',
  sizes: ['XS', 'S', 'M', 'L'],
  isBestseller: true,
  colors: ['Midnight Blue']
},
{
  id: '15',
  name: 'Kyoto Silk Kimono',
  price: 420,
  category: 'Luxury',
  images: [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80'],

  description:
  'Inspired by traditional Japanese aesthetics, this silk kimono dress features hand-painted motifs.',
  sizes: ['One Size'],
  colors: ['Silk Print']
},
{
  id: '16',
  name: 'Amalfi Coast Gown',
  price: 650,
  category: 'Luxury',
  images: [
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80'],

  description:
  'Breathtaking elegance for special occasions. The Amalfi Coast Gown flows like the ocean breeze.',
  sizes: ['S', 'M', 'L'],
  isNew: true,
  colors: ['Azure', 'White']
}];