import React from 'react';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { CodeIcon, PenToolIcon, BriefcaseIcon, GraduationCapIcon, DownloadIcon, ViewIcon } from 'lucide-react';
import useDocumentTitle from '../useDocumentTitle';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [{
    name: 'Graphic Design',
    percentage: 95
  }, {
    name: 'Figma',
    percentage: 85
  }, {
    name: 'React/TailWind',
    percentage: 91
  }, {
    name: 'HTML/CSS/JavaScript',
    percentage: 95
  }, {
    name: 'Attention to Detail',
    percentage: 82
  }, {
    name: 'Presentation/Critical Thinking',
    percentage: 87
  }];

  useDocumentTitle("About Me - Graphic Designer | Frontend Developer | Product Designer")

  
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
              About <span className="text-[#5E4900]">Me</span>
            </h1>
            <p className="text-xl text-gray-300">
            I am a Designer, developer, and creative problem-solver passionate
            about building exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>
      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#5E4900] to-[#9E7900] rounded-2xl blur-lg opacity-50"></div>
                <GlassmorphicCard className="overflow-hidden relative">
                  <img src="./pfp.png" alt="Timothy Bayode" className="w-full aspect-[4/5] object-cover" />
                </GlassmorphicCard>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-6">
                Timothy Bayode{' '}
                <span className="text-[#5E4900]">/ Designer & Developer</span>
              </h2>
              <p className="text-gray-300 mb-6">
              With over 3 years of experience in the digital design industry, I
              specialize in creating visually stunning and functionally seamless
              experiences. My background in both graphic design and front-end
              development allows me to bridge the gap between creative vision and
              technical implementation.
              </p>
              <p className="text-gray-300 mb-6">
              I am a passionate, self-motivated and result-driven tech ethusiast.
              I bring energy, innovation and skills into a project and with the
              attention to little details, I make sure I deliver beautiful,
              customer-centered design and aslo build meaningful connections.
              </p>
              <p className="text-gray-300 mb-6">
              I love solving challenges, always ready to learn, adapt, lead and I
              also thrive excellently in a team and a dynamic environment
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-[#5E4900]/20 px-4 py-2 rounded-full">
                  <CodeIcon className="w-5 h-5 text-[#5E4900]" />
                  <span className="text-white">Front-End Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-[#5E4900]/20 px-4 py-2 rounded-full">
                  <PenToolIcon className="w-5 h-5 text-[#5E4900]" />
                  <span className="text-white">Product Designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            My <span className="text-[#5E4900]">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-[#5E4900] font-medium">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#5E4900] to-[#9E7900] rounded-full" style={{
                width: `${skill.percentage}%`
              }}></div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Work <span className="text-[#5E4900]">Experience</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[{
            title: 'Graphic Designer [Intern]',
            company: 'Spangler Market & Vent Sq',
            period: '2021 - 2022',
            description: 'Learn from the design lead in creating designs that aligns with the goals of the organisation. Collaborate with designers and developers to ensure seamless implementation of designs.'
          }, {
            title: 'Graphic Designer',
            company: 'Spangler Market & Vent Sq',
            period: '2022 - Present',
            description: 'Created designs that aligns and passes information across in a fun and memorable way. Worked closely with other departments to ensure proper information dissemination.'
          }, {
            title: 'Graphic Designer',
            company: 'Freelance',
            period: '2021 - Present',
            description: 'Created visual identities, marketing materials, and digital assets for various clients across different industries.'
          }, {
            title: 'Graphic Designer',
            company: 'Behind Marygift Walls Foundation',
            period: '2021 - 2022',
            description: 'Assisted in designing banners for social media campaigns and events. Gained hands-on experience with design tools and processes.'
          }, {
            title: 'WordPress Content Manager [Intern]',
            company: 'IgbogboBaiyeku LCDA',
            period: 'May - October 2025',
            description: 'I was responsible for managing contents, pages and news upload in the organisation wordpress site. I also worked with other departments to ensure seamless workflow within the organisation.'
          }].map((job, index) => <GlassmorphicCard key={index} className="p-6 hover:bg-white/5 transition-all">
                <div className="flex items-start">
                  <div className="rounded-full bg-[#5E4900]/30 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <BriefcaseIcon className="w-6 h-6 text-[#5E4900]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {job.title}
                    </h3>
                    <p className="text-[#5E4900] font-medium">{job.company}</p>
                    <p className="text-gray-400 text-sm mt-1">{job.period}</p>
                    <p className="text-gray-300 mt-3">{job.description}</p>
                  </div>
                </div>
              </GlassmorphicCard>)}
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            <span className="text-[#5E4900]">Education</span> & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{
            degree: 'Bachelor of Technology in Computer Science',
            school: 'LAUTECH, Oyo State',
            year: '2026 [In view]',
            description: 'Specialized in modular programming with a focus on interactive digital experiences.'
          }, {
            degree: 'Soft Skills Training',
            school: 'Jobberman x Propel',
            year: '2025',
            description: 'Focused on best behavioural and communication practices, self-reflection'
          }, {
            degree: 'Certified Graphic Designer',
            school: 'VSL Concepts Digital Marketing Agency',
            year: '2021',
            description: 'Professional certification in creative thimking & design methodologies.'
          }, {
            degree: 'Advanced WordPress Development',
            school: 'Coursera Project Network',
            year: '2025',
            description: 'Certification in advanced WordPress development and modern web practices.'
          }].map((edu, index) => <GlassmorphicCard key={index} className="p-6 hover:bg-white/5 transition-all">
                <div className="flex items-start">
                  <div className="rounded-full bg-[#5E4900]/30 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCapIcon className="w-6 h-6 text-[#5E4900]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-[#5E4900] font-medium">{edu.school}</p>
                    <p className="text-gray-400 text-sm mt-1">{edu.year}</p>
                    <p className="text-gray-300 mt-3">{edu.description}</p>
                  </div>
                </div>
              </GlassmorphicCard>)}
          </div>
        </div>
      </section>
      <section className='py-16 bg-transparent'>
        <div className='container mx-auto px-20'>
          <div className='bg-gradient-to-r from-[#5E4900] to-[#78662a] rounded-lg shadow-lg p-8 text-white'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
              <div>
                <h2 className='text-2xl font-bold mb-2'>Download my Resume</h2>
                <p className='text-lg mb-4'>Click the button to view or download my resume</p>
              </div>
              <div className='flex flex-row items-center gap-2 flex-wrap'>
              <a href="./resume.pdf" target='_blank' rel='noopener norefferer' className='mt-6 md:mt-0 bg-white text-[#5E4900] px-6 py-3 rounded-md font-medium hover:bg-#5E4900-50 transition flex flex:row items-center'>View Resume <ViewIcon size={18} className='ml-2' /></a>
              <a href="./resume.pdf" download rel='noopener norefferer' className='mt-6 md:mt-0 bg-white text-[#5E4900] px-6 py-3 rounded-md font-medium hover:bg-#5E4900-50 transition flex flex:row items-center'>Download <DownloadIcon size={18} className='ml-2' /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default About;