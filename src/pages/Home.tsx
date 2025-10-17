import React from 'react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { ArrowRightIcon, CodeIcon, PenToolIcon, LayersIcon } from 'lucide-react';
import useDocumentTitle from '../useDocumentTitle';

const Home = () => {

  useDocumentTitle("Timothy Bayode - Graphic Designer | Frontend Developer | Product Designer")

  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1500]/90 to-[#302600]/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5E4900] rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute top-40 -left-20 w-60 h-60 bg-[#5E4900] rounded-full filter blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Turning Your <span className="text-[#5E4900]">Vision</span> Into Digital 
                <span className="text-[#5E4900]"> Reality</span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-lg">
              Hi, I'm Timothy. A Graphic Designer and Front-End Developer with 3+ years of experience, turning ideas into clean, creative and functional designs.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/projects" className="px-6 py-3 bg-[#5E4900] hover:bg-[#6E5910] text-white font-medium rounded-md flex items-center gap-2 transition-all">
                  View Projects <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="px-6 py-3 border border-[#5E4900] text-white hover:bg-[#5E4900]/20 font-medium rounded-md transition-all">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#5E4900] to-[#9E7900] rounded-full blur opacity-70"></div>
                <div className="relative rounded-full overflow-hidden border-2 border-[#5E4900] w-64 h-64 sm:w-80 sm:h-80">
                  <img src="./pfp.png" alt="Portfolio Owner" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Services */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            My <span className="text-[#5E4900]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassmorphicCard className="p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-[#5E4900]/30 w-16 h-16 flex items-center justify-center mb-6">
                <PenToolIcon className="w-8 h-8 text-[#5E4900]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Graphic Design
              </h3>
              <p className="text-gray-300 mb-6">
                Creative solutions for branding, logos, marketing materials, and
                visual identities.
              </p>
              <Link to="/services" className="text-[#5E4900] hover:text-[#9E7900] flex items-center gap-2 font-medium">
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </GlassmorphicCard>
            <GlassmorphicCard className="p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-[#5E4900]/30 w-16 h-16 flex items-center justify-center mb-6">
                <CodeIcon className="w-8 h-8 text-[#5E4900]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Front-End Development
              </h3>
              <p className="text-gray-300 mb-6">
                Building responsive, interactive websites and applications with
                modern frameworks.
              </p>
              <Link to="/services" className="text-[#5E4900] hover:text-[#9E7900] flex items-center gap-2 font-medium">
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </GlassmorphicCard>
            <GlassmorphicCard className="p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="rounded-full bg-[#5E4900]/30 w-16 h-16 flex items-center justify-center mb-6">
                <LayersIcon className="w-8 h-8 text-[#5E4900]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Product Design
              </h3>
              <p className="text-gray-300 mb-6">
                Creating intuitive, engaging user experiences and interfaces for
                digital products.
              </p>
              <Link to="/services" className="text-[#5E4900] hover:text-[#9E7900] flex items-center gap-2 font-medium">
                Learn more <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-white">
              Featured <span className="text-[#5E4900]">Projects</span>
            </h2>
            <Link to="/projects" className="text-[#5E4900] hover:text-[#9E7900] flex items-center gap-2">
              View all <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1].map(item => <GlassmorphicCard key={item} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img src="./peniel.png" alt={`Project ${item}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Modern Logo for Peniel
                      </h3>
                      <p className="text-gray-300 mt-2">
                        Graphic Design, Logo Design
                      </p>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>)}
              {[2].map(item => <GlassmorphicCard key={item} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img src="./ansol.jpg" alt={`Project ${item}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Futuristic Logo For anSol
                      </h3>
                      <p className="text-gray-300 mt-2">
                        Graphic Design, Logo Design
                      </p>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>)}
              {[3].map(item => <GlassmorphicCard key={item} className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img src="./tacn.png" alt={`Project ${item}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Modern Church Website
                      </h3>
                      <p className="text-gray-300 mt-2">
                        Website Design, React, TypeScript
                      </p>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>)}
          </div>
        </div>
      </section>
      {/* Testimonials
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Client <span className="text-[#5E4900]">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(item => <GlassmorphicCard key={item} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={`https://randomuser.me/api/portraits/men/${item + 10}.jpg`} alt={`Client ${item}`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      Client Name {item}
                    </h4>
                    <p className="text-gray-400 text-sm">Company {item}</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam quo nisi, eius illum ea porro,
                  reprehenderit in architecto vitae labore ipsa maxime."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 text-[#5E4900]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>)}
                </div>
              </GlassmorphicCard>)}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="px-6 py-3 border border-[#5E4900] text-white hover:bg-[#5E4900]/20 font-medium rounded-md transition-all inline-block">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>  */}
      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1a1500] to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <GlassmorphicCard className="max-w-4xl mx-auto p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to bring your <span className="text-[#5E4900]">vision</span>{' '}
              to life?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Let's collaborate to create something amazing together. Get in
              touch to discuss your project needs.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-[#5E4900] hover:bg-[#6E5910] text-white font-medium rounded-md inline-flex items-center gap-2 transition-all text-lg">
              Start a Project <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </GlassmorphicCard>
        </div>
      </section>
    </div>;
};
export default Home;