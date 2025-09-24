import React, { lazy } from 'react';
import GlassmorphicCard from '../components/GlassmorphicCard';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
import useDocumentTitle from '../useDocumentTitle';

const Contact = () => {

  useDocumentTitle("Contact Me - Graphic Designer | Frontend Developer | UIUX Designer")

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
              Get in <span className="text-[#5E4900]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300">
              Do you have a project in mind or just want to say hello? I'd love to hear
              from you.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact <span className="text-[#5E4900]">Information</span>
              </h2>
              <div className="space-y-6">
                <GlassmorphicCard className="p-6 flex items-start">
                  <div className="rounded-full bg-[#5E4900]/30 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-[#5E4900]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Location
                    </h3>
                    <p className="text-gray-300">
                      Lagos State, Nigeria
                    </p>
                  </div>
                </GlassmorphicCard>
                <GlassmorphicCard className="p-6 flex items-start">
                  <div className="rounded-full bg-[#5E4900]/30 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-[#5E4900]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+234-902-952-2648</p>
                  </div>
                </GlassmorphicCard>
                <GlassmorphicCard className="p-6 flex items-start">
                  <div className="rounded-full bg-[#5E4900]/30 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-[#5E4900]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300">timothybayode76@gmail.com</p>
                  </div>
                </GlassmorphicCard>
                <GlassmorphicCard className="p-6 flex items-start">
                  <div className="rounded-full bg-[#5E4900]/30 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-[#5E4900]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-300">Weekend: By Appointment</p>
                  </div>
                </GlassmorphicCard>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {['twitter', 'instagram', 'linkedin', 'github'].map(social => <a key={social} href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#5E4900]/30 flex items-center justify-center transition-all">
                      <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/${social}.svg`} alt={social} className="w-5 h-5 invert opacity-70" />
                    </a>)}
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Send Me a <span className="text-[#5E4900]">Message</span>
              </h2>
              <GlassmorphicCard className="p-8">
                <form action='https://formspree.io/f/xblaever' method='POST'>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-medium mb-2">
                        Your Name
                      </label>
                      <input type="text" id="name" required name='Full-Name' className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-md text-white focus:outline-none focus:border-[#5E4900]" placeholder="Timothy Bayode" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        Your Email
                      </label>
                      <input type="email" id="email" required name='Email-Address' className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-md text-white focus:outline-none focus:border-[#5E4900]" placeholder="timothybayode76@gmail.com" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Subject
                    </label>
                    <input type="text" id="subject" required name='Subject' className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-md text-white focus:outline-none focus:border-[#5E4900]" placeholder="Brand Identity" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Your Message
                    </label>
                    <textarea id="message" minLength={20} required rows={6} name='Main-Message' className="w-full px-4 py-3 bg-black/30 backdrop-blur-sm border border-white/20 rounded-md text-white focus:outline-none focus:border-[#5E4900]" placeholder="I will like you to ..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#5E4900] hover:bg-[#6E5910] text-white font-medium rounded-md flex items-center justify-center gap-2 transition-all">
                    Send Message <SendIcon className="w-5 h-5" />
                  </button>
                </form>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Find Me <span className="text-[#5E4900]">Here</span>
          </h2>
          <GlassmorphicCard className="overflow-hidden h-96">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253630.87331865716!2d3.3943749319179517!3d6.649103285802515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee62d44ab573%3A0x44ddf6ea18edfcb3!2sIkorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1757433105485!5m2!1sen!2sng" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen={true} loading="lazy"></iframe>
          </GlassmorphicCard>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked <span className="text-[#5E4900]">Questions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[{
            question: 'What is your typical project process?',
            answer: 'My process typically involves discovery, planning, design, development, testing, and launch phases. I maintain clear communication throughout to ensure your vision is realized.'
          }, {
            question: 'What are your payment terms?',
            answer: 'I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange a milestone-based payment schedule.'
          }, {
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary depending on scope and complexity. A simple design/website might take 1-2 weeks, while more complex projects can take 2-3 months or more.'
          }, {
            question: 'Do you offer maintenance services?',
            answer: 'Yes, I offer maintenance packages to keep your website or application up-to-date, secure, and performing optimally after launch.'
          }].map((faq, index) => <GlassmorphicCard key={index} className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </GlassmorphicCard>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;