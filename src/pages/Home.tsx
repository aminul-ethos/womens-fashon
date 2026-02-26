import React from 'react';
import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { CollectionGrid } from '../components/CollectionGrid';
import { About } from '../components/About';
import { Newsletter } from '../components/Newsletter';
import { OfferBar } from '../components/OfferBar';
import { products } from '../data/products';
import { PageTransition } from '../components/PageTransition';
export function Home() {
  // Filter for featured products
  const featuredProducts = products.
  filter((p) => p.isNew || p.isBestseller).
  slice(0, 4);
  const bestSellers = products.filter((p) => p.isBestseller).slice(0, 4);
  return (
    <PageTransition>
      <Hero />
      <OfferBar />
      <Categories />
      <CollectionGrid title="New Arrivals" products={featuredProducts} />
      <About />
      <CollectionGrid title="Best Sellers" products={bestSellers} />
      <Newsletter />
    </PageTransition>);

}