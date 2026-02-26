import React from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
export function AboutPage() {
  const heroAnim = useScrollAnimation();
  const foundingAnim = useScrollAnimation();
  const craftAnim = useScrollAnimation();
  const sustainAnim = useScrollAnimation();
  const teamAnim = useScrollAnimation();
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
            alt="Lumière Atelier"
            className="w-full h-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        </div>
        <div
          ref={heroAnim.ref}
          className={`absolute bottom-0 left-0 right-0 pb-16 md:pb-24 text-center ${heroAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

          <span className="inline-block text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4">
            LUMIÈRE
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Our Story
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>
      </section>

      {/* Brand Founding Section */}
      <section className="py-20 bg-ivory" ref={foundingAnim.ref}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div
              className={`${foundingAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

              <span className="text-gold uppercase tracking-widest text-xs font-medium mb-4 block">
                The Beginning
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-matte-black mb-6">
                Founded on a Vision of Timeless Elegance
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Lumière was born in 2018 from a simple belief: that modern women
                deserve clothing that transcends seasonal trends. Founded by
                Isabelle Laurent in her Paris atelier, the brand began with a
                capsule collection of just twelve dresses — each one a study in
                understated luxury.
              </p>
              <p className="text-gray-600 leading-relaxed">
                What started as a small studio has grown into a globally
                recognized name, yet our commitment to quality over quantity
                remains unchanged. Every piece still begins with a sketch, a
                conversation about fabric, and a deep respect for the women who
                will wear it.
              </p>
            </div>
            <div
              className={`aspect-[4/5] overflow-hidden shadow-xl ${foundingAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: '0.2s'
              }}>

              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80"
                alt="Founding Story"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />

            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-white" ref={craftAnim.ref}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div
              className={`order-2 md:order-1 aspect-[4/5] overflow-hidden shadow-xl ${craftAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

              <img
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Craftsmanship"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />

            </div>
            <div
              className={`order-1 md:order-2 ${craftAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: '0.2s'
              }}>

              <span className="text-gold uppercase tracking-widest text-xs font-medium mb-4 block">
                Craftsmanship
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-matte-black mb-6">
                Made by Hand, Worn with Pride
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every Lumière garment passes through the hands of skilled
                artisans who bring decades of experience to their craft. From
                pattern cutting to the final stitch, each step is performed with
                meticulous attention to detail.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We source the finest fabrics from Italian mills and French lace
                houses, selecting materials not just for their beauty but for
                their feel against the skin. Our silk is hand-washed, our wool
                is ethically sourced, and our cotton is organic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-beige/20" ref={sustainAnim.ref}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div
              className={`${sustainAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

              <span className="text-gold uppercase tracking-widest text-xs font-medium mb-4 block">
                Sustainability
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-matte-black mb-6">
                Fashion with a Conscience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe luxury and responsibility go hand in hand. Lumière is
                committed to reducing our environmental footprint through
                sustainable practices at every stage of production.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From biodegradable packaging to carbon-neutral shipping, we are
                constantly innovating to ensure that our beautiful garments
                don't come at the cost of our planet. By 2026, we aim to be
                fully circular in our production process.
              </p>
            </div>
            <div
              className={`aspect-[4/5] overflow-hidden shadow-xl ${sustainAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: '0.2s'
              }}>

              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80"
                alt="Sustainability"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />

            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-ivory" ref={teamAnim.ref}>
        <div className="container-custom text-center">
          <div
            className={`mb-16 ${teamAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>

            <span className="text-gold uppercase tracking-widest text-xs font-medium mb-4 block">
              The Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-matte-black mb-6">
              The Visionaries Behind Lumière
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              A passionate team dedicated to redefining modern luxury
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
            {
              name: 'Isabelle Laurent',
              title: 'Creative Director',
              image:
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
            },
            {
              name: 'Marie Dubois',
              title: 'Head of Design',
              image:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
            },
            {
              name: 'Sophie Chen',
              title: 'Sustainability Lead',
              image:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80'
            }].
            map((member, index) =>
            <div
              key={member.name}
              className={`${teamAnim.isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                animationDelay: `${0.2 + index * 0.1}s`
              }}>

                <div className="w-32 h-32 rounded-full mx-auto overflow-hidden mb-6 shadow-lg">
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover" />

                </div>
                <h3 className="font-serif text-lg text-matte-black mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-mid text-sm uppercase tracking-widest">
                  {member.title}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-matte-black text-center">
        <div className="container-custom">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Discover the Collection
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Explore our latest pieces, crafted with care and designed to last.
          </p>
          <Link
            to="/products"
            className="inline-block bg-white text-matte-black px-10 py-4 uppercase tracking-widest text-xs font-medium hover:bg-gold hover:text-white transition-colors duration-300">

            Shop Now
          </Link>
        </div>
      </section>
    </PageTransition>);

}