import { MessageCircle, Phone, Mail, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '01021252183',
      href: 'https://wa.me/201021252183'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '01008761913',
      href: 'tel:+201008761913'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'islamsaeidahmed@gmail.com',
      href: 'mailto:islamsaeidahmed@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/islamsaeid',
      href: 'https://linkedin.com/in/islamsaeid'
    }
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-poppins">Islam Saeid</h3>
            <p className="text-gray-300 mb-4">
              Media Buyer & Social Media Strategist turning ad spend into growth. 
              Delivering up to 8x ROAS across Egypt & the GCC.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>📍 Cairo, Egypt</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Get in Touch</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <contact.icon className="w-4 h-4" />
                  <span className="text-sm">{contact.value}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Islam Saeid. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://linktr.ee/is77zx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Linktree
              </a>
              <div className="text-gray-400 text-sm">
                Built with React & Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

