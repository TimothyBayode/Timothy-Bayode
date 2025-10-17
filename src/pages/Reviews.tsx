import React from 'react';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { QuoteIcon } from 'lucide-react';
import useDocumentTitle from '../useDocumentTitle';

const Reviews = () => {

  useDocumentTitle("Clients Reviews and Testimonials - Graphic Designer | Frontend Developer | Product Designer")

  const testimonials = [{
    id: 1,
    name: 'Sarah Johnson',
    company: 'TechVision Inc.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    role: 'Marketing Director',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 5
  }, {
    id: 2,
    name: 'Michael Chen',
    company: 'Innovate Studios',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    role: 'CEO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 5
  }, {
    id: 3,
    name: 'Emily Rodriguez',
    company: 'GreenLeaf Organics',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    role: 'Brand Manager',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 5
  }, {
    id: 4,
    name: 'David Wilson',
    company: 'Spectrum Digital',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    role: 'Product Owner',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 4
  }, {
    id: 5,
    name: 'Jessica Park',
    company: 'Urban Creatives',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    role: 'Art Director',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 5
  }, {
    id: 6,
    name: 'Robert Thompson',
    company: 'Financial Plus',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
    role: 'COO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 5
  }, {
    id: 7,
    name: 'Olivia Martinez',
    company: 'Wellness Hub',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    role: 'Founder',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 4
  }, {
    id: 8,
    name: 'James Lee',
    company: 'Nexus Technologies',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
    role: 'CTO',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 5
  }, {
    id: 9,
    name: 'Sophia Williams',
    company: 'Artisan Collective',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
    role: 'Creative Director',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?',
    rating: 5
  }]; 
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1500]/90 to-[#302600]/90"></div>
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#5E4900] rounded-full filter blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Client <span className="text-[#5E4900]">Reviews</span>
            </h1>
            <p className="text-xl text-gray-300">
              Feedback from clients I've had the pleasure of working with on
              various projects.
            </p>
          </div>
        </div>
      </section>
      {/* Statistics */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            number: '20+',
            label: 'Satisfied Clients'
          }, {
            number: '60+',
            label: 'Projects Completed'
          }, {
            number: '3+',
            label: 'Years Experience'
          }, {
            number: '4+',
            label: 'Certifications'
          }].map((stat, index) => <GlassmorphicCard key={index} className="p-8 text-center">
                <h3 className="text-4xl font-bold text-[#5E4900] mb-2">
                  {stat.number}
                </h3>
                <p className="text-white">{stat.label}</p>
              </GlassmorphicCard>)}
          </div>
          <p className="text-sm text-gray-300 mt-5">
              Review from clients will be updated soon...
            </p>
        </div>
      </section>

      {/* Paste code from readme for client reviews grid */}
      {/* Video testimonial section goes here (code in readme)- remove this line of code */}
      {/* CTA Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to be my next{' '}
              <span className="text-[#5E4900]">success story</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create something amazing that exceeds your
              expectations.
            </p>
            <a href="/contact" className="px-8 py-3 bg-[#5E4900] hover:bg-[#6E5910] text-white font-medium rounded-md inline-block transition-all">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Reviews;