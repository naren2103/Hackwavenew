import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      className="bg-slate-900/50 backdrop-blur-md border-t border-white/10 mt-20" 
      style={{ 
        backgroundImage: "url('https://img.freepik.com/free-psd/gradient-waves-border-design_23-2150756135.jpg')", 
        backgroundSize: '100% 100%', 
        backgroundPosition: 'right', 
        backgroundRepeat: 'no-repeat'  
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="w-40 h-30 mb-4">
              <img 
                src="https://i.ibb.co/3YfL3fYb/IMG-20250527-WA0037-2.jpg" 
                alt="Hackwave Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-black text-sm"> {/* Changed text color to black */}
              Enabling Events Effortlessly. 
            </p>
          </div>

          {/* About Hackwave */}
          <div>
            <h3 className="text-black font-semibold mb-4"> {/* Changed text color to black */}
              About Hackwave
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                About us
              </a></li>
              <li><a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                Careers
              </a></li>
              <li><a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                Press
              </a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-black font-semibold mb-4"> {/* Changed text color to black */}
              Resources
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                Blog
              </a></li>
              <li><a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                Help Center
              </a></li>
              <li><a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                Contact Support
              </a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-black font-semibold mb-4"> {/* Changed text color to black */}
              Connect
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/the.hackathonproject?igsh=MzRlODBiNWFlZA==" 
                className="text-black hover:text-gray-800 transition-colors" // Changed text color to black
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/the-hackathon-project/" 
                className="text-black hover:text-gray-800 transition-colors" // Changed text color to black
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-black hover:text-gray-800 transition-colors"> {/* Changed text color to black */}
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-black text-sm"> {/* Changed text color to black */}
            © 2024 Hackwave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
