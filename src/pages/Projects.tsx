import React, { useState } from 'react';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { ExternalLinkIcon } from 'lucide-react';
import useDocumentTitle from '../useDocumentTitle';

const Projects = () => {

  useDocumentTitle("My Projects - Graphic Designer | Frontend Developer | Product Designer")

  const [filter, setFilter] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All Projects'
  }, {
    id: 'web',
    name: 'Web Design'
  }, {
    id: 'mobile',
    name: 'Mobile Apps'
  }, {
    id: 'branding',
    name: 'Branding'
  }, {
    id: 'ui',
    name: 'UI/UX'
  }];
  const projects = [{
    id: 1,
    title: 'Modern Church Website',
    category: 'web',
    tags: ['Web Design', 'React'],
    image: './tacn.png',
    description: 'A futuristic financial dashboard with data visualization and user-friendly interface.'
  }, {
    id: 2,
    title: 'Eco Shop Mobile App',
    category: 'mobile',
    tags: ['Mobile App', 'UI Design', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'An e-commerce mobile application for sustainable and eco-friendly products.'
  }, {
    id: 3,
    title: 'Quantum Brand Identity',
    category: 'branding',
    tags: ['Branding', 'Logo Design', 'Visual Identity'],
    image: 'https://images.unsplash.com/photo-1635405074683-96d6b13e901a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Complete brand identity design for a tech startup focusing on quantum computing.'
  }, {
    id: 4,
    title: 'Wellness Tracker UI',
    category: 'ui',
    tags: ['UI/UX', 'Health', 'Mobile App'],
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'User interface design for a health and wellness tracking application.'
  }, {
    id: 5,
    title: 'Creative Agency Website',
    category: 'web',
    tags: ['Web Design', 'React', 'Animation'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'A dynamic website for a creative agency with interactive elements and animations.'
  }, {
    id: 6,
    title: 'Travel Companion App',
    category: 'mobile',
    tags: ['Mobile App', 'UI/UX', 'Travel'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'A travel planning and companion app with personalized recommendations.'
  }, {
    id: 7,
    title: 'Artisan Cafe Branding',
    category: 'branding',
    tags: ['Branding', 'Packaging', 'Print Design'],
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'Brand identity and packaging design for an artisan coffee shop.'
  }, {
    id: 8,
    title: 'Smart Home Control UI',
    category: 'ui',
    tags: ['UI/UX', 'IoT', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae2d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'User interface design for a smart home control system and dashboard.'
  }, {
    id: 9,
    title: 'Educational Platform',
    category: 'web',
    tags: ['Web Design', 'E-learning', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    description: 'An interactive e-learning platform with course management and student engagement features.'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1500]/90 to-[#302600]/90"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#5E4900] rounded-full filter blur-3xl opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              My <span className="text-[#5E4900]">Projects</span>
            </h1>
            <p className="text-xl text-gray-300">
              Explore my portfolio of design and development work across various
              industries and platforms.
            </p>
          </div>
        </div>
      </section>
      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => <button key={category.id} onClick={() => setFilter(category.id)} className={`px-6 py-2 rounded-full transition-all ${filter === category.id ? 'bg-[#5E4900] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <GlassmorphicCard key={project.id} className="overflow-hidden group">
                <div className="relative">
                  <div className="h-64 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-6 text-center">
                      <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5E4900] text-white mb-4">
                        <ExternalLinkIcon className="w-6 h-6" />
                      </a>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mt-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => <span key={i} className="text-xs bg-[#5E4900]/20 text-[#5E4900] px-2 py-1 rounded">
                        {tag}
                      </span>)}
                  </div>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </GlassmorphicCard>)}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate to create something amazing together.
            </p>
            <a href="/contact" className="px-8 py-3 bg-[#5E4900] hover:bg-[#6E5910] text-white font-medium rounded-md inline-block transition-all">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>;
};
export default Projects;