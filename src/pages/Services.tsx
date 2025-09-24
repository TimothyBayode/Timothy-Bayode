import React from 'react';
import { Link } from 'react-router-dom';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { PenToolIcon, CodeIcon, LayoutIcon, SmartphoneIcon, BriefcaseIcon, MonitorIcon, CheckIcon, ArrowRightIcon } from 'lucide-react';
import useDocumentTitle from '../useDocumentTitle';

const Services = () => {

  useDocumentTitle("Services I Offer - Graphic Designer | Frontend Developer | UIUX Designer")

  const services = [{
    icon: <PenToolIcon className="w-8 h-8 text-[#5E4900]" />,
    title: 'Graphic Design',
    description: "Creative visual solutions that communicate your brand's message effectively.",
    features: ['Brand Identity & Logos', 'Marketing Materials', 'Social Media Graphics', 'Print Design', 'Illustration']
  }, {
    icon: <CodeIcon className="w-8 h-8 text-[#5E4900]" />,
    title: 'Front-End Development',
    description: 'Modern, responsive websites and applications built with the latest technologies.',
    features: ['Responsive Web Design', 'Performance Optimization', 'Animation & Interaction', 'HTML, CSS & Javascript Development']
  }, {
    icon: <LayoutIcon className="w-8 h-8 text-[#5E4900]" />,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance the overall user experience.',
    features: ['User Research', 'Wireframing & Prototyping', 'Interface Design', 'Usability Testing', 'Design Systems']
  }, {
    icon: <BriefcaseIcon className="w-8 h-8 text-[#5E4900]" />,
    title: 'Brand Strategy',
    description: 'Strategic brand development to help you stand out in a competitive market.',
    features: ['Brand Positioning', 'Visual Identity Systems', 'Brand Guidelines', 'Brand Voice & Messaging', 'Brand Audits']
  }, {
    icon: <MonitorIcon className="w-8 h-8 text-[#5E4900]" />,
    title: 'Web Design',
    description: 'Visually stunning websites that deliver exceptional user experiences.',
    features: ['Landing Pages', 'E-commerce Design', 'Corporate Websites', 'Portfolio Sites', 'Content Management Systems']
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
              My <span className="text-[#5E4900]">Services</span>
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive design and development solutions to bring your
              digital vision to life.
            </p>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <GlassmorphicCard key={index} className="p-8 hover:bg-white/10 transition-all duration-300">
                <div className="rounded-full bg-[#5E4900]/30 w-16 h-16 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => <li key={i} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-[#5E4900] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>)}
                </ul>
              </GlassmorphicCard>)}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            My <span className="text-[#5E4900]">Process</span>
          </h2>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#5E4900]/30 transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-24">
              {[{
              step: '01',
              title: 'Discovery & Research',
              description: 'Understanding your goals, target audience, and project requirements. Researching the market, competitors, and user needs to inform the design strategy.'
            }, {
              step: '02',
              title: 'Strategy & Planning',
              description: 'Developing a comprehensive plan based on research insights. Creating wireframes, user flows, and information architecture to guide the design process.'
            }, {
              step: '03',
              title: 'Design & Prototyping',
              description: 'Crafting visually engaging designs that align with your brand and meet user needs. Building interactive prototypes to test functionality and user experience.'
            }, {
              step: '04',
              title: 'Development & Implementation',
              description: 'Translating designs into functional code with clean, efficient implementation. Ensuring responsive behavior and cross-browser compatibility.'
            }, {
              step: '05',
              title: 'Testing & Refinement',
              description: 'Conducting thorough testing to identify and fix any issues. Refining the design and functionality based on feedback and testing results.'
            }, {
              step: '06',
              title: 'Launch & Support',
              description: 'Deploying the final product and providing ongoing support and maintenance. Monitoring performance and making adjustments as needed.'
            }].map((process, index) => <div key={index} className="relative">
                  <div className="hidden md:block absolute top-0 left-1/2 w-12 h-12 bg-[#5E4900] rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white font-bold">
                    {process.step}
                  </div>
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <GlassmorphicCard className="p-8">
                      <div className="md:hidden w-12 h-12 bg-[#5E4900] rounded-full flex items-center justify-center text-white font-bold mb-4">
                        {process.step}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {process.title}
                      </h3>
                      <p className="text-gray-300">{process.description}</p>
                    </GlassmorphicCard>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to start your{' '}
              <span className="text-[#5E4900]">project</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your needs and create a customized solution that
              achieves your goals and exceeds your expectations.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-[#5E4900] hover:bg-[#6E5910] text-white font-medium rounded-md inline-flex items-center gap-2 transition-all">
              Get in Touch <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </GlassmorphicCard>
        </div>
      </section>
    </div>;
};
export default Services;