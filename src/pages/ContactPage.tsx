import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  ChevronDownIcon } from
'lucide-react';
export function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const handleInputChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>

  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    });
  };
  const faqs = [
  {
    question: 'What is your return policy?',
    answer:
    "We offer a 30-day return policy for all unworn items in their original condition. Simply contact our support team to initiate a return, and we'll provide a prepaid shipping label."
  },
  {
    question: 'How long does shipping take?',
    answer:
    'Standard shipping takes 5-7 business days within Europe and 7-14 days internationally. Express shipping is available at checkout for 2-3 day delivery.'
  },
  {
    question: 'Do you offer international shipping?',
    answer:
    'Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination and are calculated at checkout.'
  },
  {
    question: 'How do I find my size?',
    answer:
    "We provide detailed size guides for each product. If you're between sizes, we recommend sizing up for a more comfortable fit. Our support team is also happy to help with sizing questions."
  },
  {
    question: 'Can I modify or cancel my order?',
    answer:
    'Orders can be modified or cancelled within 2 hours of placement. After that, our fulfillment process begins and changes may not be possible. Please contact us immediately if you need to make changes.'
  }];

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-12 bg-ivory text-center">
        <div className="container-custom">
          <span className="text-gold uppercase tracking-widest text-xs font-medium mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-matte-black mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            We'd love to hear from you. Reach out with any questions or
            feedback.
          </p>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-8" />
        </div>
      </section>

      {/* Contact Split Section */}
      <section className="py-16 bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <div className="bg-white p-8 lg:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 border border-gray-300 focus:border-gold outline-none transition-colors text-sm" />

                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full p-4 border border-gray-300 focus:border-gold outline-none transition-colors text-sm" />

                </div>
                <div className="relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-300 focus:border-gold outline-none transition-colors text-sm appearance-none bg-white cursor-pointer">

                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Returns & Exchanges</option>
                    <option>Press & Partnerships</option>
                    <option>Other</option>
                  </select>
                  <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Your Message"
                    required
                    className="w-full p-4 border border-gray-300 focus:border-gold outline-none transition-colors text-sm resize-none" />

                </div>
                <button type="submit" className="btn-primary w-full mt-2">
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Store Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="aspect-[16/9] bg-beige/50 rounded-sm overflow-hidden flex flex-col items-center justify-center text-center p-6">
                <MapPinIcon className="w-8 h-8 text-gold mb-3" />
                <h3 className="font-serif text-lg text-matte-black">
                  Visit Our Flagship Store
                </h3>
                <p className="text-gray-500 text-sm mt-2">Paris, France</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-matte-black mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      12 Rue du Faubourg Saint-Honoré
                      <br />
                      Paris, 75008, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-matte-black mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm">+33 1 42 65 00 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MailIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-matte-black mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">hello@lumiere.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ClockIcon className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-matte-black mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mon – Sat: 10:00 – 19:00
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-widest text-xs font-medium mb-4 block">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-matte-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) =>
            <div key={index} className="border-b border-gray-200">
                <button
                onClick={() =>
                setOpenFaqIndex(openFaqIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center py-5 text-left group">

                  <span className="font-serif text-lg text-matte-black group-hover:text-gold transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-gold' : ''}`} />

                </button>
                <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>

                  <p className="text-gray-600 leading-relaxed pb-6 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTransition>);

}