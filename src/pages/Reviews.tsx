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
            number: '50+',
            label: 'Satisfied Clients'
          }, {
            number: '120+',
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
        </div>
      </section>
      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#5E4900] to-[#9E7900] rounded-full blur opacity-70"></div>
                  <div className="relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Featured Client" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <QuoteIcon className="w-12 h-12 text-[#5E4900]/50 mx-auto md:mx-0 mb-4" />
                <p className="text-white text-xl italic mb-6">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quo nisi, eius illum ea porro, reprehenderit in architecto vitae labore ipsa maxime. Tempora distinctio voluptatibus suscipit neque hic veniam voluptates?"
                </p>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    Katherine Stevens
                  </h4>
                  <p className="text-[#5E4900]">CEO, Elevate Digital</p>
                </div>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
      {/* Testimonials Grid */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            What My <span className="text-[#5E4900]">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <GlassmorphicCard key={testimonial.id} className="p-6 hover:bg-white/5 transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#5E4900]">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#5E4900]' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
              </GlassmorphicCard>)}
          </div>
        </div>
      </section>
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