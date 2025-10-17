import React, { useState } from 'react'
import GlassmorphicCard from '../components/GlassmorphicCard'
import { ExternalLinkIcon, ArrowRightIcon } from 'lucide-react'
import useDocumentTitle from '../useDocumentTitle';

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const categories = [
    {
      id: 'web',
      name: 'Web Design',
    },
    {
      id: 'ui',
      name: 'UI/UX',
    },
    {
      id: 'branding',
      name: 'Branding',
    },
    {
      id: 'flyer',
      name: 'Flyer Design',
    },
    {
      id: 'all',
      name: 'All Projects',
    }
  ]
  const projects = [
    {
      id: 1,
      title: 'Modern Church Website',
      category: 'web',
      tags: ['Web Design', 'React'],
      image:
        './tacn.png',
      description:
        'A modern website for a church equipped with an user-friendly interface.',
      externalLink: 'https://tacn-baiyeku-area.vercel.app',
    },
    {
      id: 2,
      title: 'FGH Agro Limited',
      category: 'branding',
      tags: ['Branding', 'Agro', 'Design', 'Logo'],
      image:
        './fgh.png',
      description:
        'An e-commerce mobile application for sustainable and eco-friendly products.',
      externalLink: 'https://www.behance.net/gallery/236433655/Minimalist-Logo-for-Agro-Company',
    },
    {
      id: 3,
      title: 'Ansol Logo Branding',
      category: 'branding',
      tags: ['Branding', 'Logo Design', 'Visual Identity'],
      image:
        './ansol.jpg',
      description:
        'Logo design for a tech organisation focusing in web3 space.',
      externalLink: 'https://www.behance.net/gallery/232864003/Minimalist-Logo-Design',
    },
    {
      id: 7,
      title: 'Peniel Recreation Centre Logo',
      category: 'branding',
      tags: ['Branding', 'Print'],
      image:
        './peniel.png',
      description:
        'Brand identity and print design for a gospel recreation centre.',
      externalLink: 'https://www.behance.net/gallery/235508355/Minimalist-Typography-Logo',
    },
    {
      id: 8,
      title: 'Church Programme Flyer',
      category: 'flyer',
      tags: ['Flyer', 'Social Media'],
      image:
        './praises.jpg',
      description:
        'Social media flyer for a church programme',
      externalLink: 'https://www.behance.net/gallery/236433473/Church-Programme-Flyer',
    },
  ]
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

      useDocumentTitle("My Projects - Graphic Designer | Frontend Developer | Product Designer")

  return (
    <div className="w-full">
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
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${filter === category.id ? 'bg-[#5E4900] text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <GlassmorphicCard
                key={project.id}
                className="overflow-hidden group"
              >
                <div className="relative">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-6 text-center">
                      <div className="flex space-x-4 justify-center mb-4">
                        <a
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5E4900] text-white hover:bg-[#685920] transition-colors"
                          title="Visit Live Project"
                        >
                          <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                      </div>
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
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#5E4900]/20 text-[#5E4900] px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href={project.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      title="Visit Live Project"
                    >
                      <ExternalLinkIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
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
            <a
              href="/contact"
              className="px-8 py-3 bg-[#5E4900] hover:bg-[#6E5910] text-white font-medium rounded-md inline-block transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Projects
