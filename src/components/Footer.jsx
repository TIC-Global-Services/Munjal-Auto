import { Twitter, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col">
            <div className="text-5xl font-bold mb-4">
              <span className="font-script">m</span>
            </div>
            <div className="uppercase tracking-wider font-bold">Munjal Auto</div>
          </div>

          {/* Stay in touch Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Stay in touch:</h3>
            <div className="space-y-1">
              <p>2nd Floor, Tower 'C',</p>
              <p>Unitech Business Zone,</p>
              <p>Nirvana Country, South City - 2,</p>
              <p>Sector-50, Gurugram - 122018,</p>
              <p>Haryana</p>
            </div>
            
            <div className="mt-6 space-y-2">
              <p>Email:</p>
              <p>info@[YourCompanyName].com</p>
              <p className="mt-4">Phone: +91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-6">Contact Us:</h3>
            <p className="mb-4">Email: info@[YourCompanyName].com</p>
            <p>Phone: +91 XXXXX XXXXX</p>
            
            <div className="mt-auto">
              <button className="bg-white text-black rounded-full px-8 py-3 font-medium">
                Explore more
              </button>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
                <div className="flex space-x-6">
                  <Twitter size={22} className="cursor-pointer hover:text-gray-300" />
                  <Facebook size={22} className="cursor-pointer hover:text-gray-300" />
                  <Instagram size={22} className="cursor-pointer hover:text-gray-300" />
                  <Github size={22} className="cursor-pointer hover:text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
          <p>© [Year] [Company Name]. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            <a href="#" className="hover:underline">Privacy policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;